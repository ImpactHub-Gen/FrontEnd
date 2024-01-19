import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <>
        <div className="flex justify-center">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Construindo conexões, impulsionando mudanças</p>
            <p className='text-lg'>ImpactHub | &copy; Copyright 2024</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer