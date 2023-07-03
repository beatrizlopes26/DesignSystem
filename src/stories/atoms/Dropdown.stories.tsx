import * as React from 'react';
import { Dropdown} from '@fluentui/react/lib/Dropdown';
import styles from './Dropdown.module.scss'
import {DropdownList} from './Dropdown';


export default {
    component: DropdownList,
    title: "Atoms/Dropdown",
    tags: ['autodocs'],
  };

  
  /** Dropdown abre para cima, para baixo ou para o lado consoante a posição na página para conseguir mostrar as opções */
export const dropdownDown = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
  const DropdownExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
  ]; return <Dropdown
placeholder="Select an option"
label="Dropdown"
options={DropdownExampleOptions}
/>}
export const dropdownDownSmall = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
  const DropdownExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
  ]; return <Dropdown className={styles['small']}
placeholder="Select an option"
label="Dropdown"
options={DropdownExampleOptions}
/>}
export const dropdownDownMedium = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
  const DropdownExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
  ]; return <Dropdown className={styles['medium']}
placeholder="Select an option"
label="Dropdown"
options={DropdownExampleOptions}
/>}
export const dropdownDownLarge = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
  const DropdownExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
  ]; return <Dropdown className={styles['large']}
placeholder="Select an option"
label="Dropdown"
options={DropdownExampleOptions}
/>}

export const dropdownSelect = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
  const DropdownExampleOptions = [
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
  ]; return <Dropdown
      placeholder="Select options"
      label="Multi-select example"
      multiSelect
      options={DropdownExampleOptions}
    />}
    export const dropdownSelectSmall = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
      const DropdownExampleOptions = [
        { key: 'A', text: 'Option a' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c' },
        { key: 'D', text: 'Option d' },
        { key: 'E', text: 'Option e' },
      ]; return <Dropdown className={styles['small']}
          placeholder="Select options"
          label="Multi-select example"
          multiSelect
          options={DropdownExampleOptions}
        />}
        export const dropdownSelectMedium = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
          const DropdownExampleOptions = [
            { key: 'A', text: 'Option a' },
            { key: 'B', text: 'Option b' },
            { key: 'C', text: 'Option c' },
            { key: 'D', text: 'Option d' },
            { key: 'E', text: 'Option e' },
          ]; return <Dropdown className={styles['medium']}
              placeholder="Select options"
              label="Multi-select example"
              multiSelect
              options={DropdownExampleOptions}
            />}
            export const dropdownSelectLarge = () => { //import { Dropdown} from '@fluentui/react/lib/Dropdown';
              const DropdownExampleOptions = [
                { key: 'A', text: 'Option a' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c' },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' },
              ]; return <Dropdown className={styles['large']}
                  placeholder="Select options"
                  label="Multi-select example"
                  multiSelect
                  options={DropdownExampleOptions}
                />}
