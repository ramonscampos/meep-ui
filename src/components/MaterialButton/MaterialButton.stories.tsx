import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MaterialButton } from './MaterialButton';

export default {
  title: 'Components/MaterialButton',
  component: MaterialButton,
} as ComponentMeta<typeof MaterialButton>;

const Template: ComponentStory<typeof MaterialButton> = (args) => <MaterialButton {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  children: 'Hello world!',
  variant: 'contained',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};