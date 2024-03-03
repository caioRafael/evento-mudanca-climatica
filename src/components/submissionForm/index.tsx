'use client'

import { useForm } from '@/hooks/useForm'
import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../textArea'
import { Uploader } from '../uploader'
import styles from './styles.module.scss'

interface ISubmissionForm {
  title: string
  description: string
  file: File | null
}

export function SubmissionForm() {
  const { formData, handleChange, errors, handleSubmit, setFormData } =
    useForm<ISubmissionForm>({
      title: '',
      description: '',
      file: null,
    })

  const handleFile = (file: File | null) => {
    setFormData({ ...formData, file })
  }

  const handleSubmission = () => {
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit(handleSubmission)} className={styles.form}>
      <Input
        label="Título"
        placeholder="Informe o título do seu trabalho"
        name="title"
        value={formData.title}
        onChange={handleChange}
        errorMessage={errors?.title}
      />
      <TextArea
        label="Descrição"
        placeholder="Informe a descrição do seu trabalho"
        name="description"
        value={formData.description}
        onChange={handleChange}
        errorMessage={errors?.description}
      />
      <Uploader
        file={formData.file}
        setFile={handleFile}
        errorMessage={errors?.file}
      />
      <Button type="submit">Submeter</Button>
    </form>
  )
}
