import data from "./data-plain.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface INode {
  id: string;
  fileName: string;
  children: string[];
  root?: boolean;
}

type TData = INode[];

const File = ({ name }: { name: INode["fileName"] }) => {
  const color = name.endsWith(".server.tsx") ? "blue" : "green";
  return <li style={{ color: color }}>{name}</li>;
};

const Folder = ({ node, allNodes }: { node: INode; allNodes: TData }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <li>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {node.fileName}
      </button>
      {isExpanded && (
        <ul>
          {node.children.map((item) => {
            const childNode = data.find((obj) => obj.id === item) as INode;
            return <Node node={childNode} allNodes={allNodes} key={uuidv4()} />;
          })}
        </ul>
      )}
    </li>
  );
};

const Node = ({ node, allNodes }: { node: INode; allNodes: TData }) => {
  if (node.children.length === 0) {
    return <File name={node.fileName} />;
  } else {
    return <Folder node={node} allNodes={allNodes} />;
  }
};

const FileSystemPlainDS = () => {
  const startingNode = data.find((item) => item.root === true) as INode;
  return (
    <ul>
      <Node node={startingNode} allNodes={data} />
    </ul>
  );
};

export default FileSystemPlainDS;
