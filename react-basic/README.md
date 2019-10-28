# git branch 이용해서 개발 환경 구축
> git branch 확인 후 (처음엔 master에 head가 있음.)
> git checkout -b [branch name] ; 브랜치 생성 후 브랜치로 head 이동.



# 리액트!
## 로컬에서 npx 로 설치하기
> npx create-react-app [folder name]
* global cli설치 하지 않아도 리액트 앱 만드는 명령어.



## 리액트 왜 쓰는가?
* front-end 프레임 웍
* facebook이 만듦.
* 사용자 인터렉션,,(user interaction)이 점점 많아짐.
* 반복되는 컴포넌트의 재사용을 위해. (유지보수 편하게,)




## 리액트 시작하기
> npm create-react-app [folder name]
> cd [folder name]



> npm start
>
> 또는 yarn start 
>
> ;명령으로 정상작동 확인.



* src 안의 파일 전부 삭제 후 index.js 생성

```js
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return <h1>Hello!!</h1>
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

* Tip!
  VS extention에서  [ ES7 React/Redux/GraphQL/React-Native snippets] 설치 후
  js파일 안에서 ...

  1. imr 약자 = import React from 'react' 로 자동입력
  2. imrd 약자 = import ReactDOM from 'react-dom' 로 자동입력

* Tip2!
  VS extention에서 [ESlint] 설치 후

  1. 콘솔에서 : yarn add eslint-config-airbnb

  2. package.json에서 : 

     ```json
     "eslintConfig": {
         "extends": [
           "react-app",
           "airbnb" // 에어비앤비 config 추가. 배열로....
         ]
     ```

  3. ㅇ



## 컴포넌트 여러 개 만들기

* Semantic ui cdn 이용.

>  https://cdnjs.com/libraries/semantic-ui 에서
>
> ![image](https://user-images.githubusercontent.com/21153016/67646668-956c4700-f972-11e9-9036-e36ef5a77a5e.png)
>
> 형광색 표시된 copy link tag 클릭후 
>
> public 의 index.html head에 추가
>
> [semantic ui doc]: https://semantic-ui.com/
>
> 문서 보고 className에 추가하면 ui 적용됨.



rfc 명령어.



