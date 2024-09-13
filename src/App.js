import './App.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

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


// [hook] useState 와 useEffect를 사용하는 방법.
//
// import { useState, useEffect } from 'react';
//
// const App = () => {
//   let [page, setPage ]= useState(<Page1 />);
//   const pageEvent = txt => {
//       if(txt === "PAGE1"){
//         setPage(<Page1 />);
//       } else if( txt === "PAGE2"){
//         setPage(<Page2 />);
//       } else if(txt === "PAGE3") {
//         setPage(<Page3 />);
//       }
//   }

//   useEffect(()=>{
//     if(document.location.hash == "#page1"){
//       pageEvent('PAGE1')
//     } else if (document.location.hash == "#page2"){
//       pageEvent('PAGE2')
//     } else if(document.location.hash == "#page3") {
//       pageEvent('PAGE3')
//     }
//   }, []);
//   return (
//     <>
//       <Nav pEvent={ txt => pageEvent(txt) } />  
//       {page}
//     </>
//   );
// }

export default App