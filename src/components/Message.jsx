import { message } from "../mocks/message";

export default function Message() {
  return (
    <div>
      <h1 className="font-extrabold	text-9xl text-white">{message.codError}</h1>
      <p className="font-normal	text-lg text-white">{message.description}</p>
    </div>
  );
}
