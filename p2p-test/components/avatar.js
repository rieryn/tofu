import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'


export default function Avatar () {
  const [ session, loading ] = useSession()
  
  return (
    <div className="max-w-full px-5">
      <div className="flex flex-row text-gray-300">

        
          {!session && <>
            
            <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
          </>}
          {session && <>
            
            <span className="text-gray-300">
              <small>Signed in as</small><br/>
              <strong>{session.user.name|| session.user.email }</strong>
            </span>
            <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
              <div className="flex-1 flex items-center justify-start">
              {session.user.image && <img className="h-8 w-8 rounded-full" src={session.user.image} alt="" />}
              </div>
          </>}
        
      </div>
      </div>
  )
}
