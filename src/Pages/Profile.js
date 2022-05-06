import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams();
    return (
        <>
        <div>
            Profile {username}
            <button   onClick={() => {navigate("/about");}}>
                About Page
            </button>          
        </div>
      </>
     
  )
}

export default Profile