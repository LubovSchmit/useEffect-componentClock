import {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> - {value} </>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }
    return <><input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value: {value} </>;
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;