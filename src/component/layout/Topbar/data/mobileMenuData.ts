export interface MenuChild {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface MenuItem {
  title: string;
  children?: MenuChild[];
}

export const mobileMenuData: MenuItem[] = [
  {
    title: 'Home',
    children: [
      { label: 'SVAI', href: '/svai' },
    ],
  },
  {
    title: 'Products',
    children: [
      {
        label: 'Products',
        href: '/products',
        icon: 'tabler:carambola',
        description: 'Quick, easy setup.',
      },
    ],
  },
  {
    title: 'Blogs',
    children: [
      {
        label: 'Blogs',
        href: '/blog',
        icon: 'tabler:carambola',
        description: 'Quick, easy setup.',
      },
    ],
  },
  {
    title: 'Research',
    children: [
      {
        label: 'Research',
        href: '/research',
        icon: 'tabler:carambola',
        description: 'Quick, easy setup.',
      },
    ],
  },

];

