import Head from 'next/head'

export default function Home() {
  const click = () => {

  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={click}>click</button>
    </div>
  )
}
     