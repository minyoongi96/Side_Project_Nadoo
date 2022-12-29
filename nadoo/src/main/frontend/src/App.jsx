import "./App.css";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NavigatorMain from './components/Navigator/NavigatorMain';
import NavigatorTop from "./components/Navigator/NavigatorTop";
import SearchPage from "./components/Search/Search";
import GroupDetail from "./components/GroupDetail/GroupDetail";

function App() {

  return (
    <Routes>
      {/* 테스트용 컴포넌트 */}
      <Route path='/' element={<Main />} />
      {/* 유저 화면 컴포넌트 */}
      <Route path='/test' element={<Main />} />
      <Route path='/mypage' element={<Main />} />
      <Route path='/wish' element={<Main />} />
      <Route path="/navigator" element={<NavigatorMain />} />
      <Route path="/navigatortop" element={<NavigatorTop />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/groupdetail" element={<GroupDetail />} />
    </Routes>
  );
}

export default App;