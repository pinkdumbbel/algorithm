function solution(my_string, overwrite_string, s) {
    const overwirteString = my_string.substring(0,s) + overwrite_string;
    var answer = overwirteString + my_string.substring(overwirteString.length);
    
    return answer;
}