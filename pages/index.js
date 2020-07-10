import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  const click = () => {
    router.push("/Homepage")
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      IF you want to use langauge Translation then click this button.
      <button onClick={click}>click</button>
    </div>
  )
}
     