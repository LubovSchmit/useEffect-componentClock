import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValuePropsType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
/*import {Rating} from "./components/Rating/Rating";
import OnOff from './components/OnOff/OnOff';*/


//function declaration
function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);


    return (
        <div className={'App'}>

             {/*<OnOff on={switchOn} onChange={  (on)=> setSwitchOn(on)}/>*/}
            <UncontrolledAccordion titleValue={'Users'}/>
            {/*<PageTitle title={"PageTitle rendering"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            Article 1


           {/* <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<Rating value={ratingValue}
                    onClick={setRatingValue}/>*/}
            {/* <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;



