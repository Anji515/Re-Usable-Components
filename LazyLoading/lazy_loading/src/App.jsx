import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/Abo';

const HomePage = lazy(() => import('./components/Home'));
const AboutPage = lazy(() => import('./components/Abo'));


function App() {
  return (
    <div style={{width:'100%' , margin:'auto', textAlign:'center'}}>
        <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path='/' element={<HomePage/>}/>
      </Routes>
        </Suspense>
    </div>
  );
}

export default App;

