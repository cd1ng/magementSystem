import React, { memo, useRef, useEffect } from 'react'

interface waterImgProps {
  src: string;
  text: string;
  color?: string;
  fontSize?: number;
  width?: number;
  height?: number;
}

const WaterImg: React.FC<waterImgProps> = memo(({ src, text, color = '#eee', fontSize = 14, width, height }) => {
  const WaterMarkRef = useRef<HTMLDivElement>(null)
  const img = new Image();
  const imageLoad = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = width || img.width;
      canvas.height = height || img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // 图片过小不进行水印操作
      if (canvas.width >= 300 && canvas.height >= 300) {
        ctx.font = `bold ${fontSize}px arial`;
        ctx.fillStyle = color;
        ctx.textBaseline = 'bottom';
        ctx.transform(1, 0.5, -0.5, 1, 0, -canvas.height / 2);
        for (let i = 1; i <= 3; i++) {
          for (let j = 1; j <= 4; j++) {
            ctx.fillText(text, i * canvas.width / 3, j * canvas.height / 4);
          }
        }
      }
      WaterMarkRef.current?.appendChild(canvas)
    }
    return () => {
      img.removeEventListener('load', imageLoad)
    }
  }

  useEffect(() => {
    img.src = src
    img.addEventListener('load', imageLoad)
  }, [])

  return (
    <div ref={WaterMarkRef}></div>
  )
})

export default WaterImg