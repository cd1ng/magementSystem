import { useRef, useEffect } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  progress: number;
}

const type = {
  "finish": ['#bae7ff', '#40a9ff'],
  "fast": ['#fcffe6', '#bae637'],
  "normal": ['#fff7e6', '#ffd591'],
  "danger": ['#fff1f0', '#ff7875'],
  "default": ['#efdbff', '#9254de']
}

const DoughnutChart: React.FunctionComponent<CanvasProps> = ({ width, height, progress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvasDoughnut = canvasRef.current
    let ctx = canvasDoughnut?.getContext('2d')
    let color: string[] = []
    if (ctx) {
      if (progress < 50) {
        color = type.danger
      } else if (progress >= 50 && progress < 80) {
        color = type.normal
      } else if (progress >= 80 && progress < 100) {
        color = type.fast
      } else if (progress === 100) {
        color = type.finish
      } else {
        color = type.default
      }
      const number = progress / 100 * 2 * Math.PI
      ctx.font = "bold 18px arial"
      ctx.textAlign = "center"
      ctx.textBaseline = 'middle'
      ctx.strokeStyle = color[0]
      ctx.lineWidth = 10
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, Math.min(width / 2 * 0.8, height / 2 * 0.8), number, 2 * Math.PI, false)
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = color[1]
      ctx.arc(width / 2, height / 2, Math.min(width / 2 * 0.8, height / 2 * 0.8), 0, number, false)
      ctx.lineCap = "round"
      ctx.stroke()
      ctx.closePath()
      ctx.fillText(`${progress}%`, width / 2, height / 2)
    }
  }, [canvasRef, width, height, progress]);
  return <canvas ref={canvasRef} height={height} width={width} />
}

DoughnutChart.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  progress: 0,
};

export default DoughnutChart;