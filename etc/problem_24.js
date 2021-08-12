function solution(n) {
    function fn(L) {
        if (L == 0) return;
        else {
            fn(L - 1);
            console.log(L);
        }
    }
    fn(n);
}

solution(3);