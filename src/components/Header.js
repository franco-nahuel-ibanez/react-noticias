import React from 'react';



export const Header = ({titulo}) => {
    return(
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>
    )
}
