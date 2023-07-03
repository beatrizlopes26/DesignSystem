import * as React from 'react';
import { Toggle} from '@fluentui/react/lib/Toggle';
import styles from './Toogle.module.scss'
import {Toogle} from './Toogle';


export default {
    component: Toogle,
    title: "Atoms/Toggle",
    tags: ['autodocs'],
  };


/** Toggle já ativado */
export const toggleChecked = () => //import { Toggle} from '@fluentui/react/lib/Toggle';
<Toggle label="Enabled and checked" defaultChecked onText="On" offText="Off"></Toggle>
/** Toggle desativado */
export const toggleUnchecked = () => //import { Toggle} from '@fluentui/react/lib/Toggle';
<Toggle label="Enabled and unchecked"  onText="On" offText="Off"></Toggle>
/** Toggle desativado */
export const toggleDisabled = () => //import { Toggle} from '@fluentui/react/lib/Toggle';
<Toggle className={styles['btToggleDisabled']}label="Disabled and unchecked" disabled onText="On" offText="Off"></Toggle>