const { taskOne, taskTwo } = require('./tasks');

async function main() {
    try {
        console.time('Midiendo el tiempo');
        const results = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd('Midiendo el tiempo')

        console.log('Task one returned', results[0]);
        console.log('Task two returned', results[1]);
    } catch (error) {
        console.log(error);
    }
}

main();