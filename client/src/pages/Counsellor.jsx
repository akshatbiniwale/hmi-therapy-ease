import React from "react";
import "../css/Counsellor.css";
import MessageSection from "./MessageSection";

export default function Counsellor() {
  const [messageCount, setMessageCount] = React.useState(0);
  const [messages, setMessages] = React.useState([]);
  const [healthScoreData, setHealthScoreData] = React.useState({
    labels: [],
    data: [],
  });

  // Dummy data for messages and health score
  React.useEffect(() => {
    // Fetch messages and health score data from API or any other source
    const dummyMessages = ["Message 1", "Message 2", "Message 3"];
    const dummyHealthScoreData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      data: [80, 85, 90, 85, 88],
    };

    // Set the state variables with dummy data
    setMessageCount(dummyMessages.length);
    setMessages(dummyMessages);
    setHealthScoreData(dummyHealthScoreData);
  }, []);

  return (
    <>
      <div className="center mt-3 mb-3 ml-3">
        Good Morning, <span className="font-bold">Vineet!</span>
      </div>

      <div className="rounded-[16px] border-[1px_solid_#F4F4F4] bg-[#F8F6F6] m-[0_14px_20px_9px] flex flex-row justify-between p-[20.5px_11.5px_17.5px_14.5px] w-[calc(100%_-_23px)] box-sizing-border">
        <span class="break-words font-['Urbanist'] font-normal text-[14px] tracking-[-0.1px] leading-[1.429] text-[#707070]">
          “It is better to conquer yourself than to win a thousand battles”
        </span>
        <span>
          <img
            src="src\images\quotes.png"
            alt="quote"
            class="w-[20px] h-[20px]"
          />
        </span>
      </div>

      <div className=" ml-3  m-[0_0_15px_0] inline-block self-start break-words font-['Montserrat'] font-bold text-[17px] text-[var(--blue,#04004F)]">
        Today's Plan
      </div>

      <div className="card-container">
        <div className="card">
          <div className="text">
            <h2>Hatim</h2>
            <p>10:00 am</p>
          </div>
          <div className="image-container">
            <div className="profile-image">
              <img src="src\images\profile.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="text">
            <h2>Meditate</h2>
            <p>15 Minutes</p>
          </div>
          <div className="image-container">
            <div className="profile-image">
              <img src="src\images\profile.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="text">
            <h2>Session</h2>
            <p>2 Hours</p>
          </div>
          <div className="image-container">
            <div className="profile-image">
              <img src="src\images\clock.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        <div class="card-green">
          <div class="text-center">
            <h2>
              <span className="underline">Let's Go</span>
            </h2>
          </div>
        </div>
      </div>


      {/* <MessageSection
        messageCount={messageCount}
        messages={messages}
        healthScoreData={healthScoreData}
      /> */}

    </>
  );
}
