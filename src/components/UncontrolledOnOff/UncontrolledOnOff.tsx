import {useState} from 'react';

type PropsType = {
    /*on: boolean*/
    onChange: (on: boolean)=> void
    defaultOn?: boolean
}




export function UncontrolledOnOff(props:PropsType) {

    let [on, setOn] = useState( props.defaultOn ? props.defaultOn: false); //hook

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'greenyellow' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'greenyellow' : 'red'
    }
const onClicked = () => { setOn (true); props.onChange(true)}
const offClicked = () => { setOn(false); props.onChange(false)}
    return <div>
        <div style = {onStyle} onClick= {  onClicked   }>On</div>
        <div style = {offStyle} onClick= { offClicked   }>Off</div>
        <div style = {indicatorStyle}>x</div>
    </div>
}


