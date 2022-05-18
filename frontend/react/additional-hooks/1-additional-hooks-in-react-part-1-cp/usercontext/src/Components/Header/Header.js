import styles from './Header.module.scss';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
 
const Header = ({text}) =>{
    const theme = useContext(ThemeContext).theme;
 
    const renderTheme = (theme) =>{
        //mengubah warna dari Header berdasarkan theme
        // TODO: answer here
        if (theme === "dark") {
            return {
                styles: styles['dark-theme']
            }
        }
        return {
            styles: styles['light-theme']
        }
    }
 
    return(
        <h1 data-testid="header" className={`${styles['header']} ${renderTheme(theme).styles}`}>
            {text}
        </h1>
    )
}
 
export default Header;