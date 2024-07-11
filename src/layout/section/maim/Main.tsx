import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import photo from "../../../img/pictures/man.png"


export const Main = () => {
    return (
        <Container>
            <MainWrapper>
                <MainTitle>WORKOUT WITH ME</MainTitle>
                <Desc>A huge selection of health and fitness content, healthy recipes and transformation stories to help
                    you get fit and stay fit!</Desc>
                <Button>Join Club Now!</Button>
                    <Photo src={photo} alt="" />
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
`

const MainTitle = styled.h1`
    font-size: 172px;
    line-height: 1;
    text-transform: uppercase;
    //background: linear-gradient(90deg, #000, #fff, #000);
    //background-size: 400% 400%;
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    //animation: gradient 15s ease infinite;
    //@keyframes gradient {
    //    0% {
    //        background-position: 0% 50%;
    //    }
    //    50% {
    //        background-position: 100% 50%;
    //    }
    //    100% {
    //        background-position: 0% 50%;
    //    }
`

const Desc = styled.p`
    font-size: 16px;
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
    right: 110px;
    max-width: 409px;
    max-height: 684px;
    z-index: 1;
`