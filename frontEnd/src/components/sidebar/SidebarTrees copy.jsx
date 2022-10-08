import React, { memo ,useState} from 'react'
import {Drawer,Tree} from 'antd'

const tree = {
  1:"工作台",
  2:"项目",
  3:"新建项目",
  4:"项目列表",
  5:"权限管理",
  6:"消息中心",
  7:"消息设置",
  8:"消息列表",
  9:"权限列表",
  10:"用户列表"
}

const treeDataAll = [
  {
    title: '工作台',
    key: 1,
  },
  {
    title: '项目',
    key: 2,
    children: [
      {
        title: '新建项目',
        key: 3,
      },
      {
        title: '项目列表',
        key: 4,
      }
    ],
  },
  {
    title: '权限管理',
    key: 5,
    children: [
      {
        title: '权限列表',
        key: 9,
      },
      {
        title: '用户列表',
        key: 10,
      }
    ],
  },
  {
    title: '消息中心',
    key: 6,
    children: [
      {
        title: '消息设置',
        key: 7,
      },
      {
        title: '消息列表',
        key: 8,
      }
    ],
  },
];

function changeToTree(arr){
  let newArr = []
  arr.forEach(element => {
    newArr.push({
      title:tree[element],
      key:Number(element)
    })
  });
  return newArr
}

const SidebarTrees = memo((props) => {
  const {authority, setAuthority, treeData} = props
  // console.log(treeData.map(Number))
  const [checkedKeys, setCheckedKeys] = useState([1])
  // setCheckedKeys(treeData.map(Number))
  const [selectedKeys, setSelectedKeys] = useState([])

  const closeAuthority = () => {
    setAuthority(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue)
    setCheckedKeys(checkedKeysValue)
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeysValue)
  };
  return (
  <Drawer title="权限配置" placement="right" onClose={closeAuthority} open={authority}>
    <Tree
      checkable
      // onExpand={onExpand}
      // expandedKeys={expandedKeys}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      // treeData={changeToTree(treeData)}
      treeData={treeDataAll}
      defaultExpandAll={true}
    />
  </Drawer>
  )
})

export default SidebarTrees