import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '@/components/Header'

export default function Container (props)  {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Andres Reyes – FrontEnd Developer.',
    description: 'Front-end developer, JavaScript lover.',
    image: 'https://andresreyes.netlify.app/',
    type: 'website',
    ...customMeta
  }
  return (
    <div className='bg-white dark:bg-black'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Andres Reyes' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@areyesdev' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <Header />
      <main
        id='skip'
        className='flex flex-col justify-center bg-white dark:bg-black px-8'
      >
        {children}
      </main>
    </div>
  )
}