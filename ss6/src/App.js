import logo from './logo.svg';
import './App.css';
import PostsList from "./component/PostsList";
import {Route, Routes} from "react-router-dom";
import PostsCreate from "./component/PostsCreate";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<PostsList/>}/>
      <Route path='/create' element={<PostsCreate/>}/>
    </Routes>
  </>
  );
}

export default App;
