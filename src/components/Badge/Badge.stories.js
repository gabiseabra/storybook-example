import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const Story = (args) => <Badge {...args} />;

export const Default = Story.bind({});
Default.args = {
  text: '12',
};
