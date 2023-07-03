import * as React from 'react';
import { DatePicker} from '@fluentui/react';
import styles from './DatePicker.module.scss'
import {Datepicker, Props} from './DatePicker';

export default {
    component: Datepicker,
    title: "Atoms/DatePicker",
    tags: ['autodocs'],
  };

export const DatePickerSelect = () => // import { DatePicker} from '@fluentui/react';
<DatePicker
placeholder="Select a date..."
ariaLabel="Select a date"
/>
export const DatePickerSelectSmall = () => // import { DatePicker} from '@fluentui/react';
<DatePicker
className={styles['small']}
placeholder="Select a date..."
ariaLabel="Select a date"
/>
export const DatePickerSelectMedium = () => // import { DatePicker} from '@fluentui/react';
<DatePicker
className={styles['medium']}
placeholder="Select a date..."
ariaLabel="Select a date"
/>
export const DatePickerSelectLarge = () => // import { DatePicker} from '@fluentui/react';
<DatePicker
className={styles['large']}
placeholder="Select a date..."
ariaLabel="Select a date"
/>