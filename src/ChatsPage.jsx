import {
  MultiChatSocket,
  useMultiChatLogic,
  MultiChatWindow,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "4935f417-2f65-48e2-820d-2caf77292704",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
