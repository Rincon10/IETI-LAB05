import useHomePage from 'components/hooks/useHomePage';
import { types } from 'components/types/types';
import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CardContainer from './CardContainer';

const HomeScreen = () => {
    const { user, dispatch } = useContext(UserContext);
    const { email } = user;
    const id = email.split('@')[0];

    const { todo, doing, done } = useHomePage();

    const handleClick = () => {
        const action = {
            type: types.logout,
        };
        dispatch(action);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">
                        <img
                            alt=""
                            src="./logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Planner
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Logged as: <a href="home">{id}</a>
                        </Navbar.Text>
                        <Nav.Link onClick={handleClick}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div
                style={{ display: 'flex', 'justify-content': 'space-between' }}
            >
                <CardContainer tasks={todo} title="TODO" />
                <CardContainer tasks={doing} title="DOING" />
                <CardContainer tasks={done} title="DONE" />
            </div>
        </>
    );
};

export default HomeScreen;
