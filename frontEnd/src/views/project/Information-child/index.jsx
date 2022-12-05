import React, { memo } from 'react';
import ProjectFile from './ProjectFile';
import ProjectPersons from './ProjectPersons';
import ProjectProcess from './ProjectProcess';
const ProjectInfo = memo(() => {
  return (
    <div>
      <ProjectFile />
      <ProjectPersons />
      <ProjectProcess />
    </div>
  );
});

export default ProjectInfo;
