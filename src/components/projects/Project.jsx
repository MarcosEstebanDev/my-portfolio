export const Project = ({ title, technologies, projectImg, description, github, website }) => {
    return (
        <div className='project'>
            <img className='project__img' src={'./img/' + projectImg + '.jpg'} alt='project img' />
            <div className='project__info'>
                <h3 className='project__title'>{ title }</h3>
                <ul className='project-technologies'>
                    {
                        technologies.map(technology => (
                            <li key={technology}>
                                <img className='project-technologies__img' src={'./img/' + technology + '.png'} alt='technology logo' />
                            </li>
                        ))
                    }
                </ul>
                <p className='project__description'>{ description }</p>
                <div className='project__buttons'>
                    <a className='project__button' href={ github } target='_blank' rel='noreferrer'>
                        <img className='logo-24' src='./img/github.png' alt='github logo' />
                        Repositorio
                    </a>
                    <a className='project__button' href={ website } target='_blank' rel='noreferrer'>
                        <img className='logo-24' src='./img/link.png' alt='link logo' />
                        Sitio Web
                    </a>
                </div>
            </div>
        </div>
    )
}
