import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai"
import { CiEdit } from "react-icons/ci"
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../../redux/userReducer/action.user";

import "./userlist.css";
import { toast } from 'react-toastify';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store?.usersReducer?.users);

  const [editUser, seEditUser] = useState(null);
  const [editProfile, setEditProfile] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editMobile, setEditMobile] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAddress, setEditAddress] = useState("");

  const handleEdit = (id) => {
    const data = users?.find((item) => item._id === id);
    seEditUser(id);
    setEditProfile(data.profilepic);
    setEditUsername(data.username);
    setEditMobile(data.mobile);
    setEditEmail(data.email);
    setEditAddress(data.address);
  };

  const handleUpdate = (id) => {
    const newValue = {
      username: editUsername,
      mobile: editMobile,
      email: editEmail,
      address: editAddress,
      profilepic:
        editProfile ??
        "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png",
    };

    dispatch(updateUser(id, newValue));
    seEditUser(null);
    toast.success("User updated success",{ autoClose: 1500 })
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success("User deleted success",{ autoClose: 1500 })
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="view_scenario_data">
      <table>
        <thead>
          <tr>
            <th>Sl no.</th>
            <th>Profile Pic</th>
            <th>Username</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                {editUser === user?._id ? (
                  <input
                    type="text"
                    value={editProfile}
                    onChange={(e) => setEditProfile(e.target.value)}
                    required
                    className="_edit_input_"
                  />
                ) : (
                  <div className="__user__profile__pic__">
                    <img src={user.profilepic} alt="profile pic" />
                  </div>
                )}
              </td>
              <td>
                {editUser === user?._id ? (
                  <input
                    type="text"
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                    required
                    className="_edit_input_"
                  />
                ) : (
                  `${user.username}`
                )}
              </td>
              <td>
                {editUser === user?._id ? (
                  <input
                    type="text"
                    value={editMobile}
                    minLength="10"
                    maxLength="10"
                    onChange={(e) => setEditMobile(e.target.value)}
                    required
                    className="_edit_input_"
                  />
                ) : (
                  `${user.mobile}`
                )}
              </td>
              <td>
                {editUser === user?._id ? (
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    required
                    className="_edit_input_"
                  />
                ) : (
                  `${user.email}`
                )}
              </td>
              <td>
                {" "}
                {editUser === user?._id ? (
                  <input
                    type="text"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    required
                    className="_edit_input_"
                  />
                ) : (
                  `${user.address}`
                )}
              </td>
              <td>
                {editUser === user?._id ? (
                  <button type="button" onClick={() => handleUpdate(user?._id)}>
                    Save
                  </button>
                ) : (
                  <div className="_user_actin_">
                    <button type="button" onClick={() => handleEdit(user?._id)}>
                      <CiEdit />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(user?._id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
