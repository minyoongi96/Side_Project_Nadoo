import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../styles/Navigator/NavigatorTop.css'
import styled from "styled-components";
import Logo from '../../static/HHJ/images/NADOO_v2.svg'

const NavCenter = styled.div`
  text-align: center;
  padding-top: 3.75rem;
`;

function NavigatorTopDetail({
  groupTitle
}) {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [title, setTitle] = useState('');
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  return (
    <NavCenter>
      <div
        className=
        {
          scroll === true ?
            'Navigator_topbar'
            :
            'Navigator_topbarScroll'
        }
      >
        <>
          <span className='Navigator_topfont1'>
            NA
          </span>
          <span className='Navigator_topfont2'>
            DOO
          </span>
        </>
      </div>
    </NavCenter>
  );
}

export default NavigatorTopDetail;