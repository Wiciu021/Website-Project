import { FaUserTie, FaUserFriends, FaPiggyBank, FaFileAlt, FaSearch } from "react-icons/fa";

const parentsCouncilPrezydium = [
  {
    id: 1,
    role: "Przewodnicząca",
    people: ["Kamila Mieszkowicz-Adamowicz 3A"],
    icon: <FaUserTie />
  },
  {
    id: 2,
    role: "Zastępca Przewodniczącej",
    people: ["Krystian Matusiewicz 2B"],
    icon: <FaUserFriends />
  },
  {
    id: 3,
    role: "Skarbnik",
    people: ["Katarzyna Kamrowska 4B"],
    icon: <FaPiggyBank />
  },
  {
    id: 4,
    role: "Sekretarz",
    people: ["Justyna Szaga-Ciurlik 3F"],
    icon: <FaFileAlt />
  },
  {
    id: 5,
    role: "Komisja Rewizyjna",
    people: ["Izabela Nietupska 1E", "Izabela Wronka 1C"],
    icon: <FaSearch />
  }
];

export default parentsCouncilPrezydium;
