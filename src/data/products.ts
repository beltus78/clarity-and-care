export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
  price: number;
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
    slug: "buy-concerta-online",
    name: "Buy Concerta Online",
    image: concertaImg,
    price: 9,
    description:
      "Buy Concerta online safely from your reliable and trusted drugstore. Concerta is a prescription medication used to treat ADHD. You can purchased from us today with or without prescription.Enjoy professional pharmacist support, secure packaging, and reliable delivery for your approved medication needsExtended-release methylphenidate to help manage symptoms of ADHD and improve focus.",
    ingredients: ["Methylphenidate hydrochloride"],
    dosage: "Typically once daily in the morning. Consult your provider for individualized dosing.",
    benefits: ["Improved attention", "Reduced impulsivity", "Once-daily convenience"],
    sideEffects: ["Decreased appetite", "Insomnia", "Dry mouth"],
    testimonials: [
      { author: "Jordan P.", quote: "Noticeable focus improvements throughout the day." },
    ],
  },
  {
    slug: "buy-tilidin-200mg",
    name: "Buy Tilidin 200mg",
    image: tilidinImg,
    price: 200,
    description:
      "Buy Tilidin online safely from your reliable and trusted drugstore. Tilidin is a prescription-only pain relief medication available for patients under medical supervision. We always at your reach to ensure you get your drugs with or without a prescription.Analgesic used for moderate to severe pain management under medical supervision.",
    ingredients: ["Tilidin"],
    dosage: "As prescribed by your healthcare provider. Do not exceed recommended dose.",
    benefits: ["Effective pain relief", "Controlled dosing"],
    sideEffects: ["Nausea", "Dizziness", "Constipation"],
    testimonials: [{ author: "Sam R.", quote: "Brought my pain under control." }],
  },
  {
    slug: "buy-adderall-online",
    name: "Buy Adderall Online",
    image: adderallImg,
    price: 300,
    description:
      "Buy Adderall Online today and experience fast, discreet delivery from your reliable and trusted drugstore.. Get high-quality Adderall for improved focus and energy — easy ordering, secure payment, and quick shipping guaranteed!. A combination of amphetamine salts used to treat ADHD, enhancing focus and attention.",
    ingredients: ["Amphetamine", "Dextroamphetamine"],
    dosage: "Varies by formulation and patient. Follow your provider's instructions.",
    benefits: ["Increased attention span", "Supports task completion"],
    sideEffects: ["Decreased appetite", "Dry mouth", "Insomnia"],
    testimonials: [{ author: "Lee A.", quote: "Helped me stay on track at work." }],
  },
  {
    slug: "buy-clonazepam-online",
    name: "Buy Clonazepam Online",
    image: clonazepamImg,
    price: 86,
    description:
      "Buy Clonazepam Online today from your reliable and trusted drugstore.— fast, discreet delivery and professional pharmacist support. Get genuine Clonazepam for anxiety or seizure management with easy ordering, secure payment, and reliable shipping with or withour prescription. Benzodiazepine indicated for seizure disorders and panic disorder, used as directed.",
    ingredients: ["Clonazepam"],
    dosage: "Take exactly as prescribed. Do not stop abruptly without medical guidance.",
    benefits: ["Seizure control", "Panic disorder management"],
    sideEffects: ["Drowsiness", "Dizziness", "Coordination issues"],
    testimonials: [
      { author: "Pat C.", quote: "Reduced my panic frequency noticeably." },
    ],
  },
  {
    slug: "buy-mounjaro-online",
    name: "Buy Mounjaro Online",
    image: mounjaroImg,
    price: 128,
    description:
      "Buy Mounjaro Online with confidence from you reliable and trusted drugstore. Discover genuine Mounjaro for effective weight loss and diabetes support — simple ordering, secure payment, and fast, discreet delivery.. Tirzepatide injection used for glycemic control in adults with type 2 diabetes.",
    ingredients: ["Tirzepatide"],
    dosage: "Once weekly subcutaneous injection; follow training from your provider.",
    benefits: ["Improved glycemic control", "Convenient weekly dosing"],
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite"],
    testimonials: [
      { author: "Taylor M.", quote: "Weekly dosing fits my routine perfectly." },
    ],
  },
  {
    slug: "buy-ozempic-online",
    name: "Buy Ozempic Online",
    image: ozempicImg,
    price: 100,
    description:
      "Buy Ozempic Online from your reliable and trusted drugstore. Get genuine Ozempic for effective blood sugar control and weight management with fast delivery and secure checkout. Semaglutide injection to improve blood sugar in adults with type 2 diabetes.",
    ingredients: ["Semaglutide"],
    dosage: "Once weekly subcutaneous injection; titrate per provider guidance.",
    benefits: ["A1C reduction", "Weight management support"],
    sideEffects: ["Nausea", "Vomiting", "Constipation"],
    testimonials: [{ author: "Alex J.", quote: "My A1C came down steadily." }],
  },
  {
    slug: "buy-oxycontin-onlie",
    name: "Buy Oxycontin Online",
    image: oxycontinImg,
    price: 6,
    description:
      "Extended-release oxycodone for severe pain requiring around-the-clock opioid treatment. Buy  OxyContin Online through your reliable and trusted drugstore. OxyContin (Oxycodone) is a prescription pain medication that must be used under medical supervision. Ensure you order from us to get the best.",
    ingredients: ["Oxycodone"],
    dosage: "Strictly as prescribed. Do not crush or chew extended-release tablets.",
    benefits: ["Sustained pain control"],
    sideEffects: ["Constipation", "Drowsiness", "Nausea"],
    testimonials: [{ author: "Morgan D.", quote: "Provided steady relief after surgery." }],
  },
  {
    slug: "buy-percocet-online",
    name: "Buy Percocet Online",
    image: percocetImg,
    price: 129,
    description:
      "Buy Percocet Online Percocet Online through your reliable and trusted drugstore. Percocet (Oxycodone/Acetaminophen) is a prescription pain reliever that must be used under medical supervision to ensure safety. Combination of oxycodone and acetaminophen for moderate to severe pain relief.",
    ingredients: ["Oxycodone", "Acetaminophen"],
    dosage: "Use the lowest effective dose for the shortest duration under supervision.",
    benefits: ["Effective short-term pain relief"],
    sideEffects: ["Drowsiness", "Constipation", "Nausea"],
    testimonials: [{ author: "Dana K.", quote: "Managed acute pain effectively." }],
  },
  {
    slug: "buy-zolpidem-online",
    name: "Buy Zolpidem Online",
    image: zolpidemImg,
    price: 120,
    description:
      "Buy Zolpidem Online from your reliable and trusted drugstore — fast, discreet shipping and authentic sleep medication available. Zolpidem (sleep aid) is supplied only to patients with a valid prescription, backed by professional guidance and secure packaging. Sedative-hypnotic used short-term for insomnia, helping initiate sleep.",
    ingredients: ["Zolpidem tartrate"],
    dosage: "Immediately before bedtime; ensure a full night's sleep opportunity.",
    benefits: ["Faster sleep onset"],
    sideEffects: ["Dizziness", "Daytime drowsiness", "Headache"],
    testimonials: [{ author: "Chris F.", quote: "Helped reset my sleep routine." }],
  },
  {
    slug: "buy-zopiclone-online",
    name: "Buy Zopiclone Online",
    image: zopicloneImg,
    price: 130,
    description:
      "Buy Zopiclone Online safely from your reliable and trusted drugstore. Zopiclone is a prescription sleep aid provided only to patients with orwithout prescription,ensuring safe and responsible use. Non-benzodiazepine hypnotic for short-term insomnia management.",
    ingredients: ["Zopiclone"],
    dosage: "At bedtime as prescribed; avoid alcohol and driving after use.",
    benefits: ["Improved sleep quality"],
    sideEffects: ["Bitter taste", "Drowsiness", "Dry mouth"],
    testimonials: [{ author: "Jamie L.", quote: "More restful nights after a week." }],
  },
];
