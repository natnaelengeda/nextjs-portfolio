import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';
import lliImage from '../assets/portolio/lli-image.jpg';
import virtualGreivingSquareImage from "../assets/portolio/virtual-greiving-square.jpg";
import coffeeTerminalImage from '../assets/portolio/coffee-terminal-image.jpg';
import bermelFestImage from "@/app/assets/portolio/bermel-fest-image.jpg";
import ethioSalacyCalculatorImage from "@/app/assets/portolio/ethio-salary-calculator.jpg";
import gojoImage from "@/app/assets/portolio/gojo-real-estate-cover.jpg";
import lidyaGetanehImage from "@/app/assets/portolio/lydia-getaneh-cover.jpg";
import totalFocusImage from "@/app/assets/portolio/total-focus-cover.jpg";
import earthQuakeImage from "@/app/assets/portolio/earth-quake-image.jpg";

export const projects = [
    {
        name: "Bermel Fest",
        color: "#EA2829",
        image: bermelFestImage,
        imageDescription: "Bermel Fest Image",
        live: "https://et.bermelfest.com/",
        github: {
            type: "private",
            url: ""
        },
        team: "Team",
        date: "2024-12",
        fullDescription: "A festival event platform for Bermel Fest in Ethiopia, offering detailed event information, tickets, and real-time updates. Built to handle thousands of concurrent users with a scalable backend.",
        description: "Bermel Fest - Come and enjoy the best event in Ethiopia!...",
        technologies: ['nextjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase'],
        features: [
            "Event registration and ticket system",
            "Admin panel for content updates",
            "Firebase Authentication and CMS integration",
            "Merchandise Sale",
            "Vendor Registration"
        ]
    },
    {
        name: "Coffee Terminal",
        color: "#1B1107",
        image: coffeeTerminalImage,
        imageDescription: "Coffee Terminal Image",
        live: "https://coffee-termina-et-vercel.vercel.app/",
        github: {
            type: "private",
            url: ""
        },
        team: "Solo",
        date: "2024-08",
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "Coffee Termninal - The Best Coffee Shop in Town...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase'],
        features: [
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design",
            "Menu Showcase"
        ]
    },
    {
        name: "Fitsum Printing and Advert",
        color: '#8bc43b',
        image: fistumImage,
        imageDescription: "Firstum Printing and Advert Image",
        fullDescription: "Fitsum Advert is a printing and advertising Company which Handles different Printing Services. This website is designed to streamline the ordering process and showcase a diverse portfolio of work.",
        description: "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
        live: "https://fitsumpp.vercel.app/",
        github: {
            type: "private",
            url: ""
        },
        team: "Solo",
        date: "2024-08",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql'],
        features: [
            "Galery Showcase",
            "Online Ordering",
            "Feedback Mechanism"
        ]
    },
    {
        name: "Virtual Grieving Square",
        color: '#1a75ba',
        image: virtualGreivingSquareImage,
        imageDescription: "Virtual Grieving Square Image",
        live: "https://virtualgrievingsquare.com//",
        github: {
            type: "private",
            url: ""
        },
        team: "Solo",
        date: "2025-02",
        fullDescription: "Virtual Grieving Square is a compassionate digital platform that offers a safe and sympathetic environment for people grieving the loss of loved ones. Users can share personal posts, establish permanent monuments, and accept donations.",
        description: "Virtual Grieving Square is a compassionate digital platform that offers a safe and sympathetic environment for ...",
        technologies: ['reactjs', 'tailwindcss', 'nodejs', 'expressjs'],
        features: [
            "Social Platform",
            "Responsive Design",
            "Auth0 Integration",
            "Firebase FCM",
            "Stripe API Integration",
            "AWS Cloud Integration"
        ]
    },
    {
        name: "Angel SKin",
        color: '#d5ac89',
        image: angelImage,
        imageDescription: "Angel Skin Image",
        live: "https://angelskin.vercel.app/",
        github: {
            type: "public",
            url: "https://github.com/natnaelengeda/angela-website"
        },
        team: "Solo",
        date: "2024-08",
        fullDescription: "Angel Skin is a beautifully designed skincare website focused on offering a seamless user experience with an elegant, modern design.",
        description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
        technologies: ['vue.js', 'tailwindcss'],
        features: [
            "Showcase Services",
            "Feedback Mechanism"
        ]
    },
    {
        name: "Gojo Real Estate",
        color: "",
        image: gojoImage,
        technologies: ["nextjs", "tailwindcss"],
        live: "https://gojo-ethiopia.vercel.app/",
        github: {
            type: "private",
            url: ""
        },
        team: "Solo",
        date: "2024-08",
        category: "Web Development",
        fullDescription: "A property listing website with advanced search, filtering, and Renting Options.",
        description: "A property listing website with advanced search, filtering, and Renting Options.",
        features: [
            "Filter Houses",
            "Rent or Buy Houses",
            "Feedback Mechanism",
        ]
    },
    {
        name: "Semah MCH",
        color: '#1f65b1',
        image: semahImage,
        imageDescription: "Semah MCH Image",
        live: "https://www.semahmch.com/",
        github: {
            type: "private",
            url: ""
        },
        technologies: ['reactjs', 'ts', 'nodejs', 'expressjs', 'tailwindcss', 'mysql'],
        description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
        fullDescription: "The SEMAH MCH Center website serves as an online presence for a healthcare facility specializing in maternal and child health services.",
        features: [
            "Online Appointment",
            "Check Available Doctors",
            "Get Services Online",
            "Custom Admin Dashboard"
        ]
    },
    {
        name: "Total Focus Soccer",
        color: '#1f65b1',
        image: totalFocusImage,
        technologies: ["reactjs", "tailwindcss", "Google Calander API"],
        live: "https://totalfoccus.vercel.app/",
        github: {
            type: "private",
            url: ""
        },
        fullDescription: "Total Focus Soccer is a modern web platform designed to streamline soccer training schedules and team coordination with an intuitive, mobile-friendly experience.",
        description: "Total Focus Soccer is a modern web platform designed to streamline soccer training schedules and team coordination with an intuitive, mobile-friendly experience.",
        category: "Web Development",
        features: [
            "Online Appoitment",
            "Feedback Mechanism",
            "Mobile responsive design",
            "Previous Training Gallery"
        ]
    },
    {
        name: "Lydia Getaneh Foudnation",
        color: "#4a306d",
        image: lidyaGetanehImage,
        technologies: ["reactjs", "tailwindcss", "Chapa", "nodejs", "firebase"],
        live: "https://lydiagetanehfoundation.com/",
        github: {
            type: "private",
            url: ""
        },
        description: "The Lydia Getaneh Foundation website offers an intuitive user interface that allows visitors to easily navigate through information about the foundation's mission, programs, and impact. The site is fully responsive, ensuring optimal viewing experiences across various devices.​",
        fullDescription: "The Lydia Getaneh Foundation website offers an intuitive user interface that allows visitors to easily navigate through information about the foundation's mission, programs, and impact. The site is fully responsive, ensuring optimal viewing experiences across various devices.​",
        features: [
            "Donation Form",
            "Volutneer Form",
            "Feedback Mechanism",
            "Mobile responsive design"
        ],
        category: "Web Development",
    },
    {
        name: "Tomoca App",
        color: "#FA8D18",
        image: tomocaImage,
        imageDescription: "Tomoca App Image",
        live: "https://tomocacloud.com/",
        github: {
            type: "private",
            url: ""
        },
        description: "Tomoca App is an app that allows you to order coffee from the nearest Tomoca Coffee Shop.",
        fullDescription: "Tomoca Coffee App features an intuitive user interface that allows users to easily navigate, identify their needs, and make payments with ease thanks to an integrated payment gateway.",
        features: [
            "Online Ordering",
            "Payment Gateway",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
        ],
        technologies: ['flutter', 'dart', 'firebase', 'nodejs', 'expressjs', 'mysql']
    },
    {
        name: "Ethiopia Salary Calculator",
        color: "#074539",
        image: ethioSalacyCalculatorImage,
        imageDescription: "Ethiopia Salary Calculator Image",
        live: "https://ethiopia-salary-calculator.alamondai.com/",
        github: {
            type: "public",
            url: "https://github.com/natnaelengeda/salary-calculator-project-web"
        },
        description: "An App to Calculate Salary Based on Ethiopian Tax Law...",
        fullDescription: "An App to Calculate Salary Based on Ethiopian Tax Law...",
        features: [
            "Mobile responsive design"
        ],
        technologies: ['reactjs', 'tailwindcss', 'firebase']
    },
    {
        name: "Earth Quake Notifier",
        color: "#074539",
        image: earthQuakeImage,
        imageDescription: "Earth Quake Notifier Image",
        technologies: ['reactjs', 'tailwindcss', 'firebase'],
        live: "https://earthquake-notifier.vercel.app/",
        github: {
            type: "public",
            url: "https://github.com/natnaelengeda/ethiopia-earthquake-frontend"
        },
        description: "An App to Get Notificaiton when There is an Earth Quake",
        fullDescription: "An App to Get Notificaiton when There is an Earth Quake",
        features: [
            "Mobile responsive design"
        ],
    }
]
