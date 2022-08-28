// PART 1: Generating Checkboxes using JSON object
const checkListJSON = {
  label: "Root checklist",
  children: [
    {
      label: "Level 1 a",
      children: [
        {
          label: "Level 2 a",
        },
        {
          label: "Level 2 b",
        },
      ],
    },
    {
      label: "Level 1 b",
      children: [
        {
          label: "Level 2 c",
          children: [{ label: "Level 3 a" }],
        },
        {
          label: "Level 2 d",
        },
      ],
    },
  ],
};

const root = document.getElementById("root");

function createUl(node) {
  const li = createLi(node);

  const subUl = document.createElement("ul");
  // Recursion for all child nodes
  node.children.forEach((item) => {
    subUl.appendChild(createNode(item));
  });

  li.appendChild(subUl);

  return li;
}

function createLi(node) {
  const li = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = node.label;
  label.htmlFor = node.label.toLowerCase().replaceAll(" ", "_");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  checkbox.id = node.label.toLowerCase().replaceAll(" ", "_");

  li.appendChild(label);
  li.appendChild(checkbox);
  return li;
}

function createNode(node) {
  if (!node.children) {
    return createLi(node);
  } else {
    return createUl(node);
  }
}

function createCheckboxes(list) {
  const fragment = document.createDocumentFragment();
  const container = document.createElement("ul");
  container.id = "checkbox-container";

  const node = createNode(list);
  container.appendChild(node);
  return fragment.appendChild(container);
}

function setUp() {
  const checkboxes = createCheckboxes(checkListJSON);
  root.appendChild(checkboxes);
}

setUp();

// PART 2: Building the nested checkbox Logic
const checkContainer = document.getElementById("checkbox-container");
checkContainer.addEventListener("click", checkStates)

function checkNode(node) {
    node.childNodes.forEach((child) => {
        if(child instanceof HTMLUListElement) {
            checkNode(child);
        } else if (child instanceof HTMLInputElement) {
            checkSibling(child);
        }
    })
}

function checkStates(e) {
    if(e.target.type === "checkbox"){
        checkNode(checkContainer);
    }
}
