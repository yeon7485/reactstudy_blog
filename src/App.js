/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(["여자 코트 추천", "강남 맛집 추천", "내돈내산 리뷰"]);
  let [like, setLike] = useState(0);
  let [select, setSelect] = useState("제목");

  function updateTitle() {
    let newArray = [...title];
    newArray[0] = "예쁜 코트 추천"
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3 onClick={() => { setSelect(title[0]) }}> {title[0]} <span onClick={() => { setLike(like + 1) }}>💜</span> {like} </h3>
        <button onClick={updateTitle}>제목 변경</button>
        <p>2월 9일</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => { setSelect(title[1]) }}> {title[1]} </h3>
        <p>2월 9일</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => { setSelect(title[2]) }}> {title[2]} </h3>
        <p>2월 8일</p>
        <hr />
      </div>

      <div className='modal'>
        <h2>{select}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
