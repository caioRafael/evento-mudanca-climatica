'use client'

import { File, FileUp, Trash } from 'lucide-react'
import styles from './styles.module.scss'
import { Button } from '../button'

interface UplaodProps {
  file: File | null
  setFile: (file: File | null) => void
  errorMessage?: string
}

export function Uploader(props: UplaodProps) {
  const { file, setFile, errorMessage } = props

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0]
    if (
      selectedFile &&
      (selectedFile.type === 'application/pdf' ||
        selectedFile.type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    ) {
      setFile(selectedFile)
    } else {
      setFile(null)
      alert('Por favor, selecione um arquivo PDF ou DOCX válido.')
    }
  }
  return (
    <div className={styles.uploadContainer}>
      {!file && (
        <>
          <label htmlFor="upload" data-error={errorMessage ? 'true' : 'false'}>
            <FileUp /> Submeta seu projeto
          </label>
          <input
            id="upload"
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </>
      )}
      {file && (
        <div className={styles.fileView}>
          <>
            <File size={40} />
            <p>{file.name}</p>
          </>
          <Button onClick={() => setFile(null)}>
            <Trash />
          </Button>
        </div>
      )}
    </div>
  )
}
