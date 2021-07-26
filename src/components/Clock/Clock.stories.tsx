import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { Clock } from './Clock';


export default {
    title: 'Clock',
    component: Clock,
    } as Meta;

    export const BaseExample = () => {
      return <Clock />
};





