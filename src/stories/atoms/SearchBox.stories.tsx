import * as React from 'react';
import { SearchBox} from '@fluentui/react/lib/SearchBox';
import styles from './SearchBox.module.scss'
import {Searchbox} from './SearchBox';


export default {
    component: Searchbox,
    title: "Atoms/SearchBox",
    tags: ['autodocs'],
  };

  export const SearchBoxDefault = () =>//import { SearchBox} from '@fluentui/react/lib/SearchBox';
   <SearchBox placeholder="Search" />
  export const SearchBoxDefaultSmall = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['small']}  placeholder="Search" />
  export const SearchBoxDefaultMedium = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['medium']}  placeholder="Search" />
  export const SearchBoxDefaultLarge = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['large']}  placeholder="Search" />
  export const SearchBoxUnderline = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox placeholder="Search" underlined={true} />
  export const SearchBoxUnderlineSmall = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['small']} placeholder="Search" underlined={true} />
  export const SearchBoxUnderlineMedium = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['medium']} placeholder="Search" underlined={true} />
  export const SearchBoxUnderlineLarge = () => //import { SearchBox} from '@fluentui/react/lib/SearchBox';
  <SearchBox className={styles['large']} placeholder="Search" underlined={true} />