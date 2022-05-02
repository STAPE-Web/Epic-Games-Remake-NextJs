import Image from 'next/image'
import Link from 'next/link'

const Game = ({ img, name, price, preview }) => {

    return (
        <Link href={`/game?name=${name}&price=${price}&preview=${preview}`}>
            <div className='game'>
                <Image src={img} width={240} height={320} alt='' className='img' />
                <h2>{name}</h2>
                <p>Rub {price}</p>
            </div>
        </Link>
    )
}

export default Game