import Mock,{Mockjs} from 'mockjs';

const Data:Mockjs = Mock.mock('/mock/data',{
    'commodity|50':[{
        'name': /\w{5,10}/,
        'price|200-500': 300,
        'isPurchased|1':[false],
    }]
})

export default Data;