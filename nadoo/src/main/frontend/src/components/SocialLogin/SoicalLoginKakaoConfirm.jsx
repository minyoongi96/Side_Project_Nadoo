import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SoicalLoginKakaoConfirm(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  console.log(KAKAO_CODE);



  const [loginAccount, setLoginAccount] = useState({});

  const getKakaoToken = () => {
    axios
      .get(`http://localhost:8088/oauth/login?code=${KAKAO_CODE}`, {
      })
      .then((res) => {
        console.log(res.data);
        axios
          .get(`http://localhost:8088/oauth/userInfo?token=${res.data}`)
          .then((res) => {
            const { data } = res;
            setLoginAccount(data.userInfo);
            window.sessionStorage.setItem(`userID`, data.userInfo.userAccount);
          })
      })
      .catch((e) => {
        console.error(e);
      })
  }


  useEffect(() => {
    getKakaoToken();
  }, []);

  return (
    <div>
      {loginAccount.userAccount}
      <br />
      {loginAccount.userNick}
    </div>
  );
}

export default SoicalLoginKakaoConfirm;