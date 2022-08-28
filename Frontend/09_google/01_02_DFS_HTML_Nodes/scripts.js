(() => {
  let counter = 0;
  const runDFS = (elem) => {
    // do something with elem
    if (node instanceof HTMLElement && !(node instanceof HTMLScriptElement)) {
      elem.classList.add(`dfs-${counter}`);
      counter++;
    }
    // Run recursion on child nodes
    elem.childNodes.forEach((node) => runDFS(node));
  };
  runDFS(document.body);
})();
