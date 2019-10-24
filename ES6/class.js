// 객체 지향 프로그래밍 이란? 
// 객체... 추상화... : 딱 필요한 뼈대 만들어 놓고, 여기저기 갖다 붙여 사용.

class Car { // 객체
    constructor(car) { // 추상화; new Car 할 때 constructor 실행됨.
        this.name = car.name;
        this.price = car.price;
        this.year = car.year;
        console.log(car, "생성됨.");
    }

    drive() { // method
        console.log(this.name, "부릉부릉");
    }
}

class SuperCar extends Car {
    constructor(options) {
        super(options); // 상위 constructor 실행. 규칙임.
        console.log("슈퍼카가 생성되었습니다.")
    }

    booster() {
        console.log("부아아아앙!!~~!@!~@");
    }
}

// 갖다 쓰기
const avante = new Car({
    name: "아반떼",
    price: 2500,
    year: 2019,
});
console.log(avante);

const morning = new Car({
    name: "모닝",
    price: 1200,
    year: 2020,
});

morning.drive();

const 벤틀리 = new SuperCar({
    name: "벤틀리",
    price: 999999999999,
    year: 2030,
});

벤틀리.drive();
벤틀리.booster();


// 실습 1 - RPG 게임 개발 중...
// Monster 클래스 instance는 생성될 때, health가 100
// constructor 는 options라는 인자
// options 에는 name 이라는 키
// Monster를 만들고 피카츄라는 이름을 가진 몬스터를 생성.

class Monster {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
    }

}

const 피카츄 = new Monster({ name: "피카츄" });
console.log(피카츄);

// 실습 2
// Monster 클래스의 자식 Dinosaur를 만들고,
// 생성자 함수는 같고,
// Dinosaur는 몸통박치기 메소드가있음.
// 몸통박치기는 다른 몬스터의 인스턴스를 인자로 받고,
// 결과로 인자로 받는 몬스터의 health를 10 깎습니다.
// Tirano.몸통박치기(피카츄); => console.log(피카츄);
class Dinosaur extends Monster {
    constructor(options) {
        super(options);
    }

    몸통박치기(monster) {
        monster.health -= 10;
    }
}

const Tirano = new Dinosaur({ name: "tirano" });
Tirano.몸통박치기(피카츄);
Tirano.몸통박치기(피카츄);
console.log(피카츄);