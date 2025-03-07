import React from 'react';

function ProjectPresentation({ projName, projDescription, projDate, tools, context, problemSolving, feats, challenges }) {
    return (
        <div className="flex-col">
            <h1>{projName}</h1>
            <p>{projDescription}</p>
            <p>{projDate}</p>
            <div className='flex-row'>
                <div className='flex-col gap-3 max-w-[30%]'>
                    <h2>Why?</h2>
                    <p>{problemSolving}</p>
                </div>

                <div className='flex-col gap-3 max-w-[30%]'>
                    <h2>Built with</h2>
                    <ul>
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>


            <h2>Context</h2>
            <p>{context}</p>


            <h2>Features</h2>
            <ul>
                {feats.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h2>Main Challenges Faced</h2>
            <p>{challenges}</p>

            {/* Add icons where needed */}
            <div className="project-icons">
                {/* <img src="icon.png" alt="icon" /> */}
            </div>
        </div>
    );
}

export default ProjectPresentation;
