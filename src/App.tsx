import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import { Home } from './views/Home';
import { Info } from "./views/Info";
import {Loader} from "./components/Universal/Loader/Loader";

const App = () => {
    return (
        <Main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/info' element={<Info />} />
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

export {App};