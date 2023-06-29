import './index.css'

import Footer from './components/Footer'
import FacilityCreate from './components/facility/FacilityCreate';
import Home from './components/Home';
import Header from './components/Header';
import FacilityList from './components/facility/FacilityList';
import ContractList from './components/contract/ContractList';
import CustomerList from './components/customer/CustomerList';
import CustomerCreate from './components/customer/CustomerCreate';
import ContractCreate from './components/contract/ContractCreate';
import CustomerEdit from './components/customer/CustomerEdit';
import FacilityEdit from './components/facility/FacilityEdit';
import Detail from './components/Detail';
import Scroll from './components/Scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Scroll />
      <Header />
        <Routes>
          <Route>
          <Route path='/' element={<Home />} />
          <Route path='/facility-list' element={<FacilityList />} />
          <Route path='/customer-list' element={<CustomerList />} />
          <Route path='/contract-list' element={<ContractList />} />
          <Route path='/facility-detail/:id' element={<Detail />} />
          <Route path='/facility-create' element={<FacilityCreate />} />
          <Route path='/facility-edit/:id' element={<FacilityEdit />} />
          <Route path='/customer-create' element={<CustomerCreate />} />
          <Route path='/customer-edit/:id' element={<CustomerEdit />} />
          <Route path='/contract-create' element={<ContractCreate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
