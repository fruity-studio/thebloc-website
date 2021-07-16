import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>theBloc.blog - Decentralized blogging powered by smart contracts & IPFS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="container items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl">Welcome To theBloc</h1>
          <h3 className="italic text-xl mt-2">
            Blogging platform on the metaverse, powered by smart contracts & IPFS.
          </h3>
          <div className="mt-4 text-xl">
            Check us out on{' '}
            <a href="https://github.com/fruity-studio/thebloc-contracts" className="text-blue-400">
              Github
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
