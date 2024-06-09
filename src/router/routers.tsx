// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import CategoryIcon from '@mui/icons-material/Category';
import EventNoteIcon from "@mui/icons-material/EventNote";
import { DropboxOutlined} from '@ant-design/icons';
import SettingsIcon from '@mui/icons-material/Settings';

interface Route {
  path: string;
  content: string;
  icon: React.ReactElement;
}

const routers: Route[] = [
  // {
  //   path: "/main",
  //   content: "Asosiy",
  //   icon: <DashboardCustomizeIcon />,
  // },
  {
    path: "/main",
    content: "Products",
    icon: <DryCleaningIcon />,
  },
  {
    path: "/main/category",
    content: "Category",
    icon: <CategoryIcon />,
  },
  {
    path: "/main/brands",
    content: "Brands",
    icon: <DropboxOutlined style={{fontSize: 20}} />,
  },

  {
    path: "/main/brand-category",
    content: "Brand category",
    icon: <EventNoteIcon />,
},
  {
    path: "/main/setting",
    content: "Setting",
    icon: <SettingsIcon />,
},
  
];

export default routers;
