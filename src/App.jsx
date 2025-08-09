import React, { useEffect } from 'react'
import Navbar from './assets/Navbar/Navbar'
import Content from './assets/Content/Content'
import Aos from 'aos'
// import Fontawesome from './assets/Fontawesome/Fontawesome'
const App = () => {
  useEffect(()=>{
    Aos.init({
          // Optional: Global settings for AOS, e.g., duration, once, etc.
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once - while scrolling down
        });
  },[])
  return (
  <>
      <Navbar href="../../../src/page/about.html" title="Dedyas"/>
      <Content />
  </>
  )
}


export default App 