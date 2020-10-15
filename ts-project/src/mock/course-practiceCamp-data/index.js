import Mock from 'mockjs';
const practiceCampData = require('./practiceCamps.json')

const data = Mock.mock('mock/course/practiceCamp',() => practiceCampData)

export default data;