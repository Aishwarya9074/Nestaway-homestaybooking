import { jwtDecode } from "jwt-decode";


export const saveCreds = (token) => {
  const decodedToken = jwtDecode(token); // Decode the JWT token
  localStorage.setItem('token', token);
  localStorage.setItem('id', decodedToken.id);
  localStorage.setItem('role', decodedToken.role);
  if (decodedToken.hostId) {
    localStorage.setItem('hostId', decodedToken.hostId);
  }
};
export const isAuthenticated=()=>{//checktoken is valid or not

  try{
    const decoded=jwtDecode(localStorage.getItem('token'))
    console.log(decoded)
    const currentDate=Date.now()/1000
    return currentDate<decoded.exp
  }
  catch(e){
    return false
  }

}
export const checkrole=(passingRoles)=>{//check role
  const role=localStorage.getItem('role')
  return role===passingRoles

}






// console.log(saveCreds)
