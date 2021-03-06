import Head from 'next/head' 
import styles from '../styles/Home.module.css' 


export default function Home() {

  // console.log(styles)
  return (
    <div className={styles.container}>
       <style jsx>
         {`
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }
         `}
       </style>
      <Head>
        <title>Vaibhav Goeljahjkahjkhjkhakhahk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='dummy'>Vaibhav Goel</span>
        
        </h1>
        <div className={styles.imagewrap}> 
{/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
<img className={styles.myImg} src="/homeimg.jfif" width={237} height={158} alt="hunting coder" />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

      {/* <div className={`${styles1.con} ${styles2.con}`}> */}
      <div>
        <h2>Latest Blogs</h2>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
