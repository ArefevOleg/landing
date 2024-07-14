import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";

export type CardType = {
    title: string
    description: string
}

const arrayCard: CardType[] = [
    {title: "Workout Videos", description: "Access to hundreds of free, full-length workout videos."},
    {title: "Workout Programs", description: "Affordable and effective workout programs. "},
    {title: "Meal Plans", description: "Plans built with registered dietitians and nutritionists."},
    {title: "WO Plus ALL ACCESS", description: "AAdd powerful features to your membership. "},
]

export const Programs = () => {
    return (
            <Container>
                <ProgramsWrapper>
                <Descr>
                    <MainTitle>Not sure where to start?</MainTitle>
                    <Parag>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</Parag>
                </Descr>
                <BoxCard>
                    {arrayCard.map((card, index) => {
                        return <Card key={index}>
                            <Title>{card.title}</Title>
                            <Description>{card.description}</Description>
                        </Card>
                    })}
                </BoxCard>
                </ProgramsWrapper>
            </Container>
    );
};

const ProgramsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 100px 0 95px 141px;
    max-height: 338px;
`

const Descr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const MainTitle = styled.h3`
    font-size: 48px;
    font-weight: 500;
`
const Parag = styled.p`
    font-size: 16px;
    opacity: 0.5;
`

const BoxCard = styled.div`
    display: flex;
    gap: 32px;

`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 304px;
    max-height: 190px;
    padding: 52px 72px 52px 40px;
    background-color: rgba(50, 52, 67, 1);
    border-radius: 10px;
`
const Title = styled.span`
    font-size: 18px;
`

const Description = styled.p`
    font-size: 14px;
    opacity: 0.5;
`