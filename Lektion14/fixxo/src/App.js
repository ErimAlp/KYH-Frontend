import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Navigation from './components/Navigation';

function App() {
  const { getFeaturedAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
      getFeaturedAsync()
      getPopularAsync()
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;



// useState 	State Mannagement lagra data...
// useEffect	"ServiceLifeTime" vid rendering av komponent
// useContext 	typ som static class, singleton

// useReducer	typ samma useContext fast mer advanced
// useRef		typ samma useState 