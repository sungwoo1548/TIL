import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

import authAxios from './authAxios';

export default function App() {
  const responseGoogle = async (res) => {
    const token = res.tokenId;
    const expires = new Date(res.tokenObj.expires_at).toUTCString();

    document.cookie = `Authorization=${token};expires=${expires}`;


    const { email, name } = res.profileObj;

    const { data: checkUser } = await axios.get(`http://localhost:3000/user/check?email=${email}`)
    if (checkUser.result) {
      alert("로그인 성공");
      // react-router-dom => history.push("/home") 리디렉션
    } else if (checkUser.result === false) { //회원가입
      await axios.post("http://localhost:3000/user/join", { name, email });
      alert("회원가입 및 로그인 성공");
      // redirect 등 처리... 추가하면 됨.
    } else {
      console.log(checkUser.error)
    }
  }
  const responseGoogleError = (response) => {
    console.log(response);
  }

  const getUser = async () => {
    const { data } = await authAxios().get("http://localhost:3000/user");
    console.log(data);
  }
  return (
    <div>
      <GoogleLogin
        clientId="747240589554-385s5oq3in99gr1pmv4f04g9a4vsaqb0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={'single_host_origin'}
      />
      <button onClick={getUser}>유저정보 가져오기</button>
    </div>
  )
}
