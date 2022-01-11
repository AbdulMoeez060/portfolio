import { useContext } from "react";
import './toggle.css'
import sun from '../../image/sun.png'
import moon from '../../image/moon.png'
import { ThemeContext } from "../../context";



function Toggle() {
    const theme = useContext(ThemeContext);
    const handleClick = ()=>{
        theme.dispatch({type :'TOGGLE'});
    };

    return (
        <div className='toggle'>
            <img src={sun} alt="" className="toggle-icon" />
            <img src={moon} alt="" className="toggle-icon" />
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle
