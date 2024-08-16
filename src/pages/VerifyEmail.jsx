import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../services/auth";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const handleEmailVerification = async (e) => {
    const res = await verifyEmail(token);
    if (res.error) {
      console.log(res.message);
      return;
    }
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="p-4 space-y-6 bg-white w-96">
        <h1 className="text-2xl text-center font-bold p-2 text-gray-700">
          Verify Email
        </h1>
        <div className="space-y-7 mt-8">
          <p className="text-sm">Please verify your email.</p>
          <button
            className="p-2 w-full border bg-indigo-500 text-white"
            onClick={handleEmailVerification}
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
