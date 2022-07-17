import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

export default function NavigationBar() {
    const [toggleState, setToggleState] = useState(false);

    const toggle = () => {
        setToggleState(!toggleState);
    };

    return (
        <header>
            <div onClick={toggle}>
                <Link to='/'>Test Case Manager</Link>
            </div>

            <nav>
                <ul>
                    <NavLink onClick={toggle} to='/'>
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to='/testcases' onClick={toggle}>
                        <li>Test Cases</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

