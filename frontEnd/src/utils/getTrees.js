export function getTrees(arr,changeStyle){
  let newArr = []
  arr.forEach(element => {
    if(element.grade===1){
      newArr.push(changeStyle(element))
    }else{
      newArr.filter(item=>item.id === element.parentId)
      .map(obj=>{
        if(!obj.hasOwnProperty('children')){  
          obj.children = [changeStyle(element)]
        }else{
          obj.children.push(changeStyle(element))
        }
      })
    }
  })
  return newArr
}
