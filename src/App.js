import React from 'react';
import MemberList from './left';  // 수정된 부분

const membersData = {
    "1": {
      "name": "김우진",
      "mainParagraph": "나는 김우진",
      "subParagraph": "우지니"
    },
    "2": {
      "name": "김현",
      "mainParagraph": "나는 김현",
      "subParagraph": "기면"
    },
    "3": {
      "name": "방승희",
      "mainParagraph": "나는 방승희",
      "subParagraph": "희힁"
    },
    "4": {
      "name": "변호녕",
      "mainParagraph": "나는 변호녕",
      "subParagraph": "녕녕"
    },
    "5": {
      "name": "소사무엘",
      "mainParagraph": "나는 소사무엘",
      "subParagraph": "음메"
    },
    "6": {
      "name": "송영준",
      "mainParagraph": "나는 송영준",
      "subParagraph": "주니"
    },
    "7": {
      "name": "신동현",
      "mainParagraph": "나는 신동현",
      "subParagraph": "동혀니"
    },
    "8": {
      "name": "오승민",
      "mainParagraph": "나는 오승민",
      "subParagraph": "오승"
    },
    "9": {
      "name": "유승민",
      "mainParagraph": "나는 유승민",
      "subParagraph": "유승"
    },
    "10": {
      "name": "윤준현",
      "mainParagraph": "나는 윤준현",
      "subParagraph": "준혀니"
    },
    "11": {
      "name": "이민구",
      "mainParagraph": "나는 이민구",
      "subParagraph": "핑구"
    },
    "12": {
      "name": "이유안",
      "mainParagraph": "나는 이유안",
      "subParagraph": "유아"
    },
    "13": {
      "name": "이채이",
      "mainParagraph": "나는 이채이",
      "subParagraph": "은정"
    },
    "14": {
      "name": "정영식",
      "mainParagraph": "나는 정영식",
      "subParagraph": "빵식"
    },
    "15": {
      "name": "최성민",
      "mainParagraph": "나는 최성민",
      "subParagraph": "승민"
    },
    "16": {
      "name": "최은철",
      "mainParagraph": "나는 최은철",
      "subParagraph": "처리"
    },
    "17": {
      "name": "홍문기",
      "mainParagraph": "나는 홍문기",
      "subParagraph": "아버지"
    }
  }
  ;
  
  const App = () => {
    return (
      <div className="app">
        <MemberList members={membersData} />
      </div>
    );
  };
  
  export default App;