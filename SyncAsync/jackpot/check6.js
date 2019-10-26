const get6 = require('./get6');
const pick6 = require('./pick6');

// get6(800)
//     .then(data => {
//         console.log(data.bnusNo);
//         console.log(data.realNumbers);
//         console.log(pick6);
//     });

async function checkNumber(회차) {
    const realData = await get6(회차);
    console.log(`${회차}회차의 보너스 번호는 : `, realData.bnusNo);
    console.log(`${회차}회차의 1등 당첨 번호는 : `, realData.realNumbers);

    // const myNumber = await pick6;
    const myNumber = [1, 4, 10, 12, 28, 26];
    console.log("내가 고른 번호는 : ", myNumber);

    // 비교 로직
    // 1. 당첨 번호 중 내가 고른 숫자와 같은 것이 있으면, 해당 숫자 따로 빼 놓고, 카운트 업.
    const matchedNumber = [];
    let matchedCount = 0;
    for (var i = 0; i < 6; i++) { // 
        if (realData.realNumbers.find(number => number === myNumber[i])) {
            matchedNumber.push(myNumber[i]);
            matchedCount += 1;
        }
    }
    // 2. 5개 맞았을 때 보너스 번호 체크
    let matchedBonus = false;
    if (matchedCount == 5) {
        if (myNumber.find(number => number === realData.bnusNo)) {
            matchedCount += 1;
            matchedBonus = true;
            matchedNumber.push([realData.bnusNo])
        }
    }
    console.log("맞은 개수는 : ", matchedCount);
    console.log("맞은 번호는 : ", matchedNumber);

    // 등수 로직
    // 1~2개 맞으면 꽝. // 3개 맞으면 5등 // 4개 맞으면 4등
    // 5개 맞으면 3등 + 5개 와 보너스 맞으면 2등 // 6개 맞으면 1등
    switch (matchedCount) {
        case 6:
            if (!matchedBonus) console.log("1등 입니다.");
            else console.log("아쉽게도..... 2등입니다.");
            break;
        case 5:
            console.log("3등 입니다.");
            break;
        case 4:
            console.log("4등 입니다.");
            break;
        case 3:
            console.log("5등 입니다.");
            break;
        default:
            console.log("꽝입니다.")

    }
    const ranked = "";

}

checkNumber(800);