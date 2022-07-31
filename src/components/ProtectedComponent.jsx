import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  //memanfaatkan loading supaya gak ada flashing halaman
  if (loading) {
    return;
  } else {
    return children;
  }
};

export default ProtectedComponent;
