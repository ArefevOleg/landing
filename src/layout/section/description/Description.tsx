import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import prev1 from "../../../img/pictures/prev1.jpg"
import prev2 from "../../../img/pictures/prev2.jpg"

const info = [
    {
        title: "Work out at home for free.",
        description: "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!",
        img: prev1
    },
    {
        title: "Get more with low-cost training programs and advanced features.",
        description: "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!",
        img: prev2
    }
]
export const Description = () => {
    return (
        <Container>
            <DescriptionWrap>
                {/*{info.map((el,index) => {*/}
                {/*    return (*/}
                {/*        <Block key={index}>*/}
                {/*            <Box>*/}
                {/*                <Title>{el.title}</Title>*/}
                {/*                <Descr>{el.description}</Descr>*/}
                {/*            </Box>*/}
                {/*            <img src={el.img} alt=""/>*/}
                {/*        </Block>*/}
                {/*    )*/}
                {/*})}*/}
                <Block>
                    <Box>
                        <Title>{info[0].title}</Title>
                        <Descr>{info[0].description}</Descr>
                    </Box>
                    <img src={info[0].img} alt=""/>
                </Block>
                <Block>
                    <img src={info[1].img} alt=""/>
                    <Box>
                        <Title>{info[1].title}</Title>
                        <Descr>{info[1].description}</Descr>
                    </Box>
                </Block>
            </DescriptionWrap>
        </Container>
    );
};

const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 121px;
    max-width: 1312px;
    max-height: 1170px;
    margin: 95px 64px 100px 64px;
`
const Block = styled.div`
    display: flex;
    gap: 69px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const Descr = styled.p`
    font-size: 14px;
    opacity: 0.5;
`

const Title = styled.h3`

`