require('dotenv').config();
const mongoose = require('mongoose');
const Process = require('./src/models/Process');

const processes = [
    {
        stepNumber: 1,
        title: "Discover Planning",
        description: "Collaboration sharing without inexpensive to smart money human capital global compelling benchmark resource done.",
        icon: "Network"
    },
    {
        stepNumber: 2,
        title: "Executive Works",
        description: "Collaboration sharing without inexpensive to smart money human capital global compelling benchmark resource done.",
        icon: "Cpu"
    },
    {
        stepNumber: 3,
        title: "Finished Setup",
        description: "Collaboration sharing without inexpensive to smart money human capital global compelling benchmark resource done.",
        icon: "Settings"
    },
    {
        stepNumber: 4,
        title: "Development Phase",
        description: "Executing the plan with cutting-edge technology and robust architecture for scalable solutions.",
        icon: "Code"
    },
    {
        stepNumber: 5,
        title: "Quality Assurance",
        description: "Rigorous testing protocols ensuring optimal performance, security, and flawless user experience.",
        icon: "CheckCircle"
    },
    {
        stepNumber: 6,
        title: "Deployment",
        description: "Seamlessly launching your product to the market with zero downtime and maximum impact.",
        icon: "Rocket"
    },
    {
        stepNumber: 7,
        title: "Maintenance",
        description: "Ongoing support and proactive optimizations to keep your system running smoothly over time.",
        icon: "Wrench"
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        
        await Process.deleteMany({});
        console.log('Cleared existing processes');
        
        await Process.insertMany(processes);
        console.log('Added initial processes');
        
        process.exit();
    })
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
