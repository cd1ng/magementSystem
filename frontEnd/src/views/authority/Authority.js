import React,{useState,useEffect} from 'react';
import { Table,Divider, Switch,Row,Col} from 'antd';
import { getTrees } from '../../utils/getTrees';

const Authority = () => {
  const [authority,setAuthority] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8000/router/findRoutes")
    .then(res=>res.json())
    .then(res=>setAuthority(getTrees(res.result,changeStyle)))
  },[])

  const onChange = (e) => {
    let newAuthority = [...authority]
    let temp = []
    newAuthority.forEach(item=>{
      if(item.id === e.id){
        item.pagePermission = 1-item.pagePermission
        console.log(item)
        temp.push({id:item.id,pagePermission:item.pagePermission})
        if(item.hasOwnProperty("children")){
          item.children.forEach(innerItem=>{
            innerItem.pagePermission = 1 - innerItem.pagePermission
            temp.push({id:innerItem.id,pagePermission:innerItem.pagePermission})
          })
        }
      }else{
        if(item.hasOwnProperty("children")&&item.pagePermission===1){
          item.children.forEach(innerItem=>{
            if(innerItem.id===e.id){
              innerItem.pagePermission = 1 - innerItem.pagePermission
              temp.push({id:innerItem.id,pagePermission:innerItem.pagePermission})
            }
          })
        }
      }
    })

    fetch("http://localhost:8000/router/changeRoutes",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(temp)
    })
    .then(res=>res.json())
    .then(res=>setAuthority(getTrees(res.result,changeStyle)))
    
    setAuthority(newAuthority)

    setTimeout(()=>{
      window.location.reload()
    },500)
  }

  function changeStyle(obj){
    return{
      "id":obj.id,
      "key":obj.key,
      "jobType":obj.routerTitle,
      "pagePermission":obj.pagePermission
    }
  }

  const columns = [
  {
    title: '权限',
    dataIndex: 'jobType',
    key: 'jobType',
  },
  {
    title: '权限修改',
    key: 'action',
    render: (item) => {
      return(
      <>
        <Switch checked={item.pagePermission} onChange={()=>onChange(item)}/>
      </>
    )},
  },
];
  return(
    <Row style={{marginTop:"40px",overflow:"auto",height:"550px"}}>
      <Col span={22} offset={1} style={{backgroundColor:"#fff",padding:"20px 40px"}}>
        <Divider orientation="left">权限设置</Divider>
        <Table columns={columns} dataSource={authority} pagination={false}/>
      </Col>
    </Row>

  )
}
export default Authority;