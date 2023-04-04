import React, { Suspense } from 'react'

// ** Router Import
import Router from './router/Router'

const App = () => {
  // window["eel"].set_host("ws://localhost:8080");
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
