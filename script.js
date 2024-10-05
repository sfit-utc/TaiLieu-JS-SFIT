const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập số n: ', (n) => {
    n = BigInt(n); // Dùng BigInt để xử lý số lớn
    let isPrime = true;

    for (let i = 2n; i <= BigInt(Math.sqrt(Number(n))); i++) {
        if (n % i === 0n) {
            console.log('NO');
            isPrime = false;
            break;
        }
    }

    if (isPrime && n > 1n) {
        console.log('YES');
    } else if (n <= 1n) {
        console.log('NO');
    }

    rl.close();
});