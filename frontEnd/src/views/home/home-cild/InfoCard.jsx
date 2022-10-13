import React,{memo} from 'react';
import { Card } from 'antd'
import { useDrop, useDrag } from 'react-dnd';

const InfoCard = memo(({ index, id, title, handleDrag, state,img })=>{
  const ref = React.useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ handlerId }, drop] = useDrop(
    () => ({
      accept: 'card',
      collect: (monitor) => ({
        handlerId: monitor.getHandlerId(),
      }),
      hover: (item, monitor) => {
        if (!ref.current) return;
        const dragIndex = item.index;
        const hoverIndex = index;
        // Do nothing if target and source are same
        if (dragIndex === hoverIndex) return;

        const hoverRect = ref.current.getBoundingClientRect();
        // Get vertical middle
        console.log(hoverRect)
        const hoverMiddleX = (hoverRect.right - hoverRect.left) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientX = clientOffset.x - hoverRect.left;

        // Only move when the mouse has crossed half of the items height
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
          return;
        }

        handleDrag(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }),
    [state]
  );

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref))
  return (
    <Card title={title} bordered={false} ref={ref} style={{ opacity }} data-handler-id={handlerId} hoverable={true }>
      <img src={img} style={{width:"40px",height:"40px"}} />
    </Card>
  );
})

export default InfoCard;