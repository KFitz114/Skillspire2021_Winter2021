// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';


// class Objectives extends React.Component  {
//     render() {
//         return (
//             <div>
//                 <h3> <u>Objectives</u> </h3>
//                 <ol>
//                     <li>To get a job that will improve my skills</li>
//                     <li>To work in a place that will encourage my growth as a developer</li>
//                     <li>To jumpstart my career</li>
//                 </ol>
//             </div>
//         )
//         }
//     }
// export default Objectives;

import React, {Component} from 'react';
const Objectives = props =>   {
    console.log(props)
    return(
        <div>
            <h3><u>Objectives</u></h3>
            <ul>
                <li>1: {props.objectiveOne}</li>
                <li>2: {props.objectiveTwo}</li>
                <li>3: {props.objectiveThree}</li>
            </ul>
        </div>
    )
}
export default Objectives;