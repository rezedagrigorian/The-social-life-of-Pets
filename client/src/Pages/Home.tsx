import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Register from '../components/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  SWrapper,
  SJoinWrapper,
  STitle,
  SSubTitle,
  SJoinButton
} from './style';

const Home = (): JSX.Element => {
  return (
    <SWrapper>
      <Header />
      <SJoinWrapper>
        <STitle>
          The social life <span><br />of Pets</span>
        </STitle>
        <SSubTitle>
          Hello! Here  you can create an account for your lovely pet
        </SSubTitle>
        <SJoinButton>
          Присоединиться к нам
        </SJoinButton>
      </SJoinWrapper>
      <Login />
      {/* <Register /> */}
    </SWrapper>
  );
}


export default Home;