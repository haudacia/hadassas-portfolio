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

                    <p>descricao projeto... principais challenges faced were schemas
                        context
                        AEC - industria da cosntrucao
                        contexto de migracao cad-bim (explica breve p quem nao [e de construcao, e sim de tech.])

                    </p>
                    <p>2024 - 2025</p>\
                    <div>
                        <h2>Universidade Federal de Pernambuco</h2>
                        <h3>Building Inventory Department</h3>
                    </div>
                    <p>TOOLS</p>
                    <ul>
                        <li>Python</li>
                        <li>Revit Application Programming Interface (v.2023)</li>
                        <li>pyRevit</li>
                        <li>IronPython</li>
                        <li>pyRevit Stubs</li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default RevitAddins