import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Frame from '../components/frame'
import Splash from '../components/splash'


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




        </main>
    <Splash/>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
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
