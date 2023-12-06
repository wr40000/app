import {v4 as uuidv4} from 'uuid'

//获取token
export const getUUID = () => {
    let token = localStorage.getItem("UUIDTOKEN");
    if(!token){
        token = uuidv4();
        localStorage.setItem("UUIDTOKEN", token)
    }
    return token
  };