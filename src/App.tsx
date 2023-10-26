import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import { Home } from './views/Home';

const App = () => {
    return (
        <Main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

export {App};