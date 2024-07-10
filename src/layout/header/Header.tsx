import styled from 'styled-components';
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items: string[] = ["WORKOUTS", "PROGRAMS", "HEALTHY LIVING", "COMMUNITY", "ABOUT", "STORE"]

export const Header = () => {
    return (
        <div>
            <HeaderMenu menuItems={items}/>
        </div>
    );
};

