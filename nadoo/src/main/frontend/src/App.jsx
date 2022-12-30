import "./App.css";
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NavigatorMain from './components/Navigator/NavigatorMain';
import NavigatorTop from "./components/Navigator/NavigatorTop";
import SearchPage from "./components/Search/Search";
import GroupDetail from "./components/GroupDetail/GroupDetail";
import axios from "axios";
import GroupListAll from "./components/GroupList/GroupListAll";

function App() {
  const [groupList, setGroupList] = useState({
    list: []
  });

  function getGroupList() {
    axios
      .post('http://localhost:8088/nadoo/recentTrades', {
      })
      .then((res) => {
        const { data } = res;
        setGroupList({
          list: data.recentTrades
        });
      })
      .catch((e) => {
        console.error(e);
      })
  };

  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <Routes>
      {/* 테스트용 컴포넌트 */}
      <Route path='/' element={<Main />} />
      {/* 유저 화면 컴포넌트 */}
      <Route path='/test' element={<Main />} />
      {/* 마이 페이지 */}
      <Route path='/mypage' element={<Main />} />
      {/* 최신 나두 불러오기 */}
      <Route path='/grouplist' element={<Main />} />
      {/* 하단 네비게이션 */}
      <Route path="/navigator" element={<NavigatorMain />} />
      {/* 상단 헤더 */}
      <Route path="/navigatortop" element={<NavigatorTop />} />
      {/* 검색 페이지 */}
      <Route path="/search" element={<SearchPage />} />
      {/* 해당 그룹 상세정보 페이지 */}
      {
        groupList.list
          .map((item) => (
            <Route path={`/groupdetail/${item.tradeIdx}`} element={<GroupDetail />} />
          ))
      }
    </Routes>
  );
}

export default App;