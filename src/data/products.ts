export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  dosage: string;
  benefits: string[];
  sideEffects: string[];
  testimonials: { author: string; quote: string }[];
};

// Images are imported as strings for lazy usage in components
import concertaImg from "@/assets/products/concerta.jpg";
import tilidinImg from "@/assets/products/tilidin-200mg.jpg";
import adderallImg from "@/assets/products/adderall.jpg";
import clonazepamImg from "@/assets/products/clonazepam.jpg";
import mounjaroImg from "@/assets/products/mounjaro.jpg";
import ozempicImg from "@/assets/products/ozempic.jpg";
import oxycontinImg from "@/assets/products/oxycontin.jpg";
import percocetImg from "@/assets/products/percocet.jpg";
import zolpidemImg from "@/assets/products/zolpidem.jpg";
import zopicloneImg from "@/assets/products/zopiclone.jpg";

export const products: Product[] = [
  {
    slug: "concerta",
    name: "Concerta",
    image: concertaImg,
    description:
      "Extended-release methylphenidate to help manage symptoms of ADHD and improve focus.",
    ingredients: ["Methylphenidate hydrochloride"],
    dosage: "Typically once daily in the morning. Consult your provider for individualized dosing.",
    benefits: ["Improved attention", "Reduced impulsivity", "Once-daily convenience"],
    sideEffects: ["Decreased appetite", "Insomnia", "Dry mouth"],
    testimonials: [
      { author: "Jordan P.", quote: "Noticeable focus improvements throughout the day." },
    ],
  },
  {
    slug: "tilidin-200mg",
    name: "Tilidin 200mg",
    image: tilidinImg,
    description:
      "Analgesic used for moderate to severe pain management under medical supervision.",
    ingredients: ["Tilidin"],
    dosage: "As prescribed by your healthcare provider. Do not exceed recommended dose.",
    benefits: ["Effective pain relief", "Controlled dosing"],
    sideEffects: ["Nausea", "Dizziness", "Constipation"],
    testimonials: [{ author: "Sam R.", quote: "Brought my pain under control." }],
  },
  {
    slug: "adderall",
    name: "Adderall",
    image: adderallImg,
    description:
      "A combination of amphetamine salts used to treat ADHD, enhancing focus and attention.",
    ingredients: ["Amphetamine", "Dextroamphetamine"],
    dosage: "Varies by formulation and patient. Follow your provider's instructions.",
    benefits: ["Increased attention span", "Supports task completion"],
    sideEffects: ["Decreased appetite", "Dry mouth", "Insomnia"],
    testimonials: [{ author: "Lee A.", quote: "Helped me stay on track at work." }],
  },
  {
    slug: "clonazepam",
    name: "Clonazepam",
    image: clonazepamImg,
    description:
      "Benzodiazepine indicated for seizure disorders and panic disorder, used as directed.",
    ingredients: ["Clonazepam"],
    dosage: "Take exactly as prescribed. Do not stop abruptly without medical guidance.",
    benefits: ["Seizure control", "Panic disorder management"],
    sideEffects: ["Drowsiness", "Dizziness", "Coordination issues"],
    testimonials: [
      { author: "Pat C.", quote: "Reduced my panic frequency noticeably." },
    ],
  },
  {
    slug: "mounjaro",
    name: "Mounjaro",
    image: mounjaroImg,
    description:
      "Tirzepatide injection used for glycemic control in adults with type 2 diabetes.",
    ingredients: ["Tirzepatide"],
    dosage: "Once weekly subcutaneous injection; follow training from your provider.",
    benefits: ["Improved glycemic control", "Convenient weekly dosing"],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite"],
    testimonials: [
      { author: "Taylor M.", quote: "Weekly dosing fits my routine perfectly." },
    ],
  },
  {
    slug: "ozempic",
    name: "Ozempic",
    image: ozempicImg,
    description:
      "Semaglutide injection to improve blood sugar in adults with type 2 diabetes.",
    ingredients: ["Semaglutide"],
    dosage: "Once weekly subcutaneous injection; titrate per provider guidance.",
    benefits: ["A1C reduction", "Weight management support"],
    sideEffects: ["Nausea", "Vomiting", "Constipation"],
    testimonials: [{ author: "Alex J.", quote: "My A1C came down steadily." }],
  },
  {
    slug: "oxycontin",
    name: "Oxycontin",
    image: oxycontinImg,
    description:
      "Extended-release oxycodone for severe pain requiring around-the-clock opioid treatment.",
    ingredients: ["Oxycodone"],
    dosage: "Strictly as prescribed. Do not crush or chew extended-release tablets.",
    benefits: ["Sustained pain control"],
    sideEffects: ["Constipation", "Drowsiness", "Nausea"],
    testimonials: [{ author: "Morgan D.", quote: "Provided steady relief after surgery." }],
  },
  {
    slug: "percocet",
    name: "Percocet",
    image: percocetImg,
    description:
      "Combination of oxycodone and acetaminophen for moderate to severe pain relief.",
    ingredients: ["Oxycodone", "Acetaminophen"],
    dosage: "Use the lowest effective dose for the shortest duration under supervision.",
    benefits: ["Effective short-term pain relief"],
    sideEffects: ["Drowsiness", "Constipation", "Nausea"],
    testimonials: [{ author: "Dana K.", quote: "Managed acute pain effectively." }],
  },
  {
    slug: "zolpidem",
    name: "Zolpidem",
    image: zolpidemImg,
    description:
      "Sedative-hypnotic used short-term for insomnia, helping initiate sleep.",
    ingredients: ["Zolpidem tartrate"],
    dosage: "Immediately before bedtime; ensure a full night's sleep opportunity.",
    benefits: ["Faster sleep onset"],
    sideEffects: ["Dizziness", "Daytime drowsiness", "Headache"],
    testimonials: [{ author: "Chris F.", quote: "Helped reset my sleep routine." }],
  },
  {
    slug: "zopiclone",
    name: "Zopiclone",
    image: zopicloneImg,
    description:
      "Non-benzodiazepine hypnotic for short-term insomnia management.",
    ingredients: ["Zopiclone"],
    dosage: "At bedtime as prescribed; avoid alcohol and driving after use.",
    benefits: ["Improved sleep quality"],
    sideEffects: ["Bitter taste", "Drowsiness", "Dry mouth"],
    testimonials: [{ author: "Jamie L.", quote: "More restful nights after a week." }],
  },
];
