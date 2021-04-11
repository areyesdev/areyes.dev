import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Layout({children}){
  return (
    <div>
      <header>
        <h1>
          <Link href="/">
            <a>Mi web</a>
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