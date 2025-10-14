"use client"

import type React from "react"

import { UnstyledButton, Text } from "@mantine/core"
import styles from "./Button.module.css"

interface CustomButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const ButtonOutline = ({ children, onClick }: CustomButtonProps) => {
  return (
    <UnstyledButton className={styles.customButton} onClick={onClick}>
      <Text className={styles.buttonText}>{children}</Text>
    </UnstyledButton>
  )
}
