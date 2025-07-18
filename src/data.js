// local imports
import shippingIcon from "./assets/free-shiping-icon.svg";
import paymentIcon from "./assets/quick-payment-icon.svg";
import supportIcon from "./assets/support-icon.svg";
import productOneIcon from "./assets/product-one.svg";
import productTwoIcon from "./assets/produc-two.svg";
import productThreeIcon from "./assets/product-three.svg";
import plantIcon from "./assets/plant-icon.svg";
import sunIcon from "./assets/sun-icon.svg";
import waterIcon from "./assets/water-icon.svg";
import temperatureIcon from "./assets/temperature-icon.svg";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


export const heroTitle = "Bring Serenity to Your Place With Interior Plants";
export const heroSubtitle =
  "find your dream plant for your home decoration with us, and we will make it happen.";

export const services = [
  {
    title: "Personalized Space Transformation",
    subtitle: "Transform. Your. Space.",
    icon: shippingIcon,
  },
  {
    title: "Harmonious Design & Functionality",
    subtitle: "Beauty. Function. Harmony",
    icon: paymentIcon,
  },
  {
    title: "Seamless Project Management",
    subtitle: "Concept. To. Completion.",
    icon: supportIcon,
  },
];

export const productsTitle = "About Us";
export const productsBtnText = "about us";

export const products = [
  {
    title: "Our inspiring journey",
    price: "Passion. Precision. Transformation.",
    img: productOneIcon,
  },
  {
    title: "Our Design Philosophy",
    price: "Beauty. Function. Soul.",
    img: productTwoIcon,
  },
  {
    title: "Dedicated to Your Vision",
    price: "Your Vision. Our Craftsmanship.",
    img: productThreeIcon,
  },
];

export const referenceTitle = "Design for Cozy Living.";
export const referenceSubtitle = "Transform your space into a cozy, refreshing haven.";

export const careTitle = "How to Care for Your Interior";
export const careSubtitle = "Maintain your design with care.";

export const careList = [
  {
    title: "Optimize Lighting",
    subtitle:
      "Ensure your space utilizes natural light effectively and has balanced artificial lighting for every mood.",
    img: sunIcon,
  },
  {
    title: "Declutter Thoughtfully",
    subtitle:
      "Regularly assess and remove unnecessary items to maintain clear, serene, and functional living areas.",
    img: waterIcon,
  },
  {
    title: "Select Right Pieces",
    subtitle:
      "Choose furniture and decor that perfectly fit the scale, purpose, and aesthetic of each room.",
    img: plantIcon,
  },
  {
    title: "Refresh Regularly",
    subtitle:
      "Periodically update accents, textiles, or art to keep your design vibrant and reflective of current tastes.",
    img: temperatureIcon,
  },
];

export const newsletter = "Newsletter";

export const footerLinksColumnOne = [
  {
    title: "Support",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "Useful Links",
    links: ["Payment & Tax", "Terms of service", "Privacy Policy"],
  },
];

export const footerLinksColumnTwo = [
  {
    title: "Our Menu",
    links: ["Best Product", "Categories"],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: "Instagram",
        url: "https://instagram.com/yourprofile",
        icon: FaInstagram,
      },
      {
        label: "Facebook",
        url: "https://facebook.com/yourprofile",
        icon: FaFacebookF,
      },
      {
        label: "Twitter",
        url: "https://twitter.com/yourprofile",
        icon: FaTwitter,
      },
    ],
  },
];
