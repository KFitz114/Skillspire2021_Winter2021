import React, {Component} from 'react';
const Education = props =>  {
    console.log(props)
    return(
        <div>
            <h3><u>About Me</u></h3>
            <ul>
                <li>Graduated {props.educationOne}</li>
                <li>Graduated {props.educationTwo}</li>
                <li>Attending {props.educationThree}</li>
            </ul>
        </div>
    )
}
export default Education;