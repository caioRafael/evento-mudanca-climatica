import styles from './page.module.scss'
import { DataCountContainer } from '@/components/dataCountContainer'
import { FileList } from '@/components/fileList'

export default function AdminPanel() {
  return (
    <div className={styles.adminContainer}>
      <h1>Painel administrativo</h1>

      <div className={styles.adminContent}>
        <DataCountContainer />
        <FileList />
      </div>
    </div>
  )
}
