import { ChangeEvent, FormEvent, useState } from 'react'

type FormErrors<T> = Partial<Record<keyof T, string>>

interface FormReturn<S> {
  formData: S
  setFormData: (value: S) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (
    callback: (values: S) => void,
  ) => (e: FormEvent<HTMLFormElement>) => void
  errors: FormErrors<S>
}

// eslint-disable-next-line
export function useForm<T extends {}>(initialValue: T): FormReturn<T> {
  const [formData, setFormData] = useState<T>(initialValue)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit =
    (callback: (values: T) => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const newErrors: FormErrors<T> = {}
      Object.keys(formData).forEach((key) => {
        if (!formData[key as keyof T]) {
          newErrors[key as keyof T] = 'Campo obrigatório'
        }
      })

      setErrors(newErrors)

      if (Object.keys(newErrors).length === 0) {
        callback(formData)
      }
    }

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    errors,
  }
}
