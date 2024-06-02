// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import CategoryIcon from '@mui/icons-material/Category';
import EventNoteIcon from "@mui/icons-material/EventNote";
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
    icon: <EventNoteIcon />,
  },
];

export default routers;
