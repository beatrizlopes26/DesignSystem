import * as React from 'react';
import styles from './Colors.module.scss';
import colors from './Colors';



export default {
    component: colors,
    title: "Tokens/Colors",
    tags: ['autodocs'],
  };

/** CLIQUE NA COR PARA COPIAR O TOKEN*/
export const Default = () => {
const value = document.getElementById("myValue")?.innerText;
console.log(value)

return <div className= {styles['container']}>
    <div className={styles['colorDefault']}>
    <div className={styles['labelContainer']}>
      <label>$white</label>
      </div>
      <div className={styles['hide']}>
      <label id="myValue">$white: #FFFFFF;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#FFFFFF</label>
      </div>
    </div>
    <div className={styles['colorDefault2']}>
    <div className={styles['labelContainer2']}>
      <label>$black</label>
      </div>
      <div className={styles['hide']}>
      <label>$black: #000000;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
        <label>#000000</label>
      </div>
    </div>
</div>}


export const Primary = () => <div className= {styles['container']}>
<div className={styles['colorPrimary']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-primary</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-primary: #323130;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#323130</label>
      </div>
</div>
<div className={styles['colorPrimary2']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-primary-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-primary-alt: #3B3A39;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#3B3A39</label>
      </div>
</div>
<div className={styles['colorPrimary3']}>
<div className={styles['labelContainer2']}>
      <label>$theme-primary</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-primary: #8764B8;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#8764B8</label>
      </div>
</div>
</div>
export const Neutral = () => <div className= {styles['container']}>
<div className={styles['colorNeutral']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-dark</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-dark: #201F1E;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#201F1E</label>
      </div>
</div>
<div className={styles['colorPrimary']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-primary</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-primary: #323130;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#323130</label>
      </div>
</div>
<div className={styles['colorPrimary2']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-primary-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-primary-alt: #3B3A39;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#3B3A39</label>
      </div>
</div>
<div className={styles['colorNeutral4']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-secondary</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-secondary: #605E5C;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#605E5C</label>
      </div>
</div>
<div className={styles['colorNeutral5']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-secondary-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-secondary-alt: #8A8886;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#8A8886</label>
      </div>
</div>
<div className={styles['colorNeutral6']}>
<div className={styles['labelContainer2']}>
      <label>$neutral-tertiary</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-tertiary: #A19F9D;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#A19F9D</label>
      </div>
</div>
<div className={styles['colorNeutral7']}>
<div className={styles['labelContainer']}>
      <label>$neutral-tertiary-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-tertiary-alt: #C8C6C4;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#C8C6C4</label>
      </div>
</div>
<div className={styles['colorNeutral8']}>
<div className={styles['labelContainer']}>
      <label>$neutral-quaternary</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-quaternary: #D2D0CE;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#D2D0CE</label>
      </div>
</div>
<div className={styles['colorNeutral9']}>
<div className={styles['labelContainer']}>
      <label>$neutral-quaternary-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-quaternary-alt: #E1DFDD;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#E1DFDD</label>
      </div>
</div>
<div className={styles['colorNeutral10']}>
<div className={styles['labelContainer']}>
      <label>$neutral-light</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-light: #EDEBE9;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#EDEBE9</label>
      </div>
</div>
<div className={styles['colorNeutral11']}>
<div className={styles['labelContainer']}>
      <label>$neutral-lighter</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-lighter: #F3F2F1;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#F3F2F1</label>
      </div>
</div>
<div className={styles['colorNeutral12']}>
<div className={styles['labelContainer']}>
      <label>$neutral-lighter-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$neutral-lighter-alt: #FAF9F8;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#FAF9F8</label>
      </div>
</div>
</div>
export const Theme = () =><div className= {styles['container']}>
<div className={styles['colorTheme']}>
<div className={styles['labelContainer2']}>
      <label>$theme-darker</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-darker: #4B3867;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#4B3867</label>
      </div>
</div>
<div className={styles['colorTheme2']}>
<div className={styles['labelContainer2']}>
      <label>$theme-dark</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-dark: #664B8C;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#664B8C</label>
      </div>
</div>
<div className={styles['colorTheme3']}>
<div className={styles['labelContainer2']}>
      <label>$theme-dark-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-dark-alt: #7959A5;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#7959A5</label>
      </div>
</div>
<div className={styles['colorTheme4']}>
<div className={styles['labelContainer2']}>
      <label>$theme-primary</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-primary: #8764B8;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#8764B8</label>
      </div>
</div>
<div className={styles['colorTheme5']}>
<div className={styles['labelContainer2']} >
      <label>$theme-secondary</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-secondary: #9372C0;</label>
      </div>
      <div className={styles['labelContainerHex2']}>
      <label>#9372C0</label>
      </div>
</div>
<div className={styles['colorTheme6']}>
<div className={styles['labelContainer']}>
      <label>$theme-tertiary</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-tertiary: #B29AD4;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#B29AD4</label>
      </div>
</div>
<div className={styles['colorTheme7']}>
<div className={styles['labelContainer']}>
      <label>$theme-light</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-light: #D7C9EA;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#D7C9EA</label>
      </div>
</div>
<div className={styles['colorTheme8']}>
<div className={styles['labelContainer']}>
      <label>$theme-lighter</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-lighter: #E9E2F4;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#E9E2F4</label>
      </div>
</div>
<div className={styles['colorTheme9']}>
  <div className={styles['labelContainer']}>
      <label>$theme-lighter-alt</label>
      </div>
      <div className={styles['hide']}>
      <label>$theme-lighter-alt: #F9F8FC;</label>
      </div>
      <div className={styles['labelContainerHex']}>
      <label>#F9F8FC</label>
      </div>
</div>
</div>

