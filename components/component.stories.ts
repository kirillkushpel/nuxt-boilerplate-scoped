import { Component } from 'vue';

export default {
  title: 'Components'
};

export const sampleStory = (): Component => {
  return {
    template: `<h1 id="test" style="color: red">Hello world</h1>
    `
  };
};
