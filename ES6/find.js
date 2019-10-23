const users = [
    { name: "ironman" },
    { name: "thor" },
    { name: "hulk" },
]

// es5
let user = null;
for (var i = 0; i < users.length; i++) {
    if (users[i] === "thor") {
        user = users[i];
        break;
    }
};

//es 6
user2 = users.find(user => {
    return user.name === "hulk";
});

console.log('user2 : ', user2);


// 실제로는?
const data = [  //db조회 결과
    { id: 1, name: "tony" },
    { id: 2, name: "hulk" },
    { id: 3, name: "thor" },
    { id: 4, name: "pepper" },
];

const whatWeWant = data.find(e => e.id === 3);




// 실습1
const products = [
    { name: "banana", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "apple", type: "fruit" },
    { name: "egg", type: "food" },
    { name: "yogurt", type: "food" },
];

// products 중 이름이 egg인 제품을 추출
selectedProduct = products.find(el => el.name === "egg");
console.log('선택된 제품은',selectedProduct);