import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', age: '', gender: null }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.age ) return alert("Invalid Name or Age")

				props.addUser(user)
				setUser(initialFormState)
                document.getElementById("male").checked = false;
                document.getElementById("female").checked = false;
			}}
		>
			<label>Name : </label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Age : </label>
			<input type="text" name="age" value={user.age} onChange={handleInputChange} />
            <label>Gender : </label>
            <input type="radio" id="male" name="gender" value="Male" onChange={handleInputChange} required></input>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" onChange={handleInputChange} required></input>
            <label for="female">Female</label>
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm