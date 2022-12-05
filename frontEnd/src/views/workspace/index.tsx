import React, { useEffect } from "react"
import axios from "axios"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import InfoList from "./home-cild/InfoList.jsx"
import ProjectChart from "./home-cild/ProjectChart.jsx"
import PersonChart from "./home-cild/PersonChart.jsx"
import DataChart from './home-cild/DataChart';

function WorkSpace() {
  useEffect(() => {
    axios.get('/ad/index/gray')
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, [])
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

export default WorkSpace