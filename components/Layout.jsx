import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Layout({children}){
  return (
    <div className="max-w-screen-sm px-4 py-8 mx-auto ">
      <header>
        <h1 className="mb-8">
          <Link href="/">
            <a className="text-5xl font-black text-black no-underline">Mi web</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()}, Hecho con ♥ por <a href="https://github.com/areyesdev">@areyesdev</a>
      </footer>
    </div>
  )
}