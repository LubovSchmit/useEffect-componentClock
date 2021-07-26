import {useState} from 'react';

export type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean) => void
}


export function OnOff(props:OnOffPropsType) {

   /* let [on, setOn] = useState(false); //hook*/

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'greenyellow' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '15px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'greenyellow' : 'red'
    }

    return <div>
        <div style = {onStyle} onClick={  () => { props.onChange(true) }   }>On</div>
        <div style = {offStyle} onClick={  () => { props.onChange(false) }  }>Off</div>
        <div style = {indicatorStyle}>x</div>
    </div>
};