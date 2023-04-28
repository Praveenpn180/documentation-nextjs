import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Leftbar from '@/components/Leftbar'
import RightBar from '@/components/Rightbar'
import { useEffect,useState } from 'react'
export default function App({ Component, pageProps }) {
  const [menuItems,setMenuItems] = useState(null)

  useEffect(()=>{
    async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data);
        setMenuItems(data)
      }
  
      fetchData()
},[])
  return(
  <>
    <Header />
    <div className='w-full flex'>
    <div>
        <Leftbar data={menuItems} />
      </div>
      <Component {...pageProps} data={menuItems} />
        <div>
      <RightBar />
    </div>
   
  
    </div>
   
    <Footer />
  </>)
  
}
