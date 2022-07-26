import { useState } from "react";
import data from "./data-nested.json";
import { v4 as uuidv4 } from "uuid";

// Solution with nested JSON data
interface INode {
  id: string;
  fileName: string;
  children: null | INode[];
}

const Folder = ({ node }: { node: INode }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <li>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {node.fileName}
      </button>
      {isExpanded && (
        <ul>
          {node.children?.map((item) => (
            <Node node={item} key={uuidv4()} />
          ))}
        </ul>
      )}
    </li>
  );
};

const File = ({ name }: { name: INode["fileName"] }) => {
  let color = name.endsWith(".server.tsx") ? "blue" : "green";
  return <li style={{ color: color }}>{name}</li>;
};

const Node = ({ node }: { node: INode }) => {
  if (node.children === null) {
    return <File name={node.fileName} />;
  } else {
    return <Folder node={node} />;
  }
};
const FileSystem = () => {
  return (
    <ul>
      <Node node={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </ul>
  );
};

export default FileSystem;
