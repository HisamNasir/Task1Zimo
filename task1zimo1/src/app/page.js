import Image from 'next/image'
import IntroPage from './Pages/IntroPage.js'
import Head from 'next/head.js'
// import styles from '..app/global.css'
export default function Home() {
  return (
    <>
    <Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"> */}

</Head>
    <IntroPage/>
    </>
  )
}
