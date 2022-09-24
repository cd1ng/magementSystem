import { useEffect, useRef } from "react";
import * as echarts from "echarts";
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
          top: '5%',
          left: '10%',
          bottom: '5%',
          right: '30%',
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
          // emphasis: {
          //   focus: 'descendant'
          // },
          expandAndCollapse: true, // 子树折叠
          initialTreeDepth: 3
          // animationDuration: 550,
          // animationDurationUpdate: 750
        }
      ]
    }
    treeInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div ref={treeRef} style={{ height: "600px",width:"1200px"}}></div>
    </div>
  );
}

export default Authority