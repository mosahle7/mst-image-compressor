import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ImageUploader from './components/ImageUploader';
import { Layout } from './components/Layout';
function App() {

  return(
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Layout/>}>
      <Route index element={<ImageUploader/>}/>
      </Route>

    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
