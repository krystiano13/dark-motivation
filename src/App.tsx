import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import {Loader} from "./components/Universal/Loader/Loader";

const Home = lazy(() => import('./views/Home'));
const Info = lazy(() => import('./views/Info'));

const App = () => {
    return (
        <Main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>} />
                    <Route path='/info' element={
                        <Suspense fallback={<Loader />}>
                            <Info />
                        </Suspense>} />
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

export {App};