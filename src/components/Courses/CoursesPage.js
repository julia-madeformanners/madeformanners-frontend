

import CourseModal from './Modal';
import CoursesContaner from './CoursesCont';
import SortAndFilter from './SortAndFilter';
import SearchBox from './Search';
import { useSelector } from 'react-redux';
import { useBetween } from 'use-between';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CoursesPage = () => {
  const state = useSelector((state) => state.data);
  const { setCourseDetails } = useBetween(state.useShareState);
  const location = useLocation();
  const { courseType } = location.state || {};

  useEffect(() => {
    setCourseDetails({
      id: '',
      name: '',
      description: '',
      date: '',
      time: '',
      endtime: '',
      price: Number,
      recommended: false,
      img: null,
      categories: [],
      bookedUsers: [],
      joinedUsers: [],
      isNotLive: false,
      categories: [],
      coursePlace: '',

    })
    window.scrollTo(0, 0);
  }, [])
 
  return (
    <div className="PageContaner">
      
      <>
        {/* <div className="recommended">
          <p className="topic">{courseType}s</p>
          <div className="line-container">
            <span className="line"></span>
            <i className="fas fa-play-circle"></i>
          </div> */}
          {/* <div className='noti'>Please be advised that once the payment for the course has been completed, cancellations and refunds are not permitted.</div> */}
        {/* </div> */}
        <div className="row1">
          <SortAndFilter />
          <SearchBox />
          <CourseModal />
        </div>

        <CoursesContaner type="all" />

      </>
    </div>
  );
};

export default CoursesPage;
