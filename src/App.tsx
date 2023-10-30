import {Suspense, lazy, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Universal/Main';
import {Loader} from "./components/Universal/Loader/Loader";
import {Box} from "./types/Box";

const Home = lazy(() => import('./views/Home'));
const Info = lazy(() => import('./views/Info'));
const Gender = lazy(() => import('./views/Gender'));
const DateView = lazy(() => import('./views/Date'));
const Result = lazy(() => import('./views/Result'));

const App = () => {
    const [gender,setGender] = useState<"male" | "female">();
    const [date, setDate] = useState<Date>();
    const [fullYears, setFullYears] = useState(0);
    const [boxes, setBoxes] = useState<Box[]>([]);

    function getGender() {
        if(gender === 'male') {
            setFullYears(69);
        }
        else {
            setFullYears(73);
        }

        const weeks = fullYears * 12 * 4;

        if(boxes.length > 0) {
            setBoxes([]);
        }

        for(let i=0; i<weeks; i++) {
            setBoxes(prev => [...prev, { id: i, filled: false }]);
        }
    }

    function calculateWhiteBoxes() {
        if(!date) return;
        const weeksFromNow:number = Math.round(Date.now() / 1000 / 60 / 60 / 24 / 7);
        const birthWeeks:number = Math.round(date.getTime() / 1000 / 60 / 60 / 24 / 7);
        const whiteBoxes:number = weeksFromNow - birthWeeks;
        const boxesCopy = boxes;

        for(let i=0; i < whiteBoxes; i++) {
            boxesCopy[i].filled = true;
        }

        setBoxes(boxesCopy);
    }

    useEffect(() => {
        getGender();
    }, [gender]);

    useEffect(() => {
        calculateWhiteBoxes();
    }, [date]);

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
                            <DateView setDate={(date: Date) => setDate(date)} />
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