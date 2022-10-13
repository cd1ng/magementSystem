import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import BaseInformation from "./Information-child/BaseInformation"
import ProjectPersons from "./Information-child/ProjectPersons"
import ProjectProcess from "./Information-child/ProjectProcess"
import ProjectFile from "./Information-child/ProjectFile"

function ProjectInformation(props) {
  return (
    <div
      className="scrollable-container"
      style={{ height: "100%", overflowY: "auto" }}
    >
      <BaseInformation />
      <ProjectPersons />
      <ProjectProcess />
      <ProjectFile />
    </div>
  )
}
export default withRouter(ProjectInformation)
