import logo from './logo.svg';
import './App.css';
import ListPosts from "./component/ListPosts";
import {Route, Routes} from "react-router-dom";
import CreatePosts from "./component/CreatePosts";
import EditPosts from "./component/EditPosts";
import DetailPosts from "./component/DetailPosts";

function App() {
  return (
    <div>
       <Routes>
           <Route path='/' element={<ListPosts/>}/>
           <Route path='/create' element={<CreatePosts/>}/>
           <Route path='/edit/:id' element={<EditPosts/>}/>
           <Route path='/detail/:id' element={<DetailPosts/>}/>
       </Routes>
    </div>
  );
}

export default App;
