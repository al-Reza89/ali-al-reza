import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import research from "@/public/research-archive.png";
import ecommerce from "@/public/ecommerce.png";
import reuseable from "@/public/reuseable.png";
import classroom from "@/public/classroom.png";
import gym from "@/public/gym.png";
import booking from "@/public/booking.png";
import game from "@/public/game.png";
import boston from "@/public/boston.png";
import heckthon from "@/public/heckthon.png";
import genre from "@/public/genre.png";
import thesisWeb from "@/public/thesisWeb.png";
import thesisModel from "@/public/thesisModel.png";
import ai from "@/public/ai.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "",
    description: "Learning front end development starting with heml,css and js",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduation",
    location: "SUST,Sylhet",
    description:
      "I am currently final year student of SUST. My achademic subject is Computer Science and Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SUST Research Archive",
    url: "https://solid-adventure-five.vercel.app",
    gitUrl: "https://github.com/thesis-work/thesis-repo-research-archive",
    description:
      "  This research archive is a resource for students, faculty, and the broader community .",
    tags: [
      "Tpescript",
      "Next.js",
      "Express.js",
      "NextAuth",
      "Prisma",
      "MongoDb",
      "husky",
      "mantine-Ui",
      "ReactQuery",
      "Tailwind-css",
    ],
    imageUrl: research,
  },
  {
    title: "E-commerce",
    url: "https://web-project-e-commerce.vercel.app",
    gitUrl: "https://github.com/al-Reza89/web-project-e-commerce",
    description:
      " Try To implement the website like e-commerce for my web-project.",
    tags: [
      "Typescript",
      "Next.js-13",
      "Express.js",
      "NextAuth",
      "Prisma",
      "MongoDb",
      "Zustand",
      "tailwind",
      "mui-table",
      "Tailwind-css",
    ],
    imageUrl: ecommerce,
  },
  {
    title: "Classroom Management",
    url: "",
    gitUrl: "https://github.com/al-Reza89/java-servlet-project",
    description:
      "  Online classroom management system where there are 2 types of users students and teachers.Teacher can create course and student can join on it. ",
    tags: [
      "java",
      "mySql",
      "apache-server",
      "jsp",
      "tomcat",
      "servlet",
      "Tailwind-css",
    ],
    imageUrl: classroom,
  },

  {
    title: "Reusable Component",
    url: "https://scalable-architecture.vercel.app/categories",
    gitUrl: "https://github.com/al-Reza89/scalable-architecture",
    description:
      "  Reusable component makes your productivity faster. In this Project I want to make a website that will store all my previous component . I can see the component preview and copy it from there. In this way I don't have to create same component multiple time.",
    tags: [
      "ypescript",
      "Next.js",
      "Express.js",
      "NextAuth",
      "husky",
      "code-sandbox",
      "Tailwind-css",
    ],
    imageUrl: reuseable,
  },
  {
    title: "Gym Management",
    url: "",
    gitUrl: "https://github.com/al-Reza89/pern-gym-management",
    description:
      "Online Gym management system for my database project with PostgreSQL",
    tags: ["React", "Express.js", "raw-css", "PostgreSQL"],
    imageUrl: gym,
  },
  {
    title: "Booking Reservation",
    url: "",
    gitUrl: "https://github.com/al-Reza89/mern-booking-reservation",
    description:
      "Hotel Booking Reservation system with react and MongoDB. There is also an admin panel with it",
    tags: ["React", "Express.js", "SCSS", "MongoDB"],
    imageUrl: booking,
  },
  {
    title: "Cave Game",
    url: "",
    gitUrl: "https://github.com/al-Reza89/Cave-Game",
    description: "Java Game with Java Swing",
    tags: ["Java"],
    imageUrl: game,
  },
] as const;

export const projectsDataMl = [
  {
    title: "Boston House",
    url: "https://house-pricing-ml.herokuapp.com",
    gitUrl: "https://github.com/al-Reza89/boston-house",
    description:
      "Boston House is the common dataset in Ml. In this project i want implement the house price with given of certain criteria of that house.",
    tags: ["Machine Learning", "Flusk", "Python", "google-colab", "Html"],
    imageUrl: boston,
  },
  {
    title: "Mind Wandering",
    url: "",
    gitUrl: "https://github.com/faridulreza/hackathon-we",
    description:
      "This is our heckthon project, A tool for detecting mind wandering in real-time during online activities such as classes or meetings.",
    tags: ["Machine Learning", "React", "Python", "Chrome Extensions"],
    imageUrl: heckthon,
  },
  {
    title: "Book Genre Classification",
    url: "https://new-ml-project.vercel.app",
    gitUrl: "https://github.com/al-Reza89/ml-project",
    description:
      "Bangla Book Genre Classification using maching learning. Scrape the dataset using scrapy than label the database using this website.",
    tags: [
      "Machine Learning",
      "React",
      "Python",
      "Next.js",
      "NextAuth",
      "TypeScript",
      "Bangla-NLP",
      "CNN-BiLSTM",
      "Transformer-Model",
    ],
    imageUrl: genre,
  },
  {
    title: "Thesis Dataset Collection",
    url: "https://new-ml-project.vercel.app",
    gitUrl: "https://github.com/al-Reza89/thesis-web",
    description: "Thesis dataset collection and label website",
    tags: [
      "Python",
      "React",
      "BeautyfulSoup",
      "Next.js",
      "NextAuth",
      "TypeScript",
      "Bangla-NLP",
    ],
    imageUrl: thesisWeb,
  },
  {
    title: "lattice",
    url: "",
    gitUrl: "https://github.com/al-Reza89/lattice",
    description: "this is our model for table dataset",
    tags: ["Python", "Bangla-NLP", "DeepLearning", "Transformer-Model"],
    imageUrl: thesisModel,
  },
  {
    title: "Famous BD Persona",
    url: "",
    gitUrl: "https://github.com/Ataullha/StarGaze-BD",
    description:
      "A machine learning (CSE 338 Project) based web application that would classify famous Bangladeshi personality based on their photos",
    tags: [
      "Python",
      "CNN",
      "Flusk",
      "Image-Classification",
      "Transformer-Model",
    ],
    imageUrl: ai,
  },
] as const;
export const projectsDataAn = [
  // {
  //   title: "ml",
  //   url: "url.com",
  //   gitUrl: "git.com",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: research,
  // },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
