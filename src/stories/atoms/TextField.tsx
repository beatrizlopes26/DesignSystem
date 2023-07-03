import React, {ReactNode} from 'react';

export interface Props{
  children: ReactNode;

  variant: 'default' | 'primary' | 'command';
}

export const Textfield = ({children, variant, ...props}: Props) => {
  return 
}