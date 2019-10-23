// -------------------------------------------------------------
// 첫 번째 방법, 3초마다 키워드 골라서 요청 결과 중 랜덤으로 화면 표시.

var API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";

const contents = ["cat", "happy", "ah", "kim"];
// contents를 검색해서 3초 마다 돌아가면서 보여줌

const searchResult = [];
const tvArea = document.querySelector("#js-tv-area");

function searchContents() {
  const randomNum = Math.floor(Math.random() * contents.length);
  const keyword = contents[randomNum];

  const URL = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parseData = JSON.parse(rawData);
    console.log(parseData.data[1]);
    showTv(parseData);
  });
}

function showTv(parseData) {
  const randomNum = Math.floor(Math.random() * parseData.data.length);
  const dataSet = parseData.data[randomNum];
  const imageURL = dataSet.images.fixed_height.url;
  const alt = dataSet.title;
  tvArea.innerHTML = `<img src="${imageURL}" alt="${alt}" class="img-center"/>`;
}

setInterval(searchContents, 3000);

// 3초마다 요청은 좋지 않음...
// -------------------------------------------------------------
// 비동기 방법
// 처음에 contents 에 해당하는 키워드 데이터 모두 받아와서 처리

// const contents = ["cat", "happy", "ah", "kim"];

// const searchResult = [];
// const tvArea = document.querySelector("#js-tv-area");

// function searchContents() {
//   const randomNum = Math.floor(Math.random() * contents.length);
//   const keyword = contents[randomNum];
//   const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

//   const GiphyAJAXCall = new XMLHttpRequest();
//   GiphyAJAXCall.open("GET", URL, false); // 동기처리
//   GiphyAJAXCall.send();

//   GiphyAJAXCall.addEventListener("load", e => {
//     const rawData = e.target.response;
//     const parseData = JSON.parse(rawData);
//     searchResult.push(parseData);
//   });
//   console.log(searchResult);
// }
// searchContents();
