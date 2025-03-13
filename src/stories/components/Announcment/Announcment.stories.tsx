import type { Meta, StoryObj } from '@storybook/react';

import Announcment from './Announcment';

const meta = {
  component: Announcment,
} satisfies Meta<typeof Announcment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};