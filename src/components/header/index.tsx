import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>Início</Link>
      <Link href={'/registration'}>Inscrições</Link>
      <Link href={'/submission'}>Submissões de trabalhos</Link>
      <Link href={'/adminPanel'}>Painel administrativo</Link>
    </header>
  )
}
