import { useForm } from "@inertiajs/react";
import {route} from 'ziggy-js';
const BtnLogout = ()=> {
    const {processing,post} = useForm();
    const handleLogout = ()=>{
        post(route('logout'));
    }
    return(
    <>
     <button disabled={processing} onClick={handleLogout}>Logout</button>
    </>)
}

export default BtnLogout;