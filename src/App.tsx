import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import {Loader} from "./components/Universal/Loader/Loader";

const Home = lazy(() => import('./views/Home'));
const Info = lazy(() => import('./views/Info'));
const Gender = lazy(() => import('./views/Gender'));
const Date = lazy(() => import('./views/Date'));

const App = () => {
    const [gender,setGender] = useState<"male" | "female">();
    const [date, setDate] = useState<Date>();

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
                    <Route path='/gender' element={
                        <Suspense fallback={<Loader />}>
                            <Gender
                                setGender={(gender:'male'|'female') => setGender(gender)}
                            />
                        </Suspense>} />
                    <Route path='/date' element={
                        <Suspense fallback={<Loader />}>
                            <Date setDate={(date: Date) => setDate(date)} />
                        </Suspense>} />
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

export {App};