(() => {
  let counter = 0;
  const runBFS = (elem) => {
    // Run recursion on child nodes
    const children = [];
    elem.childNodes.forEach((node) => {
      // do something with elem
      if (node instanceof HTMLElement && !(node instanceof HTMLScriptElement)) {
        console.log(node)
        node.classList.add(`bfs-${counter}`);
        counter++;
      }
      children.push(node);
    });
    // Push to children array for running BFS separately
    children.forEach(c => runBFS(c))
  };
  runBFS(document.body);
})();
