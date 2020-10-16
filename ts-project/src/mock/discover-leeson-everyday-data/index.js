import Mock from 'mockjs';
const lessonEverydayData = require('./lessonEverydayData.json')
const urlReg = /mock\/discover\/lessonEveryday(\/all)?/;

const data = Mock.mock(urlReg, function (option) {
    const { url } = option;
    const havaAll = url.match(urlReg)[1]

    if (!havaAll) {//如果URL中带有/all，那么就返回所有数据
        let randomNumArr = [];
        while (randomNumArr.length < 4) {
            const randomNum = Math.floor(Math.random() * 60)
            randomNumArr.push(randomNum)
            randomNumArr = [...new Set(randomNumArr)]
        }

        const resArr = randomNumArr.map(item => lessonEverydayData[item])

        return resArr;
    }else{
        return lessonEverydayData;
    }
})

export default data;