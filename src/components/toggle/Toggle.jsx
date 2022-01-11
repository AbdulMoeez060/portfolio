import './toggle.css'
import sun from '../../image/sun.png'
import moon from '../../image/moon.png'


function Toggle() {
    return (
        <div className='toggle'>
            <img src={sun} alt="" className="toggle-icon" />
            <img src={moon} alt="" className="toggle-icon" />
            <div className="toggle-button"></div>
        </div>
    )
}

export default Toggle
