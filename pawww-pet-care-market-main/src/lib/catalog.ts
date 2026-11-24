import collarSky from "@/assets/collar-sky.jpg";
import collarRose from "@/assets/collar-rose.jpg";
import collarInk from "@/assets/collar-ink.jpg";
import flatlay from "@/assets/collars-flatlay.jpg";
import tapTag from "@/assets/tap-tag.jpg";
import heroDog from "@/assets/hero-dog.jpg";
import catHome from "@/assets/cat-home.jpg";

export type Collar = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  tile: "sky" | "rose" | "stone";
  swatch: string;
  image: string;
  gallery: string[];
  highlights: string[];
};

export const COLLAR_SIZES = [
  { id: "XS", label: "XS", fit: "20–30 cm" },
  { id: "S", label: "S", fit: "28–40 cm" },
  { id: "M", label: "M", fit: "36–50 cm" },
  { id: "L", label: "L", fit: "45–60 cm" },
] as const;

export const collars: Collar[] = [
  {
    slug: "powder-blue",
    code: "SKY 01",
    name: "Powder blue",
    tagline: "Soft-touch webbing with a weather-sealed NFC tag.",
    description:
      "Our softest everyday collar. Breathable woven webbing, a quick-release buckle and the Furrever smart tag — ready for walks, naps and everything in between.",
    price: 2499,
    tile: "sky",
    swatch: "bg-swatch-sky",
    image: collarSky,
    gallery: [collarSky, tapTag, flatlay, heroDog],
    highlights: ["Soft-touch woven webbing", "Quick-release safety buckle", "Weather-sealed NFC tag"],
  },
  {
    slug: "blush-pink",
    code: "ROSE 02",
    name: "Blush pink",
    tagline: "A gentle everyday collar made for long adventures.",
    description:
      "Lightweight and gentle on fur, with a slim profile that suits cats and small dogs just as well as bigger adventurers.",
    price: 2499,
    tile: "rose",
    swatch: "bg-swatch-rose",
    image: collarRose,
    gallery: [collarRose, catHome, flatlay, tapTag],
    highlights: ["Lightweight slim profile", "Gentle on fur", "Weather-sealed NFC tag"],
  },
  {
    slug: "charcoal",
    code: "INK 03",
    name: "Charcoal",
    tagline: "Minimal, durable and quietly reflective after dark.",
    description:
      "Built for evening walks. Reflective stitching catches headlights and torchlight, while the tough webbing handles muddy parks and monsoon puddles.",
    price: 2699,
    tile: "stone",
    swatch: "bg-swatch-stone",
    image: collarInk,
    gallery: [collarInk, flatlay, tapTag, heroDog],
    highlights: ["Reflective stitching", "Extra-durable webbing", "Weather-sealed NFC tag"],
  },
];

export const tileClass: Record<Collar["tile"], string> = {
  sky: "bg-tile-sky",
  rose: "bg-tile-rose",
  stone: "bg-tile-stone",
};

export function getCollar(slug: string): Collar | undefined {
  return collars.find((c) => c.slug === slug);
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
