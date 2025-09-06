import { FaRegNewspaper, FaImages } from "react-icons/fa";

export const adminSidebarData = [
  {
    id: "aktualnosci",
    href: "/admin-panel/aktualnosci",
    label: "Aktualności",
    icon: <FaRegNewspaper size={20} />
  },
  {
    id: "galeria",
    href: "/admin-panel/galeria",
    label: "Galeria",
    icon: <FaImages size={20} />
  }
];

export default adminSidebarData;