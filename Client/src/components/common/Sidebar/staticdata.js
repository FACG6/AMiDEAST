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
        { title: 'Add Course', to: '/add-course' },
        { title: 'view Course', to: '/view-course' }
      ]
    },
    {
      fontawesome: 'fas fa-users sidebar-icon',
      title: 'Student',
      links: [
        { title: 'Add student', to: '/add-student' },
        { title: 'view Student', to: '/view-student' },
        { title: 'Edit Student', to: '/Edit-student' }
      ]
    }
  ]
};

export default data;
