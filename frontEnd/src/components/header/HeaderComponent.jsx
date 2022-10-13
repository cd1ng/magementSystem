import React from "react"
import { Layout } from "antd"
import { useTranslation } from "react-i18next"
import {
  Feedback,
  LanguageSwitch,
  PersonDropdown,
  MessageCenter,
  ColorChoose,
} from "components"
import styles from "./Header.module.css"
const { Header } = Layout

export const HeaderComponent = () => {
  const { t } = useTranslation()
  return (
    <Header className={styles["header"]}>
      <div className={styles["logo"]}>
        <span>{t("title")}</span>
      </div>
      <div className="tool">
        <Feedback />
        <PersonDropdown />
        <MessageCenter />
        <LanguageSwitch />
        <ColorChoose />
      </div>
    </Header>
  )
}
