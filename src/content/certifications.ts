export type Certification = {
  title: string;
  issuer: string;
  file: string; // path under /public
};

export const certifications: Certification[] = [
  {
    title: "Agents Course",
    issuer: "Hugging Face",
    file: "/certs/hf-agents-course.webp",
  },
  {
    title: "LLM Fundamentals",
    issuer: "Hugging Face",
    file: "/certs/hf-llm-fundamentals.webp",
  },
  {
    title: "Fine-Tuning Pre-Trained LLMs",
    issuer: "Hugging Face",
    file: "/certs/hf-fine-tuning.webp",
  },
];
