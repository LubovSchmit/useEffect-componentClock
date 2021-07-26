import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import { UncontrolledOnOff} from './UncontrolledOnOff';
/*import {OnOffPropsType} from './OnOff';*/
import {action} from '@storybook/addon-actions';



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    /*argTypes: {on: OnOff},*/
} as Meta;

const callback = action('on or off clicked');

/*const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;*/

export const OnMode = ( ) => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = ( ) => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>








