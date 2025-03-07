import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Projects() {
    return (
        <div className='flex-col'>
            <nav>
                <ul>
                    <li>
                        <Link to='surflow-forms'>
                            surflow forms app
                        </Link>
                    </li>
                    <li>
                        <Link to='workout-tracker'>
                            workout tracker
                        </Link>
                    </li>
                    <li>
                        <Link to='revit-addins'>
                            revit modelling automations
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div >
    )
}

export default Projects