class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }
  dfsRecursively(startingVertex) {
    const results = [];
    const visited = {};
    const helper = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return helper(neighbor);
      });
    };
    helper(startingVertex);
    return results;
  }
  dfsIteratively(startingVertex) {
    const result = [];
    const visited = {};

    const stack = [];

    stack.push(startingVertex);
    visited[startingVertex] = true;

    let cur;
    while (stack.length) {
      cur = stack.pop();
      result.push(cur);
      this.adjacencyList[cur].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
