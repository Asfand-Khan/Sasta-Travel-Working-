import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { UserCircle2 } from 'lucide-react'
import Menu from './Menu'

const LogoBar = () => {
    return (
        <Container>
            <div className='py-2 flex justify-between items-center'>
                <Image
                    width={200}
                    height={200}
                    src={'/images/logo.png'}
                    alt='logo'
                />
                <div className='flex gap-4 justify-center items-center'>
                    <p className='
                    flex
                    gap-2
                    justify-center
                    items-center
                    hover:bg-gray-100
                    transition
                    p-2
                    border
                    border-1
                    border-white
                    rounded-sm
                    cursor-pointer'>
                        <UserCircle2 size={20}/>
                        Login
                    </p>
                    <Menu/>
                </div>
            </div>
        </Container>
    )
}

export default LogoBar