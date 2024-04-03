import React from "react";
import "../css/Counsellor.css";
import LineChart from "./LineChart"; // Import the LineChart component

const Message = ({ profilePic, username, message, isLast }) => (
  <div
    className="message-row"
    style={!isLast ? { borderBottom: "1px solid #ccc" } : {}}
  >
    <div className="profile-info">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="username">{username}</div>
    </div>
    <div className="message" style={{}}>
      {message}
    </div>
  </div>
);

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  person1: {
    name: "Person 1",
    scores: [30, 50, 25, 85],
  },
  person2: {
    name: "Person 2",
    scores: [60, 65, 70, 75],
  },
};

const Counsellor = () => {
  return (
    <>
      <div className="center mt-3 mb-3 ml-3">
        Good Morning, <span className="font-bold">Vineet!</span>
      </div>

      <div className="rounded-[16px] border-[1px_solid_#F4F4F4] bg-[#F8F6F6] m-[0_14px_20px_9px] flex flex-row justify-between p-[20.5px_11.5px_17.5px_14.5px] w-[calc(100%_-_23px)] box-sizing-border">
        <span className="break-words font-['Urbanist'] font-normal text-[14px] tracking-[-0.1px] leading-[1.429] text-[#707070]">
          “It is better to conquer yourself than to win a thousand battles”
        </span>
        <span>
          <img
            src="src\images\quotes.png"
            alt="quote"
            className="w-[20px] h-[20px]"
          />
        </span>
      </div>

      <div className="ml-3 m-[0_0_15px_0] inline-block self-start break-words font-['Montserrat'] font-bold text-[17px] text-[var(--blue,#04004F)]">
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
              <img src="src\images\profile.png" alt="" />
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
              <img src="src\images\profile.png" alt="" />
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
              <img src="src\images\clock.png" alt="" />
            </div>
          </div>
        </div>

        <div className="card-green">
          <div className="text-center">
            <h2>
              <span className="underline">Let's Go</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Message Section */}

      <div className="left-section">
        <div className="message-section">
          <Message
            profilePic="src\images\profile.png"
            username="User1"
            message="Lorem ipsum dolor sit amet"
            isLast={false} // Assuming this is not the last message
          />
          <Message
            profilePic="src\images\profile.png"
            username="User1"
            message="Lorem ipsum dolor sit amet"
            isLast={false} // Assuming this is not the last message
          />
          <Message
            profilePic="src\images\profile.png"
            username="User1"
            message="Lorem ipsum dolor sit amet"
            isLast={false} // Assuming this is not the last message
          />
          <Message
            profilePic="src\images\profile.png"
            username="User2"
            message="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            isLast={true} // Assuming this is the last message
          />
          {/* Add more messages as needed */}
        </div>
      </div>

      {/* Chart Section */}
      <div className="right-section">
        {/* Render the LineChart component and pass chartData as prop */}
        <LineChart data={chartData} />
      </div>
    </>
  );
};

export default Counsellor;
