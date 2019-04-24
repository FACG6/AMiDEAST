import logout from '../../assets/Image/logout.png'
import course from '../../assets/Image/translator.png'
import profile from '../../assets/Image/curriculum.png'
import mycourses from '../../assets/Image/mycourses.png'

const elements = [{
    id: 0,
    text: 'Profile',
    link: 'profile',
    icon: profile,
  },
  {
    id: 1,
    text: 'All Courses',
    link: 'courses',
    icon: course,
  },
  {
    id: 2,
    text: 'My Courses',
    link: 'mycourses',
    icon: mycourses,
  },
  {
    id: 3,
    text: 'Logout',
    link: 'logout',
    icon: logout,
  }
]

export default elements;