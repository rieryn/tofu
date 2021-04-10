import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Frame from '../components/frame'
import Splash from '../components/splash'
import SplashTitle from '../components/splashSearchbar'


export default function Home({ isConnected }) {
  return (
      <Frame>
    <div>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {isConnected ? (
          <h2 >connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            NOT connected to MongoDB.
          </h2>
        )}



        <SplashTitle/>

        </main>

    <Splash/>


      
    </div>
            </Frame>

  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
