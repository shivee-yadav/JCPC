import Draggable from "react-draggable";
import Logo from "../assets/JioCloudPC.png";
import { useNavigate } from "react-router-dom";
import { MdShortcut } from "react-icons/md";
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const { isShutdown, setIsShutdown, logout } = useAuth();

  function handleFadeOutClick() {
    setIsShutdown(false);
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
    }, 1000);
    logout();
    navigate("/");
  }

  return (
    <>
      {isShutdown && (
        <>
          <audio src="/audio/shutdown.mp3" autoPlay />
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ease-in-out ${
              fadeOut ? "opacity-0" : "opacity-100"
            } z-50`}
            onClick={handleFadeOutClick}
          >
            <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
              <img
                src="/chromeshutdown.png"
                alt="Random"
                className="w-full object-cover rounded-lg shadow-lg"
              />
              <div className="text-white">BYE BYE👋🏻</div>
            </div>
          </div>
        </>
      )}
      <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-400 to-pink-600">
        <Draggable bounds="parent" defaultPosition={{ x: 25, y: 60 }}>
          <div
            className="w-[100px] h-[85px] text-center"
            onDoubleClick={() => {
              navigate("/accops/dashboard");
            }}
          >
            <img
              src={Logo}
              alt="JioCloudPc logo"
              className="w-[50px] h-[50px] rounded-lg block mx-auto mb-3 "
            />
            <MdShortcut className="absolute top-10 left-4 bg-blue-600 rounded-sm w-5" />
            JioCloudPC
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default Home;
