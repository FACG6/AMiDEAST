import auth from "./../../auth";
import axios from "axios";
import { toast } from "react-toastify";

const data = {
  linklist: [
    {
      fontawesome: 'fas fa-home sidebar-icon',
      title: 'Home',
      links: []
    },
    {
      fontawesome: 'fas fa-certificate sidebar-icon',
      title: 'Courses',
      links: [
        { title: 'Add Course', to: '/staff/courses/addcourse' },
        { title: 'view Course', to: '/staff/courses/viewcourse/' }
      ]
    },
    {
      fontawesome: 'fas fa-users sidebar-icon',
      title: 'Student',
      links: [
        { title: 'Add student', to: '/staff/student/addstudent' },
        { title: 'view Student', to: '/staff/student/viewstudent/' },
        { title: 'Edit Student', to: '/staff/student/editstudent' }
      ]
    }, {
      fontawesome: 'fas fa-sign-out-alt sidebar-icon',
      title: 'logout',
      links: []
      , handleLogout: (e, props) => {
        e.preventDefault();
        auth.logout(() =>
          axios.get("/api/v1/logout/").then(() => {
            toast.success('Goodbye !!');
            props.history.push("/login");

          })
        );
      }

    }
  ]
};

export default data;
