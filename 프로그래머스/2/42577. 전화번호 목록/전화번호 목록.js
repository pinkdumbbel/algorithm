function solution(phone_book) {
    
    return !phone_book.sort()
                      .some((s, i) => i ? s.startsWith(phone_book[i-1]) : false);
}