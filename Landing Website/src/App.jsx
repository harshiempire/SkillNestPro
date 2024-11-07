// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Statistics, CTA, Footer } from "./components";
import { About, Blogs, Courses, Hero, Instructors, PopularCourses } from "./sections";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Hero />
                        <Statistics />
                        <About />
                        <PopularCourses />
                        <Courses />
                        <Instructors />
                        <Blogs />
                        <CTA />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default App;
