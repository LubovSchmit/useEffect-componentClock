import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import { OnOff} from './OnOff';
/*import {OnOffPropsType} from './OnOff';*/
import {action} from '@storybook/addon-actions';



export default {
    title: 'OnOff',
    component: OnOff,
    /*argTypes: {on: OnOff},*/
} as Meta;

const callback = action('on or off clicked');

/*const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;*/

export const OnMode = ( ) => <OnOff on={true} onChange={callback}/>;
export const OffMode = ( ) => <OnOff on={false} onChange={callback}/>;

export const ModeChanging = ( ) => {
    const[value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
};





