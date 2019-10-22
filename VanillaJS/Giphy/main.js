var API_KEY = "34hv8XzSGYWvjUkLhlya9bV5PoQ8elv9";

const inputArea = document.querySelector("#js-input");
const button = document.querySelector("#js-button");
const resultArea = document.querySelector("#result-area");

function searchAndPush(keyword) {
  // api 이용 data 받아오기
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parseData = JSON.parse(rawData);
    // console.log(parseData);
    pushToDom(parseData);
  });
}

function pushToDom(parseData) {
  // 받아온 data 화면에 뿌리기.
  resultArea.innerHTML = null;
  const dataSet = parseData.data;

  dataSet.forEach(el => {
    // 받아온 data 반복문으로 꺼내기
    const imageURL = el.images.fixed_height.url;
    const alt = el.title;

    resultArea.innerHTML += `<img src="${imageURL}" alt="${alt}"/>`;
  });
}

button.addEventListener("click", () => {
  // 검색 버튼 클릭 때
  searchAndPush(inputArea.value);
});

inputArea.addEventListener("keypress", e => {
  // enter 키보드 누를때
  if (e.which === 13) searchAndPush(inputArea.value);
});
