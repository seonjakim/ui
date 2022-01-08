import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../input/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Common = Template.bind({})

Common.args = {
  options: ['test1', 'test2', 'test3']
}
