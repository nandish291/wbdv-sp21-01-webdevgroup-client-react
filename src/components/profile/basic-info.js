import {React, useState} from 'react';

const BasicInfo = ({user,updateUser}) => {

    const [cachedItem, setCahedItem] = useState(user)
    const [editing, setEditing] = useState(false)

    const saveName = () => {
        setEditing(false)
    }

    return(
        <div className="container-fluid">

            <div className="row">

                <div className="col-sm-6">

                    <div>
                        First Name
                    </div>

                    <div>
                        {
                            !editing &&
                            <div>
                                {user.firstName}
                            </div>
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            firstName: e.target.value
                                        })}
                                    value={cachedItem.firstName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div className="col-sm-6">

                    Last Name
                    <div>
                        {
                            !editing &&
                            user.lastName
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            lastName: e.target.value
                                        })}
                                    value={cachedItem.lastName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            <div className="row mt-3">

                <div className="col-sm-6">

                    Username

                    <div>
                        {
                            !editing &&
                            user.userName
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        userName: e.target.value
                                    })}
                                    value={cachedItem.userName}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

                <div className="col-sm-6">

                    Password
                    {/*<div>*/}
                    {/*    {user.password}*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    {*/}
                    {/*        !editing &&*/}
                    {/*        user.userName*/}
                    {/*    }*/}
                    {/*</div>*/}

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            password: e.target.value
                                        })}
                                    value={cachedItem.password}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>

            <div className="row mt-3">

                <div className="col-sm-6">

                    Date of Birth
                    <div>
                        {
                            !editing &&
                            user.dob
                        }
                    </div>

                    <div>
                        {
                            editing &&
                            <div>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            dob: e.target.value
                                        })}
                                    value={cachedItem.dob}
                                    className="form-control"/>
                            </div>
                        }
                    </div>

                </div>

            </div>


            <br/>
            <div className="row mt-3">

                <div className="col-6">

                </div>

                <div className="col-6">


                    { editing&&
                    <div>
                        <button className="btn btn-success"
                                onClick={()=>{
                                    updateUser(cachedItem.id,cachedItem)
                                    setEditing(false)
                                }
                                }
                        >Save</button>
                        &nbsp;
                        &nbsp;
                        <button className="btn btn-danger"
                                onClick={() => { setEditing(false) }}
                        >Cancel</button>
                    </div>
                    }
                    {
                        !editing&&
                    <button className="btn btn-primary"
                            onClick={() => { setEditing(true) }}
                    >Edit profile</button>
                    }
                </div>

            </div>

        </div>
    )

}
export default BasicInfo