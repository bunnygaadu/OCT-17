import {Route, Routes} from 'react-router-dom'
import Deepak from './components/Deepak'
import Header from './components/Header'
import SaiNaveen from './components/SaiNaveen'
import Sathwik from './components/Sathwik'
import Venkat from './components/Venkat'
import Ramya from './components/Ramya'
import Dhathrija from './components/Dhathrija'

const App =() => (
  <>
  <Header />
   <Routes>
  <Route exact path="/" element={<Deepak />} />
  <Route exact path="/sainaveen" element={<SaiNaveen />} />
  <Route exact path="/sathwik" element={<Sathwik />} />
  <Route exact path="/venkat" element={<Venkat />} />
  <Route exact path="/ramya" element={<Ramya />} /> 
  <Route exact path="/dhathrija" element={<Dhathrija />} /> 
  </Routes> 
  </>
)
export default App