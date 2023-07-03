import * as React from 'react';
import celebration from './Celebrations';
import { CommandButton } from '@fluentui/react/lib/Button';
import { TextField, Stack, IIconProps, IStackStyles, IStackTokens } from '@fluentui/react';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import { Label } from '@fluentui/react';
import { IOverflowSetItemProps, OverflowSet } from '@fluentui/react/lib/OverflowSet';
import { DirectionalHint, TooltipHost } from '@fluentui/react';
import styles from './WebPartContent.module.scss';
import { Image } from '@fluentui/react';
import Lists from '../assets/lists.png';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();


import {Card} from "@fluentui/react-components";




export default {
    component: celebration,
    title: "Organisms/WebPartContent",
    tags:['autodocs']
  };

  export const WebPartContent = () => {
    //import { CommandButton } from '@fluentui/react/lib/Button';
    //import { TextField, Stack, IIconProps } from '@fluentui/react';
    //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const addIcon : IIconProps = {iconName: 'Add'};
  const listIcon : IIconProps = {iconName: 'BulletedList'};
const themedSmallStackTokens: IStackTokens = {
    childrenGap: 's1',
    padding: 's1',
  };
  const noOp = () => undefined;

const onRenderItemStyles = {
  root: { padding: '10px'},
  icon: {color: '#323130'}
};
const onRenderOverflowButtonStyles = {
  root: { padding: '10px'},
  menuIcon: { fontSize: '16px'},
};

const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
  return (
    <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
      <CommandBarButton
        className={styles['btControlToolBar']}
        aria-label={item.name}
        styles={onRenderItemStyles}
        iconProps={{ iconName: item.icon }}
        onClick={item.onClick}
      />
    </TooltipHost>
  );
};

const onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
  return (
    <TooltipHost content="More items" directionalHint={DirectionalHint.rightCenter}>
      <CommandBarButton
        aria-label="More items"
        styles={onRenderOverflowButtonStyles}
        menuIconProps={{ iconName: 'More' }}
        menuProps={{ items: overflowItems! }}
      />
    </TooltipHost>
  );
};
  

    return <Stack horizontal><OverflowSet
    aria-label="Vertical Example"
    vertical
    items={[
      {
        key: 'item1',
        icon: 'Edit',
        name: 'Editar peça Web',
        title: 'Editar peça Web',
        onClick: noOp,
      },
      {
        key: 'item2',
        icon: 'Move',
        name: 'Mover peça Web',
        title: 'Mover peça Web',
        onClick: noOp,
      },
      {
        key: 'item3',
        icon: 'Tab',
        name: 'Duplicar peça Web',
        title: 'Duplicar peça Web',
        onClick: noOp,
      },
      {
        key: 'item4',
        icon: 'Delete',
        name: 'Eliminar peça Web',
        title: 'Delete',
        onClick: noOp,
      }
    ]}
    overflowItems={[
    ]}
    onRenderOverflowButton={onRenderOverflowButton}
    onRenderItem={onRenderItem}
  /><Card className={styles['celebrationsCard']}><Stack className={styles['stackWidth']} horizontal><TextField className={styles['textAreaTitle']}  borderless placeholder="Title" />
    <Stack className={styles['stackWidth']} horizontal reversed><CommandButton iconProps={addIcon}  text= 'Adicionar'className={styles['btButtonAction']}></CommandButton>
<CommandButton iconProps={listIcon}  text= 'Ver items'className={styles['btButtonAction']}></CommandButton></Stack></Stack>
</Card></Stack> 

  }

  export const WebPartContentDefault = () => {
    //import { CommandButton } from '@fluentui/react/lib/Button';
    //import { TextField, Stack, IIconProps } from '@fluentui/react';
    //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const addIcon : IIconProps = {iconName: 'Add'};
  const listIcon : IIconProps = {iconName: 'BulletedList'};
const themedSmallStackTokens: IStackTokens = {
    childrenGap: 's1',
    padding: 's1',
  };
  const noOp = () => undefined;

const onRenderItemStyles = {
  root: { padding: '10px'},
  icon: {color: '#323130'}
};
const onRenderOverflowButtonStyles = {
  root: { padding: '10px'},
  menuIcon: { fontSize: '16px'},
};

const onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
  return (
    <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
      <CommandBarButton
        className={styles['btControlToolBar']}
        aria-label={item.name}
        styles={onRenderItemStyles}
        iconProps={{ iconName: item.icon }}
        onClick={item.onClick}
      />
    </TooltipHost>
  );
};

const onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
  return (
    <TooltipHost content="More items" directionalHint={DirectionalHint.rightCenter}>
      <CommandBarButton
        aria-label="More items"
        styles={onRenderOverflowButtonStyles}
        menuIconProps={{ iconName: 'More' }}
        menuProps={{ items: overflowItems! }}
      />
    </TooltipHost>
  );
};
  

    return <Stack horizontal verticalAlign='start'><OverflowSet
    aria-label="Vertical Example"
    vertical
    items={[
      {
        key: 'item1',
        icon: 'Edit',
        name: 'Editar peça Web',
        title: 'Editar peça Web',
        onClick: noOp,
      },
      {
        key: 'item2',
        icon: 'Move',
        name: 'Mover peça Web',
        title: 'Mover peça Web',
        onClick: noOp,
      },
      {
        key: 'item3',
        icon: 'Tab',
        name: 'Duplicar peça Web',
        title: 'Duplicar peça Web',
        onClick: noOp,
      },
      {
        key: 'item4',
        icon: 'Delete',
        name: 'Eliminar peça Web',
        title: 'Delete',
        onClick: noOp,
      }
    ]}
    overflowItems={[
    ]}
    onRenderOverflowButton={onRenderOverflowButton}
    onRenderItem={onRenderItem}
  /><Card className={styles['celebrationsCard']}><Stack verticalAlign='start' className={styles['stackheight']} horizontal><TextField className={styles['textAreaTitle']}  borderless placeholder="Title" /></Stack>
<Stack verticalAlign='center' horizontalAlign='center' className={styles['containerbg']}>
<Stack horizontal><Image className={styles['alignImage']}src={Lists}></Image><Label><h2>Por favor configure a Web Part</h2></Label></Stack>
  <Label>Selecione uma lista no site atual ou crie uma</Label>
</Stack>

</Card></Stack> 

  }