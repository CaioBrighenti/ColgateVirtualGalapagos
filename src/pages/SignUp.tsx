import Page from "../atomic-design/templates/Page";
import React, { useState } from "react";
import Button from "../atomic-design/atoms/Button/Button";
import { useTransitionContext } from "../contexts/TransitionContext";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import SpeechBubble from "../atomic-design/molecules/SpeechBubble/SpeechBubble";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

// function Wrapper() {
//   function handleSubmit(userMessage: string) {
//     //handle send logic
//   }
//   return <SignUp onSend={handleSubmit} />;
// }

function SignUp({ onSend }: { onSend: Function }) {
  const [tempMessage, setTempMessage] = useState<string>("");
  const [userMessages, setUserMessages] = useState<any[]>([]);
  const [botMessages, setBotMessage] = useState<any[]>(["Welcome to Galapagos! What's your name?"]);
  // let [isAnimating, setAnimating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const { startTransition } = useTransitionContext();

  const UserMessage = ({ msg }: { msg: string }) => (
    <SpeechBubble text={msg}
      color="text-dark" size="md" 
      position="left"
      bgcolor="bg-white"
    />
  );

  const BotMessage = ({ msg }: { msg: string }) => (
    <SpeechBubble text={msg}
      color="text-dark" size="md" 
      position="right"
      bgcolor="bg-white"
    />
  );
  
  function handleHeartClick(event: any) {
    setUserMessages([
      ...userMessages,
      <AiFillHeart className="text-red-500" />,
    ]);
  }
  
  function handleSend(event: any) {
    setUserMessages([...userMessages, tempMessage]);
    setBotMessage([...botMessages,"What is your password?"]);
    setTempMessage("");
    onSend(tempMessage);
    onSend(botMessages);
  }

  return <Page transition="animate-fade-in" specialcolor="bg-gradient-to-b from-sky-500 to-cyan-200">
    <div className="fixed z-20 top-10">
      <Text
        text="Sign Up for Adventure!"
        color="text-dark"
        type="heading"
       size="lg"
      />
    </div>
    

    <div className="flex mt-32 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
    <div className={"fixed left-0 bottom-0 animate-slide-up"}
      onAnimationEnd={() => setShowInfo(true)}>
    <StaticAnimal
      species="turtle"
      className="h-auto w-full translate-y-1/4"
    />
    {showInfo && (
      <div className="fixed left-1/4 bottom-1/4 translate-y-1/4">
      {botMessages.map((msg) => (
      <BotMessage msg={msg} />
      ))}
      </div>
    )}
    </div>
      <div className="fixed right-0 bottom-1/4 w-md">
        <div className="w-full h-full p-2 lg:p-10 flex flex-row h-full justify-between">
            {userMessages.map((msg) => (
            <UserMessage msg={msg} />
            ))}
        </div>
      </div>
      <div className="fixed right-0 top-3/4 h-1/12 w-6/12">
        <div className="w-full h-full p-2 flex flex-row justify-evenly">
          <input className="w-2/3 pl-5 rounded-full bg-transparent outline-none border-b border-dark hover:border-opacity-70"
            onChange={(event) => setTempMessage(event.target.value)}
            value={tempMessage}
            type="text"
            placeholder="Type your message" />
          <button onClick={handleHeartClick} id="heart-icon">
            <AiFillHeart className="text-red-500 hover:text-opacity-70" />
          </button>
          <button onClick={handleSend} id="chat-icon">
              <BiPaperPlane className="text-gray-500 hover:text-opacity-70" />
          </button>
        </div>
        <div className="w-3/4 grid justify-items-stretch">
          <button className="justify-self-end focus:ring-2" onClick={() => startTransition("/login")}>
            <Text text="Already have an account?" type="body" color="text-dark" size="sm" />
          </button>
        </div>
      </div>
    </div>
  </Page>
}

export default SignUp;

{/* <div className="float-right place-self-end">
          {userMessages.map((msg) => (
            <UserMessage msg={msg} />
          ))}
        </div> */}
