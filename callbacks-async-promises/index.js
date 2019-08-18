const { taskOne, taskTwo } = require('./tasks');

async function main() {
    try {
        console.time('Midiendo el tiempo');
        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        console.timeEnd('Midiendo el tiempo')

        console.log('Task one returned', valueOne);
        console.log('Task two returned', valueTwo);
    } catch (error) {
        console.log(error);
    }
}

main();