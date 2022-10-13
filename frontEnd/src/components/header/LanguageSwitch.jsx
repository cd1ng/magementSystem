import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import i18n from "i18next"
import { Dropdown, Button, Menu } from "antd"
export const LanguageSwitch = memo(() => {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state) => state.LanguageReducer.language)

  const languageClick = ({ key }) => {
    dispatch({
      type: "change_language",
      payload: key,
    })
    i18n.changeLanguage(key)
  }
  const menuLanguage = (
    <Menu
      onClick={languageClick}
      items={[
        {
          label: "zh",
          key: "zh",
        },
        {
          label: "en",
          key: "en",
        },
      ]}
    />
  )
  return (
    <Dropdown overlay={menuLanguage} placement="bottomRight">
      <div
        style={{
          float: "right",
          width: "60px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <Button type="primary">{currentLanguage}</Button>
      </div>
    </Dropdown>
  )
})
