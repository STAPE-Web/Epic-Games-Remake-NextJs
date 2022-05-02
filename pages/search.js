import Header from '../components/Header'
import { useRouter } from "next/router";
import { games } from '../Objects';
import Game from '../components/Game';
import Head from 'next/head';

const search = () => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Epic Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='Store'>
                <h1>You searched: {router.query.term}</h1>
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

export default search