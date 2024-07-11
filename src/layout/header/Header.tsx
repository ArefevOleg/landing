import styled from 'styled-components';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";

const items: string[] = ["WORKOUTS", "PROGRAMS", "HEALTHY LIVING", "COMMUNITY", "ABOUT", "STORE"]

export const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <Logo/>
                <HeaderMenu menuItems={items}/>
            </HeaderWrapper>
        </Container>
    );
};

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 1312px;
    margin: 50px 64px 50px 64px;
    max-height: 19px;
`