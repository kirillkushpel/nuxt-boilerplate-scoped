import { mount } from '@cypress/vue';

const sampleText = 'dummy test';

describe(sampleText, () => {
  it('its alive!!', () => {
    const page = create();
    page.testEL
      .should('be.visible')
      .contains(sampleText);
  });
});

class PageObject {
  get testEL() {
    return cy.get('#test');
  }
}

function create() {
  mount({
    data() {
      return {
        sampleText
      };
    },
    template: `<h1 id="test" v-html="sampleText" />
    `
  });

  return new PageObject();
}
