import DemoImage from "../assets/images/Wood_Pressed_xe62sr.webp";
import Image from "../assets/images/background.jpg";
import { FaTruck, FaShieldAlt, FaSmile } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Pure Mustard Oil",
    subtitle:
      "Wood Pressed · Best for Cooking, Pickles, Massage and Hair · 17gm Omega 3",
    image: DemoImage,
    rating: 5.0,
    reviews: 34,
    sizes: [
      {
        label: "5 Litres",
        price: 1850,
        originalPrice: 2350,
        pricePerLitre: 370,
        discount: 21,
      },
      {
        label: "1 Litre",
        price: 390,
        originalPrice: 450,
        pricePerLitre: 390,
        discount: 13,
      },
      {
        label: "500 ml",
        price: 220,
        originalPrice: 240,
        pricePerLitre: 440,
        discount: 8,
      },
    ],
    description: `Pure Mustard Oil is extracted from organically grown mustard seeds using traditional wood pressing methods. Ideal for cooking, pickling, and therapeutic uses.`,
    features: [
      "Cold-pressed using traditional 'Kachi Ghani' method",
      "Rich in Omega-3 and antioxidants",
      "No additives or chemicals",
      "Great for cooking, massage & hair care",
    ],
  },
];

const benefits = [
  {
    icon: <FaTruck size={16} className="text-green-600" />,
    title: "Free Delivery",
    subtitle: "On all orders",
  },
  {
    icon: <FaSmile size={16} className="text-green-600" />,
    title: "100% Satisfaction",
    subtitle: "30-day money back",
  },
  {
    icon: <FaShieldAlt size={16} className="text-green-600" />,
    title: "Secure Checkout",
    subtitle: "256-bit SSL encryption",
  },
];

const offers = [
  {
    id: 1,
    code: "Welcome",
    description: "रु50 OFF on your first order.",
    discount: 50,
  },
  {
    id: 2,
    code: "SHOP_999",
    description: "रु50 OFF on orders above रु999/-",
    discount: 200,
  },
  {
    id: 3,
    code: "SHOP_1999",
    description: "रु125 OFF on orders above रु1999/-",
    discount: 50,
  },
  {
    id: 4,
    code: "SHOP_3999",
    description: "रु400 OFF on orders above रु3999/-",
    discount: 300,
  },
  {
    id: 5,
    code: "SHOP_6000",
    description: "रु125 OFF on orders above रु6000/-",
    discount: 50,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "5 Reasons Why Wood‑Pressed Oils Are Better",
    slug: "wood-pressed-oils-benefits",
    image: Image,
    category: "Health & Wellness",
    date: "2024-12-15",
    excerpt:
      "Discover the amazing benefits of wood-pressed oils for a healthier lifestyle and tastier meals.",
  },
  {
    id: 2,
    title: "Cold‑Pressed vs Refined Oils: What You Should Know",
    slug: "cold-pressed-vs-refined",
    image:
      Image,
    category: "Organic Living",
    date: "2025-01-10",
    excerpt:
      "Learn the key differences between cold-pressed and refined oils—and why it matters for your health.",
  },
  {
    id: 3,
    title: "Cooking with Mustard Oil: Tips from the Kitchen",
    slug: "cooking-with-mustard-oil",
    image:
      Image,
    category: "Cooking Tips",
    date: "2025-01-20",
    excerpt:
      "Spice up your meals with these kitchen tricks using mustard oil—ideal for authentic taste and aroma.",
  },
  {
    id: 4,
    title: "How to Use Coconut Oil for Glowing Skin",
    slug: "coconut-oil-skincare-tips",
    image:
      Image,
    category: "Skincare",
    date: "2025-02-02",
    excerpt:
      "Coconut oil isn’t just for cooking. Here’s how to apply it for radiant, nourished skin naturally.",
  },
  {
    id: 5,
    title: "Sustainable Farming Behind Our Oils",
    slug: "sustainable-farming-organic-oils",
    image:
      Image,
    category: "Sustainability",
    date: "2025-02-15",
    excerpt:
      "Take a look behind the scenes at how our farmers grow and process oils sustainably with love.",
  },
];

const blogCategories = [
  "Health & Wellness",
  "Organic Living",
  "Our Process",
  "Beauty & Care",
];

export { products, benefits, offers, blogCategories, blogPosts };
