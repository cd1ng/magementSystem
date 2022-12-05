import React, { memo, useRef, useEffect } from "react"
import * as echarts from "echarts"
import { Row, Col, Card } from "antd"
const data = {
  name: "公司总经理",
  value: 1,
  children: [
    {
      name: "部门经理",
      value: 2,
      children: [
        {
          name: "业务主管",
          value: 3,
          children: [
            { name: "中级工程师", value: 6 },
            { name: "工程师", value: 7 },
            { name: "工程师", value: 7 },
            { name: "助理工程师", value: 8 },
            { name: "部门文员", value: 8 },
          ],
        },
        {
          name: "车间主管",
          value: 5,
          children: [
            { name: "生产工程师", value: 7 },
            { name: "改善工程师", value: 7 },
            {
              name: "拉长",
              value: 8,
              children: [
                { name: "普工", value: 9 },
                { name: "普工", value: 9 },
                { name: "普工", value: 9 },
                { name: "普工", value: 9 },
                { name: "普工", value: 9 },
                { name: "普工", value: 9 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "部门经理",
      value: 2,
      children: [
        {
          name: "业务主管",
          value: 3,
          children: [
            { name: "高级工程师", value: 5 },
            { name: "工程师", value: 7 },
            { name: "工程师", value: 7 },
            { name: "工程师", value: 7 },
            { name: "助理工程师", value: 8 },
            { name: "部门文员", value: 8 },
          ],
        },
        {
          name: "技术主管",
          value: 3,
          children: [
            { name: "资深工程师", value: 4 },
            { name: "工程师", value: 7 },
            { name: "工程师", value: 7 },
            { name: "工程师", value: 7 },
            { name: "助理工程师", value: 8 },
            { name: "部门文员", value: 8 },
          ],
        },
      ],
    },
  ],
}
const PersonChart = memo(() => {
  const chartRef = useRef(null)
  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          data: [data],
          top: "5%",
          left: "10%",
          bottom: "5%",
          right: "10%",
          symbolSize: 12,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 12,
          },
          edgeShape: "polyline",
          initialTreeDepth: 3,
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    }
    chartInstance.setOption(option)
  }, [])
  return (
    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Col span={22} offset={1}>
        <Card title="部门人员" bordered={false}>
          <div ref={chartRef} style={{ height: "400px", width: "900px" }}></div>
        </Card>
      </Col>
    </Row>
  )
})

export default PersonChart
