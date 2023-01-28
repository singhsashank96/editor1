import React, { useEffect, useState } from 'react'


function CheckBox() {

  const userData = [
    { name: "Jei" },
    { name: "Ajay" },
    { name: "Amit" },
    { name: "Ankul" },
    { name: "mansi" },
    { name: "Jeet" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" }
    
  ];

  const [ box, setBox] = useState([ ]);


  const [users, setUsers] = useState([]);



  useEffect(() => {
  
    setBox(userData);
    setUsers(userData);
  }, [])



  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };



  return (
<>

<div className="container my-4" style={{ width: "500px" }}>
  <h2>ReactJs Task CheckBox</h2>
  <form className="form w-100">
    <h3>Select Users</h3>
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        name="allSelect"
      
        checked={!users.some((user) => user?.isChecked !== true)}
        onChange={handleChange}
      />
      <label className="form-check-label ms-2">All Select</label>
    </div>
    {users.map((user, index) => (
      <div className="form-check" key={index}>
        <input
          type="checkbox"
          className="form-check-input"
          name={user.name}
          checked={user?.isChecked || false}
          onChange={handleChange}
        />
        <label className="form-check-label ms-2">{user.name}</label>
      </div>
    ))}
  </form>
  </div>
</>
  
  )
}

export default CheckBox
