import './App.css';
import PostList from "./component/PostList";
import {Route, Routes} from "react-router-dom";
import CreatePosts from "./component/CreatePosts";
import EditPosts from "./component/EditPosts";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PostList/>}/>
                <Route path='/create' element={<CreatePosts/>}/>
                <Route path='/edit' element={<EditPosts/>}/>
            </Routes>
        </div>
    );
}

export default App;
