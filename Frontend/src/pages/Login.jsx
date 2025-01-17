import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "./Userprofile";
import { useAuth } from "../context/auth";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setLoading(true);
      // Simulating a delay for demonstration purposes
      setTimeout(() => {
        login(true); // Assuming `login(true)` sets the user to a logged-in state
        navigate(`/home`);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Failed to log in. Please try again later.");

      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="inline-block mt-60 animate-spin text-white rounded-full border-4 border-solid border-current border-e-transparent h-8 w-8"></div>
        </div>
      )}
      {!loading && error && (
        <div
          role="alert"
          className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div>{error}</div>
        </div>
      )}
      <form
        onSubmit={handleLogin}
        className="h-full flex justify-center items-center"
      >
        <div className="relative left-0  flex items-center justify-center  w-full flex-col  z-10">
          <div className="aspect-square w-32 h-36">
            <UserProfile />
          </div>
          <div className="mt-2 font-bold text-2xl text-white">
            <h1>Rahul Bhandari</h1>
          </div>

          {!loading && (
            <>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input pl-2 py-2 bg-blue-700  placeholder:text-white  w-72 max-w-xs focus:outline-none  rounded-md opacity-90 border-b-white border-2 mt-4  font-medium opacity-100::placeholder"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="current-password"
              />
            </>
          )}
        </div>
      </form>
    </>
  );
}

export default Login;
