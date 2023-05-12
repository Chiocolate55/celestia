import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import Layout from 'views/layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home/*' element={<Layout />} />
        <Route path='/' element={<Navigate to='/home/index' />} />
      </Routes>
    </Router>
  )
}

export default App
