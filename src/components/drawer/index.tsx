'use client'

import { Menu } from 'lucide-react'
import { ReactNode, useState } from 'react'
import styles from './styles.module.scss'
import { Button } from '../button'

interface DrawerProps {
  children: ReactNode
}

export function Drawer(props: DrawerProps) {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button onClick={toggleDrawer} className={styles.toggleButton}>
        <Menu />
      </Button>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <Button onClick={toggleDrawer} className={styles.toggleButton}>
          <Menu />
        </Button>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
