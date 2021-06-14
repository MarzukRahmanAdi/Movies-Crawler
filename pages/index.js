import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
// import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hulu Is</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <Nav/>
            <div >
                <h1>Hello world</h1>
            </div>
        </>
  )
}
