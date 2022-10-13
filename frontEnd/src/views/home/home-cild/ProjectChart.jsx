import React, { memo, useRef, useEffect } from "react"
import * as echarts from "echarts"
import { Row, Col, Card } from "antd"

const ProjectChart = memo(() => {
  const chartRef = useRef(null)
  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current)
    const option = {
      legend: {},
      tooltip: {},
      // 声明一个 X 轴
      xAxis: { data: ["Xx事业部", "Yxas事业部", "xasA事业部", "ASz事业部"] },
      // 声明一个 Y 轴，数值轴。
      yAxis: {
        type: "value",
        name: "项目数",
        position: "left",
        axisLabel: { formatter: "{value}" },
      },
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [
        {
          data: [10, 32, 41, 61],
          type: "bar",
          name: "2019",
          stack: "a",
        },
        {
          data: [32, 21, 56, 72],
          type: "bar",
          name: "2020",
          stack: "b",
        },
        {
          data: [50, 36, 74, 63],
          type: "bar",
          name: "2021",
          stack: "c",
        },
        {
          data: [30, 40, 40, 30],
          type: "bar",
          name: "计划",
          stack: "a",
        },
        {
          data: [25, 20, 30, 15],
          type: "bar",
          name: "计划",
          stack: "b",
        },
        {
          data: [40, 30, 20, 40],
          type: "bar",
          name: "计划",
          stack: "c",
        },
      ],
    }
    chartInstance.setOption(option)
  }, [])
  return (
    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Col span={22} offset={1}>
        <Card title="年度项目情况" bordered={false}>
          <div ref={chartRef} style={{ height: "400px", width: "900px" }}></div>
        </Card>
      </Col>
    </Row>
  )
})

export default ProjectChart
