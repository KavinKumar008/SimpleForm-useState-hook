import React, { useState } from 'react'

const UserDetails = () => {

  const [user, setUser] = useState({
    fname: "kavin",
    lname: "kumar",
    age: 24
  })

  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h2>
        {user.fname} {user.lname},{user.age}
      </h2>
      <form>
      </form>
      <input type="text"
        placeholder='first name'
        onChange={changeHandler}
        value={user.fname}
        name='fname'
      />

      <input type="text"
        placeholder='last name'
        onChange={changeHandler}
        value={user.lname}
        name='lname'
      />

      <input type="number"
        placeholder='enter your Age'
        onChange={changeHandler}
        value={user.age}
        name='age'
      />
    </>
  )
}

export default UserDetails