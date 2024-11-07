import {
    blog01,
    blog02,
    blog03,
    blog04,
    course01,
    course02,
    course03,
    course04,
    course05,
    course06,
    course07,
    course08,
    course09,
    course10,
    course11,
    course12,
    course13,
    instructor01,
    instructor02,
    instructor03,
    instructor04,
    instructor05,
    instructor06,
    instructor07,
    instructor08,
    instructor09,
    instructor10,
    instructor11,
    instructor12,
    instructor13,
} from "./images";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "popular",
        title: "Popular",
    },
    {
        id: "instructors",
        title: "Instructors",
    },
    {
        id: "blog",
        title: "Blog",
    },
];

export const statistics = [
    {
        number: "100K+",
        text: "Users Connected",
    },
    {
        number: "1.5K+",
        text: "Active Skill Exchanges",
    },
    {
        number: "500+",
        text: "Local Communities",
    },
    {
        number: "40+",
        text: "Domains",
    },
];

export const aboutFeaturs = [
    {
        title: "Localized Skill Exchange",
        description: "Empower individuals to exchange skills and services within their local communities.",
    },
    {
        title: "Community Engagement",
        description: "Foster vibrant communities where members collaborate, share expertise, and support each other.",
    },
    {
        title: "Dynamic User Experience",
        description: "Offer a user-friendly platform with real-time communication features for seamless skill sharing.",
    },
    {
        title: "Empower Skill Sharing",
        description: "Enable users to showcase their expertise and contribute to a collaborative learning environment.",
    },
];

export const categories = ["All", "Technology", "Marketing", "Arts", "Business"];

export const courses = [
    {
        id: 1,
        title: "Introduction to Web Development",
        category: "Technology",
        difficulty: "Beginner",
        thumbnail: course01,
        instructor: {
            name: "Sreevardhan",
            pic: instructor01,
        },
        rating: 4.7,
    },
    {
        id: 2,
        title: "Data Science Fundamentals",
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: course02,
        instructor: {
            name: "Vikas Raj",
            pic: instructor02,
        },
        rating: 4.9,
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course03,
        instructor: {
            name: "Nandini Kairmakonda",
            pic: instructor03,
        },
        rating: 4.8,
    },
    {
        id: 4,
        title: "Art of Photography",
        category: "Arts",
        difficulty: "Beginner",
        thumbnail: course04,
        instructor: {
            name: "Kushal Reddy",
            pic: instructor04,
        },
        rating: 4.6,
    },
    {
        id: 5,
        title: "Entrepreneurship Bootcamp",
        category: "Business",
        difficulty: "Intermediate",
        thumbnail: course05,
        instructor: {
            name: "Sai Charan Golusu",
            pic: instructor05,
        },
        rating: 4.7,
    },
    {
        id: 6,
        title: "Content Marketing Strategy",
        category: "Marketing",
        difficulty: "Intermediate",
        thumbnail: course06,
        instructor: {
            name: "Harsh Bhatnagar",
            pic: instructor06,
        },
        rating: 4.8,
    },
    {
        id: 7,
        title: "Machine Learning for Beginners",
        category: "Technology",
        difficulty: "Beginner",
        thumbnail: course07,
        instructor: {
            name: "Charmee Pradhyumna",
            pic: instructor07,
        },
        rating: 4.9,
    },
    {
        id: 8,
        title: "Social Media Advertising Mastery",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course08,
        instructor: {
            name: "Harshith Atiketi",
            pic: instructor08,
        },
        rating: 4.6,
    },
    {
        id: 9,
        title: "Python Programming Essentials",
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: course09,
        instructor: {
            name: "Vamsi Yarlanki ",
            pic: instructor09,
        },
        rating: 4.8,
    },
    {
        id: 10,
        title: "Social Media Marketing Strategies",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course10,
        instructor: {
            name: "Charmee Pradhyumna",
            pic: instructor10,
        },
        rating: 4.9,
    },

];

export const instructors = [
    {
        id: 1,
        name: "Sreevardhan",
        specialty: "Software Engineer",
        pic: instructor01,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Vikas Raj",
        specialty: "Data Scientist",
        pic: instructor02,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Nandini Kairamkonda",
        specialty: "Digital Marketing Manager",
        pic: instructor10,
        rating: 4.6,
    },
    {
        id: 4,
        name: "Kushal Reddy",
        specialty: "Photographer",
        pic: instructor04,
        rating: 4.9,
    },
    {
        id: 5,
        name: "Sai Charan Golusu",
        specialty: "Business Manager",
        pic: instructor05,
        rating: 4.8,
    },
    {
        id: 6,
        name: "Harsh Bhatnagar",
        specialty: "Digital Marketing Manager",
        pic: instructor06,
        rating: 4.9,
    },
    {
        id: 7,
        name: "Charmee Pradhyumna",
        specialty: "Data Scientist",
        pic: instructor07,
        rating: 4.7,
    },
    {
        id: 8,
        name: "Harshith Atiketi",
        specialty: "Digital Marketing",
        pic: instructor08,
        rating: 4.6,
    },
   
    {
        id: 10,
        name: "Ashwini",
        specialty: "Digital Marketing",
        pic: instructor03,
        rating: 4.9,
    },
];

export const blogs = [
    {
        id: 1,
        title: "Mastering Remote Collaboration",
        description: "Learn effective strategies for real-time collaboration, communication.",
        thumbnail: blog01,
    },
    {
        id: 2,
        title: "Empowering Local Communities",
        description: "Discover how skill exchange contributes to community growth",
        thumbnail: blog02,
    },
    {
        id: 3,
        title: "Unlocking Your Creative Potential",
        description: "Explore the techniques, tips, inspiration to unleash your creativity.",
        thumbnail: blog03,
    },
    {
        id: 4,
        title: "The Future of Work: Navigating Remote Collaboration",
        description: "Explore the latest trends and tools shaping remote collaboration.",
        thumbnail: blog04,
    },
];
