import  {useState, useEffect} from "react";
import { query, getDocs, collection, addDoc, where } from 'firebase/firestore';
import db from "../services/firebase";
import { idSelector } from "../features/selectors";
import { useSelector } from "react-redux";

const useGetAndUpdateUser = (value) => {

    const [profile, setProfile] = useState([]);
    const user = useSelector(idSelector);
    console.log(user)
    const getUserInfo = async () => {
        const q = query(collection(db, "users"), where("uid", "==", user))
        const doc = await getDocs(q);
        console.log(doc)
       
        return doc;
    }
    useEffect(() => {
        (async() => {
            setProfile(await getUserInfo());
        })()
    }, [])

    return profile;
}

export default useGetAndUpdateUser;