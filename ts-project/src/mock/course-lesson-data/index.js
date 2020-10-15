import Mock from 'mockjs';
const courseLessons = require('./courseLessons.json')

const urlReg = /\/mock\/course\/lesson\?offset\=(\d{1,})/;

const data = Mock.mock(urlReg,function(option){
    const {url} = option;
    const offset = parseInt(url.match(urlReg)[1]);

    if (offset > 110) {
        return null;
    }

    return {
        data: courseLessons.slice(offset,offset + 10),
        offset: offset + 10
    };

    // return courseLessons.slice(offset,offset + 10);
})

export default data;