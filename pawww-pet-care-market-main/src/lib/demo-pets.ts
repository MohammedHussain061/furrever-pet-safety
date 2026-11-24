import heroDog from "@/assets/hero-dog.jpg";
import catHome from "@/assets/cat-home.jpg";

export type DemoPet = {
  tagId: string;
  name: string;
  breed: string;
  age: string;
  ownerName: string;
  ownerPhoneMasked: string;
  note: string;
  shared: string[];
  photo: string;
};

// Sample profiles used until real accounts are connected.
export const demoPets: DemoPet[] = [
  {
    tagId: "PL-20481",
    name: "Bruno",
    breed: "Golden retriever",
    age: "4 years",
    ownerName: "Ananya",
    ownerPhoneMasked: "+91 98••• ••210",
    note: "Bruno is very friendly and loves treats. He gets nervous near traffic — please keep him somewhere calm.",
    shared: ["Name", "Owner contact", "Friendly note"],
    photo: heroDog,
  },
  {
    tagId: "PL-31877",
    name: "Snowy",
    breed: "Persian cat",
    age: "2 years",
    ownerName: "Meera",
    ownerPhoneMasked: "+91 97••• ••045",
    note: "Snowy is an indoor cat and may hide. Please don't chase her — a quiet room and water is perfect.",
    shared: ["Name", "Owner contact", "Medical note"],
    photo: catHome,
  },
];

/** Turns what a finder types ("pl 20481", "PL20481") into the printed ID format "PL-20481". */
export function normalizeTagId(input: string): string {
  const compact = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const match = compact.match(/^([A-Z]+)(\d+)$/);
  if (!match) return compact;
  return `${match[1]}-${match[2]}`;
}

export function findPetByTagId(input: string): DemoPet | null {
  const id = normalizeTagId(input);
  if (!id) return null;
  return demoPets.find((p) => p.tagId === id) ?? null;
}
