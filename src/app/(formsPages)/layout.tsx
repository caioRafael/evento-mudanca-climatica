import DescriptionPage from '@/components/DescriptionPage'
import { ReactNode } from 'react'
import styles from './layout.module.scss'

interface FormsPagesLayoutProps {
  children: ReactNode
}
export default function FormsPagesLayout({ children }: FormsPagesLayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <DescriptionPage />
      {children}
    </div>
  )
}
