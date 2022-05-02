import { useRef } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { games } from '../Objects'
import Game from '../components/Game'
import Preview from '../components/Preview'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Epic Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='Store'>
        <Preview />
        <div className='gameList'>
          {games.map((game) => (
            <Game
              key={game.id}
              img={game.url}
              name={game.name}
              price={game.price}
              preview={game.preview}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
