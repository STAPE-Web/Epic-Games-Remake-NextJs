import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";

const game = () => {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='Store'>
                <h1 className="gameName">{router.query.name}</h1>
                <img className="gamePreview" src={router.query.preview} />
                <p>RUB {router.query.price}</p>
                <button className="gameBuy">Buy Now</button>
            </div>
        </div>
    )
}

export default game