import Link from 'next/link'
import styles from './page.module.scss'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.eventContainer}>
          <h1>Encontro pela Sustentabilidade Climática</h1>
          <p>
            As mudanças climáticas estão causando impactos devastadores em todo
            o mundo, com eventos climáticos extremos se tornando mais comuns. É
            crucial uma ação global imediata para reduzir as emissões de gases
            de efeito estufa e adotar práticas sustentáveis para mitigar esses
            efeitos.
          </p>
          <p>
            Venha fazer parte do nosso evento para saber mais sobre o assunto.
          </p>
        </div>
        <div className={styles.subscribeContainer}>
          <Link href={'/registration'}>Realize sua inscrição</Link>
          ou
          <Link href={'/registration'}>Submeta seu trabalho</Link>
          <div>
            Ver mais
            <ChevronDown />
          </div>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <h1>Sobre o evento</h1>
        <p>
          Apresentamos com entusiasmo o nosso evento dedicado às mudanças
          climáticas, uma plataforma vital para a discussão, colaboração e ação
          em relação a um dos desafios mais urgentes de nosso tempo. Reunindo
          pesquisadores, ativistas, líderes comunitários e profissionais de
          diversas áreas, nosso evento proporciona uma oportunidade única para
          explorar as causas, impactos e soluções para as mudanças climáticas.
          Com palestras inspiradoras, painéis de discussão interativos e sessões
          de networking, estamos comprometidos em capacitar os participantes a
          contribuir de maneira significativa para a resiliência climática
          global. Junte-se a nós neste importante encontro e faça parte da
          mudança que desejamos ver em nosso mundo.
        </p>

        <div className={styles.imageContainer}>
          <Image
            width={400}
            height={200}
            alt="problema ambiental"
            src={
              'https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />

          <Image
            width={400}
            height={200}
            alt="problema ambiental"
            src={
              'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />

          <Image
            width={400}
            height={200}
            alt="problema ambiental"
            src={
              'https://images.unsplash.com/photo-1624324378932-68e20f332982?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />
        </div>
      </div>
    </>
  )
}
