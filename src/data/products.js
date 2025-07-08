import DemoImage from "../assets/images/Wood_Pressed_xe62sr.webp";
import Image from "../assets/images/background.jpg";
import {
  FaTruck,
  FaShieldAlt,
  FaSmile,
  FaGlobeAmericas,
  FaLeaf,
  FaHandsHelping,
  FaRecycle,
  FaSeedling,
} from "react-icons/fa";


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

export const blogPosts = [
  {
    id: 1,
    title: "5 Reasons Why Wood‑Pressed Oils Are Better",
    slug: "wood-pressed-oils-benefits",
    image: Image,
    category: "Health & Wellness",
    date: "2024-12-15",
    excerpt:
      "Discover the amazing benefits of wood-pressed oils for a healthier lifestyle and tastier meals.",
    content: `Wood-pressed oils, also known as cold-pressed oils, are extracted using traditional wooden churners, preserving the oil’s natural aroma and nutrients. Here’s why you should choose them:
    
1. **No Heat Involved** – Unlike refined oils, wood-pressed oils are not exposed to high heat, keeping their natural nutrients intact.
2. **Rich in Antioxidants** – These oils retain vitamin E and other antioxidants that boost immunity.
3. **No Chemicals or Preservatives** – Pure, natural, and chemical-free, they’re safer for daily use.
4. **Better Flavor & Aroma** – You’ll instantly notice the difference in taste and smell.
5. **Environmentally Friendly** – Traditional extraction methods are sustainable and energy-efficient.

Switching to wood-pressed oils is a small change that brings big health benefits.`,
  },
  {
    id: 2,
    title: "Cold‑Pressed vs Refined Oils: What You Should Know",
    slug: "cold-pressed-vs-refined",
    image: Image,
    category: "Organic Living",
    date: "2025-01-10",
    excerpt:
      "Learn the key differences between cold-pressed and refined oils—and why it matters for your health.",
    content: `Not all oils are created equal. Refined oils go through chemical processing, while cold-pressed oils are extracted naturally. Here’s a breakdown:

- **Cold-Pressed Oils** are made without heating or refining, preserving all nutrients and flavor.
- **Refined Oils** undergo bleaching, deodorizing, and heating that strip away essential fatty acids and vitamins.
- **Health Impact** – Cold-pressed oils support heart health and digestion, while refined oils may contain trans fats and residues.
- **Usage** – Use cold-pressed oils for finishing dishes or low-heat cooking, and refined oils where neutral flavor is desired.

Choosing the right oil can significantly improve your well-being. Aim for cold-pressed oils whenever possible!`,
  },
  {
    id: 3,
    title: "Cooking with Mustard Oil: Tips from the Kitchen",
    slug: "cooking-with-mustard-oil",
    image: Image,
    category: "Cooking Tips",
    date: "2025-01-20",
    excerpt:
      "Spice up your meals with these kitchen tricks using mustard oil—ideal for authentic taste and aroma.",
    content: `Mustard oil adds a bold, spicy flavor to dishes and is a favorite in many regional Indian cuisines. Here are some tips to use it better:

- **Always heat before using** – Heating mustard oil until it reaches the smoking point helps remove its sharp pungency.
- **Perfect for pickles and curries** – Mustard oil preserves pickles beautifully and enhances the flavor of spicy gravies.
- **Mix it with other oils** for a milder taste when stir-frying.
- **Massage oil** – Apart from cooking, it’s used for hair and body massage due to its warming properties.

Whether you’re making achar or fish curry, mustard oil brings a unique taste that’s hard to replicate.`,
  },
  {
    id: 4,
    title: "How to Use Coconut Oil for Glowing Skin",
    slug: "coconut-oil-skincare-tips",
    image: Image,
    category: "Skincare",
    date: "2025-02-02",
    excerpt:
      "Coconut oil isn’t just for cooking. Here’s how to apply it for radiant, nourished skin naturally.",
    content: `Coconut oil is a natural powerhouse for skin care. Rich in lauric acid and vitamin E, it provides deep hydration and healing properties. Try these:

- **Daily moisturizer** – Apply after a shower to lock in moisture.
- **Makeup remover** – Gently dissolves waterproof makeup and hydrates the skin.
- **Lip balm & cuticle oil** – Use it to soften chapped lips or cracked nails.
- **Hair treatment** – Massage onto scalp to reduce dandruff and improve hair strength.

Always choose organic, cold-pressed coconut oil for skin use. It’s gentle, effective, and budget-friendly.`,
  },
  {
    id: 5,
    title: "Sustainable Farming Behind Our Oils",
    slug: "sustainable-farming-organic-oils",
    image: Image,
    category: "Sustainability",
    date: "2025-02-15",
    excerpt:
      "Take a look behind the scenes at how our farmers grow and process oils sustainably with love.",
    content: `At the heart of every bottle of oil is a story of care and sustainability. Our farmers follow eco-conscious practices that protect nature and nurture communities:

- **No synthetic pesticides** – Crops are grown using natural compost and bio-fertilizers.
- **Rainwater harvesting** – Farms use collected rainwater for irrigation.
- **Traditional extraction** – Oils are made using wooden ghani (press), consuming less energy and producing zero waste.
- **Fair wages and community growth** – Supporting small-scale farmers ensures equitable trade and development.

When you choose our oils, you’re supporting a movement toward healthier people and a healthier planet.`,
  },
];

const blogCategories = [
  "Health & Wellness",
  "Organic Living",
  "Our Process",
  "Beauty & Care",
];


const cards = [
  {
    icon: FaGlobeAmericas,
    title: "Mission",
    text: "Nurture nature...",
    color: "bg-green-50",
  },
  {
    icon: FaLeaf,
    title: "Vision",
    text: "A world rooted in balance...",
    color: "bg-yellow-50",
  },
  {
    icon: FaHandsHelping,
    title: "Promise",
    text: "Integrity in every harvest...",
    color: "bg-orange-50",
  },
];

const core = [
  {
    icon: FaRecycle,
    title: "Sustainability",
    text: "Circular packaging...",
    color: "bg-green-100",
  },
  {
    icon: FaSeedling,
    title: "Purity",
    text: "Chemical‑free goodness...",
    color: "bg-yellow-100",
  },
  {
    icon: FaHandsHelping,
    title: "Community",
    text: "Empowering growers...",
    color: "bg-orange-100",
  },
];

export { products, benefits, offers, blogCategories, cards,core };
