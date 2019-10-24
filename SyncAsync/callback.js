console.log("코드 시작!");
const user = getUser(1);
console.log(user);
// user를 입력해서 user의 repo를 찾고, repo에서 commit내용을 보려면...... 무한 콜백.?!
const userCallback = getUserCallback(1, user => {
    console.log(user);

    getRepo(user.githubId, repo => {
        console.log(repo);

        getCommits(repo.commitId, commit => {
            console.log(commit);
        })
    });
});
console.log(user);
console.log("코드 끝!");

const users = [
    { id: 1, githubId: "kim" },
    { id: 2, githubId: "lee" },
];

function getUser(id) {  
    let user;
    setTimeout(() => {
        user = users.find(user => user.id === id);
    }, 2000);

    return user;
}

function getUserCallback(id, callback) {
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        callback(user);
    }, 2000);
}

function getRepo(githubId, callback) {
    const repos = [
        { githubId: "kim", commitId: 1 },
        { githubId: "lee", commitId: 2 },
    ]
    setTimeout(() => {
        const repo = repos.find(repo => repo.githubId === githubId);
        callback(repo);
    }, 2000);
}

function getCommits(commitId, callback) {
    const commits = [
        { commitId: 1, contents: "안녕하세요." },
        { commitId: 2, contents: "안녕하세요." },
    ]
    setTimeout(() => {
        const commit = commits.find(commit => commit.commitId === commitId);
        callback(commit);
    }, 2000);
}