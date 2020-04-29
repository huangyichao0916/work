function getSum(num1,num2){
    if (arguments.length<2) {
        console.error('传入的参数不够');
        return ;
    }
    if (typeof num1 != 'number'||typeof num2 != 'number') {
        console.error('请输入number类型的数据');
        return;
    }
    return num1+num2;
}
console.log(getSum(1,2));