import React, { memo, useState } from "react"
import { Row, Col, Upload, Button, message } from "antd"
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons"
import dayjs from "dayjs"
const utc = require("dayjs/plugin/utc")

const ProjectFile = memo(() => {
  dayjs.extend(utc)
  const [list, setList] = useState([])
  function changeItem(obj) {
    return {
      uid: obj.uid,
      name: obj.name,
      lastDate: dayjs.utc(obj.lastModifiedDate).format("YYYY-MM-DD HH:mm:ss"),
      url: obj.response.url,
    }
  }
  function handleDelete(item) {
    let newList = [...list]
    const deleteName = item.name
    setList(newList.filter((element) => item.uid !== element.uid))
    message.info(`${deleteName}删除成功`)
  }
  const props = {
    name: "file",
    // 上传的地址
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    // 设置上传的请求头部
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload(file) {
      let fileArray = list.filter((item) => item.name === file.name)
      if (fileArray.length > 0) {
        message.error(`上传重复文件${file.name}`)
        return false
      }
    },
    // fileList: list,
    // beforeUpload(file) {
    //   const isPNG = file.type === "image/png"
    //   if (!isPNG) {
    //     message.error(`${file.name} 上传文件不是图片类型`)
    //   }
    //   return isPNG || Upload.LIST_IGNORE
    // },
    // showUploadList: {
    //   showDownloadIcon: true,
    //   downloadIcon: "Download",
    //   showRemoveIcon: true,
    //   removeIcon: (
    //     <StarOutlined
    //       onClick={(e) => console.log(e, "custom removeIcon event")}
    //     />
    //   ),
    // },
    showUploadList: false,
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`)

        setList([...list, changeItem(info.file)])
        console.log(list)
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    // 文件上传后后台返回文件地址，通过window.open()打开文件
    onDownload(file) {
      window.open(file.response.url)
    },
  }
  return (
    <>
      <p
        id="fileUpload"
        style={{
          marginLeft: "45px",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        文件上传
      </p>
      <Row style={{ marginBottom: "40px" }}>
        <Col
          span={20}
          offset={1}
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            // display: "flex",
            // justifyContent: "space-between",
          }}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ width: "300px" }}>项目文件 </p>
              <p style={{ width: "300px" }}>更新时间</p>
              <p style={{ width: "200px" }}>上传人员</p>
              <p style={{ width: "200px" }}>操作</p>
            </div>
            {list &&
              list.map((item) => {
                return (
                  <div
                    key={item.uid}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a
                      href={item.url}
                      style={{ display: "block", width: "300px" }}
                    >
                      {item.name}
                    </a>
                    <p style={{ width: "300px" }}>
                      {item.lastDate}
                      {/* {dayjs.utc().format("YYYY-MM-DD HH:mm:ss")} */}
                    </p>
                    <p style={{ width: "200px" }}>xxx</p>
                    <p style={{ width: "200px" }}>
                      <DeleteOutlined
                        style={{ color: "red" }}
                        onClick={() => handleDelete(item)}
                      />
                    </p>
                  </div>
                )
              })}
          </div>
          {/* <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline> */}
        </Col>
      </Row>
    </>
  )
})

export default ProjectFile
