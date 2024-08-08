import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import prev1 from "../../../img/pictures/prev1.jpg"
import prev2 from "../../../img/pictures/prev2.jpg"


type DataType = {
    title: string
    content: string
    img: string
    alt: string
}

const data: DataType[] = [
    {
        title: "Work out at home for free.",
        content: "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!",
        img: prev1,
        alt: "the girl is sitting in front of a laptop and kneading her neck"
    },
    {
        title: "Get more with low-cost training programs and advanced features.",
        content: "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!",
        img: prev2,
        alt: "a girl in the gym trains with two floor ropes"
    }
]
export const Description = () => {
    return (
        <Container>
            <DescriptionWrap>
                {data.map((el,index) => {
                    return (
                        <Block key={index}>
                            <Box>
                                <Title>{el.title}</Title>
                                <Descr>{el.content}</Descr>
                            </Box>
                            <Img src={el.img} alt={el.alt}/>
                        </Block>
                    )
                })}
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
    outline: 1px solid #fccb00;
`

const Block = styled.div`
    display: flex;
    gap: 69px;
    margin-left: 77px;
    outline: 1px solid blue;
    justify-content: space-between;
    height: auto;
    
    &:last-child {
        gap: 89px;
        height: auto;
        flex-direction: row-reverse;
        margin-left: 0;
        margin-right: 72px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 38px;
    max-width: 100%;
    max-height: 539px;
    height: auto;
`

const Descr = styled.p`
    font-size: 14px;
    opacity: 0.5;
    max-width: 480px;
    max-height: 120px;
    
    &:last-child {
        max-width: 523px;
    }
`

const Title = styled.h3`
    font-size: 48px;

    @media (width < 1440px) {
        font-size: calc((100vw - 360px) / (1440 - 360) * (48 - 16) + 16px);
    }
`

const Img = styled.img`
    max-width: 640px;
    width: 53%;
    max-height: 540px;
    height: auto;
    object-fit: contain;
`