import React from 'react'
import './App.css'

import AppRouter from './routes/AppRouter';
import { useTranslation } from 'react-i18next';

const App = () => {
    /*inicializaciones*/
    const { i18n } = useTranslation();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        if (lang && i18n.options.supportedLngs.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [i18n]);

    return (
        <AppRouter isAuthenticated={true} />
    );
}

export default App;