import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 12 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 20 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 36 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 1 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 3,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 10,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 4,
    text: "Design Items",
  },
  {
    id: 4,
    number: 1,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.jpg",
    name: "React ToDo App",
    tools: ["React", "MongoDB", "Tailwind CSS", "FullStack"],
  },
  {
    id: 2,
    img: "/project2.jpg",
    name: "React E-commerce Website",
    tools: ["React", "Tailwind CSS", "FullStack"],
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "Laravel ToDo App",
    tools: ["Laravel", "PHP", "Blade", "FullStack"],
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Book Recommendation System Using ML",
    tools: ["Machine Learning", "User-Based Collaborative Filtering", "Python"],
  },
];

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 50 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 65 },
  { name: "Tailwind CSS", level: 65 },
  { name: "Python", level: 60 },
  { name: "MySQL", level: 60 },
  { name: "Bootstrap", level: 90 },
  { name: "PHP", level: 80 },
  { name: "REST APIs", level: 65 },
  { name: "MERN stack", level: 75 },
  { name: "NodeJS", level: 65 },
  { name: "DSA", level: 40 },
  { name: "JAVA", level: 65 },
  { name: "C/C++", level: 98 },
  { name: "MongoDB", level: 90 },
  { name: "LARAVEL", level: 50 },
  { name: "Visual Basic", level: 70 },
  { name: "Machine Learning", level: 20 },
  
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Godawari-5, Lalitpur, Nepal" },
  { id: 2, title: "Phone", text: "+977 9808982141" },
  { id: 3, title: "Email", text: "ujjwalsilwal321@gmail.com" },
];

export {navLinks, projects, countUpItems, services, skills, contacts };
