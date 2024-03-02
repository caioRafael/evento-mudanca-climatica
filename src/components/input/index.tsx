import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

export function Input(props: InputProps) {
  const { label, errorMessage } = props
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input {...props} data-error={errorMessage ? 'true' : 'false'} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
