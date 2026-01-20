import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import axios from "axios";
import "./CoursesCont.scss";
import Delete from "./Delete";
import { useWatch } from "./Watch";
import ModalMessage from "./AlertModal/ModalMessage";
import CourseDetailsModal from "./CourseDetailsModal";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookedUsersModal from "./bookedUserModal";
const CoursesContaner = ({ type = "all" }) => {

  const state = useSelector((state) => state.data);
  const {
    courses,
    userDetails,
    admin,
    setCourseDetails,
    setEditOrAdd,
    reload,
    setReload,
    setLoading,
    showDetails,
    setShowDetails,
    selectedCourse,
    setSelectedCourse,
    serverUrl,
    categories,
    websiteTitle,
  } = useBetween(state.useShareState);
  const location = useLocation();
  const { courseType, img } = location.state || {};

  const [showBookedUsers, setShowBookedUsers] = useState(false);
  const [bookedUsersList, setBookedUsersList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const openBookedUsers = (users) => {
    setBookedUsersList(users);
    setShowBookedUsers(true);
  };

  const closeBookedUsers = () => setShowBookedUsers(false);

  const [indexDelete, setIndexDelete] = useState(-1);
  const { handleWatch, showModal, setShowModal, modalMsg, modalTitle, setModalMsg } = useWatch();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  const openDetails = (course) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setSelectedCourse(null);
    setShowDetails(false);
  };

  const deleteCourse = (index) => {
    setLoading(true);
    const CourseToDelete = courses[index]._id;
    axios
      .delete(`${serverUrl}/api/courses/${CourseToDelete}`)
      .then(() => {
        setReload(!reload);
        setLoading(false);
      })
      .catch(() => {
        alert(" Error while deleting the course, please try again.");
      });
  };

  const editCourse = (item) => {

    if (item) {
      setEditOrAdd("Edit");
      setCourseDetails({ ...item, id: item._id });
    }
  };


  const handleCheckout = async (courseName, price, courseId) => {
    if (!userDetails.id) {
      setModalMsg("Please log in to book and watch the videos");
      setShowModal(true);
      return;
    }

    try {
      const res = await axios.post(`${serverUrl}/api/payments/create-checkout-session`, {
        courseName,
        price,
        courseId,
        userName: userDetails.name,
      });

      window.location.href = res.data.url;
    } catch {
      alert("Error creating checkout session please try again");
    }
  };


  const playCoursesList = () => {
    let displayedCourses = [...courses];

    displayedCourses.forEach(course => {

    });
    if (courseType) {

      displayedCourses = displayedCourses.filter(
        course => course.categories?.includes(courseType)
      );

    }


    if (displayedCourses.length === 0)
      return (
        <p className="NoCourses">
          No {type === "recommended" ? "recommended" : ""} courses available.
        </p>
      );


    const visibleCourses =
      type === "recommended"
        ? displayedCourses.slice(0, visibleCount)
        : displayedCourses;

    return visibleCourses.map((item, index) => {
      const isAlreadyBooked = userDetails.courses.some((c) => c._id === item._id);
      const uniqueUsers = item.bookedUsers
        ? item.bookedUsers.filter(
          (user, index, self) =>
            index === self.findIndex((u) => u.email === user.email)
        )
        : [];


      return (
        <div
          className="CourseItem"
          key={item._id || index}
          onClick={() => openDetails(item)}
          style={{ cursor: "pointer" }}
        >
          <div className="imageWrapper">
            {/* {item.isNotLive && <i className="notLive">is Not Live </i>} */}
            <div className="blurLayer"></div>
            <img src={item.img} alt="Course" />
            <div className="description">
              <div className="text">{item.description}</div>
            </div>

            {/* <span
              className="particNum"
              style={{
                background: userDetails.email === admin.email ? "#3b3E79" : "#ACABAD",
              }}
              onClick={(e) => {
                if (userDetails.email === admin.email) {
                  e.stopPropagation();
                  openBookedUsers(item.bookedUsers);
                }
              }}
            >
              <i className="fas fa-user"></i> {uniqueUsers.length - 1}
            </span> */}
          </div>

          <div className="details">
            <div className="bottomRow">
              {/* {item.coursePlace == "Online Course" &&  */}
              <div className="price">
                £ {item.coursePlace == "Online Course" ? (
                  <span className="cost">{item.price}{item.price === 0 && <p>(Free)</p>}</span>
                ) : <div className=" cost hiddenPrice">***</div>}

              </div>
              {userDetails.email === admin.email && type !== "recommended" && (
                <div className="icons" onClick={(e) => e.stopPropagation()}>
                  <i
                    className="fas fa-edit"
                    onClick={() => editCourse(item)}
                    title="Edit"
                  ></i>
                  <i
                    className="fas fa-trash"
                    onClick={() => setIndexDelete(index)}
                    title="Delete"
                  ></i>
                </div>
              )}
              {/* {type == 'recommended' && (
                <div className="courseType">
                  {item.coursePlace}
                </div>)
              } */}
            </div>

            <div className="name">{item.name}</div>

            <div className="date">
              <span>
                <i className="fas fa-calendar-alt"></i>  ({item.date}) -({item.dateEnd})
              </span>


            </div>
            <div className="date">
              <span>
                <i className="fas fa-clock"></i> ({item.time})-({item.endtime})   US Time
              </span>
            </div>

            <p className="Categories">
              <strong>Course Categories: </strong>
              <span className="categoriesText">{item.categories.join(', ')}</span>
            </p>
            {item.coursePlace == 'Online Course' ? (
              isAlreadyBooked || userDetails.email === admin.email ? (
                <button
                  className="courseBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    const now = new Date();
                    const courseDate = new Date(item.date);
                    const [endHour, endMinute] = item.endtime.split(":");
                    const endDateTime = new Date(courseDate);
                    endDateTime.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

                    if (now > endDateTime) {
                      setModalMsg("Sorry, this course has already taken place.");
                      setShowModal(true);
                    } else {
                      handleWatch(item);
                    }
                  }}
                >
                  Join
                </button>
              ) : (
                <button
                  className="courseBtn"
                  onClick={(e) => {
                    e.stopPropagation();

                    const now = new Date();
                    const courseDate = new Date(item.date);
                    const [endHour, endMinute] = item.endtime.split(":");
                    const endDateTime = new Date(courseDate);
                    endDateTime.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

                    if (now > endDateTime) {
                      setModalMsg("Sorry, this course has already taken place.");
                      setShowModal(true);
                      return;
                    }

                    handleCheckout(item.name, item.price, item._id);
                  }}
                >
                  Book
                </button>

              )
            ) : (<button
              className="courseBtn"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = "mailto:hello@madeformanners.com";
              }}
            >
              Enquire today
            </button>
            )}
          </div>
        </div >
      );
    });
  };

  const totalRecommended = courses.filter(
    (course) =>
      course.recommended &&
      (userDetails.email === admin.email ||
        (course.isNotLive && course.link) ||
        !course.isNotLive)
  ).length;

  return (
    <div className="itemsContaner">

      <div className="mainContaner">
        {Array.isArray(courses) ? (
          playCoursesList()
        ) : (
          <p className="NoCourses">Loading...</p>
        )}
      </div>


      {type === "recommended" && totalRecommended > 4 && (
        <div className="btn-wrapper1">
          {visibleCount < totalRecommended && (
            <button
              className="show-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 4)}
            >
              Show More
            </button>
          )}
          {visibleCount > 4 && (
            <button
              className="show-less-btn"
              onClick={() => setVisibleCount((prev) => Math.max(prev - 4, 4))}
            >
              Show Less
            </button>
          )}
        </div>
      )}

      <Delete index={indexDelete} setIndexDelete={setIndexDelete} onDelete={deleteCourse} />

      <ModalMessage
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMsg}
        title={modalTitle}
      />

      <CourseDetailsModal
        show={showDetails}
        onClose={closeDetails}
        course={selectedCourse}
        userDetails={userDetails}
        onBook={handleCheckout}
        onWatch={handleWatch}
      />

      <BookedUsersModal
        show={showBookedUsers}
        onClose={closeBookedUsers}
        users={bookedUsersList}
        userDetails={userDetails}
        admin={admin}
      />
    </div>
  );
};

export default CoursesContaner;
