import logo from './logo.svg';
import './App.css';
import Home from "./component/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import FuramaList from "./component/serviceFurama/FuramaList";
import CreateFurama from "./component/serviceFurama/CreateFurama";
import CustomerList from "./component/customer/CustomerList";
import CustomerCreate from "./component/customer/CustomerCreate";
import EditFurama from "./component/serviceFurama/EditFurama";
import CustomerEdit from "./component/customer/CustomerEdit";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/listService' element={<FuramaList/>}/>
                <Route path='/createFurama' element={<CreateFurama/>}/>
                <Route path='/editFurama' element={<EditFurama/>}/>
                <Route path='/customer' element={<CustomerList/>}/>
                <Route path='/createCustomer' element={<CustomerCreate/>}/>
                <Route path='/editCustomer/:id' element={<CustomerEdit/>}/>
            </Routes>


        </div>
    );
}

export default App;
