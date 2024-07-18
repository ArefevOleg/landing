import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {UniversalButton} from "../../../components/button/Button";


const data = [
    {
        title: "Join for Free",
        description: "Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.",
        list: ["~600 Full-Length Workout Videos","Customizable Calendar", "Healthy Recipes", "Health and Fitness Articles", "Positive and Supportive Online Community", "No Credit Card Needed"]
    },
    {
        title: "WO Plus",
        description: "WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.",
        list: ["Ads-Free Website and Videos", "Surprise Me Workout Selection Tool", "Statistics for Your Activities", "Enter and Track Custom Workouts", "FB Plus Exclusive Workouts", "Trackers to See Your Progress", "FB Plus Content and Challenges", "Video Tags", "FB Plus Routines", "Rest Day Complete"]
    }
]
export const Membership = () => {
    return (
        <Container>
            <MainTitle>Membership</MainTitle>
            <MembershipWrapper>
                {data.map((el, index) => {
                    return (
                        <FlexWrapper key={index}>
                            <Title>{el.title}</Title>
                            <Description>{el.description}</Description>
                            <ListWrapper>
                                {el.list.map((item, i) => (
                                    <Item key={i}>{item}</Item>
                                ))}
                            </ListWrapper>
                            <UniversalButton
                                onClick={()=>{}}
                                backgroundColor="red"
                                color="white"
                                width="200px"
                                padding="15px 30px">Click me</UniversalButton>
                        </FlexWrapper>
                    )
                })}
            </MembershipWrapper>
        </Container>
    );
};

const MembershipWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1155px;
    max-height: 767px;
    margin: 77px 142px 100px 142px;
`

const MainTitle = styled.h2`
    font-size: 50px;
    margin-left: 141px;
`

const FlexWrapper = styled.div`
    padding: 71px 68px 77px 68px;
    display: flex;
    flex-direction: column;
    max-width: 538px;
    max-height: 640px;
    background-color: rgba(35, 37, 50, 1);
    
    &:last-child {
        background-color: rgba(50, 52, 67, 1);
    }
`

const Title = styled.h3`
    font-size: 46px;
    text-align: center;
    margin-bottom: 34px;
`

const Description = styled.p`
    max-width: 402px;
    max-height: 96px;
    font-size: 18px;
    opacity: 0.5;
    margin-bottom: 16px;
    outline: 1px solid darkred;
`

const ListWrapper = styled.ul`
    list-style-position: inside;
    padding-left: 20px;
    font-size: 18px;
    opacity: 0.5;
    line-height: 1.3;
    outline: 1px solid darkgreen;
`

const Item = styled.li`
    list-style-type: disc;
`