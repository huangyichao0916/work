import Mock from 'mockjs';
const totalChoicenessData = require('./totalChoiceness.json')
const urlReg = /mock\/discover\/totalChoiceness(\/all)?/;

const data = Mock.mock(urlReg, function (option) {
    const { url } = option;
    const havaAll = url.match(urlReg)[1]

    if (!havaAll) {//如果URL中带有/all，那么就返回所有数据
        let randomNumArr = [];
        while (randomNumArr.length < 4) {
            const randomNum = Math.floor(Math.random() * 40)
            randomNumArr.push(randomNum)
            randomNumArr = [...new Set(randomNumArr)]
        }

        const resArr = randomNumArr.map(item => totalChoicenessData[item])

        return resArr;
    }else{
        return totalChoicenessData;
    }
})

export default data;