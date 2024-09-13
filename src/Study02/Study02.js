import './Study02.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import List from './List';
import Create from './Create';
import Detail from './Detail';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Study02 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><span className="log1">WOO</span><span className="log2">JUN</span></a>
          </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Study02;