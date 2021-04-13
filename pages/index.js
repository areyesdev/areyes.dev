import Image from 'next/image';
import Container from '@/components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-10">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-dark dark:text-white">
          ¡Hola 👋! <br /> Soy Andres Reyes
        </h1>
        <div className="flex flex-col md:flex-row items-center rounded-xl mt-4 mb-16">
          <h2 className="text-gray-500 dark:text-gray-200 font-normal text-lg p-0 md:pr-4 mb-11 md:mb-0">
            Soy Frontend Developer especializado en el ecosistema de JavaScript.
            Amante de las buenas prácticas y del software de calidad. Soy
            Frontend Developer especializado en el ecosistema de JavaScript.
            Amante de las buenas prácticas y del software de calidad.
          </h2>
          <Image
            alt="Andres Reyes"
            height={900}
            width={900}
            src="/static/images/profile.png"
            className="rounded-full object-cover bg-gradient-to-r from-blue-400 to-blue-500 "
          />
        </div>
      </div>
    </Container>
  );
}
