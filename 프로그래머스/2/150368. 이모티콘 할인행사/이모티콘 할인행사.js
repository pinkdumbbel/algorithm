function solution(users, emoticons) {
    const ratios = [10,20,30,40];
    const len = emoticons.length;
    let maxSubs = 0;
    let maxSales = 0;
    
    const discounts = [];
    
    const dfs = (L, arr) => {
        if(L === len) {
            discounts.push(arr);
            return;
        }
        
        for(let i = 0; i < ratios.length; i++) {
            dfs(L+1, [...arr, ratios[i]])
        }
    };
    
    dfs(0, []);
    
    for(const discountRates of discounts) {
        let subs = 0;
        let sales = 0;
        
        for(const [minRate, maxPrice] of users) {
            let sum = 0;
            
            for(let i = 0; i < len; i++) {
                const ePrice = emoticons[i];
                const discount = discountRates[i];
                
                if(discount >= minRate) {
                    const disPrice = ePrice-(ePrice*(discount/100));
                    sum+=disPrice;
                }
            };
            
            if(sum >= maxPrice) subs++;
            else sales += sum;
        };
        
        if(subs > maxSubs || (subs === maxSubs && sales > maxSales)){
            maxSubs = subs;
            maxSales = sales;
        }
    };
    
    return [maxSubs, maxSales];
}