import axios from 'axios'
import logout from '../../assets/Image/logout.png'
import course from '../../assets/Image/translator.png'
import profile from '../../assets/Image/curriculum.png'
import mycourses from '../../assets/Image/mycourses.png'

const elements = [{
    id: 0,
    text: 'Profile',
    link: '/student/profile',
    icon: profile,
  },
  {
    id: 1,
    text: 'All Courses',
    link: '/student/courses',
    icon: course,
  },
  {
    id: 2,
    text: 'My Courses',
    link: '/student/mycourses',
    icon: mycourses,
  },
  {
    id: 3,
    text: 'Logout',
    icon: logout,
    handleLogout: (e, props) => {
      e.preventDefault();
      axios.get('/api/v1/logout/')
        .then(() => {
          props.history.push('/login');
        })
    }
  }
]

export default elements;