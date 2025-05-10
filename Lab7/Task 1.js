const graph = {
    1: { 3: 4, 2: 8, 6: 1, 5: 11 },
    2: { 1: 8, 3: 5, 4: 5 },
    3: { 2: 5, 6: 4, 1: 4 },
    4: { 2: 5, 5: 3 },
    5: { 4: 3, 1: 11, 6: 3 },
    6: { 1: 1, 3: 4, 5: 3 },
};

function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];
    const paths = {};

    for (const vertex in graph) {
        distances[vertex] = Infinity;
        paths[vertex] = [];
    }
    distances[start] = 0;
    paths[start] = [start];
    queue.push({ vertex: start, distance: 0 });

    while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const current = queue.shift();
        const currentVertex = current.vertex;

        if (visited[currentVertex]) continue;
        visited[currentVertex] = true;

        for (const neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                paths[neighbor] = [...paths[currentVertex], neighbor];
                queue.push({ vertex: neighbor, distance: distance });
            }
        }
    }

    return { distances, paths };
}

const startVertex = 4;
const result = dijkstra(graph, startVertex);

console.log("Найкоротші відстані від вершини", startVertex, "до інших:");
console.log(result.distances);

console.log("Шляхи:");
for (const vertex in result.paths) {
    console.log(`${vertex}: ${result.paths[vertex].join(' -> ')}`);
}