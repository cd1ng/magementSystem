import React, { useEffect, useRef } from 'react'
import {Layout,Table,Row,Col,Button,DatePicker,Select} from 'antd'
import './projectInfo.css'

const { RangePicker } = DatePicker;
const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function History() {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = ''
  }, [])
  const handleSearch = ()=>{
    console.log(inputRef.current.value)
  }
  return (
    <Layout>
      <Row span={24} style={{backgroundColor:"white"}}>
        <Col span={24} >
          <span>搜索条件</span>
          <input type="text" ref={inputRef} className="historyInput"/>
          <Button type="primary" onClick={()=>handleSearch()}>搜索</Button>
        </Col>
        <Col span={24}>
          <span>客户选择</span>
          <Select
            defaultValue="lucy"
            style={{width: 120,}}
            allowClear
          >
            <Option value="HW">Lucy</Option>
            <Option value="HJ">Jack</Option>
            <Option value="XX">Lucy</Option>
          </Select>
        </Col>
        <Col span={24}>
          <span>日期选择</span>
          <RangePicker />
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </Layout>
  )
}
