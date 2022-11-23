import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer>
    <p>@ 2021 Adrien</p>
  </footer>  
  </div> 
}

export default MyApp
