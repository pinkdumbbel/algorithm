function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [a, b, c] of road) {
        let existA = graph[a].find(([node, cost]) => node === b);
        let existB = graph[b].find(([node, cost]) => node === a);
        if (existA) {
            if (existA[1] > c) existA[1] = c;
            if (existB[1] > c) existB[1] = c;
        } else {
            graph[a].push([b, c]);
            graph[b].push([a, c]);
        }
    }

    const dist = Array(N + 1).fill(Infinity);
    dist[1] = 0;
    const pq = [[1, 0]]; // [노드, 거리]

    while (pq.length) {
        pq.sort((a, b) => a[1] - b[1]);
        const [cur, curDist] = pq.shift();

        if (dist[cur] < curDist) continue;

        for (const [next, cost] of graph[cur]) {
            if (dist[next] > dist[cur] + cost) {
                dist[next] = dist[cur] + cost;
                pq.push([next, dist[next]]);
            }
        }
    }

    
    return dist.filter(d => d <= K).length;
}
