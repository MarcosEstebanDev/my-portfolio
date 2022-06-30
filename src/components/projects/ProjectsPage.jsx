import { Project } from './Project';
import './projects.css';
import projects from '../../data/projects.json';
import { Transition } from '../transition/Transition';

export const ProjectsPage = () => {
    return (
        <div className='page'>
            <Transition title='Proyectos' />
            <h2 className='subtitle'>Proyectos</h2>
            <div className='projects-content'>
                <div className='projects-container'>
                    {
                        projects.map(project => (
                            <Project
                                key={ project.title }
                                title={ project.title }
                                github={ project.github }
                                projectImg={ project.img }
                                website={ project.website }
                                technologies={ project.stack }
                                description={ project.description }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
