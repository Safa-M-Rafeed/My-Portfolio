const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('./models/Project');

mongoose.connect(process.env.MONGO_URI);

const projects = [
  {
    title: "Blog CMS (Laravel)",
    description: "Developed a Content Management System for blogs, featuring user authentication, CRUD operations for posts, and an admin dashboard for content moderation.",
    techStack: ["Laravel", "PHP"],
    github: "https://github.com/Safa-M-Rafeed/Blog-CMS-Laravel"
  },
  {
    title: "Task Tracker (Spring Boot)",
    description: "Built a simple task tracker application to manage and track tasks efficiently, leveraging Spring Boot for backend services.",
    techStack: ["Spring Boot", "Java"],
    github: "https://github.com/Safa-M-Rafeed/Task-Tracker-Springboot"
  },
  {
    title: "Staff Management System",
    description: "Developed an enterprise application to automate staff scheduling, attendance, and payroll management, following the MVC architecture for clean separation of concerns.",
    techStack: ["Java", "MySQL", "Tomcat"],
    github: ""
  },
  {
    title: "Travel and Tourism Management System",
    description: "Built a responsive web platform for managing travel bookings and customer information. Integrated user authentication and real-time booking updates with PHP and MySQL.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    github: ""
  }
];

Project.insertMany(projects)
  .then(() => {
    console.log("Projects inserted!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
