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

export const websitesProjects = [
    {
        id: 1,
        name: "Bermel Fest",
        color: '#EA2829',
        image: bermelFestImage,
        imageDescription: "Bermel Fest Image",
        url: "https://et.bermelfest.com/",
        description: "Bermel Fest - Come and enjoy the best event in Ethiopia!...",
        technologies: ['nextjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase']
    },
    {
        id: 2,
        name: "Coffee Terminal",
        color: '#1B1107',
        image: coffeeTerminalImage,
        imageDescription: "Coffee Terminal Image",
        url: "https://coffee-termina-et-vercel.vercel.app/",
        description: "Coffee Termninal - The Best Coffee Shop in Town...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase']
    },
    {
        id: 5,
        name: "Fitsum Printing and Advert",
        color: '#8bc43b',
        image: fistumImage,
        imageDescription: "Firstum Printing and Advert Image",
        url: "https://fitsumpptest.vercel.app/",
        description: "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    },
    {
        id: 4,
        name: "Angel SKin",
        color: '#d5ac89',
        image: angelImage,
        imageDescription: "Angel Skin Image",
        url: "https://angelskin.vercel.app/",
        description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
        technologies: ['vue.js', 'tailwindcss'],
    },
    {
        id: 5,
        name: "Gojo Real Estate",
        color: "",
        description: "A property listing website with advanced search, filtering, and Renting Options.",
        image: gojoImage,
        technologies: ["nextjs", "tailwindcss"],
        link: "http://gojo-ethiopia.vercel.app/",
        category: "Web Development",
    },
    {
        id: 3,
        name: "Semah MCH",
        color: '#1f65b1',
        image: semahImage,
        imageDescription: "Semah MCH Image",
        url: "https://www.semahmch.com/",
        description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
        technologies: ['reactjs', 'ts', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    },
    {
        id: 7,
        name: "Total Focus Soccer",
        color: '#1f65b1',
        description: "Total Focus Soccer is a modern web platform designed to streamline soccer training schedules and team coordination with an intuitive, mobile-friendly experience.",
        image: totalFocusImage,
        technologies: ["reactjs", "tailwindcss", "Google Calander API"],
        link: "http://totalfocussoccer.com/",
        category: "Web Development",
    },
    {
        id: 8,
        name: "Lydia Getaneh Foudnation",
        color: "#4a306d",
        description: "The Lydia Getaneh Foundation website offers an intuitive user interface that allows visitors to easily navigate through information about the foundation's mission, programs, and impact. The site is fully responsive, ensuring optimal viewing experiences across various devices.​",
        image: lidyaGetanehImage,
        technologies: ["reactjs", "tailwindcss", "Chapa", "nodejs", "firebase"],
        link: "https://lydiagetanehfoundation.com/",
        category: "Web Development",
    },
]

export const mobileAppsProjects = [
    {
        id: 1,
        name: "Tomoca App",
        color: "#FA8D18",
        image: tomocaImage,
        imageDescription: "Tomoca App Image",
        url: "https://tomocacloud.com/",
        description: "Tomoca App is an app that allows you to order coffee from the nearest Tomoca Coffee Shop.",
        technologies: ['flutter', 'dart', 'firebase', 'nodejs', 'expressjs', 'mysql']
    }
]

export const shopifyStores = [
    {
        id: 1,
        name: "Little Luxury Items",
        color: "#615B56",
        image: lliImage,
        imageDescription: "Little Luxury Items Images",
        url: "https://littleluxuryitems.co/",
        description: "Little Luxury Items, your destination for unique and innovative products. As an e-commerce store...",
        technologies: ['shopify']
    }
]

export const personalProjects = [
    {
        name: "Ethiopia Salary Calculator",
        color: "#074539",
        image: ethioSalacyCalculatorImage,
        imageDescription: "Ethiopia Salary Calculator Image",
        url: "https://ethiopia-salary-calculator.alamondai.com/",
        description: "An App to Calculate Salary Based on Ethiopian Tax Law...",
        technologies: ['reactjs', 'tailwindcss', 'firebase']
    },
    {
        name: "Earth Quake Notifier",
        color: "#074539",
        image: earthQuakeImage,
        imageDescription: "Earth Quake Notifier Image",
        url: "https://earthquake-notifier.vercel.app/",
        description: "An App to Get Notificaiton when There is an Earth Quake",
        technologies: ['reactjs', 'tailwindcss', 'firebase']
    }
]