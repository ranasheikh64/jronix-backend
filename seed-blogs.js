const mongoose = require('mongoose');
const Blog = require('./src/models/Blog');
require('dotenv').config();

const blogs = [
    {
        category: "Flutter",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        title: "Flutter BLoC & Architecture Setup Tutorial",
        description: "In this video tutorial, we explore Flutter BLoC State Management and clean architecture setup step-by-step for enterprise mobile apps.",
        authorName: "Rana Sheikh",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        readTime: "8 min watch",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800",
        title: "Integrating GPT-4o into Your Product — A Practical Guide",
        description: "AI is no longer optional. We walk you through adding intelligent features to your existing app with minimal effort.",
        authorName: "Nadia Islam",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        readTime: "8 min read",
        youtubeUrl: ""
    },
    {
        category: "Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
        title: "Design Systems That Scale: Lessons from 50+ Projects",
        description: "After shipping 50+ digital products, these are the design system principles we swear by to ship consistent, beautiful apps.",
        authorName: "Nadia Islam",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        readTime: "5 min read",
        youtubeUrl: ""
    }
];

const seedBlogs = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB...");

        await Blog.deleteMany({});
        console.log("Cleared existing blogs...");

        await Blog.insertMany(blogs);
        console.log("Blogs seeded successfully!");

        process.exit();
    } catch (error) {
        console.error("Error seeding blogs:", error);
        process.exit(1);
    }
};

seedBlogs();
