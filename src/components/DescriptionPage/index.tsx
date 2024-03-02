'use client'

import { descriptionPage } from '@/utils/descriptionPages'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

interface IDescriptionPage {
  title: string
  description: string
}

export default function DescriptionPage() {
  const pathname = usePathname()
  const [page, setPage] = useState<IDescriptionPage>({
    description: '',
    title: '',
  })

  useEffect(() => {
    const currentPage = pathname.split('/')[1]

    if (currentPage === 'registration') {
      setPage(descriptionPage.registration)
    } else if (currentPage === 'submission') {
      setPage(descriptionPage.submission)
    }
  }, [pathname])
  return (
    <div className={styles.descriptionContainer}>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  )
}
