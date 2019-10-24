// const promise = new Promise((resolve, reject) => {
//     //Async 작업이 성공하면 resolve, 실패하면 reject
//     resolve("성공했어요!");
//     reject("실패했어요 ㅠㅠ.");
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     ;

// -------------------------------------------------------------------------------
// const getAccount = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const number = Math.floor(Math.random() * 100); // 0~99 까지 랜덤.
//         if (number % 2 === 1) resolve({ id: 1, balance: 200 }); // 2로 나눈 나머지가 1이면 = 홀수이면 계좌정보 가져오기
//         else reject(new Error("계좌에 접근할 수 없습니다.")); // 짝수이면 에러 반환.
//     }, 2000);
// });

// getAccount
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//     ;


// -------------------------------------------------------------------------------
function getUser(id) {
    console.log("유저를 찾고 있습니다.");

    const users = [
        { id: 1, githubId: "kim" },
        { id: 2, githubId: "lee" },
        { id: 3, githubId: "park" },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) resolve(user);
            else reject(new Error("유저정보가 없습니다."))
        }, 2000);
    });
};

function getRepo(githubId) {
    console.log("Github 리포를 찾는 중입니다.");
    const repos = [
        { githubId: "kim", commitId: 2 },
        { githubId: "lee", commitId: 1 },
        { githubId: "park", commitId: 5 },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const repo = repos.find(repo => repo.githubId === githubId);
            if (repo) resolve(repo);
            else reject(new Error("리포를 찾을 수 없습니다."));
        }, 2000);
    });
}

function getCommit(commitId) {
    console.log("커밋 정보를 찾는 중 입니다.");
    const commits = [
        { commitId: 1, content: "나는 이 모씨에 아들 방원이다." },
        { commitId: 2, content: "나는 김씨입니다." },
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const commit = commits.find(commit => commit.commitId === commitId);
            if (commit) resolve(commit);
            else reject(new Error("커밋 정보를 찾을 수 없습니다."));
        }, 2000);
    });
}


getUser(2)
    .then(user => { console.log(user); return getRepo(user.githubId); })
    .then(repo => { console.log(repo); return getCommit(repo.commitId); })
    .then(commit => console.log(commit))
    .catch(err => console.error(err))
    ;



