import styled from "styled-components";


export const HeaderMenu = (props:  {menuItems: Array<string>} ) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item:string, index:number) => {
                    return (
                        <Item key={index}>
                            <Link href="#">
                                    <Span>{item}</Span>
                            </Link>
                        </Item>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};



const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: end;
    }
`
const Item = styled.li`
    
`
const Link = styled.a`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
`
const Span = styled.span`

`