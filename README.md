# Dobby

Dobby 는 일정관리 서비스를 이용하면서 느낀 불편함을 개선하고자 개발한 서비스입니다.
기존의 일정관리 서비스에서 일정등록을 할 때, 목적지를 등록하고 목적지로 갈 수 있는 방법을 찾는 것은 다른 서비스를 이용하는 것이 비효율적이라고 생각했습니다.
Dobby 는 이러한 부분을 개선하기 위해서 목적지를 등록하고 바로 경로탐색을 할 수 있도록 했습니다.
또한 친구들과 일정을 공유하기 쉽도록 그룹을 만들어서 일정관리를 할 수 있도록 했습니다.



## 팀원

- 채승협, 박준홍, 신지현, 허창환, 황규진

## 🤹 역할

- FrontEnd
  - 박준홍 : 캘린더기능, leaflet 을 사용한 지도 구현, Google api 를 사용한 장소 검색 기능
  - 신지현 : 메인페이지, 회원가입, 차트, 그룹 검색, 그룹 조회, 그룹 생성 컴포넌트 개발
  - 황규진 : sidebar, 일정추가 컴포넌트 개발,  ucc, 발표
- BackEnd 
  - 채승협 : REST api서버개발, CI/CD, FCM(Firebase Cloud Messaging) 개발, 라우팅 기능, 하이드리드 앱 제작
  - 허창환: REST API 서버 개발, Firebase 환경 설정 및 설계 (Firebase Cloud Messaging, Authentication)연동, OSRM 서버 환경 구축


## Architecture


### 📖 기술 스택

- 언어 : c++, javascript, html

- Frontend : Vue, React-Native

- Backend : Node.js, Express

- 데이터베이스 : Firebase

- 개발툴 : Visudal studio code

- 클라우드 : AWS

- 협업툴 : GIT, JIRA

- DevOps : Jenkins, Docker, Nginx

- Library : OSRM, OSM, leaflet, FullCalendar, FCM

  


### 📖 기술 버전

- Nodejs : v10.19.0

- Npm : 6.14.4

- Express : 4.16.1

- firebase SDK : 9.1.3

- firebase-admin SDK : 10.0.0

- element-plus : 0.0.11

- vue : 3.0.0

- React-Native : 0.14.3

- Nginx : stable-alpine

  

## 💻 Installation with Local

  - 로컬에서 백엔드 실행 시 명령어
    
    ```shell
    # 프로젝트 디렉토리 진입
    cd backend/Dobby
    
    # 모듈 설치
    npm install
    # 프로젝트 실행
    npm start
    ```
    
  - 로컬에서 프론트엔드 실행 시 명령어

    ```shell
    # 프로젝트 디렉토리 진입
    cd frontend/Dobby
    
    # 모듈 설치
    yarn install
    
    # 프로젝트 실행
    yarn serve
    ```
    
  - Open Street Routing Machine (파일 용량 문제로 인해 없음)

    ```shell
    # 프로젝트 디렉토리 진입
    cd ./osrm
    
    ## 각각 Routing Machine을 돌려야 함.
    # osrm-test-driving : 자동차 경로
    cd osrm-test-driving/data
    # osrm-test-walking : 도보 경로
    cd osrm-test-walking/data
    
    # 각각 다른 포트번호로 Docker 명령어 실행
    docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/berlin-latest.osrm
    ```
    
    * 아래의 git 가이드를 참고하여 실행 필수
    
      * OpenStreet Routing Machine
    
        git :　https://github.com/Project-OSRM/osrm-backend

## 1. Architecture

***

![KakaoTalk_20211118_145434725](./exec/img/KakaoTalk_20211118_145434725.png)



## 2. Project Data Structure

***

```
📦S05P31D105
├── 📂backend					# Backend 코드
│   └── 📂Dobby
│       ├── 📂bin
│       ├── 📂firebase
│       ├── 📂public
│       │   ├── 📂images
│       │   ├── 📂javascripts
│       │   └── 📂stylesheets
│       ├── 📂routes
│       │   └── 📂controller
│       └── 📂views
├── 📂frontend					# Frontend 코드
│   └── 📂vue3
│       ├── 📂nginx
│       ├── 📂public
│       └── 📂src
│           ├── 📂assets
│           ├── 📂components
│           │   ├── 📂calendar
│           │   ├── 📂map
│           │   └── 📂teleport
│           ├── 📂router
│           ├── 📂store
│           └── 📂views
│               ├── 📂calendar
│               ├── 📂chart
│               ├── 📂group
│               ├── 📂groupCalendar
│               ├── 📂main
│               ├── 📂schedule
│               └── 📂sidebar
├── 📂jenkins
├── 📂exec								# 산출물
└── 📝Readme.md
```



## 3. Firestore Data Model

***

```
🗂️ users
├── 📝user
│	├── address : String
│	├── email : String
│	├── name : String
│	├── nickname : String
│	├── phone : String
│	├── uid : String
│	└──  🗂️ calendar
│			├── 📝 calendar
│					├── cid : String
│					├── title : String
│					├── content : String
│					├── startDate : String
│					├── endDate : String
│					├── startTime : String
│					├── endTime : String
│					├── completed : Boolean
│					├── placeName : String
│					├── placeLat : String
│					├── placeLng : String
│					├── color : String
│					├── category : String
│					├── allDay : Boolean
│					├── createdAt : String
│	└──  🗂️ tokens
│			├── 📝token
│					├── tid : String
│					├── token : String
```

```
🗂️ groups
├── 📝group
│	├── gid : String
│	├── name : String
│	├── password : String
│	├── description : String
│	├── private : Boolean
│	├── uid : String
│	├── createAt : String
│	└──  🗂️ groupcalendar
│			├── 📝 calendar
│					├── cid : String
│					├── title : String
│					├── content : String
│					├── startDate : String
│					├── endDate : String
│					├── startTime : String
│					├── endTime : String
│					├── completed : Boolean
│					├── placeName : String
│					├── placeLat : String
│					├── placeLng : String
│					├── color : String
│					├── category : String
│					├── allDay : Boolean
│					├── participant : Array
│						├── uid : String
│						├── name : String
│						├── nickname : String
│						├── completed : Boolean
│					├── createdAt : String
│	└──  🗂️ members
│			├── 📝member
│					├── uid : String
│					├── gid : String
│					├── email : String
│					├── nickname : String
│					├── name : String
│					├── admin : Boolean
│					├── writer : Boolean
```



## 4. MockUp

***

- ### 피그마
  
  - https://www.figma.com/file/ufRXcCDDFJNebyWS6vym20/Dobby?node-id=0%3A1



## 5. Rest ApI Document

***

- ### Excel
  
  - https://kmuackr-my.sharepoint.com/:x:/g/personal/5294019_stu_kmu_ac_kr/EW-J6IXiI5ZDg4ZiKesCW1IBgs8oP12o45XYK9tDQ8cWsQ?e=ELVQlc



## 6. 시연

- 회원가입 및 로그인

  ![개인 및 그룹 차트](https://user-images.githubusercontent.com/69493693/155264902-1e3e154e-23b3-47f2-8cb8-398f7e8ff983.gif)

  

- 개인 일정 보기 및 수정

  ![일정 보기 및 수정](https://user-images.githubusercontent.com/69493693/155264752-f9c09e42-4cbb-4e8c-81db-3e27b9bee570.gif)

  

- 그룹 일정 등록 및 수정

  ![일정_보기_등록_수정_삭제](https://user-images.githubusercontent.com/69493693/155264852-a3a56305-a3d3-41e0-a80d-184d3a8e10ef.gif)

  

  

- 개인 및 그룹 일정 차트

  ![개인 및 그룹 차트](https://user-images.githubusercontent.com/69493693/155264691-c3b9eede-4bf4-4675-bda7-b982712ec939.gif)





