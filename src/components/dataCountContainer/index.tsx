'use client'

import { useEventContext } from '@/context/EventContext'
import styles from './styles.module.scss'

export function DataCountContainer() {
  const { registrations, submissions } = useEventContext()
  return (
    <section className={styles.container}>
      <h2>Submissões e inscrições</h2>
      <div>
        <h3>Quantidade de inscritos:</h3>

        <h1>{registrations.length}</h1>
      </div>
      <div>
        <h3>Quantidade de inscritos:</h3>

        <h1>{submissions.length}</h1>
      </div>
    </section>
  )
}
