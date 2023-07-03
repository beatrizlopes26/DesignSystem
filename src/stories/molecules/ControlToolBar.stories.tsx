import * as React from 'react';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import { IOverflowSetItemProps, OverflowSet } from '@fluentui/react/lib/OverflowSet';
import { DirectionalHint, TooltipHost } from '@fluentui/react';
import styles from './ControlToolBar.module.scss';
import controlToolBar from './ControlToolBar';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

export default {
    component: controlToolBar,
    title: "Molecules/ControlToolBar",
    tags: ['autodocs'],
  };



export const ControlToolBar = () => { //import { CommandBarButton } from '@fluentui/react/lib/Button';
  //import { IOverflowSetItemProps, OverflowSet } from '@fluentui/react/lib/OverflowSet';
  //import { DirectionalHint, TooltipHost } from '@fluentui/react';
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
return <OverflowSet
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
  />
  };