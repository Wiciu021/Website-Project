import { FaRegNewspaper, FaImages, FaFileAlt, FaCalendarAlt, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

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
  },
  {
    id: 'samorzad',
    href: "/admin-panel/samorzad",
    label: 'Samorząd',
    icon: <FaUsers size={20} />   // ← DODANA IKONA
  }
];

export default adminSidebarData;
