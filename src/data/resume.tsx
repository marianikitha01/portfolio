import type { ResumeData } from '@/lib/types';
import { Brain, Database, Code, Settings, TrendingUp, BarChart, MessageSquare, Users } from 'lucide-react';

// Define a simple brain-like SVG icon for Data Science Concepts
const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit">
    <path d="M12 5a3 3 0 1 0-5.997.125"/>
    <path d="M12 5a3 3 0 1 1 5.997.125"/>
    <path d="M15 11a2.5 2.5 0 1 0-5 .001"/>
    <path d="M15 11a2.5 2.5 0 1 1 5 .001"/>
    <path d="M9 11a2.5 2.5 0 1 0-5 .001"/>
    <path d="M9 11a2.5 2.5 0 1 1 5 .001"/>
    <path d="M14 15.5a1.5 1.5 0 1 0-3.001-.001"/>
    <path d="M14 15.5a1.5 1.5 0 1 1 3 .001"/>
    <path d="M10 15.5a1.5 1.5 0 1 0-3 .001"/>
    <path d="M10 15.5a1.5 1.5 0 1 1 3 .001"/>
    <path d="M6.003 5.125A2.995 2.995 0 0 1 5 7.999V10"/>
    <path d="M5.003 12.001A2.995 2.995 0 0 1 6 14.875V17a1 1 0 0 0 1 1h1"/>
    <path d="M17.997 5.125A2.995 2.995 0 0 0 19 7.999V10"/>
    <path d="M18.997 12.001A2.995 2.995 0 0 0 18 14.875V17a1 1 0 0 1-1 1h-1"/>
    <path d="M12 18.001V20a1 1 0 0 1-1 1h-1"/>
    <path d="M12 18.001V20a1 1 0 0 0 1 1h1"/>
    <path d="M12 8.001V10"/>
    <path d="M12 13V14.5"/>
  </svg>
);


export const resumeData: ResumeData = {
  name: 'Maria Nikitha Suresh', 
  title: 'Data Science Graduate | AI & Machine Learning Enthusiast',
  summary:
    "A passionate and results-driven Data Science graduate with hands-on experience in machine learning, deep learning, data analysis, and data engineering. My background spans academic research and industry roles, focusing on developing AI-powered solutions for real-world impact in areas like healthcare, video processing, and generative design. I am adept at bridging technical innovation with practical applications.",
  contact: {
    email: 'maria.suresh@example.com',
    linkedin: 'https://linkedin.com/in/mariasuresh',
    github: 'https://github.com/mariasuresh',
  },
  experience: [
    {
      id: 'exp1',
      role: 'Data Science Intern',
      company: 'Innovatech Solutions',
      period: 'Summer 2023',
      description: [
        'Assisted senior data scientists in developing a customer segmentation model.',
        'Performed data cleaning, preprocessing, and exploratory data analysis on large datasets.',
        'Contributed to the creation of data visualization dashboards using Tableau.',
      ],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'company logo tech'
    },
    {
      id: 'exp2',
      role: 'Research Assistant',
      company: 'University Data Lab',
      period: '2022 - 2023',
      description: [
        'Supported research on NLP techniques for social media data analysis.',
        'Collected and annotated data, and implemented baseline machine learning models.',
        'Co-authored a workshop paper on sentiment analysis methodologies.',
      ],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university logo'
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'University of Arizona', // Updated based on inspiration text
      degree: 'Master of Science in Data Science',
      period: '2023 - Present (Expected Graduation: 2025)', // Assuming graduation year
      description: ['Relevant Coursework: Machine Learning, Deep Learning, Big Data Analytics, Statistical Methods, Data Visualization.'],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university campus'
    },
    {
      id: 'edu2',
      institution: 'Your Undergraduate University', // Placeholder, user to specify
      degree: 'Bachelor of Science in Computer Science',
      period: '2019 - 2023',
      description: ['Graduated with Honors, Minor in Statistics.'],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'graduation cap'
    },
  ],
  skills: [
    { id: 'sk1', name: 'Python', category: 'Programming Languages', icon: Code, proficiency: 95 },
    { id: 'sk2', name: 'R', category: 'Programming Languages', icon: Code, proficiency: 80 },
    { id: 'sk3', name: 'SQL', category: 'Databases', icon: Database, proficiency: 90 },
    { id: 'sk4', name: 'Machine Learning', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon />, proficiency: 90 },
    { id: 'sk5', name: 'Deep Learning', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon />, proficiency: 85 }, // Proficiency adjusted
    { id: 'sk6', name: 'Generative AI (GenAI)', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon />, proficiency: 80 },
    { id: 'sk_nlp', name: 'NLP', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon />, proficiency: 75 },
    { id: 'sk7', name: 'Data Visualization', category: 'Tools & Technologies', icon: TrendingUp, proficiency: 90 },
    { id: 'sk8', name: 'Pandas & NumPy', category: 'Tools & Technologies', icon: Settings, proficiency: 95 },
    { id: 'sk9', name: 'Scikit-learn', category: 'Tools & Technologies', icon: Settings, proficiency: 90 },
    { id: 'sk10', name: 'TensorFlow/Keras', category: 'Tools & Technologies', icon: Settings, proficiency: 80 },
    { id: 'sk11', name: 'PyTorch', category: 'Tools & Technologies', icon: Settings, proficiency: 75 },
    { id: 'sk_yolo', name: 'YOLOv8', category: 'Tools & Technologies', icon: Settings, proficiency: 70 },
    { id: 'sk_sd', name: 'Stable Diffusion', category: 'Tools & Technologies', icon: Settings, proficiency: 70 },
    { id: 'sk12', name: 'Tableau', category: 'Tools & Technologies', icon: TrendingUp, proficiency: 85 },
    { id: 'sk_aws', name: 'AWS', category: 'Cloud Platforms', icon: Database, proficiency: 70 },
    { id: 'sk_azure', name: 'Azure', category: 'Cloud Platforms', icon: Database, proficiency: 70 },
    { id: 'sk13', name: 'Git & GitHub', category: 'Tools & Technologies', icon: Code, proficiency: 90 },
    { id: 'sk14', name: 'Docker', category: 'Tools & Technologies', icon: Settings, proficiency: 70 },
    { id: 'sk15', name: 'Problem Solving', category: 'Soft Skills', icon: Brain, proficiency: 95 },
    { id: 'sk16', name: 'Communication', category: 'Soft Skills', icon: MessageSquare, proficiency: 90 },
    { id: 'sk17', name: 'Teamwork', category: 'Soft Skills', icon: Users, proficiency: 90 },
  ],
};
