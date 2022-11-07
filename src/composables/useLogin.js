import { ref } from "vue";

// firebase imports
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not login user");
    }
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    error.value = err.message;
    isPending.value = false;
    console.error(err.message);
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
