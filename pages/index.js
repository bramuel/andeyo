import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Andeyo</title>
        <meta name="description" content="Search EngineX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-md text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">Andeyo</p>
          <p className="link">About</p>
        </div>
        <div>
          <input placeholder="Search..." />
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Login</p>
          <p className="link">Register</p>
        </div>
      </header>

      <main >
        {/* Main */}
      </main>

 
    </div>
  )
}
