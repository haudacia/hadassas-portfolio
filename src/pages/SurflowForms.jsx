import React from 'react'
import CustomVideo from '../components/CustomVideo'

function SurflowForms() {
    return (
        <div className='flex flex-col h-screen w-screen overflow-auto justify-center'>
            <h1>surflow</h1>
            <p>form creation and submission with user authentication</p>
            <ul>
                <li>
                    <a href='https://github.com/nds-fsd/typeform' target='_blank'>
                        original repository
                    </a>
                    <a
                        href='https://github.com/haudacia/surflow' target='_blank'>
                        fork
                    </a>
                    <div className='w-full'>
                        <CustomVideo path='/surflow-webapp-demo.mp4' />
                    </div>

                    <p>descricao projeto... principais challenges faced were schemas. fairly complex schemas

                    </p>
                    <p>2024 - 2025</p>\
                    <div>

                        <h2>Nuclio Digital School</h2>

                    </div>
                    <p>TOOLS</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Tailwind CSS</li>
                        <li>React Hook Form</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SurflowForms