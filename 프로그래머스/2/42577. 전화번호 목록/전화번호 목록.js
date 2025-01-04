function solution(phone_book) {
    const hashMap = new Map();

    for (let phone of phone_book) {
        hashMap.set(phone, true);
    }
    
    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.slice(0, i);
            
            if (hashMap.has(prefix) && prefix !== phone) {
                return false;
            }
        }
    }
    
    return true;
}