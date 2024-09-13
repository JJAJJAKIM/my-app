import './Study01.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/page1/:txt" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/page3/:id" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;