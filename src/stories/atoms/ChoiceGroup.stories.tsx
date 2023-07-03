import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import styles from './ChoiceGroup.module.css'
import choiceGroup from './ChoiceGroup';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import TitleBox from '../assets/title-box-dark.png';
import TitleHollow from '../assets/title-hollow-dark.png';


export default {
    component: choiceGroup,
    title: "Atoms/ChoiceGroup",
    tags: ['autodocs'],
  };

  
export const basicChoiceGroup = () => { //import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

  const options: IChoiceGroupOption[] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
  ]; return <ChoiceGroup defaultSelectedKey="B" options={options} label="Pick one" required={true}></ChoiceGroup>}

  export const iconChoiceGroup = () => { //import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
  const options2: IChoiceGroupOption[] = [
    { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
    { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
    { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }},
  ];
  return <ChoiceGroup label="Pick one icon" defaultSelectedKey="day" options={options2}></ChoiceGroup>}

export const imageChoiceGroup = () => { //import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
  //import TitleBox from '../assets/title-box-dark.png';
//import TitleHollow from '../assets/title-hollow-dark.png';
  const options3: IChoiceGroupOption[] = [
    {
      key: 'box',
      imageSrc: TitleBox,
      imageAlt: 'TitleBox',
      selectedImageSrc: TitleBox,
      imageSize: { width: 32, height: 32 },
      text: 'Box',
    },
    {
      key: 'hollow',
      imageSrc: TitleHollow,
      imageAlt: 'TitleHollow',
      selectedImageSrc: TitleHollow,
      imageSize: { width: 32, height: 32 },
      text: 'Hollow',
    },
  ]; return <ChoiceGroup label="Pick one Image" options={options3}></ChoiceGroup>}