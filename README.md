# Project 1 - Naonna

<div style="display:flex;justify-content:center;"><img alt="나온나 로고"src="public/image/logo/NaonnaMain.png"/></div>
<a href="https://naonna.netlify.app">프로젝트 바로가기</a>

## 목차

- [🧑‍🤝‍🧑 팀원 소개](#팀원-소개)
- [🛠️기술 스택](#기술-스택)
- [✨ 프로젝트 소개](#프로젝트-소개)

### 팀원 소개

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

### 기술 스택

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

### 프로젝트 소개

밖에서 만나는 약속을 잡을 때, 신경쓰지 않을 수 없는 중요한 요소, 날씨! GDSC KNU 1기 프로젝트 1팀에서 제작한 서비스 '나온나'에서. 약속을 잡을 위치를 지정하면, 일주일간의 날씨를 계산해서, 여러분들께 최적의 날씨를 추천해 드립니다!

### Project Structure

```
src
 ┣ api
 ┃ ┣ changeWeatherData.ts
 ┃ ┣ getWeatherData.ts
 ┃ ┗ postWeatherData.ts
 ┣ components
 ┃ ┣ Loader
 ┃ ┃ ┣ index.css
 ┃ ┃ ┗ Loader.tsx
 ┃ ┣ styles
 ┃ ┃ ┗ common.ts
 ┃ ┣ App.tsx
 ┃ ┣ CategorySelect.tsx
 ┃ ┣ Deck.tsx
 ┃ ┣ Error.tsx
 ┃ ┣ ItemSelector.tsx
 ┃ ┣ OptionHeader.tsx
 ┃ ┣ Pill.tsx
 ┃ ┣ ResultCalendar.tsx
 ┃ ┣ ResultDetail.tsx
 ┃ ┣ Stack.tsx
 ┃ ┣ StepHeader.tsx
 ┃ ┣ WeatherMain.tsx
 ┃ ┗ WeatherScoreList.tsx
 ┣ icon
 ┃ ┣ Arrow.tsx
 ┃ ┣ Down.tsx
 ┃ ┗ Warning.tsx
 ┣ pages
 ┃ ┣ option
 ┃ ┃ ┣ StepOne.tsx
 ┃ ┃ ┣ StepThree.tsx
 ┃ ┃ ┗ StepTwo.tsx
 ┃ ┣ Main.tsx
 ┃ ┣ Option.tsx
 ┃ ┗ OptionResult.tsx
 ┣ routes
 ┃ ┗ RootRouter.tsx
 ┣ store
 ┃ ┗ store.ts
 ┣ types
 ┃ ┣ apiTypes.ts
 ┃ ┣ component-props.ts
 ┃ ┣ districtType.ts
 ┃ ┗ storeType.ts
 ┣ district.json
 ┣ index.css
 ┗ index.tsx
```
