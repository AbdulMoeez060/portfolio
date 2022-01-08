import './about.css'
function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="" className="about-image" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">
                    About Me
                </h1>
                <p className="about-sub">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est debitis incidunt quas placeat amet blanditiis beatae, odio tenetur quod. Reprehenderit sequi qui officia tempora ullam libero modi dolor sed quos.
                </p>
                <p className="about-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, itaque esse delectus earum doloribus repellendus consequatur ex quae repellat quibusdam rerum nam, maiores totam aut rem magni ratione quod architecto eum! Natus molestiae quos eum, eaque cumque cum suscipit fugiat illum unde tempore ipsa veritatis blanditiis aliquid recusandae quaerat. Incidunt cum recusandae odio non ratione. Molestiae neque quibusdam nisi fuga tempora nobis recusandae, autem dolorum, natus quam quisquam sequi iste.
                </p>
            </div>
        </div>
    )
}

export default About
