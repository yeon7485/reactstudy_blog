/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, updateTitle] = useState(["여자 코트 추천", "강남 맛집 추천", "내돈내산 리뷰"]);
  let [like, updateLike] = useState(0);

  function updateFirst() {
    let newArray = [...title];
    newArray[0] = "예쁜 코트 추천"
    updateTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {title[0]} <span onClick={() => {
          updateLike
            (like + 1)
        }}>💜</span> {like} </h3>
        <button onClick={updateFirst}>제목 변경</button>
        <p>2월 9일</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>2월 9일</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>2월 8일</p>
        <hr />
      </div>

      <div className='model'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

    </div>
  );
}

export default App;
