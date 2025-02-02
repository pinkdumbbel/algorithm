function solution(skill, skill_trees) {
    let answer = 0;
    
    const skills = skill.split('');
    const skillTrees = skill_trees.map((skillTree) => skillTree.split('').filter((skill) => skills.includes(skill)).join(''));
    
    skillTrees.forEach((st) => {
        const tmp = [];
        let flag = true;
        
        st.split('').forEach((s) => {
            tmp.push(s);
        });
        
        tmp.forEach((t, i) => {
            if(!flag) return;
            if(t !== skills[i]) {
                flag = false
            }
        });
        
        if(flag) answer++
    });
    
    return answer;
};

