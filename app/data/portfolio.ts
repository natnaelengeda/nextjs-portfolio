import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';
import lliImage from '../assets/portolio/lli-image.jpg';
import coffeeTerminalImage from '../assets/portolio/coffee-terminal-image.jpg';
import bermelFestImage from "@/app/assets/portolio/bermel-fest-image.jpg";

export const websitesProjects = [
    {
        id: 1,
        name: "Coffee Terminal",
        color: '#1B1107',
        image: coffeeTerminalImage,
        imageDescription: "Coffee Terminal Image",
        url: "https://www.coffeeterminalet.com/",
        description: "Coffee Termninal - The Best Coffee Shop in Town...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase']
    },
    {
        id: 2,
        name: "Bermel Fest",
        color: '#EA2829',
        image: bermelFestImage,
        imageDescription: "Bermel Fest Image",
        url: "https://et.bermelfest.com/",
        description: "Bermel Fest - Come and enjoy the best event in Ethiopia!...",
        technologies: ['nextjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql', 'firebase']
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
        id: 4,
        name: "Angel SKin",
        color: '#d5ac89',
        image: angelImage,
        imageDescription: "Angel Skin Image",
        url: "https://angelskinbyangela.com/",
        description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
        technologies: ['vue.js', 'tailwindcss'],
    },
    {
        id: 5,
        name: "Fitsum Printing and Advert",
        color: '#8bc43b',
        image: fistumImage,
        imageDescription: "Firstum Printing and Advert Image",
        url: "https://fitsumprintandadvertisng.com/",
        description: "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    },
]

export const mobileAppsProjects = [
    {
        id: 1,
        name: "Tomoca App",
        color: "#FA8D18",
        image: tomocaImage,
        imageDescription: "Tomoca App Image",
        url: "https://play.google.com/store/apps/details?id=com.tomoca.app&hl=en&gl=US",
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
        description: "Little Luxury Items, your destination for unique and innovative products. As an e-commerce store, we are dedicated to providing you with the best selection of high-quality items that add a touch of luxury to your everyday life",
        technologies: ['shopify']
    }
]