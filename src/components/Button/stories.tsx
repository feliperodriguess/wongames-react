import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: { children: { type: 'string' }, icon: { type: '' } }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now'
}

export const hasIcon: Story<ButtonProps> = (args) => <Button {...args} />
hasIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
