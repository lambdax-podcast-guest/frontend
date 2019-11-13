import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled('nav')`
    display: flex;
    justify-content: space-between;
    padding: 15px 35px;
`

const NavRightSide = styled('div')`
    height: 100%;
    width: 30%;
    padding-right: 60px;
    ul {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const NavLeftSide = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;
`

const NavBar = props => {
    return (
        <>
            <header>
                <StyledNav>
                    <NavLeftSide>
                        <img alt="logo"></img>
                        <NavLink to="/">
                            <h2>Podcast Guest List</h2>
                        </NavLink>
                    </NavLeftSide>
                    <NavRightSide>
                        <ul>
                            <a href="#">Learn</a>
                            <a href="#">Sign In</a>
                            <button>Register</button>
                        </ul>
                    </NavRightSide>
                </StyledNav>
            </header>
        </>
    );
};

export default NavBar;