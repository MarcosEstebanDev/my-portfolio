import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import './particles.css'
import particlesContainer from './particlesContainer.js'

export  const ParticlesBackground = () => {

    const particlesInit = useCallback( engine => {

            loadFull(engine);

    },[]);



return(
        <div className='particles-js'>
            <Particles
                        
                        init={particlesInit}
                        options={particlesContainer}
            />
        </div>
        )
}


