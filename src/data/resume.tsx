
import type { ResumeData } from '@/lib/types';
import { Brain, Database, Code, Settings, TrendingUp, MessageSquare, Users, Cloud, Server, Cpu, Zap as GenAiIcon, Bot, BarChart3, Rss, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
  title: 'Data Scientist | Machine Learning & Generative AI Developer',
  summary:
    "Passionate Data Science graduate from the University of Arizona with hands-on experience in machine learning, deep learning, data analysis, and data engineering. Proven ability in developing AI-powered solutions for healthcare (suture classification with YOLOv8), video processing, and generative design (Chikankari patterns with Stable Diffusion). Formerly Data Analyst & Software Engineer at Protecto, building Tableau/PowerBI dashboards and enhancing internal tools. Seeking to drive innovation at the intersection of AI and impactful problem-solving.",
  contact: {
    email: 'marianikitha.suresh@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maria-nikitha-588994242',
    github: 'https://github.com/marianikitha01',
  },
  experience: [
    {
      id: 'exp_astec',
      role: 'Machine learning Developer',
      company: 'ASTEC Lab, University of Arizona',
      period: 'Aug 2024 - Dec 2024',
      description: [
        'Developed a deep learning-based suture classification model (YOLOv8) to identify sutures as Good, Tight, or Loose with 95% accuracy.',
        'Conducted exploratory data analysis (EDA) and feature engineering to enhance model interpretability.',
        'Implemented precision, recall and F1-score for model evaluation, optimizing for medical imaging challenges.',
        'Automated image preprocessing pipelines using Python (OpenCV, NumPy) to improve detection consistency and presented findings to research teams, showcasing data-driven insights for improving surgical training.',
      ],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university lab'
    },
    {
      id: 'exp_srw',
      role: 'Student Research Worker',
      company: 'University of Arizona',
      period: 'Jul 2024 - Aug 2024',
      description: [
        'Worked on neural network-based video processing for foreground-background separation using Bayesian Tensor Factorization.',
        'Applied probabilistic modeling and regularization techniques to enhance video quality and feature extraction.',
        'Conducted performance tuning and model evaluation to improve output accuracy and robustness.',
      ],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university research'
    },
    {
      id: 'exp_protecto',
      role: 'Data Analyst & Software Engineer',
      company: 'Protecto (OneDPO Private Limited)',
      period: 'Jun 2022 - Jul 2023',
      description: [
        'Built interactive Tableau & Power BI dashboards for privacy risk analysis, enabling data-driven decision-making.',
        'Designed and implemented frontend features for internal privacy risk analysis tools, improving user experience and engagement.',
        'Utilized statistical modeling to detect anomalies and privacy risks, ensuring compliance with industry standards.',
        'Collaborated cross-functionally to implement data-driven BI solutions for enterprise data workflows.',
      ],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'company logo protecto'
    },
  ],
  education: [
    {
      id: 'edu_uofa',
      institution: 'University of Arizona, United States',
      degree: 'Master of Science in Data Science',
      period: 'Aug 2023 - May 2025 (Expected)',
      description: ['Relevant Coursework: Deep Learning, Machine Learning, Data Engineering, Generative AI, NLP, Data Analysis & Visualization.'],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university campus arizona'
    },
    {
      id: 'edu_christ',
      institution: 'Christ University, India',
      degree: 'Bachelor of Technology in Information Technology',
      period: 'June 2018 - May 2022',
      description: ['Focused on foundational concepts in computer science, software development, and database management.'],
      logoUrl: 'https://placehold.co/100x100.png',
      logoHint: 'university campus christ'
    },
  ],
  skills: [
    // Programming Languages
    { id: 'sk_python', name: 'Python', category: 'Programming Languages', icon: Code },
    { id: 'sk_sql', name: 'SQL', category: 'Programming Languages', icon: Database },
    { id: 'sk_r', name: 'R', category: 'Programming Languages', icon: Code },
    { id: 'sk_java', name: 'Java', category: 'Programming Languages', icon: Code },
    { id: 'sk_cpp', name: 'C++', category: 'Programming Languages', icon: Code },
    { id: 'sk_bash', name: 'Bash', category: 'Programming Languages', icon: Code },
    { id: 'sk_php', name: 'PHP', category: 'Programming Languages', icon: Code },

    // Data Science Concepts
    { id: 'sk_dl', name: 'Deep Learning', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon /> },
    { id: 'sk_ml', name: 'Machine Learning', category: 'Data Science Concepts', iconSvg: <BrainCircuitIcon /> },
    { id: 'sk_data_eng', name: 'Data Engineering', category: 'Data Science Concepts', icon: Server },
    { id: 'sk_genai', name: 'Generative AI', category: 'Data Science Concepts', icon: GenAiIcon },
    { id: 'sk_nlp', name: 'NLP', category: 'Data Science Concepts', icon: Rss },
    { id: 'sk_data_analysis', name: 'Data Analysis', category: 'Data Science Concepts', icon: BarChart3 },
    { id: 'sk_data_viz', name: 'Data Visualization', category: 'Data Science Concepts', icon: TrendingUp },


    // Tools & Technologies
    { id: 'sk_tensorflow', name: 'TensorFlow', category: 'Tools & Technologies', icon: Cpu },
    { id: 'sk_pytorch', name: 'PyTorch', category: 'Tools & Technologies', icon: Cpu },
    { id: 'sk_keras', name: 'Keras', category: 'Tools & Technologies', icon: Cpu },
    { id: 'sk_scikit', name: 'Scikit-learn', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_opencv', name: 'OpenCV', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_numpy', name: 'NumPy', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_pandas', name: 'Pandas', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_git', name: 'Git & GitHub', category: 'Tools & Technologies', icon: Code },
    { id: 'sk_spark', name: 'Apache Spark', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_transformers', name: 'Transformers (HF)', category: 'Tools & Technologies', icon: Bot },
    { id: 'sk_gpt', name: 'GPT Models', category: 'Tools & Technologies', icon: Bot },
    { id: 'sk_bert', name: 'BERT', category: 'Tools & Technologies', icon: Bot },
    { id: 'sk_nltk', name: 'NLTK', category: 'Tools & Technologies', icon: Rss },
    { id: 'sk_yolov8', name: 'YOLOv8', category: 'Tools & Technologies', icon: Settings },
    { id: 'sk_stable_diffusion', name: 'Stable Diffusion', category: 'Tools & Technologies', icon: GenAiIcon },
    { id: 'sk_tableau', name: 'Tableau', category: 'Tools & Technologies', icon: TrendingUp },
    { id: 'sk_powerbi', name: 'Power BI', category: 'Tools & Technologies', icon: TrendingUp },


    // Cloud Platforms
    { id: 'sk_aws', name: 'AWS', category: 'Cloud Platforms', icon: Cloud },
    { id: 'sk_aws_services', name: 'AWS (Lambda, S3, Glue, Athena)', category: 'Cloud Platforms', icon: Cloud },
    { id: 'sk_azure', name: 'Azure', category: 'Cloud Platforms', icon: Cloud },
    { id: 'sk_azure_services', name: 'Azure (Data Factory, Databricks, Data Lake Storage)', category: 'Cloud Platforms', icon: Cloud },

    // Databases
    { id: 'sk_mysql', name: 'MySQL', category: 'Databases', icon: Database },
    { id: 'sk_mariadb', name: 'MariaDB', category: 'Databases', icon: Database },
    { id: 'sk_mongodb', name: 'MongoDB', category: 'Databases', icon: Database },
    { id: 'sk_postgresql', name: 'PostgreSQL', category: 'Databases', icon: Database },

    // Soft Skills
    { id: 'sk_problem_solving', name: 'Problem Solving', category: 'Soft Skills', icon: Brain },
    { id: 'sk_communication', name: 'Communication', category: 'Soft Skills', icon: MessageSquare },
    { id: 'sk_teamwork', name: 'Teamwork', category: 'Soft Skills', icon: Users },
  ],
};

    