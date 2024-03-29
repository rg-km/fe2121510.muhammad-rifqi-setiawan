import { createContext, useState } from 'react';
import Toolbar from './Toolbar';
import WeatherReaction from "./WeatherReaction";

export const ThemeContext = createContext()

const WithContext = () =>{
    const [theme, setTheme] = useState('Summer');
    return(
        <ThemeContext.Provider
        value={{
            theme : theme,
            setTheme : setTheme
            }}
        >
            <Toolbar/>
            <WeatherReaction/>
        </ThemeContext.Provider>
    )
}

export default WithContext;