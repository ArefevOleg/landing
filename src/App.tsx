import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/maim/Main";
import {Programs} from "./layout/section/programs/Programs";
import {Description} from "./layout/section/description/Description";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Programs/>
            <Description/>
        </div>
    );
}

export default App;
