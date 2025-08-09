function solution(users, emoticons) {
    const ratios = [10,20,30,40];
    let maxSubscribers = 0;
    let maxSales = 0;
    
    const dfs = (L, arr) => {
        if(L === emoticons.length) {
            let subscribers = 0;
            let sales = 0;
            
            for(const [minDiscountRate, maxPrice] of users) {
                let sum = 0;
                
                for(let i = 0; i < emoticons.length; i++) {    
                    const ratio = arr[i];
                    const emoticon = emoticons[i];
                    
                    if(minDiscountRate <= ratio) {
                        const discountedPrice = emoticon-(emoticon*(ratio/100));
                        sum += discountedPrice;
                    }
                };
                
                if(sum >= maxPrice) subscribers++;
                else sales += sum;
            };
            
            if(
               (subscribers > maxSubscribers) || 
               (subscribers === maxSubscribers && sales > maxSales)
              ) {
                maxSubscribers = subscribers;
                maxSales = sales;
            };
                
            return;
        };
        
        for(let i = 0; i < ratios.length; i++) {
            dfs(L+1, [...arr, ratios[i]]);
        }
    };
    
    dfs(0, []);
    
    return [maxSubscribers, maxSales];
}