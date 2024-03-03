import styles from './page.module.scss'
import { SubmissionForm } from '@/components/submissionForm'

export default function SubmissionPage() {
  return (
    <div className={styles.submissionContainer}>
      <h1>Página de submissão</h1>
      <SubmissionForm />
    </div>
  )
}
