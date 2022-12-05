import React, { memo, useRef, useEffect, useState } from 'react'
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { Row, Col, Card } from 'antd'
type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>

const switchData = [
  [['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], [120, 200, 150, 80, 70, 110, 130]],
  [['1号', '2号', '3号', '4号', '5号', '6号', '7号'], [420, 400, 650, 580, 700, 210, 330]],
  [['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], [220, 220, 150, 180, 170, 250, 430, 220, 220, 150, 180, 170]],
]

const DataChart = memo(() => {
  echarts.use([GridComponent, BarChart, CanvasRenderer]);
  const chartDom = useRef(null)
  const [number, setNumber] = useState(0)
  const handleChoose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setNumber(Number(e.currentTarget.getAttribute('value')))
  }
  useEffect(() => {
    const myChart = echarts.init(chartDom.current!);
    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: switchData[number][0]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: switchData[number][1],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [number])
  return (
    <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Col span={22} offset={1}>
        <Card title="生产情况" bordered={false}>
          <div style={{ height: "400px", width: "900px", backgroundColor: "white" }}>
            <div>
              <button value={2} onClick={handleChoose}>年</button>
              <button value={1} onClick={handleChoose}>月</button>
              <button value={0} onClick={handleChoose}>日</button>
            </div>
            <div ref={chartDom} style={{ height: "300px", width: "500px" }} ></div>
          </div >        </Card>
      </Col>
    </Row>

  )
})

export default DataChart