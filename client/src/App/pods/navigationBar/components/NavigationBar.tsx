import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';

export default function NavigationBar() {
    const [toggleNavigation, setNavigation] = useState(false);

    const toggle = () => {
        setNavigation(!toggleNavigation);
    };

    return (
        <div>
            <nav>
                <NavLink onClick={toggle} to='/'>
                    <Button>Dashboard</Button>
                </NavLink>
                <NavLink to='/testcases' onClick={toggle}>
                    <Button>Test Cases</Button>
                </NavLink>
            </nav>

        </div>
    );
}

