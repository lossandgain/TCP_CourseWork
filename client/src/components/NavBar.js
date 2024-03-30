import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/cjs/Button";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts.";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand
                    href="#home"
                    onClick={() => navigate(SHOP_ROUTE)}
                >AIMbot Store</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={()=> navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={()=> logOut()}
                            className="ms-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;