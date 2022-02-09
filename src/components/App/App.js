import './App.sass';
import Header from '../Header/Header';
import Home from '../Home/Home';
import SwiftIndex from '../SwiftIndex/SwiftIndex';
import { Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/index' element={<SwiftIndex />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
