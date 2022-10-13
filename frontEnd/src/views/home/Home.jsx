import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { withTranslation } from "react-i18next"
import InfoList from "./home-cild/InfoList.jsx"
import ProjectChart from "./home-cild/ProjectChart.jsx"
import PersonChart from "./home-cild/PersonChart.jsx"
class Home extends React.Component {
  render() {
    const { t } = this.props
    return (
      <>
        <DndProvider backend={HTML5Backend}>
          <InfoList t={t} />
        </DndProvider>
        <ProjectChart />
        <PersonChart />
      </>
    )
  }
}

export default withTranslation()(Home)
