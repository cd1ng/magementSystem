import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import {Row,Col} from 'antd'
import data from '../../data/flare.json'

function Authority() {
  const treeRef = useRef(null)
  useEffect(() => {
    console.log(data)
    let treeInstance = echarts.init(treeRef.current);
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '0',
          left: '10%',
          bottom: '10%',
          right: '20%',
          symbolSize: 8,
          label: {
            position: 'center',
            verticalAlign: 'bottom',
            align: 'right',
            fontSize: 14
          },
          edgeShape: "polyline",
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          expandAndCollapse: true, // 子树折叠
          initialTreeDepth: 3,     // 展开层级
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    }
    treeInstance.setOption(option);
  }, []);

  return (
    <Row style={{marginTop:"40px"}} >
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px"}}>
        <div ref={treeRef} style={{ height: "520px",width:"1000px"}}></div>
      </Col>
    </Row>
  );
}

export default Authority