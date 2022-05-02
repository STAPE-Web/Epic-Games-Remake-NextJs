import Image from 'next/image'

const Preview = () => {
    return (
        <div className='preview'>
            <Image
                src={require('../assets/games/LogoPreview.svg')}
                width={200}
                height={120}
                alt=""
            />
            <p className='description'>
                Play through all nine Star Wars saga films in a brand-new LEGO video game unlike any other.
            </p>
            <p className='price'>
                Starting at RUB 1,699.00
            </p>
            <button>
                Buy Now
            </button>
        </div>
    )
}

export default Preview