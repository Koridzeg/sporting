import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Navbar from './components/Navbar';
const Home = lazy(() => import('./pages/Home'))


function App() {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
