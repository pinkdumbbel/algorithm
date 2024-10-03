function solution(new_id) {
    let str = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, "").replace(/\.{2,}/g, '.').replace(/^\.+|\.+$/g, '') || 'a';


    if(str.length > 15) {
        let s = str.substring(0,15);
        
        while(s[s.length-1] === '.'){
            s = s.replace(/\.+$/g, '');
        };
        
        return s;
    };

    if(str.length < 3) {
        let s = str;
        
       while(s.length < 3){
         s += s[s.length-1]
       };
        
       return s;
    };

    return str;
}