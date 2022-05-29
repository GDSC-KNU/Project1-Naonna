# Project 1 - Naonna

<div style="display:flex;justify-content:center;"><img alt="나온나 로고"src="public/image/logo/NaonnaMain.png"/></div>
<a href="https://naonna.netlify.app">프로젝트 바로가기</a>

## 목차

- [✨ 프로젝트 소개](#프로젝트-소개)
- [🧑‍🤝‍🧑 팀원 소개](#팀원-소개)
- [🛠️ 기술 스택](#기술-스택)
- [📝 프로젝트 구조](#프로젝트-구조)
- [🔎 프로젝트 상세정보](#프로젝트-상세정보)

## 프로젝트 소개

밖에서 만나는 약속을 잡을 때, 신경쓰지 않을 수 없는 중요한 요소, 날씨! GDSC KNU 1기 프로젝트 1팀에서 제작한 서비스 '나온나'에서. 약속을 잡을 위치를 지정하면, 일주일간의 날씨를 계산해서, 여러분들께 최적의 날씨를 추천해 드립니다!

## 팀원 소개

#### FrontEnd

| [<img src="https://github.com/kasterra.png" width="100px">](https://github.com/kasterra) | [<img src="https://github.com/JangYunSeong.png" width="100px">](https://github.com/JangYunSeong) |
| :--------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|                          [이휘찬](https://github.com/kasterra)                           |                            [장윤성](https://github.com/JangYunSeong)                             |

#### BackEnd

| [<img src="https://github.com/lmw7414.png" width="100px">](https://github.com/lmw7414) | [<img src="https://github.com/olzlgur.png" width="100px">](https://github.com/olzlgur) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                          [이민우](https://github.com/lmw7414)                          |                          [이지혁](https://github.com/olzlgur)                          |

#### Data

| [<img src="https://github.com/ezzkimm.png" width="100px">](https://github.com/ezzkimm) |
| :------------------------------------------------------------------------------------: |
|                          [김은정](https://github.com/ezzkimm)                          |

## 기술 스택

#### Front-End

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React 18-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Create React App-09D3AC?style=for-the-badge&logo=Create%20React%20App&logoColor=white">

<img src="https://img.shields.io/badge/Styled component-DB7093?style=for-the-badge&logo=Styled%20Components&logoColor=white">

<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logoColor=white">

### Back-end

<img src="https://img.shields.io/badge/Java8-007396?style=for-the-badge&logo=Java&logoColor=white">
<img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">

### Data

## 프로젝트 구조

```
src
│  district.json
│  index.css
│  index.tsx
│  
├─api
│      changeWeatherData.ts
│      getWeatherData.ts
│      postWeatherData.ts
│      
├─components
│  │  App.tsx
│  │  CategorySelect.tsx
│  │  Deck.tsx
│  │  Error.tsx
│  │  ItemSelector.tsx
│  │  OptionHeader.tsx
│  │  Pill.tsx
│  │  ResultCalendar.tsx
│  │  ResultDetail.tsx
│  │  Stack.tsx
│  │  StepHeader.tsx
│  │  WeatherMain.tsx
│  │  WeatherScoreList.tsx
│  │  
│  ├─Loader
│  │      index.css
│  │      Loader.tsx
│  │      
│  └─styles
│          common.ts
│          
├─icon
│      Arrow.tsx
│      Down.tsx
│      Warning.tsx
│      
├─pages
│  │  Main.tsx
│  │  Option.tsx
│  │  OptionResult.tsx
│  │  
│  └─option
│          StepOne.tsx
│          StepThree.tsx
│          StepTwo.tsx
│          
├─routes
│      RootRouter.tsx
│      
├─store
│      store.ts
│      
└─types
        apiTypes.ts
        component-props.ts
        districtType.ts
        storeType.ts
```
## 프로젝트 상세정보

### 메인화면

현재 자신의 위치의 날씨와 날씨 점수, 그리고 시간대별 날씨를 알 수 있습니다.

![main](https://user-images.githubusercontent.com/46878756/170858774-5f3b7d7f-2a00-4ef7-bbbe-9fdd80b0aa77.png)

### 날짜 선택

약속을 잡을 날짜들을 선택합니다.

![step1](https://user-images.githubusercontent.com/46878756/170858715-ae6ab953-25cd-47bc-a644-c7f70477c3ff.png)

### 지역 선택

약속이 있는 지역을 선택합니다.

![step2](https://user-images.githubusercontent.com/46878756/170858711-1183e7e5-7d91-46e4-8503-d592a4e9b30d.png)

### 카테고리 선택

위의 카테고리를 선택하면 약속의 종류에 따라서 날씨 우선순위가 변경됩니다. 약속의 종류에 따라서 날씨 점수 산정방법을 커스텀 할 수 있습니다.

![step3](https://user-images.githubusercontent.com/46878756/170858718-5f0e9fd5-9b2d-4f7e-bd67-8853f13e969e.png)

### 결과

결과창은 날씨점수의 순위별로 날씨, 자외선, 습도, 미세먼지 농도, 최고 & 최저기온 그리고 날씨 점수를 보여줍니다. 옆으로 드래그 하면 다음 순위의 날짜를 확인 할 수 있습니다.  

![result](https://user-images.githubusercontent.com/46878756/170858720-81c81779-1301-4b05-8ad0-b3d35eec893c.png)

### 스와이프 창

해당 창을 옆으로 드래그 하면 결과를 다시 확인 할 수 있습니다.

![swipe](https://user-images.githubusercontent.com/46878756/170858721-f550afa9-5a67-4cc2-80d7-2c254e6cbe48.png)



