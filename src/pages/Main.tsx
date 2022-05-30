import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Stack from 'components/Stack';
import Pill from 'components/Pill';
import { WeatherScoreList } from 'components/WeatherScoreList';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from 'components/Error';
import Loader from 'components/Loader';

const Main = () => {
  return (
    <Stack
      style={{
        minWidth: 390,
        minHeight: 844,
        padding: 30,
        backgroundColor: '#f5f5f5',
        fontFamily: 'AppleSDGothicNeoB00',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: 5 }}>
        <img
          src="/image/logo/NaonnaMain.png"
          alt="weather Icon"
          style={{ width: '50%', height: '100%' }}
        />
      </header>
      <Stack style={{ height: '100%' }}>
        <Link to="/option/1">
          <Pill
            style={{
              position: 'relative',
              padding: 15,
              width: '100%',
              border: 'transparent',
              fontSize: '20px',
              color: 'white',
              backgroundColor: '#001f8e',
              marginBottom: '20px',
              fontFamily: 'AppleSDGothicNeoB00',
            }}
          >
            <span style={{ fontSize: 16, marginLeft: 10 }}>
              약속을 정해보세요
            </span>
            <span style={{ position: 'absolute', right: '25px' }}>&gt;</span>
          </Pill>
        </Link>
        <ErrorBoundary fallback={<Error text="위치 로딩에 실패하였습니다." />}>
          <Suspense fallback={<Loader />}>
            <WeatherScoreList />
          </Suspense>
        </ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default Main;
