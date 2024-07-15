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
`

const Block = styled.div`
    display: flex;
    gap: 69px;
    margin-left: 64px;
    //outline: 1px solid blue;
    justify-content: space-between;
    width: 1235px;
    height: 539px;
    
    &:last-child {
        gap: 89px;
        width: 1240px;
        height: 510px;
        flex-direction: row-reverse;
        margin-left: 0;
        margin-right: 136px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 38px;
`

const Descr = styled.p`
    font-size: 14px;
    opacity: 0.5;
    width: 480px;
    height: 120px;
    
    &:last-child {
        width: 523px;
    }
`

const Title = styled.h3`
    font-size: 48px;
`;


const Img = styled.img`
    max-width: 640px;
    max-height: 539px;
`