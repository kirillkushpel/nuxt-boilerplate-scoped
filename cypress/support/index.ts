/* eslint-disable no-console */
const messagesToSkip = [
  'Do not use built-in or reserved HTML elements as component id'
];

const knownUncaughtErorTagsToFail = ['Unhandled promise rejection:'];

beforeEach(() => {
  document.body.style.backgroundColor = '#3a3330';
  document.body.style.padding = '0';
  document.body.style.margin = '0';

  cy.window({ log: false }).then(win => {
    cy.stub(win.console, 'error', msg => {
      if (new RegExp(messagesToSkip.join('|')).test(msg)) {
        return;
      }
      console.log(msg);
      throw new Error(`Console error: ${<string>msg}`);
    }).log(false);

    cy.stub(win.console, 'warn', msg => {
      if (new RegExp(messagesToSkip.join('|')).test(msg)) {
        return;
      }
      console.log(msg);
      throw new Error(`Console warning: ${<string>msg}`);
    }).log(false);

    win.addEventListener('unhandledrejection', (promiseRejectionEvent) => {
      console.log(promiseRejectionEvent.reason);
      throw new Error(`Unhandled promise rejection: ${<string>promiseRejectionEvent.reason}`);
    });
  });
});

Cypress.on('uncaught:exception', (e) => {
  if (new RegExp(knownUncaughtErorTagsToFail.join('|')).test(String(e))) {
    return;
  }
  return false;
});
