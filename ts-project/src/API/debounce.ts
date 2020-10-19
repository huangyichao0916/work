const debounce: Function = (func: Function, delay: number): Function => {
    let timer: null | number = null;
    return function (...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};

export default debounce;