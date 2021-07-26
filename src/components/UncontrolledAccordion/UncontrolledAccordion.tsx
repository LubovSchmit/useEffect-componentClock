import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string,
    /*collapsed: boolean*/
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    /* const collapsed = false;*/

    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>

        {!collapsed && <UncontrolledAccordionBody/>}
    </div>//то же самое, что {props.collapsed === false  && <UncontrolledAccordionBody/>

    type UncontrolledAccordionTitlePropsType = {
        title: string
        onClick: () => void
    }

    function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
        console.log('AccordionTitle rendering')

        return (
            <h3 onClick={() => {
                props.onClick()
            }}>--{props.title}--</h3>
        );
    }

    function UncontrolledAccordionBody() {
        console.log('UncontrolledAccordionBody rendering')

        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    }
}
