import { FormEvent, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { io, Socket } from "socket.io-client";
import "./App.css";
import { CHAT_SERVER_URL } from "./env";

let nextId = 0;

// Connection Fn
const connectChatServer = () => {
  const socket = io(CHAT_SERVER_URL, {
    transports: ["websocket"],
    path: "/",
  });
  socket.onAny((type, message) => console.log(type, message));
  return socket;
};

interface IUser {
  name: string;
  color: string;
}

const Username = ({
  user,
  isColorBlindMode,
}: {
  user: IUser;
  isColorBlindMode: boolean;
}) => {
  return (
    <b
      style={{
        color: isColorBlindMode ? "" : user.color,
      }}
    >
      {user.name}
    </b>
  );
};

const formatMessage = (body: string) => {
  // replace string LUL with user img
  let fragments = body.split("LUL");
  let result = [];
  for (let i = 0; i < fragments.length; i++) {
    let fragment = fragments[i];

    if (i > 0) {
      result.push(" haha ");
      // console.log(<img />);
      // console.log(<img style={{ width: "1rem" }} src="/LUL.png" key={i} />);
      //   result.push(<img style={{ width: "1rem" }} src="/LUL.png" key={i} />);
    }

    result.push(fragment);
  }
  console.log(body, result);
  return result;
};

function App() {
  // const [messages, setMessages] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([
    { user: { name: "test", color: "red" }, body: "HI LUL LUL OMG" },
    { user: { name: "test2", color: "blue" }, body: "AAAA LUL LUL HI" },
  ]);
  const [isColorBlindMode, setColorBlindMode] = useState<boolean>(false);
  const [draftText, setDraftText] = useState<string>("");
  // useRef to track reference of html list
  const listRef = useRef<HTMLUListElement>(null);
  // useRef to track socket connection
  const socketRef = useRef<Socket | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!socketRef.current) throw Error("Web socket not initialized!");
    let socket = socketRef.current;
    const body = draftText.trim();
    if (body === "") return;
    socket.send({
      body,
    });
    setDraftText("");
  };

  useEffect(() => {
    let socket = connectChatServer();
    // saving socket ref in useRef so that it can be used in other event handlers in same component
    socketRef.current = socket;

    const scrollToLastMessage = () => {
      let lastChild = listRef.current?.lastElementChild;
      lastChild?.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
      });
    };

    // setInterval to mimic socket data
    setInterval(() => {
      flushSync(() => {
        setMessages((m) => [
          ...m,
          {
            id: nextId++,
            body: `message ${nextId}`,
            user: { name: `kiran ${nextId}`, color: "red" },
          },
        ]);
        scrollToLastMessage();
      });
    }, 500);

    socket.onAny((type, message) => {
      if (type === "chat-message") {
        // IMPORTANT: TASK 2: SCROLLING: flushSync makes sure that the new message is set only after current DOM refresh is completely done. To avoid layout shift
        flushSync(() => {
          setMessages((m) => [
            ...m,
            {
              id: nextId++, // nextId to keep track of keys because message might be reordered
              body: message.body,
              user: message.user,
            },
          ]);
          scrollToLastMessage();
        });
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  return (
    <div className="App">
      <h2>Chat App</h2>
      <hr />
      <label>
        <input
          type="checkbox"
          checked={isColorBlindMode}
          onChange={(e) => setColorBlindMode(e.target.checked)}
        />
        Remove Colors
      </label>
      <ul ref={listRef}>
        {/* Possible code improvement: Move this messages loop to a useMemo so that it doesn't update the whole component if there is no new message and only updates if there is a new message */}
        {messages.map((msg) => (
          <li key={msg.id}>
            <Username user={msg.user} isColorBlindMode={isColorBlindMode} />
            {formatMessage(msg.body)}
          </li>
        ))}
      </ul>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={draftText}
          onChange={(e) => setDraftText(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}

export default App;
