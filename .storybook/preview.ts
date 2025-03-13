import type { Preview } from '@storybook/react'

import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import '../src/styles/globals.scss';
import '../src/styles/scss/main.scss';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;