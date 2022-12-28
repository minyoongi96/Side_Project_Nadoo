import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavigatorMain from '../Navigator/NavigatorMain';
import NavigatorTop from '../Navigator/NavigatorTop';
import '../../styles/Test/Test.css';
import guideImg from '../../static/HHJ/images/guideClick.png';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import day from '../../static/HHJ/images/day.png';
import recycle from '../../static/HHJ/images/recycle.png';
import together from '../../static/HHJ/images/together.png';
import mega from '../../static/HHJ/images/mega.png';
import { Card } from 'antd';

const Background = styled.div`
  background-color: whitesmoke;
`

function Test() {
  const homeRef = useRef();
  const [guideToggle, setGuideToggle] = useState(false);

  const onHomeClick = () => {
    // homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setGuideToggle(true);
  };

  return (
    <>
      <NavigatorTop />
      <Outlet />
      <Background>
        {/* <div
          className='Test_category'
        >
          <p>메인</p>
          <p>이벤트</p>
          <p>동네별</p>
          <p>번개</p>
          <p>마트</p>
        </div> */}
        <div className='Test_guideImg'>
          {
            guideToggle === true ?
              <div
                onClick={
                  () => {
                    setGuideToggle(false);
                  }
                }
              >
                <Slider />
              </div>
              :
              <img
                className='Test_guide'
                alt='undefind'
                src={guideImg}
                onClick={onHomeClick}
              />
          }

          <br />
          <br />
          <br />
          <div className='Test_iconDiv'>
            <div className='Test_iconIfo'>
              <img
                className='Test_icon'
                alt='undefind'
                src={day}
              />
              <br />
              <p className='Test_iconText'>나두 일정</p>
            </div>
            <div className='Test_iconIfo'>
              <img
                className='Test_icon'
                alt='undefind'
                src={recycle}
              />
              <br />
              <p className='Test_iconText'>나두 교환</p>
            </div>
            <div className='Test_iconIfo'>
              <img
                className='Test_icon'
                alt='undefind'
                src={together}
              />
              <br />
              <p className='Test_iconText'>나두 함께</p>
            </div>
            <div className='Test_iconIfo'>
              <img
                className='Test_icon'
                alt='undefind'
                src={mega}
              />
              <br />
              <p className='Test_iconText'>나두 공지</p>
            </div>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>

          <br />
          <br />

          <div className="site-card-border-less-wrapper">
            <Card
              title="Card title"
              bordered={false}
              style={{
                backgroundColor: 'whitesmoke',
                boxShadow: '5px 5px 5px',
                height: '30px'
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </Background>
      <NavigatorMain />
      <Outlet />
    </>
  );
}

export default Test;