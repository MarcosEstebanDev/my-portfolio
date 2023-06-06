import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Portfolio } from './Portfolio';
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/about/AboutPage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { ContactPage } from './components/contact/ContactPage';



import './index.css';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
   
        <ScrollToTop>
        
            <Routes>
                <Route path='/' element={ <Portfolio /> }>
                    <Route
                        index
                        element={ <HomePage /> }
                    />
                    <Route
                        path='about'
                        element={ <AboutPage /> }
                    />
                    <Route
                        path='projects'
                        element={ <ProjectsPage /> }
                    />
                    <Route
                        path='contact'
                        element={ <ContactPage /> }
                    />
                </Route>
            </Routes>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
