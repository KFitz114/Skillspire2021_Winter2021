// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

// class About extends React.Component  {
//     render() {
//         return (
//             <div>
//                 <p> <u>About me</u></p>
//                 <ul>
//                     <li>From California but currently reside in Connecticut</li>
//                     <li>Spent the last decade serving on active duty</li>
//                     <li>Hobbyist homesteader</li>
//                 </ul>
//             </div>
//         )
//         }
//     }
// export default About;

import React, {Component} from 'react';
const About = props =>  {
    console.log(props)
    return(
        <div>
            <h3><u>About Me</u></h3>
            <ul>
                <li>From: {props.aboutMeOne}</li>
                <li>Career: {props.aboutMeTwo}</li>
                <li>Hobby: {props.aboutMeThree}</li>
            </ul>
        </div>
    )
}
export default About;