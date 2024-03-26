// import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {   //we use props here so that we can modify any heading when we import in another page

    const [def_text, new_text] = useState("Dark mode")

    let toggletext = () => {
        if (def_text === "Dark mode") {
            new_text("Light mode");
        }
        else {
            new_text("Dark mode");

        }
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">{props.title}</a>   {/*{props.title} is used to modify title in page we import code */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{textDecoration:"none"}}>
                                <a className="nav-a active" aria-current="page" href="#" >{props.second_title} </a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-a" href="/">{props.third_title}</a>  {/*  change a with link and href with to to use react router to link buttons to different pages
                            </li> */}
                        </ul>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>    {/* text-light className is used to change text color to white */}
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{def_text}</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
//first import proptypes and then you can specify that which type of props you wanna import
//is required tells the coder that to you can not leave any specific data blank

Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    second_title: PropTypes.string.isRequired,
    third_title: PropTypes.string.isRequired
}

// we use defaultProps to enter default value if we dont pass any data in these titles
Navbar.defaultProps = {
    title: "enter title",
    second_title: "enter second title",
    third_title: "enter third title"
}