import  { createContext, useState, useEffect } from "react";
import axios from "axios";

// how data will look
interface User {
  data: {
    id: string;
    email: string;
  } | null;
  error: string | null;
  loading: boolean;
};

// user context, that can also update the state
const UserContext = createContext<
  [User, React.Dispatch<React.SetStateAction<User>>]
>([
    { 
        data: null, 
        loading: true, 
        error: null 
    }, () => {}
]);

const UserProvider = ({ children }: any) => {

  // add state and set it to intial state
  const [user, setUser] = useState<User>({
    data: null,
    loading: true,
    error: null,
  });

  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  const fetchUser = async () => {
    // get the data
    const {  data: response } = await axios.get("http://localhost:8080/auth/me");

    if (response.data && response.data.user) {
        setUser({
        data: {
          id: response.data.user.id,
          email: response.data.user.email,
        },
        loading: false,
        error: null,
      });
    } else if (response.data && response.data.errors.length) {
      setUser({
        data: null,
        loading: false,
        error: response.errors[0].msg,
      });
    }
  };  

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );



}

export { UserContext, UserProvider };