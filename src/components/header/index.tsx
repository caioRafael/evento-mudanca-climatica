import Link from 'next/link'
import styles from './styles.module.scss'
import { Drawer } from '../drawer'

export function Header() {
  return (
    <header className={styles.header}>
      <Drawer>
        <div className={styles.mobileMenu}>
          <Link href={'/'}>Início</Link>
          <Link href={'/registration'}>Inscrições</Link>
          <Link href={'/submission'}>Submissões de trabalhos</Link>
          <Link href={'/adminPanel'}>Painel administrativo</Link>
        </div>
      </Drawer>
      <div className={styles.desktopMenu}>
        <Link href={'/'}>Início</Link>
        <Link href={'/registration'}>Inscrições</Link>
        <Link href={'/submission'}>Submissões de trabalhos</Link>
        <Link href={'/adminPanel'}>Painel administrativo</Link>
      </div>
    </header>
  )
}
