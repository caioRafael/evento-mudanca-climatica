'use client'

import { ReactNode } from 'react'
import { Button } from '../button'
import styles from './styles.module.scss'

interface ModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  children: ReactNode
}

export function Modal(props: ModalProps) {
  const { open, setOpen, children } = props

  const close = () => setOpen(false)

  if (!open) return null
  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <Button className={styles.closeButton} onClick={close}>
          X
        </Button>
      </div>
    </div>
  )
}
