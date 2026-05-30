// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/cv', (req, res) => {
    res.json({
        name: "ACHMAD RIZAL",
        title: "SOFTWARE ENGINEER",
        contact: {
            email: "achmd.rzl13@gmail.com",
            phone: "+62-812-4206-7383 / +886-928-956-204",
            location: "Surabaya, East Java, Indonesia",
            linkedin: "https://www.linkedin.com/in/achmad-rizal-6098ab170/",
            github: "https://www.github.com/achmdrzl"
        },
        summary: "I am a software engineer currently pursuing a Master's degree in Computer Science and Information Engineering at National Taiwan University of Science and Technology, with a specialization in Cybersecurity. My academic journey is driven by a strong curiosity about emerging technologies and their real-world applications. Alongside my studies, I work remotely as a software engineer developing a large-scale web-based Electronic Medical Records (EMR) system.",
        experience: [
            { company: "Taiwan Academic Cybersecurity Center (TACC)", role: "Office Administrative Assistant", date: "June 2025 - July 2026", desc: "Monitoring, supporting administrative operations, research on going, and documentation." },
            { company: "CV ESA HUSADA", role: "Software Engineer", date: "Mar 2024 - Present", desc: "Develop and implement a real-time Electronic Medical Record (EMR) system and effectively manage secure data integration workflows." },
            { company: "MYCO COWORKING & OFFICE SPACE", role: "Software Developer", date: "Dec 2023 - May 2024", desc: "System reengineering, optimizing database performance, and maintaining server reliability." },
            { company: "INFORMATION TECHNOLOGY TRAINER", role: "Freelance Trainer", date: "Nov 2023 - Jul 2024", desc: "Training and mentoring students to comprehend the core fundamentals of programming and web architecture." },
            { company: "PT DISTY TECHNOLOGY", role: "Internship Web Developer", date: "Feb 2022 - Jul 2022", desc: "Designed and developed web-based systems for hospital services and mobile-based system for hospital queue services." }
        ],
        projects: [
            {
                title: "SIPEMAS (Sistem Informasi Manajemen Penjualan Emas)",
                date: "May 2023 – Aug 2023",
                desc: "A comprehensive Sales Management Information System tailored for the gold industry. It streamlines gold sales processes, from inventory management to customer transactions, ensuring efficient operations and providing real-time data insights for business decision-making."
            },
            {
                title: "GrabMe.co",
                date: "May 2023 – Jun 2023",
                desc: "Platform layanan penyedia penjualan tiket event berbasis web. Menyajikan informasi detail acara, manajemen keranjang belanja, integrasi gerbang pembayaran digital yang aman, serta sistem otomatisasi pembuatan e-ticket menggunakan verifikasi QR Code."
            },
            {
                title: "Self-Ordering System for Restaurant based on PWA",
                date: "Apr 2022 – Oct 2022",
                desc: "Final Project for Bachelor's Degree. Built an autonomous restaurant self-ordering platform using Progressive Web Apps (PWA) technology. Delivers a highly responsive, native-like user experience with offline capabilities to optimize ordering efficiency."
            },
            {
                title: "Telemedicine Consulting, Payment and Delivery Module",
                date: "May 2022 – Jul 2022",
                desc: "Developed core functional modules for a telemedicine system, focusing on real-time doctor-patient consulting interfaces, secure checkout flows, automated payment gateways, and prescription delivery logistics tracking."
            },
            {
                title: "K-Trip (Website Tour and Travel Specific on Wakatobi)",
                date: "Apr 2021 – Dec 2021",
                desc: "Designed and implemented a dedicated e-tourism platform for Wakatobi region. Features interactive itinerary builders, tour package customization, and local tour guide reservation workflows to boost regional tourism."
            }
        ],
        education: [
            { school: "National Taiwan University of Science and Technology", degree: "Master's Degree Computer Science and Information Engineering", year: "2025-Present" },
            { school: "Universitas 17 Agustus 1945 Surabaya", degree: "Bachelor - Informatics Engineering", year: "2019-2022", gpa: "3.61/4.0" }
        ],
        skills: {
            hardSkills: ["Laravel", "Livewire", "Express.js", "React.js", "JavaScript", "BootstrapCSS", "TailwindCSS", "MySQL", "PostgreSQL", "Python", "C/C++", "Langchain", "Flask"],
            softSkills: ["Leadership", "Teamwork", "Problem Solving", "Good Communication Skill", "Project Management", "Time Management", "Pressure Handling"]
        },
        publications: [
            { title: "Risk Management Information System in Educational Institution: Agile Scrum Approach", publisher: "International Conference of Innovation and Community Engagement (ICOICE 1st)", year: "2024" },
            { title: "Rancang Bangun Sistem Pemesanan Mandiri Restoran Berbasis Progressive Web Apps", publisher: "Jurnal Sistim Informasi dan Teknologi", year: "Jul 10, 2023" }
        ],
        languages: [
            { name: "Indonesian", level: "Mother Language" },
            { name: "English", level: "TOEFL B2 Level" }
        ]
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));