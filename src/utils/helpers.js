
module.exports = {
    generateRandomNumbers(min,max){
        const results = [];
        while(results.length < 4){
            min = Math.ceil(min);
            max = Math.floor(max) + 1;
            const number = Math.floor(Math.random() * (max - min) + min); 
            if(!results.includes(number)){
                results.push(number);
            }
        }
        return results;
    }
}