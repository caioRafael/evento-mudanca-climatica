'use client'

import { useForm } from '@/hooks/useForm'
import { Button } from '../button'
import { Input } from '../input'
import { TextArea } from '../textArea'
import { Uploader } from '../uploader'
import styles from './styles.module.scss'
import { ISubmissionForm } from '@/types/SubmissionType'
import { useEventContext } from '@/context/EventContext'
import Link from 'next/link'
import { useState } from 'react'
import { Modal } from '../modal'
import animation from '@/assets/animation.json'
import Lottie from 'lottie-react'

const INITIAL_STATE = {
  title: '',
  description: '',
  file: null,
}

export function SubmissionForm() {
  const { addSubmission } = useEventContext()
  const { formData, handleChange, errors, handleSubmit, setFormData } =
    useForm<ISubmissionForm>(INITIAL_STATE)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleFile = (file: File | null) => {
    setFormData({ ...formData, file })
  }

  const handleSubmission = (value: ISubmissionForm) => {
    addSubmission(value)
    setFormData(INITIAL_STATE)
    setOpenModal(true)
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

      <Modal open={openModal} setOpen={setOpenModal}>
        <div className={styles.confirmContainer}>
          <h1>Submissão confirmada!</h1>
          <Lottie
            animationData={animation}
            loop={false}
            className={styles.animation}
          />
          <footer>
            <button
              className={styles.backButton}
              onClick={() => setOpenModal(false)}
            >
              Fechar
            </button>
            <Link className={styles.redirectButton} href={'/'}>
              Voltar ao início
            </Link>
          </footer>
        </div>
      </Modal>

      <Button type="submit">Submeter</Button>
    </form>
  )
}
