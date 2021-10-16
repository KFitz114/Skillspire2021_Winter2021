import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import React from 'react'

//class Info extends React.Component  {
//    render() {
//        return (
//           <div>
//                <h2> <u>Contact Info</u></h2>
//                <ul>
//                    <li>Keegan FitzGerald</li>
//                    <li>E-mail: Keegan.Fitzgerald@yahoo.com</li>
//                    <li>Cell: 484-213-0234</li>
//                </ul>
//            </div>
//        )
//        }
//    }
//export default Info;
const Info = props =>   {
    console.log(props)
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <p>Contact: {props.email}</p>
            <p>Cell: {props.cell}</p>
        </div>
    )
}
export default Info;