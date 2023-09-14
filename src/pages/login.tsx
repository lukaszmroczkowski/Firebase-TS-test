import { auth, provider } from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom";

export const Login = () =>{

    const navigate = useNavigate();

    const signInWithGoogle = async () =>{
      const result = await signInWithPopup(auth, provider); //were signing in with a popup, user logs in in the popup, info will be sent back to the result variable
      console.log(result);
      navigate('/');
    }



    return <div>
        Login Page
        <p>Sign in with Google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
}