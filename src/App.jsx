import React from 'react'
import './App.css'

import AppRouter from './routes/AppRouter';

const App = () => {
    /*inicializaciones*/
    return (
        <AppRouter isAuthenticated={true} />
    );
}

export default App;