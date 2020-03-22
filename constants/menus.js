// Menus
const MENUS = [
  {
    name: 'dashboard',
    as: 'a',
    href: '/dashboard/dashboard',
    label: 'Dashboard',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'cards',
    as: 'a',
    href: '/card/posts',
    label: 'Cards',
    icon: 'fas fa-clone',
  },
  {
    name: 'buttons',
    as: 'a',
    href: '/form/buttons',
    label: 'Buttons',
    icon: 'fas fa-bullseye',
  },
  {
    name: 'tables',
    as: 'a',
    href: '/table/tables',
    label: 'Tables',
    icon: 'fas fa-columns',
  },
  {
    name: 'typography',
    as: 'a',
    href: '/page/typography',
    label: 'Typography',
    icon: 'fas fa-list-ul',
  },
];
// Sub menus
const SUBMENUS = [
  {
    name: 'employees',
    as: 'a',
    href: '/card/employees',
    label: 'Employees',
    icon: '',
  },
  {
    name: 'carousels',
    as: 'a',
    href: '/carousel/carousels',
    label: 'Carousels',
    icon: '',
  },
  {
    name: 'pages',
    as: 'a',
    href: '#',
    label: 'Pages',
    icon: '',
    subLinks: [
      {
        name: 'profile',
        as: 'a',
        href: '/page/profile',
        label: 'Profile',
        icon: '',
      },
      {
        name: 'setting',
        as: 'a',
        href: '/page/setting',
        label: 'Settings',
        icon: '',
      },
      {
        name: 'login',
        as: 'a',
        href: '/page/login',
        label: 'Login',
        icon: '',
      },
    ],
  },
  {
    name: 'forms',
    as: 'a',
    href: '/form/forms',
    label: 'Forms',
    icon: '',
  },
  {
    name: 'pages',
    as: 'a',
    href: '#',
    label: 'Pages',
    icon: '',
    subLinks: [
      {
        name: 'profile',
        as: 'a',
        href: '/page/profile',
        label: 'Profile',
        icon: '',
      },
      {
        name: 'setting',
        as: 'a',
        href: '/page/setting',
        label: 'Settings',
        icon: '',
      },
      {
        name: 'login',
        as: 'a',
        href: '/page/login',
        label: 'Login',
        icon: '',
      },
    ],
  },
];

export { MENUS, SUBMENUS };
