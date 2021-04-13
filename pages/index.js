import Image from 'next/image'
import Container from '@/components/container'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-10'>
      <h1 className='font-bold text-3xl md:text-3xl tracking-tight mb-1 text-black dark:text-white'>
      ¡Hola 👋! <br /> Soy Andres Reyes
      </h1>
        <div className='flex flex-col md:flex-row items-center rounded-xl mt-4 mb-16'>
            <h2 className='text-gray-600 dark:text-gray-400 text-lg p-0 md:pr-4 mb-11 md:mb-0'>
            Soy Software Engineer con experiencia trabajando como Frontend Developer y especializado en el ecosistema de JavaScript. Amante de las buenas prácticas y del software de calidad.
            </h2>
            <Image
                alt='Andres Reyes'
                height={1024}
                width={900}
                src='/static/images/profile-new.svg'
                className='rounded-full object-cover'
              />
        </div>
      </div>
    </Container>
    
  )
}