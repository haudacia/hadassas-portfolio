import React from 'react'
import CustomVideo from '../components/CustomVideo'

function RevitAddins() {
    return (
        <div className='flex flex-col h-screen w-screen overflow-auto justify-center'>
            <h1>Revit Addins</h1>
            <p>addins for Revit automations using the Revit API and Python scripts</p>
            <ul>
                <li>
                    <a href='https://github.com/haudacia/pyrevit-addins' target='_blank'>
                        repository
                    </a>
                    <div className='w-full'>
                        <CustomVideo path='/revit-API-automations-demo.mp4' />
                    </div>

                    <p>
                        The context for this project was the transition from CAD to BIM—a shift from traditional 2D drafting to intelligent, data-driven 3D modeling. For those in tech, this means moving from static file-based workflows to a dynamic, interconnected system where data consistency and automation are crucial.
                    </p>
                    <p>2024 - 2025</p>
                    <div>
                        <h2>Universidade Federal de Pernambuco</h2>
                        <p>Building Inventory Department</p>
                    </div>
                </li>
            </ul>
                <p>TOOLS</p>
                    <ul>
                        <li>Python</li>
                        <li>Revit Application Programming Interface (v.2023)</li>
                        <li>pyRevit</li>
                        <li>IronPython</li>
                        <li>pyRevit Stubs</li>
                    </ul>
        </div>

    )
}

export default RevitAddins