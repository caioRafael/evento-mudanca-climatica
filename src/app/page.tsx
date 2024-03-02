// import { Button } from '../components/styles'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.eventContainer}>
        <h1>Mudanças climaticas</h1>
        <p>
          As mudanças climáticas estão causando impactos devastadores em todo o
          mundo, com eventos climáticos extremos se tornando mais comuns. É
          crucial uma ação global imediata para reduzir as emissões de gases de
          efeito estufa e adotar práticas sustentáveis para mitigar esses
          efeitos.
        </p>
        <p>
          Venha fazer parte do nosso evento para saver mais sobre o assunto.
        </p>
      </div>
      <div className={styles.subscribeContainer}>
        <Link href={'/registration'}>Realize sua inscrição</Link>
        ou
        <Link href={'/registration'}>Submeta seu trabalho</Link>
      </div>
    </div>
  )
}
