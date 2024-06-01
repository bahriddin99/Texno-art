import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EventNoteIcon from "@mui/icons-material/EventNote";
interface Route {
  path: string;
  content: string;
  icon: React.ReactElement;
}

const routers: Route[] = [
  {
    path: "/main",
    content: "Asosiy",
    icon: <DashboardCustomizeIcon />,
  },
  {
    path: "/main/products",
    content: "Products",
    icon: <DryCleaningIcon />,
  },
  {
    path: "/main/category",
    content: "Category",
    icon: <PersonOutlineIcon />,
  },
  {
    path: "/main/brands",
    content: "Brands",
    icon: <EventNoteIcon />,
  },
];

export default routers;
