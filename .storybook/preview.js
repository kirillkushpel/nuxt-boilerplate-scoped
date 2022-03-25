import { addDecorator, addParameters } from '@storybook/vue';
import Vue from 'vue';
import vueBemCn from 'vue-bem-cn';
import VueRouter from 'vue-router'

// eslint-disable-next-line import/extensions
import 'normalize.css';
import './storybook.scss';

Vue.use(vueBemCn)


Vue.prototype.$route = {
  path: window.location.href
};

const decoratorTemplate = () => {
  return {
    template: `
      <div class="storybook">
        <div class="storybook__story">
          <story/>
        </div>
      </div>`
  };
};
addDecorator(decoratorTemplate);

addParameters({
  layout: 'fullscreen',
  options: {
    storySort: (a, b) => (
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    )
  }
});

addParameters({
  viewport: {
    viewports: {
      iphonex: {
        name: 'iPhone X',
        styles: {
          height: '824px',
          width: '375px'
        },
        type: 'mobile'
      },
      iphone12promax: {
        name: 'iPhone 12 Pro Max',
        styles: {
          height: '926px',
          width: '428px'
        },
        type: 'mobile'
      },
      mobileMax: {
        name: 'Mobile Max',
        styles: {
          height: '926px',
          width: '480px'
        },
        type: 'mobile'
      },
      desktop: {
        name: 'desktop 1440',
        styles: {
          height: '1080px',
          width: '1920px'
        },
        type: 'desktop'
      }
    },
    defaultViewport: 'desktop',
  }
});

Vue.use(VueRouter)
Vue.component('NuxtLink', Vue.component('RouterLink'))

export const decorators = [(story) => ({
  components: { story },
  template: `<story />`,
  router: new VueRouter()
})];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
