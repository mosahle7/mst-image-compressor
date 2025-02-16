import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import ImageUploader from './components/ImageUploader';
import { Layout } from './components/Layout';
import { CompressedPage } from './components/CompressedPage';
function App() {

  return(
    <>
  
    <BrowserRouter basename="/mst-image-compressor">
    <Routes>
      <Route path = '/' element = {<Layout/>}>
      <Route index element={<ImageUploader/>}/>
      <Route path = 'compressed' element={<CompressedPage/>}/>
      </Route>

    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
