import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatorList from './pages/CreatorList.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import AddCreator from './pages/AddCreator.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatorList />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </Router>
  );
}

export default App;

