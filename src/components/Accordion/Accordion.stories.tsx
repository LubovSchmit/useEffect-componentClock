import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion,
    /*argTypes: any,*/
} as Meta;

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>;

export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
                                                     items={[{title: 'Luba', value: 1},
                                                         {title: 'Mira', value: 2},
                                                         {title: 'Nastya', value: 3},
                                                         {title: 'Leon', value: 4}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: 'Luba', value: 1},
                          {title: 'Mira', value: 2},
                          {title: 'Nastya', value: 3},
                          {title: 'Leon', value: 4}
                      ]}
                      onClick={(value) => {
                          alert(value)
                      }}
    />
};





