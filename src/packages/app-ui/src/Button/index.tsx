import React from 'react'

export type Props = {
  disabled?: boolean,
  children: React.ReactNode,
}

const Button: React.FC<Props> = ({ children, disabled }) => (
  <button disabled={disabled}>{children}</button>
)

export default Button
