import React, {useEffect, useState} from 'react';

type PropsType = {}


const get2digitsString = (num: number) => num < 10 ? '0' + num : num
// @ts-ignore
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}

function nexDate(): string | number | Date {
    throw new Error('Function not implemented.');
}
