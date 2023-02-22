import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-[#30457B] to-[#450060]">
      <div className="h-screen bg-contain bg-no-repeat xl:bg-[url('/octo.png')] bg-left-bottom">
        <Header />
        <div className="h-full flex flex-col gap-10  justify-center text-center xl:text-end md:mr-10 xl:w-1/5 ml-auto">
          <Message />
          <Button title="Back to Home" />
        </div>
      </div>
    </div>
  );
}

export default App;
