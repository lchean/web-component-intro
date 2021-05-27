import readme from './readme.md';

export default {
  title: 'My Button',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
  <my-button>Test</my-button>
`;