import Mock from 'mockjs';
const totalChoicenessData = require('./totalChoiceness.json')

const data = Mock.mock('mock/discover/totalChoiceness',function(){
    let randomNumArr = [];
    while (randomNumArr.length < 4) {
        const randomNum = Math.floor(Math.random()*40)
        randomNumArr.push(randomNum)
        randomNumArr = [...new Set(randomNumArr)]
    }
    
    const resArr = randomNumArr.map(item => totalChoicenessData[item])

    return resArr;
})

export default data;