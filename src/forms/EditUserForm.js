import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name : </label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Age : </label>
      <input type="text" name="age" value={user.age} onChange={handleInputChange} />
      <label>Gender : </label>
      { user.gender === "Male" ? 
      (<>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleInputChange} checked></input>
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="Female" onChange={handleInputChange}></input>
           <label for="female">Female</label></>) : 
      (<>
        <input type="radio" id="male" name="gender" value="Male" onChange={handleInputChange}></input>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" onChange={handleInputChange} checked></input>
         <label for="female">Female</label></>) }
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm