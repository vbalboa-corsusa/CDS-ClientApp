import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Personal',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: 'layers-minimalistic-line-duotone',
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Utilidades',
  },
    {
    id: uniqueId(),
    title: 'Orden de Pedido',
    icon: "box-minimalistic-bold-duotone",
    href: '/form-layouts',
    children: [
      {
        id: uniqueId(),
        title: 'Crear registro',
        icon: 'stop-circle-line-duotone',
        href: '/form-layouts',
      },
      {
        id: uniqueId(),
        title: 'Buscar registro',
        icon: 'stop-circle-line-duotone',
        href: '/form-elements/checkbox',
      },
    ],
  },
  /*
    {
    id: uniqueId(),
    title: 'Orden de Pedido',
    icon: "box-minimalistic-bold-duotone",
    href: '/form-layouts',
  },
  */
  {
    id: uniqueId(),
    title: 'Orden de Compra',
    icon: "box-minimalistic-bold-duotone",
    href: '/form-elements/autocomplete',
  },
   {
    id: uniqueId(),
    title: 'Vendedor',
    icon: "box-minimalistic-bold-duotone",
    href: '/tables/basic-table',
  },
  {
    id: uniqueId(),
    title: 'Buttons',
    icon: "menu-dots-circle-line-duotone",
    href: '/form-elements/button',
  },
  {
    id: uniqueId(),
    title: 'Radio',
    icon: "radar-outline",
    href: '/form-elements/radio',
  },
  /*
  {
    id: uniqueId(),
    title: 'Slider',
    icon: "slider-vertical-minimalistic-outline",
    href: '/form-elements/slider',
  },
  */
  {
    id: uniqueId(),
    title: 'Switch',
    icon: "shield-minimalistic-outline",
    href: '/form-elements/switch',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: "text-bold",
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: "box-minimalistic-bold-duotone",
    href: '/ui/shadow',
  },
  /*
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: "window-frame-broken",
    href: '/sample-page',
  },
  */
  /*
  {
    navlabel: true,
    subheader: 'Apps',
  },
  {
    id: uniqueId(),
    title: 'Contacts',
    icon: 'list-check-linear',
    chipColor: 'secondary',
    href: 'https://materialpro-react-main.netlify.app/apps/contacts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Chats',
    icon: 'chat-line-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/chats',
    chip: "Pro",
  },

  {
    id: uniqueId(),
    title: 'Notes',
    icon: 'palette-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/notes',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Calendar',
    icon: 'calendar-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/calendar',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Email',
    icon: 'letter-unread-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/email',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Tickets',
    icon: 'ticket-sale-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/tickets',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Kanban',
    icon: 'notes-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/kanban',
    chip: "Pro",
  },

  {
    id: uniqueId(),
    title: 'Blog',
    icon: 'widget-4-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/blog',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Blog',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/blog',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Blog Details',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
        chip: "Pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Ecommerce',
    icon: 'cart-2-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Shop',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/shop',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Detail',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/detail/1',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'List',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/list',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Checkout',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/checkout',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Add Product',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/add-product',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Edit Product',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/ecommerce/edit-product',
        chip: "Pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Invoice',
    icon: 'bill-list-linear',
    href: 'https://materialpro-react-main.netlify.app/apps/invoice/list',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'List',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/invoice/list',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Details',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/invoice/detail/PineappleInc',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Create',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/invoice/create',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Edit',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/apps/invoice/edit/PineappleInc',
        chip: "Pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: 'Pages',
  },
  {
    id: uniqueId(),
    title: 'Pages',
    icon: 'accessibility-linear',
    href: 'https://materialpro-react-main.netlify.app/pages/casl',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Roll Base Access',
        icon: 'accessibility-linear',
        href: 'https://materialpro-react-main.netlify.app/pages/casl',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Pricing',
        icon: 'dollar-minimalistic-linear',
        href: 'https://materialpro-react-main.netlify.app/pages/pricing',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Account Setting',
        icon: 'settings-linear',
        href: 'https://materialpro-react-main.netlify.app/pages/account-settings',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'FAQ',
        icon: 'question-circle-linear',
        href: 'https://materialpro-react-main.netlify.app/pages/faq',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Landingpage',
        icon: 'align-vertical-spacing-linear',
        href: 'https://materialpro-react-main.netlify.app/landingpage',
        chip: "Pro",
      },
    ]
  },*/

  /*
  {
    navlabel: true,
    subheader: 'Forms',
  },
  {
    id: uniqueId(),
    title: 'Form Elements',
    icon: 'notification-unread-lines-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-elements/autocomplete',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Autocomplete',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/autocomplete',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Button',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/button',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Checkbox',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/checkbox',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Radio',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/radio',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Date Time',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/date-time',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Slider',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/slider',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Switch',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/forms/form-elements/switch',
        chip: "Pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Form Layout',
    icon: 'file-text-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-layouts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Form Horizontal',
    icon: 'file-check-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-horizontal',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Form Vertical',
    icon: 'file-favourite-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-vertical',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Form Custom',
    icon: 'file-smile-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-custom',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Form Wizard',
    icon: 'download-twice-square-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-wizard',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Form Validation',
    icon: 'shield-warning-linear',
    href: 'https://materialpro-react-main.netlify.app/forms/form-validation',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Tiptap Editor',
    icon: 'stop-circle-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/forms/form-tiptap',
    chip: "Pro",
  },

  {
    navlabel: true,
    subheader: 'Widgets',
  },

  {
    id: uniqueId(),
    title: 'Cards',
    icon: 'card-linear',
    href: 'https://materialpro-react-main.netlify.app/widgets/cards',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Banners',
    icon: 'widget-6-linear',
    href: 'https://materialpro-react-main.netlify.app/widgets/banners',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Charts',
    icon: 'chart-linear',
    href: 'https://materialpro-react-main.netlify.app/widgets/charts',
    chip: "Pro",
  },
  {
    navlabel: true,
    subheader: 'Tables',
  },
  {
    id: uniqueId(),
    title: 'Tables',
    icon: 'window-frame-linear',
    href: 'https://materialpro-react-main.netlify.app/tables/basic',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Basic',
        icon: 'window-frame-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/basic',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Collapsible',
        icon: 'code-scan-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/collapsible',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Enhanced',
        icon: 'command-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/enhanced',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Fixed Header',
        icon: 'feed-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/fixed-header',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Pagination',
        icon: 'filters-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/pagination',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Search',
        icon: 'card-search-linear',
        href: 'https://materialpro-react-main.netlify.app/tables/search',
        chip: "Pro",
      },
    ]
  },

  {
    id: uniqueId(),
    title: 'React Table',
    icon: 'sidebar-code-linear',
    href: 'https://materialpro-react-main.netlify.app/react-tables/basic',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Basic',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/basic',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Dense',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/dense',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Filter',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/filter',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Row Selection',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/row-selection',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Pagination',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/pagination',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Sorting',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/sorting',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Column Visibility',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/column-visiblity',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Drag n Drop',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/drag-drop',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Editable',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/editable',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Empty',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/empty',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Expand',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/expanding',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Sticky',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/react-tables/sticky',
        chip: "Pro",
      },
    ],
  },
  */
 /*
  {
    navlabel: true,
    subheader: 'UI',
  },
  {
    id: uniqueId(),
    title: 'Ui Components',
    icon: 'widget-linear',
    href: 'https://materialpro-react-main.netlify.app/ui-components/alert',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Alert',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/alert',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Accordion',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/accordion',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Avatar',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/avatar',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Chip',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/chip',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Dialog',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/dialog',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'List',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/list',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Popover',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/popover',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Rating',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/rating',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Tabs',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/tabs',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Tooltip',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/tooltip',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Transfer List',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/transfer-list',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Typography',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/ui-components/typography',
        chip: "Pro",
      },
    ],
  },
  */
  /*
  {
    navlabel: true,
    subheader: 'Charts',
  },
  {
    id: uniqueId(),
    title: 'Line',
    icon: 'chart-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/line',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Gradient',
    icon: 'chart-square-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/gradient',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Area',
    icon: 'colour-tuneing-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/area',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Candlestick',
    icon: 'align-left-outline',
    href: 'https://materialpro-react-main.netlify.app/charts/candlestick',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Column',
    icon: 'chart-2-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/column',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Donut & Pie',
    icon: 'pie-chart-3-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/doughnut',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'RadialBar',
    icon: 'pie-chart-linear',
    href: 'https://materialpro-react-main.netlify.app/charts/radialbar',
    chip: "Pro",
  },
  {
    navlabel: true,
    subheader: 'Icons',
  },
  {
    id: uniqueId(),
    title: 'Tabler',
    icon: 'face-scan-circle-linear',
    href: 'https://materialpro-react-main.netlify.app/icons',
    chip: "Pro",
  },
  /*
  {
    navlabel: true,
    subheader: 'Mui Charts',
  },
  {
    id: uniqueId(),
    title: 'Bar Charts',
    icon: 'chart-square-linear',
    href: 'https://materialpro-react-main.netlify.app/muicharts/barcharts',
    chip: "Pro",
  },

  {
    id: uniqueId(),
    title: 'Pie Charts',
    icon: 'pie-chart-2-linear',
    href: 'https://materialpro-react-main.netlify.app/muicharts/piecharts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Scatter Charts',
    icon: 'align-bottom-linear',
    href: 'https://materialpro-react-main.netlify.app/muicharts/scattercharts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Sparkline Charts',
    icon: 'chart-2-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/muicharts/sparklinecharts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Gauge Charts',
    icon: 'pie-chart-outline',
    href: 'https://materialpro-react-main.netlify.app/muicharts/gaugecharts',
    chip: "Pro",
  },
  {
    id: uniqueId(),
    title: 'Line Charts',
    icon: 'chart-linear',
    href: 'https://materialpro-react-main.netlify.app/muicharts/linecharts/line',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Lines',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/muicharts/linecharts/line',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Area',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/muicharts/linecharts/area',
        chip: "Pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: 'Mui Trees',
  },
  {
    id: uniqueId(),
    title: 'TreeView',
    icon: 'benzene-ring-broken',
    href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-items',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Items',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-items',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Selection',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-selection',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Expansion',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-expansion',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Customization',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-customization',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Focus',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/mui-trees/simpletree/simpletree-focus',
        chip: "Pro",
      },
    ],
  },
  */
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: "login-2-broken",
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: "shield-user-linear",
    href: '/auth/register',
  },

  /*
  {
    id: uniqueId(),
    title: 'Auth Pages',
    icon: 'lock-keyhole-minimalistic-linear',
    href: 'https://materialpro-react-main.netlify.app/auth/auth1/login',
    chip: "Pro",
    children : [
      {
        id: uniqueId(),
        title: 'Side Login',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/auth/auth1/login',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Side Register',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/auth/auth1/register',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Forgot Pwd',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/auth/auth1/forgot-password',
        chip: "Pro",
        children: [
          {
            id: uniqueId(),
            title: 'Side Forgot Pwd',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/auth/auth1/forgot-password',
            chip: "Pro",
          },
          {
            id: uniqueId(),
            title: 'Boxed Forgot Pwd',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/auth/auth2/forgot-password',
            chip: "Pro",
          },
        ],
      },

      {
        id: uniqueId(),
        title: 'Two Steps',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/auth/auth1/two-steps',
        chip: "Pro",
        children: [
          {
            id: uniqueId(),
            title: 'Side Two Steps',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/auth/auth1/two-steps',
            chip: "Pro",
          },
          {
            id: uniqueId(),
            title: 'Boxed Two Steps',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/auth/auth2/two-steps',
            chip: "Pro",
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Error',
        icon: 'shield-warning-linear',
        href: 'https://materialpro-react-main.netlify.app/auth/error',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Maintenance',
        icon: 'calendar-minimalistic-linear',
        href: 'https://materialpro-react-main.netlify.app/auth/maintenance',
        chip: "Pro",
      },
    ]
  },
  */

  /*
  {
    navlabel: true,
    subheader: 'Other',
  },
  {
    id: uniqueId(),
    title: 'Menu Level',
    icon: 'layers-minimalistic-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/menulevel/',
    chip: "Pro",
    children: [
      {
        id: uniqueId(),
        title: 'Level 1',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/l1',
        chip: "Pro",
      },
      {
        id: uniqueId(),
        title: 'Level 1.1',
        icon: 'stop-circle-line-duotone',
        href: 'https://materialpro-react-main.netlify.app/l1.1',
        chip: "Pro",
        children: [
          {
            id: uniqueId(),
            title: 'Level 2',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/l2',
            chip: "Pro",
          },
          {
            id: uniqueId(),
            title: 'Level 2.1',
            icon: 'stop-circle-line-duotone',
            href: 'https://materialpro-react-main.netlify.app/l2.1',
            chip: "Pro",
            children: [
              {
                id: uniqueId(),
                title: 'Level 3',
                icon: 'stop-circle-line-duotone',
                href: 'https://materialpro-react-main.netlify.app/l3',
                chip: "Pro",
              },
              {
                id: uniqueId(),
                title: 'Level 3.1',
                icon: 'stop-circle-line-duotone',
                href: 'https://materialpro-react-main.netlify.app/l3.1',
                chip: "Pro",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Disabled',
    icon: 'forbidden-circle-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/#',
    chip: "Pro",
    disabled: true,
  },
  {
    id: uniqueId(),
    title: 'SubCaption',
    subtitle: 'This is the sutitle',
    icon: 'star-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/#',
    chip: "Pro",
  },

  {
    id: uniqueId(),
    title: 'Chip',
    icon: 'shield-check-line-duotone',
    href: 'https://materialpro-react-main.netlify.app/#',
    chip: "9",
    chipColor: 'primary',
  },
  {
    id: uniqueId(),
    title: 'Outlined',
    icon: 'smile-circle-outline',
    href: 'https://materialpro-react-main.netlify.app/#',
    chip: 'outline',
    variant: 'outlined',
    chipColor: 'primary',
  },
  {
    id: uniqueId(),
    title: 'External Link',
    external: true,
    icon: 'link-square-linear',
    href: 'https://google.com',
    chip: "Pro",
  },
*/

];

export default Menuitems;
