import React, {Component} from 'react';
const Experience = props =>   {
    console.log(props)
    return(
        <div>
            <h3><u>Experience</u></h3>
            <ul>
                <li>Automotive mechanic {props.experienceOne}</li>
                <li>Submarine Radioman {props.experienceTwo}</li>
                <li>Submarine IT {props.experienceThree}</li>
            </ul>
        </div>
    )
}
export default Experience;