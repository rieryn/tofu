import Link from 'next/link'
//import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './header.module.css'
import { signIn } from 'next-auth/client'

// after we have login we'll need sessions
export default function Header () {
  //const [ session, loading ] = useSession()
  
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        testing without js later
      </noscript>
      <a href="/">home </a>
            <a href="/a">a </a>

      logo > search bar > spacer >  profile menu button
            <p>
        <a href="/api/auth/signin"
           onClick={(e) => {
           e.preventDefault()
           signIn()
        }}>Sign in with Discord</a>
      </p>
    </header>
  )
}
