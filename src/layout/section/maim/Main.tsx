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
                <Photo src={photo} alt=""/>
                <LogoBox>
                    <Span>AS FEATURED IN</Span>
                    <LogoWrapper>
                        {img.map(el => {
                            return <Img src={el} alt=""/>
                        })}
                    </LogoWrapper>
                </LogoBox>
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
    height: 741px;
    outline: 1px solid #ffe200;

    @media ${theme.media.tablet} {
        margin-left: 0;
        margin-right: 0;
    }
`

const MainTitle = styled.h1`
    font-size: calc((100vw - 360px) / (1440 - 360) * (172 - 25) + 25px);
    font-weight: 800;
    text-transform: uppercase;
    
    @media (width >= 1440px) {
        font-size: 172px;
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
    position: absolute;
    bottom: 0;
    right: 85px;
    z-index: 1;
    
    max-width: 409px;
    width: 100%;
    height: 684px;
    object-fit: cover;

    //max-width: 100%;
    //height: auto;
`
const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 33px;
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
`

const Img = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`