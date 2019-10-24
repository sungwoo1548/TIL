// 1. 함수 선언 후 / 호출 해야 함.
async function getInfo() {
    const user = await getUser(1);
    const repo = await getRepo(user.githubId);
    const commit = await getCommit(repo.commitId);
    console.log(commit);
}
// getInfo();

// IIFE 함수 만들고 즉시 실행 (함수 내용)();    ..뒤에 붙은 (); 이 기호가 실행을 의미.
(async function () {
    const user = await getUser(1);
    const repo = await getRepo(user.githubId);
    const commit = await getCommit(repo.commitId);
    console.log(commit);
})();


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