import Head from "next/head"
import Navigation from './navigation'

export const siteTitle = "SShelf"

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" type="/svg+xml"/>
        <meta
          name="description"
          content="Searchable Shelfのページです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Searchable Shelfのページです。" />
        <meta property="og:image" content="https://sshelf.work/logo.png" />
      </Head>
      <Navigation
        title={siteTitle}
        menu={[{name: 'aaa', path: '/'}, {name: 'bbb', path: '/'}]}
      />
      <div className='container mx-auto px-4'>
        <main>{children}</main>
      </div>
    </div>
  )
}