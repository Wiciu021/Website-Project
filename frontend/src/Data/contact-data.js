import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard } from "react-icons/fa";

export const contactData = [
  {
    id: 1,
    type: "address",
    value: "ul. Dobrowolskiego 6, 80-287 Gdańsk",
    icon: <FaMapMarkerAlt />
  },
  {
    id: 2,
    type: "NIP",
    value: "957-10-88-441",
    icon: <FaIdCard />
  },
  {
    id: 3,
    type: "phone",
    value: "58 347-97-12",
    icon: <FaPhone />
  },
  {
    id: 4,
    type: "email",
    value: "sekretariat@zso12.edu.gdansk.pl",
    icon: <FaEnvelope />
  }
];

export default contactData;

