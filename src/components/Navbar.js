import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>




                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>

                    </ul>


                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            More Colors
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                            {props.bgColors.map(color => (
                                <li key={color.name} className={`dropdown-item bg-${color.class} text-white mx-1 my-1`}>
                                    <div className={`form-check form-switch mx-2 text-${color.text}`}>
                                        <input data-color={color.class} className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {color.name} Mode</label>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>

                </div>

            </div>
        </nav >
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar