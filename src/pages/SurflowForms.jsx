import React from 'react'
import Video from "../components/Video";
import surflowDemo from '/media/surflow-webapp-demo.mp4'

function SurflowForms() {
    return (
        <div className='flex-col'>
            <Video src={surflowDemo} />
            <div className='flex-col p-24 pt-16 '>
                <h1>surflow</h1>
                <p>form creation and submission with user authentication</p>
                <a href='https://github.com/nds-fsd/typeform' target='_blank'>
                    original repository
                </a>
                <a
                    href='https://github.com/haudacia/surflow' target='_blank'>
                    fork
                </a>
                {/* 
                    <p>descricao projeto... principais challenges faced were schemas. fairly complex schemas
                    </p> */}
                <p>2024 - 2025</p>
                <div>
                    <p>Nuclio Digital School</p>
                </div>
                <h2>TOOLS</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Tailwind CSS</li>
                    <li>React Hook Form</li>
                </ul>
                <h2>
                    project description
                </h2>
            </div>
        </div>
    )
}

export default SurflowForms