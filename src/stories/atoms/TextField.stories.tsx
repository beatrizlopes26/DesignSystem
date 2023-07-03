import * as React from 'react';
import { TextField} from '@fluentui/react/lib/TextField';
import styles from './TextField.module.scss'
import {Textfield} from './TextField';

export default {
    component: Textfield,
    title: "Atoms/TextField",
    tags: ['autodocs'],
  };

  export const TextFieldStandard = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField label="Standard" />
  export const TextFieldStandardSmall = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField label="Standard" className={styles['small']} />
  export const TextFieldStandardMedium = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField label="Standard" className={styles['medium']} />
  export const TextFieldStandardLarge = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField label="Standard" className={styles['large']} />
  export const TextFieldDefaultValue = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField label="Default Value" defaultValue='Happy birthday! Have a very nice day!' />
  export const TextFieldTitle = () => //import { TextField} from '@fluentui/react/lib/TextField';
  <TextField  borderless placeholder="Title" />