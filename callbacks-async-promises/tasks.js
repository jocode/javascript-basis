const util = require('util');
const sleep = util.promisify(setTimeout)

module.exports = {

    async taskOne(){
        try {
            await sleep(3000);
            return 'Primer tarea';
        } catch(e){
            console.log(e);
        }
    },

    async taskTwo(){
        try {
            await sleep(2000);
            return 'Segunda tarea';
        } catch (error) {
            console.log(error);
        }
    }

};