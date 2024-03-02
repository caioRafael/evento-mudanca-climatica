'use client'

import { useForm } from '@/hooks/useForm'
import { Button } from '../button'
import { Input } from '../input'
import styles from './styles.module.scss'

interface IRegistrationData {
  name: string
  email: string
  affiliation: string
}

export function RegistrationForm() {
  const { formData, handleChange, handleSubmit, errors } =
    useForm<IRegistrationData>({
      name: '',
      email: '',
      affiliation: '',
    })

  const handleRegistration = () => {
    console.log(formData)
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

      <Button type="submit">Realizar inscrição</Button>
    </form>
  )
}
