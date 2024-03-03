'use client'

import { useEventContext } from '@/context/EventContext'
import { File } from 'lucide-react'
import Image from 'next/image'
import EmptyStateImage from '@/assets/empty-state.svg'
import styles from './styles.module.scss'
import { useCallback, useState } from 'react'
import { Modal } from '../modal'
import { Button } from '../button'

export function FileList() {
  const { submissions } = useEventContext()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedSubmission, setSelectedSubmission] = useState<number>(0)

  const fileUrl = useCallback(
    (file: File | undefined) => {
      if (file) {
        const url = URL.createObjectURL(file)
        window.open(url, '_blankk')
      }
    },
    [selectedSubmission],
  )
  return (
    <section className={styles.listContainer}>
      <h2>Lista de submissões</h2>
      {submissions.map((submission, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => {
            setSelectedSubmission(index)
            setOpenModal(true)
          }}
        >
          <File size={40} />
          <div>
            <b>{submission.title}</b>
            <p>{submission.description}</p>
          </div>
        </div>
      ))}
      {submissions.length === 0 && (
        <div className={styles.emptyState}>
          <Image
            alt={'empty state image'}
            src={EmptyStateImage}
            width={600}
            height={1200}
          />
          <h1>Nenhum trabalho foi submetido</h1>
        </div>
      )}

      <Modal setOpen={setOpenModal} open={openModal}>
        <div className={styles.detailsContainer}>
          <h3>Detalhar trabalho</h3>

          <div>
            <b>Título</b>
            <p>{submissions[selectedSubmission].title}</p>
          </div>

          <div>
            <b>Descrição</b>
            <p>{submissions[selectedSubmission].description}</p>
          </div>

          {submissions[selectedSubmission].file && (
            <Button
              onClick={() =>
                fileUrl(submissions[selectedSubmission].file as File)
              }
            >
              Abir arquivo
            </Button>
          )}
        </div>
      </Modal>
    </section>
  )
}
