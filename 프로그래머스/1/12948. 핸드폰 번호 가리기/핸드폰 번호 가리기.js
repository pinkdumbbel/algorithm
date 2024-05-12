function solution(phone_number) {
    var answer = phone_number;
    
    return phone_number.substring(0, phone_number.length-4).replace(/\d/g, '*') + phone_number.substring(phone_number.length-4);
}