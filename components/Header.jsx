import { useRef } from 'react'
import { SearchIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router";
import Image from 'next/image'

const Header = () => {

    const router = useRouter();
    const inputRef = useRef(null)

    const search = (e) => {
        e.preventDefault();
        const term = inputRef.current.value

        router.push(`/search?term=${term}`)
    }
    return (
        <header>
            <div className="nav">
                <Image
                    src={require('../assets/Logo.svg')}
                    width={50}
                    height={60}
                    className='logo'
                    alt=""
                    onClick={() => router.push('/')}
                />
            </div>
            <form className="search" onSubmit={search}>
                <SearchIcon className="icon" />
                <input type="text" placeholder='Search' ref={inputRef} />
            </form>
            <div className="profile">S</div >
        </header >
    )
}

export default Header