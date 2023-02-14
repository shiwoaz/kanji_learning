import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import KanjiInfo from './pages/kanjiInfo';
import List from './pages/list';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kanji_info/:kanji/:stroke' element={<KanjiInfo />} />
        <Route path='/list/:stroke' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
