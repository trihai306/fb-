import React, { Suspense, useEffect } from 'react'

// ** Router Import
import Router from './router/Router'

const App = () => {
  // window["eel"].set_host("ws://localhost:8080");
  useEffect(() => {
    const handleRefresh = (event) => {
      if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleRefresh);

    return () => {
      window.removeEventListener('keydown', handleRefresh);
    };
  }, []);
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
