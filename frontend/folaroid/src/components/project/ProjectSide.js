import React from 'react';
import ProjectSideItem from './ProjectSideItem';

const ProjectSide = ({ projects, onDeleteProject }) => {
    return (
        <div>
            {projects &&
                projects.map((project) => (
                    <ProjectSideItem
                        key={project.pjtNo}
                        project={project}
                        onDeleteProject={onDeleteProject}
                    />
                ))}
        </div>
    );
};

export default ProjectSide;
