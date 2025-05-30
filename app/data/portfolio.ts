import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';
import lliImage from '../assets/portolio/lli-image.jpg';
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
            "Multilingual support (Amharic + English)",
            "Event registration and ticket system",
            "Admin panel for content updates",
            "Firebase Authentication and CMS integration"
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
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
        ]
    },
    {
        name: "Fitsum Printing and Advert",
        color: '#8bc43b',
        image: fistumImage,
        imageDescription: "Firstum Printing and Advert Image",
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
        live: "https://fitsumpptest.vercel.app/",
        github: {
            type: "private",
            url: ""
        },
        team: "Solo",
        date: "2024-08",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql'],
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
        technologies: ['vue.js', 'tailwindcss'],
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "A property listing website with advanced search, filtering, and Renting Options.",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
        ]
    },
    {
        name: "Total Focus Soccer",
        color: '#1f65b1',
        image: totalFocusImage,
        technologies: ["reactjs", "tailwindcss", "Google Calander API"],
        live: "http://totalfocussoccer.com/",
        github: {
            type: "private",
            url: ""
        },
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        description: "Total Focus Soccer is a modern web platform designed to streamline soccer training schedules and team coordination with an intuitive, mobile-friendly experience.",
        category: "Web Development",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        features: [
            "Interactive product showcase",
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
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
        fullDescription: "Modern web app for a coffee brand offering online ordering and a digital menu with a clean UI. Designed to reflect the essence of Ethiopian coffee culture.",
        features: [
            "Interactive product showcase",
            "Custom admin dashboard",
            "Realtime inventory updates",
            "Mobile responsive design"
        ],
    }
]
