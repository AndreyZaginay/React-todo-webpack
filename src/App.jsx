import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './assets/css/style';
import { AppRouter } from './components/AppRouter';

const App = () => (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
);

export default App;
