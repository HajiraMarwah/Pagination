import React , {useState , useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';

const HookFive =()=>
{
    const temp={"name":"Ramesh","mobile":"9999","city":"Bangalore","photo":"1.jpg"};
    
    const [user,updateUser]=useState([temp]);

    const{id}=useParams();

    const getUser = ()=>
    {
        fetch("user.json")
        .then(response=>response.json())
        .then(result=>updateUser(result))
    }

    useEffect(()=>{         // Execute 1 time automatically
        getUser();
    },[true])

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-info"> ReactJs Hooks useEffect Example</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center mb-5">{user[id].name} </h3>
                    {/* we can add names*/}
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">

                    <ul className="list-group">
                        <li className="list-group-item active">Customer List</li>
                        {
                            user.map((xuser,index)=>
                            {
                                return(
                                    <li className="list-group-item" key={index}>
                                        <Link to={`/${index}/hook5`}>{xuser.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-5">
                    <div className="p-4 border">
                     <h4 className="text-success">About :  <spam className="text-dark"> {user[id].name}</spam></h4>
                        <p>Mobile - {user[id].mobile}</p>
                        <p>Mobile - {user[id].city}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src={user[id].photo} className="img-fluid rounded-circle" />
                </div>
            </div>
        </div>
    )
}

export default HookFive;