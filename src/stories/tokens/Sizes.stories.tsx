import * as React from 'react';
import styles from './Sizes.module.scss';
import sizes from './Sizes';

export default {
    component: sizes,
    title: "Tokens/Sizes",
    tags: ['autodocs'],
  };

export const widthSmall = () => <div> <label className={styles['sizeFont']} >width: 25%;</label></div>
export const widthMedium = () => <div> <label className={styles['sizeFont']} >width: 50%;</label></div>
export const widthLarge = () => <div> <label className={styles['sizeFont']} >width: 75%;</label></div>
export const widthFull = () => <div> <label className={styles['sizeFont']} >width: 100%;</label></div>