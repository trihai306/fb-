import React, { Suspense, useEffect } from 'react'
// ** Router Import
import Router from './router/Router'


const App = () => {
  console.log("run app!")
  const greet = async () => {
    const response = await window.eel.hello()();
    console.log(response);
  }
  useEffect(()=>{
    try {
      greet();
    } catch (error) {
      console.log("error:",error)
    }
  })
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
