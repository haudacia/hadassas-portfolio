import React from 'react'
import Video from '../components/Video'
import revitAddinsDemo from '/media/revit-API-automations-demo.mp4'
import ProjectPresentation from '../components/ProjectPresentation'

function RevitAddins() {
    return (
        <div className='flex-col p-24 pt-16'>
            <Video src={revitAddinsDemo} />
            <a href='https://github.com/haudacia/pyrevit-addins' target='_blank'>
                repository
            </a>
            <ProjectPresentation
                projName='Revit Addins'
                projDescription='addins for Revit automations using the Revit API and Python scripts'
                projDate='2023 -'
                tools={['Python',
                    'IronPython',
                    'pyRevit',
                    'Revit Application Programming Interface (v.2023)'
                ]}
                where='Universidade Federal de Pernambuco - Infrastructure - Building Inventory Department'
                context='The transition from CAD to BIM — a shift from traditional 2D drafting to intelligent, data-driven 3D modeling. For those in tech, this means moving from static file-based workflows to a dynamic, interconnected system where data consistency and automation are crucial.
'
                problemSolving={'large amount of Revit models with high levels of detail, that need to be consistent and fit the evolving standards established by the team'}
                feats={['reliable model reviews, some including automatic fixes, allows user input']}
                challenges={'large amount of data to model and analyze'}
            />
        </div>

    )
}

export default RevitAddins