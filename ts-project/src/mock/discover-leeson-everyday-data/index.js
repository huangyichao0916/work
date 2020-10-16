import Mock from 'mockjs';
const lessonEverydayData = require('./lessonEverydayData.json')

const data = Mock.mock('mock/discover/lessonEveryday',function(){
    let randomNumArr = [];
    while (randomNumArr.length < 4) {
        const randomNum = Math.floor(Math.random()*60)
        randomNumArr.push(randomNum)
        randomNumArr = [...new Set(randomNumArr)]
    }
    
    const resArr = randomNumArr.map(item => lessonEverydayData[item])

    return resArr;
})

export default data;