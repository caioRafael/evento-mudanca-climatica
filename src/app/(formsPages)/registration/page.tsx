import styles from './page.module.scss'
import { RegistrationForm } from '@/components/registrationForm'

export default function Registration() {
  return (
    <div className={styles.registrationContainer}>
      <h1>Realize sua inscrição!</h1>
      <RegistrationForm />
    </div>
  )
}
