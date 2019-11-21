# 구글인증



## 개요

1. `front` 에서  `google`인증서버로 요청
2. `google`인증서버에서 `token`을  `front`에 발급
3. `front`는 `token`을 들고 `back`에 확인 요청
4. `back`은 `google`서버에 해당 `token`을 확인 요청
5. 확인되면 `back`이 `front`에게 승인 처리해줌





## 개발 순서

1. `google cloud`에서 `API 키`발급
2. `back`에 `google-auth-library` 모듈 설치 후 `token` 검증 로직 구현
3. `front`에 `react-google-login` 모듈 설치 후 `<GoogleLogin/>` tag 삽입



## TIP

1. `goole cloud`에서 인증에 허용 할 `front` 도메인 주소 입력 ( 테스트시 `http://localhost:[port]` )
2. `front`와 `back`에서 사용되는 `clientId` 는 `google cloud`의 사용자인증정보에 있음

