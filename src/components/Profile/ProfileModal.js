import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ProfileModal.scss";
import "./Profile.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";


const ProfileModal = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    img: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('')
  const state = useSelector((state) => state.data);
  const { serverUrl, setLoading, userDetails, setUserDetails } = useBetween(state.useShareState);
  const [deleteModal, setDeleteModal] = useState(false);

  const { name, img, email, password } = userDetails;

  useEffect(() => {

    if (userDetails) {
      setFormData({
        id: userDetails.id || userDetails._id || "",
        name: name || "",
        email: email || "",
        password: password || "",
        confirmPassword: password || "",
        img: img ,
      });
    }
  }, [userDetails]);
console.log(userDetails)
  const handleDelete = async () => {
    try {
      setLoading(true);
      const userId = userDetails.id || userDetails._id;
      await axios.delete(`${serverUrl}/api/users/deleteUser/${userId}`);
      setTimeout(() => {
        setUserDetails({
          id: '',
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          img: '',
          courses: [],
        });

        localStorage.removeItem("userID");
        navigate('/');
        setLoading(false);
      })
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting account");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setError('')
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {

        const compressedFile = await imageCompression(file, {
          maxSizeMB: 0.7,
          maxWidthOrHeight: 1000,
          fileType: "image/jpeg",
          useWebWorker: true,
        });
        const formData = new FormData();
        formData.append("file", compressedFile);
        formData.append("upload_preset", "react_upload");
        formData.append("cloud_name", "diurythny");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/diurythny/image/upload",
          formData
        );
     
        setFormData((prev) => ({ ...prev, img: res.data.secure_url }));
         } catch (err) {
        console.error("Error uploading image", err);
        alert("Failed to upload image");
      }
     
    }
  };
  const handleClose = () => {
    window.location.reload();
  }
  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${serverUrl}/api/users/${formData.id}`,
        formData
      );
      setUserDetails(res.data.user);
      // handleClose();
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (err) {

      setError(err.response?.data?.message)
      setLoading(false);
    }

  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    // <Modal show={show} onHide={handleClose} className="ProfileModal" centered>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Edit Profile</Modal.Title>
    //   </Modal.Header>

    //   <Modal.Body>
    <div className="ProfileModal ProfilePage">
      <div className="ProfileHeader">
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)} >
          <i className="fas fa-pen"></i>
        </button>
        <button className="delete-btn" onClick={() => setDeleteModal(true)}>
          <i className="fas fa-trash" style={{ color: 'rgb(243, 98, 98)' }}></i>
        </button>
      </div>
      {error != '' && <p className="noti">{error}</p>}
      <div className="mb-2">
        {formData.img && (
          <img
            src={formData.img}
            alt="Preview"
            className="img-preview mt-2"
          />
        )}
        <label>Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
          disabled={!isEditing}
        />
      </div>

      <div className="mb-2">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          disabled={!isEditing}
        />
      </div>
      <div className=" mb-2">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          disabled={!isEditing}
        />
      </div>

      {/* Password */}
      <div className=" mb-2 position-relative">
        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          disabled={!isEditing}
        />
        <i
          className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"
            } eye-icon`}
          onClick={() => setShowPassword(!showPassword)}
        ></i>
      </div>

      {/* Confirm Password */}
      <div className=" mb-2 position-relative">
        <label>Confirm Password</label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-control"
          disabled={!isEditing}
        />
        <i
          className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"
            } eye-icon`}
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        ></i>
        <span className="btns">
          <Button variant="secondary" onClick={handleClose} className="btn secodary">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} className="btn primary">
            Save
          </Button>
        </span>
      </div>


      {/* Delete Account Modal */}
      <Modal show={deleteModal} onHide={() => setDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your account? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={handleClose}>
    //       Cancel
    //     </Button>
    //     <Button variant="primary" onClick={handleSave}>
    //       Save
    //     </Button>
    //   </Modal.Footer>
    // </Modal> 
  );
};

export default ProfileModal;
