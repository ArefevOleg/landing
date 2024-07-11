import styled from "styled-components";

export const Logo = () => {
    return (
        <>
            <Link href="#">
                <span>WORKOUT</span>
            </Link>
        </>
    );
};

const Link = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
`