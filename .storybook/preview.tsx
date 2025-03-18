import type { Preview } from '@storybook/react'
import React from 'react';

import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import '../src/styles/globals.scss';
import '../public/scss/main.scss';
import Context from "../src/context/Context"
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    
  },
  decorators: [
    (Story) => {

      return (  <Context> <Story /></Context>)
    },
  ],
  
};

export default preview;