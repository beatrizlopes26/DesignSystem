import React, {ReactNode} from 'react';

export interface Props{
  children: ReactNode;

  variant: 'default' | 'primary' | 'command';
}

export const Toogle = ({children, variant, ...props}: Props) => {
  return 
}