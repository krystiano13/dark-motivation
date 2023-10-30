import {Suspense, lazy, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import {Loader} from "./components/Universal/Loader/Loader";

const Home = lazy(() => import('./views/Home'));
const Info = lazy(() => import('./views/Info'));
const Gender = lazy(() => import('./views/Gender'));
const Date = lazy(() => import('./views/Date'));
const Result = lazy(() => import('./views/Result'));

const App = () => {
    const [gender,setGender] = useState<"male" | "female">();
    const [date, setDate] = useState<Date>();
    const [fullYears, setFullYears] = useState(0);
    const [boxes, setBoxes] = useState<number[]>([]);

    useEffect(() => {
        if(gender === 'male') {
            setFullYears(69);
        }
        else {
            setFullYears(73);
        }

        const weeks = fullYears * 12 * 4;

        for(let i=0; i<weeks; i++) {
            setBoxes(prev => [...prev, i]);
        }

    }, [gender]);

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
                    <Route path='/result' element={
                        <Suspense fallback={<Loader />}>
                            <Result boxes={boxes} date={date} />
                        </Suspense>} />
                </Routes>
            </BrowserRouter>
        </Main>
    );
}

export {App};