'use client'

import { useForm } from '@/hooks/useForm'
import { Button } from '../button'
import { Input } from '../input'
import styles from './styles.module.scss'
import { IRegistrationData } from '@/types/RegistrationType'
import { useEventContext } from '@/context/EventContext'
import animation from '@/assets/animation.json'
import { useState } from 'react'
import { Modal } from '../modal'
import Lottie from 'lottie-react'
import Link from 'next/link'

const INITIAL_STATE = {
  name: '',
  email: '',
  affiliation: '',
}

export function RegistrationForm() {
  const { addRegistration } = useEventContext()
  const { formData, handleChange, handleSubmit, errors, setFormData } =
    useForm<IRegistrationData>(INITIAL_STATE)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleRegistration = (value: IRegistrationData) => {
    addRegistration(value)
    setFormData(INITIAL_STATE)
    setOpenModal(true)
  }

  return (
    <form onSubmit={handleSubmit(handleRegistration)} className={styles.form}>
      <Input
        label="Nome"
        type="text"
        placeholder="Informe seu nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        errorMessage={errors?.name}
      />
      <Input
        label="E-mail"
        type="email"
        placeholder="Informe seu email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        errorMessage={errors?.email}
      />
      <Input
        label="Filiação"
        type="text"
        placeholder="Informe sua filiação"
        name="affiliation"
        value={formData.affiliation}
        onChange={handleChange}
        errorMessage={errors?.affiliation}
      />

      <Modal open={openModal} setOpen={setOpenModal}>
        <div className={styles.confirmContainer}>
          <h1>Inscrição confirmada!</h1>
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

      <Button type="submit">Realizar inscrição</Button>
    </form>
  )
}
