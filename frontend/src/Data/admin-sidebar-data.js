import { FaRegNewspaper, FaImages, FaFileAlt, FaCalendarAlt, FaChalkboardTeacher } from "react-icons/fa";
import { href } from "react-router-dom";

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
  },
  {
    id: "dokumenty",
    href: "/admin-panel/dokumenty",
    label: "Dokumenty",
    icon: <FaFileAlt size={20} />
  },
  {
    id: 'zastepstwa',
    href: "/admin-panel/zastepstwa",
    label: 'Zastepstwa',
    icon: <FaCalendarAlt size={20} />
  },
  {
    id: 'nauczyciele',
    href: "/admin-panel/nauczyciele",
    label: 'Nauczyciele',
    icon: <FaChalkboardTeacher size={20} />
  }
];

export default adminSidebarData;
