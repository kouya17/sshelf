import Head from "next/head"
import Navigation from './navigation'

export const siteTitle = "Searchable Shelf"

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Searchable Shelfのページです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
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