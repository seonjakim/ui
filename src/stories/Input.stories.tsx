import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, InputWithDelete } from '../index'

export default {
  title: 'Example/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Common = Template.bind({})

Common.args = {
  placeholder: 'test'
}

export const Clear = Template.bind({})

Clear.args = {
  type: 'search'
}