function solution(sizes) {
    let widths = [];
    let heights = [];

    sizes.forEach((size) => {
        const [width, height] = size;
        widths.push(Math.max(width, height));
        heights.push(Math.min(width, height));
     })
    
    return Math.max(...widths) * Math.max(...heights)
}