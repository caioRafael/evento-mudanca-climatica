import { TextareaHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  errorMessage?: string
}

export function TextArea(props: TextAreaProps) {
  const { label, errorMessage } = props
  return (
    <div className={styles.textAreaContainer}>
      <label>{label}</label>
      <textarea {...props} data-error={errorMessage ? 'true' : 'false'} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}
