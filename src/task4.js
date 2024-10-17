import { useState,useEffect } from "react";


function FetchData(){

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
            .then(data => setUserData(data));
            
    }, []);
    console.log(userData)

 return( 
    <div>
    {userData && (
        <div>
            <h2>User Information</h2>
            <p>
                User Id:
                {userData.userId}
            </p>
            <p>
                Id: {userData.id}
            </p>
            <p>
                Title: {userData.title}
            </p>
            <p>
                Completed: {userData.completed?"true":"false"}
            </p>
           
        </div>
    )}
</div>)
}

export default FetchData