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
                        <CustomVideo path='/surflow-app-demos.mp4' />

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