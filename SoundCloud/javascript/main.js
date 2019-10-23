// client_id: "cd9be64eeb32d1741c17cb39e41d254d";
/* 1. 검색 */
// const inputArea = document.querySelector("#js-search-input");
// inputArea.addEventListener("click", () => {
//   const keyword = inputArea.innerHTML;
//   SoundCloudAPI.renderTracks(keyword);
// });

const SoundCloudAPI = {
  init: () => {
    /* 2. SoundCloud API  사용하기 */
    SC.initialize({
      client_id: "cd9be64eeb32d1741c17cb39e41d254d"
    });
  },
  getTracks: input => {
    SC.get("/tracks", {
      q: input,
      license: "cc-by-sa"
    }).then(function(tracks) {
      console.log(tracks);
      SoundCloudAPI.renderTracks(tracks);
    });
  },
  renderTracks: tracks => {
    const searchResults = document.querySelector("#js-search-results");
    searchResults.innerHTML = null;
    tracks.forEach(tracks => {
      /* 3. 카드 보여주기 */

      //card
      const card = document.createElement("div");
      card.classList.add("card");

      //image
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");

      const imageImg = document.createElement("img");
      imageImg.classList.add("image_img");
      imageImg.src =
        tracks.artwork_url || "https://lorempixel.com/100/100/abstract";

      //contents
      const content = document.createElement("div");
      content.classList.add("content");

      //Header
      const header = document.createElement("div");
      header.classList.add("header");

      const link = document.createElement("a");
      link.href = tracks.permalink_url;
      link.target = "_blank";
      link.innerHTML = tracks.title;

      //Button
      const button = document.createElement("div");
      button.classList.add("ui", "bottom", "attached", "button", "js-button");
      button.addEventListener("click", e => {
        SoundCloudAPI.addPlayList(tracks.permalink_url);
      });

      const icon = document.createElement("i");
      icon.classList.add("add", "icon");

      const buttonText = document.createElement("span");
      buttonText.innerHTML = "Add to playlist";

      // 조립!
      imageDiv.appendChild(imageImg);

      header.appendChild(link);
      content.appendChild(header);

      button.appendChild(icon);
      button.appendChild(buttonText);

      card.appendChild(imageDiv);
      card.append(content);
      card.appendChild(button);

      searchResults.appendChild(card);
    });
  },
  addPlayList: track_url => {
    SC.oEmbed(track_url).then(oEmbed => {
      const playbox = document.createElement("div");
      playbox.innerHTML = oEmbed.html;
      //   UI.sideBar.appendChild(playbox); // 아래에 계속 추가.
      UI.sideBar.insertBefore(playbox, UI.sideBar.firstChild); //최신순 정렬
      localStorage.setItem("playlist", UI.sideBar.innerHTML); // 재생목록 저장.
    });
  }
};

const UI = {
  inputArea: document.querySelector("#js-search-input"),
  sideBar: document.querySelector("#js-playlist"),
  resetButton: document.querySelector("#js-reset"),
  setInputArea: () => {
    UI.inputArea.addEventListener("keyup", e => {
      if (e.which === 13) SoundCloudAPI.getTracks(UI.inputArea.value);
    });
  },
  setSearchButton: () => {
    const searchButton = document.querySelector("#js-search-icon");
    searchButton.addEventListener("click", () => {
      SoundCloudAPI.getTracks(UI.inputArea.value);
    });
  },
  setPlaylist: () => {
    UI.sideBar.innerHTML = localStorage.getItem("playlist");
  },
  setResetButton: () => {
    UI.resetButton.addEventListener("click", () => {
      localStorage.clear();
      UI.sideBar.innerHTML = null;
    //   location.reload;
    });
  }
};
SoundCloudAPI.init();
UI.setInputArea();
UI.setSearchButton();
UI.setPlaylist();
UI.setResetButton();
