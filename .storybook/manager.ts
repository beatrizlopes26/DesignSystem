// ./storybook/manager.ts
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme
  fontBase: '"Red Hat Display",sans-serif',

  // Base color
  colorSecondary: '#323130', 


  // Brand assets
  brandTitle: 'BindTuning Storybook',
  brandUrl: 'https://bindtuning.com/',
  brandImage:
    'https://cf.bindtuning.com/images/btlogo_black.png',
})

addons.setConfig({
  theme,
})