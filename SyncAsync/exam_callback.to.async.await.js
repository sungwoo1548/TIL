// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top movies: ', movies);
//             sendEmail(customer.email, movies, () => {
//                 console.log('Email sent...')
//             });
//         });
//     }
// });

async function getInfo(id) {
    const customer = await getCustomer(id);
    console.log("Customer :    ", customer);
    const movies = await getTopMovies();
    console.log('Top movies :   ', movies);
    const send = await sendEmail(customer.email, movies);
    console.log('Email sent...');
}
// getInfo(1);

// IIFE + try&catch
(async function (id) {
    try {
        const customer = await getCustomer(id);
        console.log("Customer :    ", customer);
        const movies = await getTopMovies();
        console.log('Top movies :   ', movies);
        const send = await sendEmail(customer.email, movies);
        console.log('Email sent...');
    } catch (error) {
        console.log(error);
    } finally {  // try 든 catch 든 마지막에 실행됨.
        console.log("DB연결 해제!")
    }
})(2);

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
            else reject(new Error("아이디에 맞는 정보가 없습니다."));
        }, 2000);
    });
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
            reject(new Error("영화정보에 접속할 수 없습니다."));
        }, 2000);
    });
}

function sendEmail(email, movies, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            reject(new Error("메일 전송에 실패 하였습니다."));
        }, 2000);
    });
}