import React from 'react'
import CustomVideo from '../components/CustomVideo'

function Projects() {
    return (
        <div>
            Projects
            <ul>
                <li>
                    <a href='https://github.com/nds-fsd/typeform' target='_blank'>
                        Surflow
                    </a>
                    <div>
                        <CustomVideo path='/Screen Recording 2025-03-06 at 1.36.14 AM.mov' />

                    </div>
                    <p>descricao projeto</p>
                    <p>fecha</p>
                    <p>herramientas utilizadas</p>
                </li>
            </ul>
        </div>
    )
}

export default Projects