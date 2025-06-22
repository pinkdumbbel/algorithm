function solution(m, musicinfos) {    
    const getTime = (s) => {
        const [hour, minute] = s.split(':').map(Number);
        return hour*60+minute;
    };
    
    const musics = [];
    const totalMusics = [];
    musicinfos = musicinfos.map((musicinfo) => musicinfo.split(','));
    
    const regex = /C#|D#|F#|G#|A#|E#|B#|C|D|E|F|G|A|B/g;
    const oms = m.match(regex); 
    
    for(let i = 0; i < musicinfos.length; i++) {
        const [start, end, name, music] = musicinfos[i];
        const startTime = getTime(start);
        const endTime = getTime(end);
        const diff = endTime-startTime;
        const ms = music.match(regex);
        
        const repeat = Math.floor(diff/ms.length);
        const remain = diff%ms.length;
        
        const totalMusic = [];
        for(let j = 0; j < repeat; j++) {
            totalMusic.push(...ms);
        };
        totalMusic.push(...ms.slice(0, remain));
        
        for(let k = 0; k < totalMusic.length; k++) {
            if(totalMusic.slice(k, k+oms.length).join('') === m) {
                totalMusics.push([name, totalMusic]);
                break;
            }
        };
    };
    
    totalMusics.sort((a,b) => b[1].length - a[1].length)
    
    if(!totalMusics[0]) return "(None)";
    
    return totalMusics[0][0];
}
