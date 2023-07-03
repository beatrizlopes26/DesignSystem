import * as React from 'react';
import headerWebPart from './HeaderWebPart';
import { CommandButton } from '@fluentui/react/lib/Button';
import { TextField, Stack, IIconProps } from '@fluentui/react';
import styles from '../atoms/Button.module.scss';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

export default {
    component: headerWebPart,
    title: "Molecules/HeaderWebPart",
    tags: ['autodocs'],
  };


  export const HeaderWebPart = () => { //import { CommandButton } from '@fluentui/react/lib/Button';
    //import { TextField, Stack, IIconProps } from '@fluentui/react';
    const addIcon : IIconProps = {iconName: 'Add'};
  const listIcon : IIconProps = {iconName: 'BulletedList'};
    return <Stack horizontal><TextField className={styles['textAreaTitle']} borderless placeholder="Title" />
    <CommandButton iconProps={addIcon}  text= 'Adicionar'className={styles['btButtonAction']}></CommandButton>
<CommandButton iconProps={listIcon}  text= 'Ver items'className={styles['btButtonAction']}></CommandButton></Stack>}