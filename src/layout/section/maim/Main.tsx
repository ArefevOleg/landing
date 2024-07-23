import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import photo from "../../../img/pictures/man.png"
import buzzfeed from "../../../img/logo/buzzfeed.svg"
import DW from "../../../img/logo/DW.svg"
import ESPRIT from "../../../img/logo/ESPRIT.svg"
import huffpost from "../../../img/logo/huffpost.svg"
import NG from "../../../img/logo/NG.svg"
import nike from "../../../img/logo/nike.svg"
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const img = [nike, buzzfeed, ESPRIT, NG, DW, huffpost]

export const Main = () => {
    return (
        <Container>
            <MainWrapper>
                <MainTitle>WORKOUT WITH ME</MainTitle>
                <Desc>A huge selection of health and fitness content, healthy recipes and transformation stories to help
                    you get fit and stay fit!</Desc>
                <Button>Join Club Now!</Button>
                <Span>AS FEATURED IN</Span>
                    <Photo src={photo} alt=""/>
                    <LogoWrapper>
                        {img.map(el => {
                            return <Img src={el} alt=""/>
                        })}
                    </LogoWrapper>
            </MainWrapper>
        </Container>
    );
};

const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 130px 44px 100px 141px;
    max-height: 741px;

    @media (max-width: 1100px) {
        margin: 20px;
    }

    @media (max-width: 1000px) {
        padding-bottom: 0;
    }
`

const MainTitle = styled.h1`
    padding-top: 0;
    font-size: 172px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    
    @media (width <= 1440px) {
        font-size: calc((100vw - 360px) / (1440 - 360) * (172 - 25) + 25px);
    }

    @media (max-width: 1100px) {
        font-size: calc((100vw - 360px) / (1100 - 360) * (172 - 25) + 25px);
    }
`

const Desc = styled.p`
    font-size: calc((100vw - 360px) / (1440 - 360) * (16 - 14) + 14px);
    opacity: 0.5;
    max-width: 560px;
`

const Button = styled.button`
    background-color: rgba(230, 83, 60, 1);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    width: 200px;
    height: 70px;
`

const Photo = styled.img`
    max-width: 409px;
    width: 33%;
    position: absolute;
    top: 55px;
    right: 8%;
    z-index: 1;
    
    @media (max-width: 1260px) {
        right: 45px;
    }

    @media (max-width: 1100px) {
        right: 0;
    }

    @media (max-width: 860px) {
        right: 0;
    }
`

const Span = styled.span`
    font-size: 14px;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    opacity: 0.5;
`

const LogoWrapper = styled.div`
    display: flex;
    gap: 18px;
    max-width: 600px;
    width: 100%;

    @media (max-width: 920px) {
        
    }
`

const Img = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`