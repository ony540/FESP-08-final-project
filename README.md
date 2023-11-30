# [🦁&nbsp;FESP 1기] FESP 8 - YouTubeAPI&nbsp;

<p align="center">
<img src= https://github.com/FESP-8/final-project/assets/115642699/169270a5-41bb-46fa-89cc-523515cf410d ></p>

## 📲 배포주소

주소 : <a href=""> YouTube API </a></br>

</br>
</br>

### 📄 목차

[1. 서비스 소개](#-1-서비스-소개)</br>
[2. 프로젝트 일정](#-2-프로젝트-일정)</br>
[3. 팀 구성](#-3-팀-구성)</br>
[4. 공통 구현 과제](#4-공통-구현-과제)</br>
[5. 필수 구현 과제](#5-필수-구현-과제)</br>
[6. 역할 분담](#-6-역할-분담)</br>
[7. 프로젝트 목표](#-7-프로젝트-목표)</br>
[8. 팀 내 규칙 및 준수 사항](#-8-팀-내-규칙-및-준수-사항)</br>
[9. 개발 환경 및 기술 스택](#-9-개발-환경-및-기술-스택)</br>
[10. 결과물](#-10-결과물)</br>
[11. 시연 영상](#-11-시연-영상)</br>
[12. 프로젝트 소감](#-12-프로젝트-소감)</br>
[13. 프로젝트 사용법](#-13-프로젝트-사용법)</br>

</br>
</br>

### 🐶 1. 소개

- 프로젝트 주제 : YouTube 클론코딩
- YouTube API를 활용한 영상재생 사이트
- <a href= 'https://inifinite-tries.notion.site/317b3150aa8d4c898b9274aae54d0e74'>기술 과제 안내 문서</a>

  </br>
  </br>

### ⚡ 2. 프로젝트 일정

> 프로젝트 기간 : 2023년 11월 20일 ~ 2023년 12월 1일

- <a href= "https://inifinite-tries.notion.site/1-5d096fba2f974a478eaa21a4af1cc5e3">1단계</a> : 11월 20일(월) 오전 9시 ~ 22일(수) 오후 6시
- <a href= 'https://inifinite-tries.notion.site/2-e65173a4f6024704bb799ce90b477faf'>2단계</a> : 11월 23일(목) 오전 9시 - 26일(일) 오후 6시
- <a href= 'https://inifinite-tries.notion.site/3-d02bfe100e914b5181c7c6ae10415901'>3단계</a> : 11월 27일(월) 오전 9시 - 12월 1일(금) 오후 5시
  </br>
  </br>

### 🐾 3. 팀 구성

|                                 [안태욱](https://github.com/dotory0829)                                  |                                   [오나영](https://github.com/ony540)                                    |                                     [이규정](https://github.com/LKJ970524)                                     |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![이미지](https://github.com/FESP-8/final-project/assets/115642699/1a044790-964b-4b10-b27f-cfe0b9828c2d) | ![이미지](https://github.com/FESP-8/final-project/assets/115642699/55005f8c-2a9b-49d8-81e3-0e31b8f05b92) | ![이미지](https://github.com/FRONTENDSCHOOL6/Pet_Bridge/assets/115642699/d3a91e9d-1652-42df-98a0-b72ff3e0f3df) |

</br>
</br>

### 4. 공통 구현 과제

#### 1주차

- 여러 팀원이 일한다는 생각으로 동일한 코드 스타일 작성 할 수 있는 환경을 만들어주세요.
  - [x] lint, prettier 설정
  - [x] import 파일 경로는 절대 경로로 설정해주세요.
  - [x] config 설정
  - [x] 제공되는 비디오 데이터를 사용해주세요.
- 영상 목록 페이지
  - [x] `popular.json` 파일을 사용해서 만들어주세요.
- 영상 상세 페이지
  - [x] 채널의 관련 영상들은 `searchByChannels` 폴더의 파일을 사용해서 만들어주세요.
- 데이터에 대한 정보는 유튜브 api 문서를 참고하세요.
  - [/videos](https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/videos/list?hl=ko)
  - [/search?channelId={id}](https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/search/list?hl=ko)
- [아래 예시 화면](https://www.notion.so/1-5d096fba2f974a478eaa21a4af1cc5e3?pvs=21)을 참고해서 화면을 제작해주세요.
  - 꼭 동일하게 제작하지 않아도 됩니다.
  - 모든 디자인은 자유롭게 구성 가능하며, 스타일 관련 라이브러리는 자유롭게 선택해주세요.

#### 2주차

- [x] 다크 모드를 적용해주세요.
- [x] 애니메이션 효과를 넣어주세요.(ex. 넥플릭스, 왓차 등등)
- [x] 댓글 API는 supabase를 사용합니다.

#### 3주차

- [x] 운영서버(YOUTUBVE)인지 또는 개발서버(json 데이터)에 따라서 실제 youtube API를 사용해서 만들어주세요. (환경변수에 따라 분기처리 ~~IS_DEV~~ , IS_YOUTUBE_API)
- [x] supabase 또한 비슷한 방식으로 처리해주세요. DEV DB와 PROD DB를 나누어주세요.
- [x] 코드 리팩토링를 진행해주세요.

### 5. 필수 구현 기능

#### 1주차
- [x] 사용자는 비디오 목록을 확인할 수 있다.
- [x] 사용자는 영상을 클릭하면, 해당 영상의 상세 화면으로 이동할 수 있다.
- [x] 사용자는 비디오 상세 정보를 확인할 수 있다.
- [x] 사용자는 관련 비디오 목록을 확인할 수 있다.
- [x] 사용자는 mobile, tablet, pc 환경에서 사용할 수 있다.

#### 2주차

- 영화 목록 페이지
- 사용자는 원하는 영화를 검색할 수 있어요.
  - [x] popular.json의 title 기준으로 검색이 가능합니다.
  - [x] 뒤로가기 시, 영화 검색 내용이 초기화가 되면 안돼요.
- 영화 상세 페이지
- 사용자는 관련 영상 목록이 많아 스크롤하기 불편해요.
  - [x] 관련 영상 목록을 편하게 볼수 있도록 개선해주세요.

#### 3주차

- [x] 사용자에게 UX를 개선하는 로딩 화면/에러 화면을 보여주세요.<br/> [배민서비스 참고](https://www.baemin.com/adafadf)
- [x] 사용자는 모든 데이터를 한번에 보는게 아니라, 스크롤을 할 때마다 데이터를 볼 수 있습니다.
  - 대신, [이 라이브러리](https://www.npmjs.com/package/react-intersection-observer)를 사용하지 않고 직접 구현합니다.
- [x] 사용자가 보는 화면에서만 이미지가 로드 되어야 합니다.
- [x] 스크롤 마다 보여지는 새 영역에서만 이미지가 로드됩니다.

### 💻 6. 역할 분담

| 이름   | 담당 기능               |
| ------ | ----------------------- |
| 안태욱 | 메인페이지, 검색 페이지 |
| 오나영 | 상세페이지, 검색 페이지 |
| 이규정 | 메인페이지 배너         |

</br>
</br>
 
### 🏅 7. 프로젝트 목표

> 결과보단 과정!

- 완벽한 결과보단 프로젝트 진행하는 과정에서 많은 지식과 경험을 얻어가는 것에 초점을 두기

> 필수 구현과제 기능 위주

- 필수 구현과제를 우선적으로 하면서 천천히 깨달음을 얻는다.

> 본 프로젝트 전 워밍업

- 본 프로젝트 진행 전 예비프로젝트로 많은것을 실험해보고 연구하며 지식을 쌓아간다.
  <br>
  <br>

### 🙇🏻 8. 팀 내 규칙 및 준수 사항

- ##### <a href = https://github.com/FESP-8/final-project/wiki/commit-convention>커밋 컨벤션</a>
<br>
<br>

### 🎃 9. 개발 환경 및 기술 스택

##### 환경

<img alt="git" src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img alt="github" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img alt="figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">

##### 언어

<img alt="html5" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img alt="css" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img alt="typescript" src="https://img.shields.io/badge/typescript-skyblue?style=for-the-badge&logo=typescript&logoColor=black"> <img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

##### 도구

<img alt="reactrouter" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img alt="recoil" src="https://img.shields.io/badge/recoil-FF4154?style=for-the-badge&logo=recoil&logoColor=white"><img alt="supabase" src="https://img.shields.io/badge/supabase-F4FA58?style=for-the-badge&logo=supabase&logoColor=black"><img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white"><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">

##### 소통

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"><img alt="Notion" src="https://img.shields.io/badge/notion-fffff1?style=for-the-badge&logo=notion&logoColor=black">

</br>
</br>

### 😻 10. 결과물

##### Dark Mode

<img src="https://github.com/FESP-8/final-project/assets/115642699/ef044fcf-1833-4ba2-9539-94b5da9276bc" width="600"></br>

- Recoil을 사용하여 상태관리</br>
- Dark Mode 사용으로 인한 색상대비 구현</br>

</br>
</br>

##### 메인 페이지

<img src="https://github.com/FESP-8/final-project/assets/115642699/699a1eb1-774e-4216-b2c0-0361d7ccc60d" width="600"></br>

- 호버 시 영상 재생 : 미리보기 구현</br>
- 슬라이드 : 메인페이지 배너 슬라이드 기능 구현 및 이미지 레이지 로딩 구현</br>
- 무한 스크롤 : 무한 스크롤 기능 구현</br>

</br>
</br>

##### - Detail 페이지

<img src="https://github.com/FESP-8/final-project/assets/115642699/8f03a197-2cec-4f9b-bfa0-f8c692f12f1b" width="600"></br>

- 댓글: SupaBase 연동</br>
- 관련 영상 불러오기 : 관련 영상 불러오기
  </br>
  </br>

##### 검색 페이지

<img src="https://github.com/FESP-8/final-project/assets/115642699/5dd06538-7992-421d-a21e-f7d2d36b45c6" width="600"> </br>

- 검색 기능 구현 </br>
- 무한 스크롤 구현 </br>
- 검색 결과 없을시 안내 페이지 구현 </br>

  </br>
  </br>

##### 404 페이지 및 검색어 없을시 노출 되는 페이지

<img src="https://github.com/FESP-8/final-project/assets/115642699/9b89217c-3dbc-49dd-98e9-d6bb5da3b7a3" width="600"></br>


</br>
</br>

### 🎶 11. 시연 영상

![Video Label](https://github.com/FESP-8/final-project/assets/115642699/e561c5a3-38c4-4eb3-b02f-7168176cc722)

<br>
<br>

### 🎥 12. 프로젝트 소감

<table>
  <tr>
    <th>안태욱</th>
    <td>8조 화이팅! 1</td>
  </tr>
  <tr>
    <th>오나영</th>
    <td>8조 화이팅! 2</td>
    </tr>
      <tr>
    <th>이규정</th>
     <td>8조 화이팅! 3</td>
      </tr>
  </table>
<br>

### 🦾 13. 프로젝트 사용법

- 패키지 설치

```
npm i 또는 npm install
```

- 개발 서버 실행

```
npm run start
```

- 운영 서버 실행

```
npm run prod
```
