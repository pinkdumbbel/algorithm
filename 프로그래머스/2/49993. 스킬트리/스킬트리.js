function solution(skill, skill_trees) {
    const regex = new RegExp(`[^${skill}]`, 'g');
    
    return skill_trees.map((tree) => tree.replace(regex,''))
                      .filter((tree) => skill.startsWith(tree))
                      .length;
}