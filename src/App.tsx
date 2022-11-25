import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
const Home = lazy(() => import('./pages/Home'))


function App() {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
