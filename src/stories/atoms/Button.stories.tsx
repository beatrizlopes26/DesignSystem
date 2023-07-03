import * as React from 'react';
import { PrimaryButton, DefaultButton, CommandButton, IconButton} from '@fluentui/react/lib/Button';
import styles from './Button.module.scss'
import { IIconProps, IContextualMenuProps} from '@fluentui/react';
import {button} from './Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();



export default {
  component: button,
  title: "Atoms/Button",
  tags: ['autodocs'],
  argTypes: {

  }
};

/** Botão com a primary color do tema definido, pode ser utilizado com um icon à esquerda. */
export const primaryButton = () =>  {// import { PrimaryButton } from '@fluentui/react/lib/Button';
//import { IIconProps} from '@fluentui/react';
const saveIcon: IIconProps = {iconName:'Save'};
return <PrimaryButton iconProps={saveIcon} text='Guardar'></PrimaryButton>}


/** Botão por default sem cores, pode ser utilizado com um icon à esquerda ou mesmo sem icon. */
export const defaultButton = () =>{ // import { DefaultButton } from '@fluentui/react/lib/Button';
//import { IIconProps} from '@fluentui/react';
const previewIcon: IIconProps = {iconName: 'View'};
return <DefaultButton iconProps={previewIcon} text='Preview'></DefaultButton>}

/** Botão command, é utilizado sempre com icon à esquerda e abre um pop-up para executar uma ação. */
export const commandButton = () => { // import { CommandButton } from '@fluentui/react/lib/Button';
//import { IIconProps} from '@fluentui/react';
const addIcon : IIconProps = {iconName: 'Add'};
return <CommandButton iconProps={addIcon}  className={styles['btButtonAction']} text='Adicionar'></CommandButton>}
/** Quando o botão é primary e está disabled é preciso alterar o background color.  */
export const disabledButton = () => { // import { DefaultButton } from '@fluentui/react/lib/Button';
//import { IIconProps} from '@fluentui/react';
const previewIcon: IIconProps = {iconName: 'View'};
return <DefaultButton text="Preview "iconProps={previewIcon} disabled={true}></DefaultButton>}


export const disabledPrimaryButton = () =>{ // NECESSÁRIO ALTERAÇÕES CSS (className={styles['btButtonPrimaryDisabled']})
//import { PrimaryButton } from '@fluentui/react/lib/Button';
//import { IIconProps} from '@fluentui/react';
const saveIcon: IIconProps = {iconName:'Save'};
return <PrimaryButton iconProps={saveIcon} text='Guardar' className={styles['btButtonPrimaryDisabled']} disabled={true}></PrimaryButton>}



export const iconButton = () =>{ //import { IconButton } from '@fluentui/react/lib/Button'; 
//import { IIconProps} from '@fluentui/react';
const addIcon : IIconProps = {iconName: 'Add'};
return <IconButton iconProps={addIcon} aria-label="Adicionar"  />}

export const actionButton = () => { //import { CommandButton } from '@fluentui/react/lib/Button';
  //import { IIconProps, IContextualMenuProps} from '@fluentui/react';
  const expandIcon : IIconProps = {iconName: 'OpenInNewWindow'};
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'emailMessage',
        text: 'lista1',
      },
      {
        key: 'calendarEvent',
        text: 'lista2',
      },
    ],
  };
  return <CommandButton
className={styles['btButtonAction']}
iconProps={expandIcon}
text="Ir para a lista"
menuProps={menuProps}
/>
}