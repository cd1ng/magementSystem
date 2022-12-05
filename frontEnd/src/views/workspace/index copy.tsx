import React, { useEffect } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import InfoList from "./home-cild/InfoList.jsx"
import ProjectChart from "./home-cild/ProjectChart.jsx"
import PersonChart from "./home-cild/PersonChart.jsx"
import DataChart from './home-cild/DataChart';

class WorkSpace extends React.Component {
  render() {
    return (
      <>
        <DndProvider backend={HTML5Backend}>
          <InfoList />
        </DndProvider>
        <DataChart />
        <ProjectChart />
        <PersonChart />
      </>
    )
  }
}

export default WorkSpace