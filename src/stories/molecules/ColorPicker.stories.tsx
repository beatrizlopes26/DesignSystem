import * as React from 'react';
import colorPicker from './ColorPicker';
import {
  ColorPicker,
  getColorFromString,
  IColor,
  IColorPickerStyles,
  mergeStyleSets,
} from '@fluentui/react';

export default {
    component: colorPicker,
    title: "Molecules/ColorPicker",
    tags: ['autodocs'],
  };


export const ColorPickerBasicExample: React.FunctionComponent = () => { //import {ColorPicker, getColorFromString, IColor, IColorPickerStyles, mergeStyleSets} from '@fluentui/react';
  const white = getColorFromString('#ffffff')!;
  const [color, setColor] = React.useState(white);
  const updateColor = React.useCallback((ev: any, colorObj: IColor) => setColor(colorObj), []);
  
const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
});

const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 352,
    minWidth: 352,
  },
  colorRectangle: { height: 268 },
};
  

  return (
    <div className={classNames.wrapper}>
      <ColorPicker
        color={color}
        onChange={updateColor}
        styles={colorPickerStyles}
        alphaType='none'
        // The ColorPicker provides default English strings for visible text.
        // If your app is localized, you MUST provide the `strings` prop with localized strings.
        strings={{
          // By default, the sliders will use the text field labels as their aria labels.
          // Previously this example had more detailed instructions in the labels, but this is
          // a bad practice and not recommended. Labels should be concise, and match visible text when possible.
          hueAriaLabel: 'Hue',
        }}
      />

    </div>
  );
};

