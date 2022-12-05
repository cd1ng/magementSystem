import React, { memo } from "react"
import { Col, Row } from "antd"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import InfoCard from "./InfoCard"
import person from "../../../static/img/person.png"
import progress from "../../../static/img/progress.png"
import project from "../../../static/img/project.png"
import todo from "../../../static/img/todo.png"

const InfoList = memo(() => {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      title: "人员安排",
      img: person,
      progressNumber: 40,
    },
    {
      id: 2,
      title: "项目进度",
      img: progress,
      progressNumber: 60,
    },
    {
      id: 3,
      title: "项目管理",
      img: project,
      progressNumber: 88,
    },
    {
      id: 4,
      title: "代办事项",
      img: todo,
      progressNumber: 100,
    },
  ])

  const handleDrag = (dragIndex, hoverIndex) => {
    setCards((prev) => {
      const copy = [...prev]
      const card = copy[dragIndex]
      // remove origin
      copy.splice(dragIndex, 1)
      // add to target
      copy.splice(hoverIndex, 0, card)
      return copy
    })
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Row
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {cards.map((item, index) => (
          <Col span={5} key={index}>
            <InfoCard
              key={item.id}
              index={index}
              title={item.title}
              handleDrag={handleDrag}
              state={cards}
              img={item.img}
              progressNumber={item.progressNumber}
            />
          </Col>
        ))}
      </Row>
    </DndProvider>
  )
})

export default InfoList
