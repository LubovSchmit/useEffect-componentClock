import React from 'react';
import { Story, Meta } from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';




export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    /*argTypes: any,*/
} as Meta;


/*const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;*/

export const ModeChanging = ( ) => {
        return <UncontrolledAccordion titleValue={'Users'} />
};





