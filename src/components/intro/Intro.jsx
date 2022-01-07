import "./intro.css"
function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name is</h2>
                    <h1 className="i-name">Abdul Moeez</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">React Dev</div>
                            <div className="i-title-item">AI/ML Enthusiast</div>
                            <div className="i-title-item">Always Tired</div>
                            <div className="i-title-item">Binge Reader</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro
