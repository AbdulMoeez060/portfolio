import Project from '../project/Project'
import './projectList.css'

function ProjectList() {
    return (
        <div className='projectList'>

            <div className="pl-texts">
                <h1 className="pl-title">To Create and Learn.</h1>
                <p className="pl-desc">
                    I have always thought that if you can't apply what you've learnt to make something, then that just means you haven't learnt enough.
                </p>
            </div>
            <div className="pl-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>

            </div>
        </div>
    )
}

export default ProjectList
