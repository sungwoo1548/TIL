// es5
function add(a, b) {
    return a + b;
}

// es 6
const multiply = (a, b) => { return a * b; }
const multi = (a, b) => a * b; // 윗줄과 같은 뜻, 1줄이면 중괄호 생략, 리턴만 하면 리턴 생략

const squre = a => a * a;
const logging = () => console.log('logging....');

const obj = {
    name: 'tset',
    sayHello: function () {
        console.log("hello!!");
    },
    sayBye() {
        console.log("Bye~~~");
    }
}

obj.name;
obj.sayHello();
obj.sayBye();
