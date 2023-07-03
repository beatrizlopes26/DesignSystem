import * as React from 'react';
import { Slider} from '@fluentui/react';
import styles from './Slider.module.scss'
import {SliderRange} from './Slider';


export default {
    component: SliderRange,
    title: "Atoms/Slider",
    tags: ['autodocs'],
  };

 

export const SliderDefault = () => {//import { Slider} from '@fluentui/react';
  
return<Slider label="Snapping slider" min={1} max={10} step={1}  defaultValue={1}  showValue snapToStep></Slider>}

export const SliderDefaultSmall = () => { //import { Slider} from '@fluentui/react';
  
  return<Slider className={styles['small']} label="Snapping slider" min={1} max={10} step={1}  defaultValue={1}  showValue snapToStep></Slider>}

  export const SliderDefaultMedium = () => {//import { Slider} from '@fluentui/react';
  
    return<Slider className={styles['medium']} label="Snapping slider" min={1} max={10} step={1}  defaultValue={1}  showValue snapToStep></Slider>}
    export const SliderDefaultLarge = () => {
  
      return<Slider className={styles['large']} label="Snapping slider" min={1} max={10} step={1}  defaultValue={1}  showValue snapToStep></Slider>}


export const SliderToolTip = () => { //import { Slider} from '@fluentui/react';
  const [value, setValue] = React.useState<number | string>(2);

  const handleSliderChange = (value: number) => {
    setValue(value);
  };

  const formatTooltipValue = (value: number | string) => {
    return value.toString();
  };

  return (
    <Slider
      label="Snapping slider"
      min={1}
      max={10}
      step={1}
      defaultValue={2}
      showValue
      snapToStep
      onChange={handleSliderChange}
      valueFormat={formatTooltipValue}
      styles={{
        thumb: {
          selectors: {
            '::after': {
              content: `'${value}'`,
              position: 'absolute',
              top: '-35px',
              left: '5px',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              padding: '2px 8px',
              background: 'transparent',
              color: '#000',
              fontSize: '12px',
              borderRadius: '4px',
            },
          },
        },
      }}
    />
  );
}

export const SliderToolTipBottom = () => { //import { Slider} from '@fluentui/react';
  const [value, setValue] = React.useState<number | string>(2);

  const handleSliderChange = (value: number) => {
    setValue(value);
  };

  const formatTooltipValue = (value: number | string) => {
    return value.toString();
  };

  return (
    <Slider
      label="Snapping slider"
      min={1}
      max={10}
      step={1}
      defaultValue={2}
      showValue
      snapToStep
      onChange={handleSliderChange}
      valueFormat={formatTooltipValue}
      styles={{
        thumb: {
          selectors: {
            '::after': {
              content: `'${value}'`,
              position: 'absolute',
              top: '20px',
              left: '5px',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              padding: '2px 8px',
              background: 'transparent',
              color: '#000',
              fontSize: '12px',
              borderRadius: '4px',
            },
          },
        },
      }}
    />
  );
}