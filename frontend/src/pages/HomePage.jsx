import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import inputs from "../constant/inputData";
import { addUser } from "../redux/userReducer/action.user";
import FormInput from "../components/formInput/FormInput";
import UserList from "../components/userList/UserList";
import { toast } from 'react-toastify';
const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store?.usersReducer?.users);
  const [values, setValues] = useState({
    username: "",
    mobile: "",
    email: "",
    address: "",
    profilepic: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const userExists = users.find((item) => item.email === values.email);

    if (userExists) {
      toast.error("User already exits")
    } else {
      dispatch(addUser(values)).then(res => {
        if (res === 201) {
          toast.success("User added successfully",{ autoClose: 1500 });
        } else {
          toast.error("Username exits",{ autoClose: 1500 });
        }
      }).catch(err => {
        console.log(err);
      })

    }


  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <div className="__register_form__">
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
          {inputs?.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button type="submit">Add User</button>
        </form>
      </div>

      {/*------------  list of the user ------------ */}
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default HomePage;
