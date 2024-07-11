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
        <ProgramsWrapper>
            <Container>
                <Descr>
                    <MainTitle>Not sure where to start?</MainTitle>
                    <Parag>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</Parag>
                </Descr>
                <BoxCard>
                    {arrayCard.map((card, index) => {
                        return <Card key={index}>
                            <span>{card.title}</span>
                            <p>{card.description}</p>
                        </Card>
                    })}
                </BoxCard>
            </Container>
        </ProgramsWrapper>
    );
};

const ProgramsWrapper = styled.div`

`

const Descr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const MainTitle = styled.h3`
    font-size: 48px;
`
const Parag = styled.p`
    font-size: 14px;
    opacity: 0.5;
`

const BoxCard = styled.div`

`
const Card = styled.div`

`