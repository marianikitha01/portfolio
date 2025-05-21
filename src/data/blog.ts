import type { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-rise-of-explainable-ai',
    title: 'The Rise of Explainable AI (XAI) in Data Science',
    date: '2024-07-15',
    author: 'Your Name', // Replace with actual name
    excerpt: 'Exploring the importance of XAI and how it builds trust and transparency in machine learning models. An overview of techniques and future directions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI ethics',
    tags: ['AI', 'Machine Learning', 'XAI', 'Ethics'],
  },
  {
    id: '2',
    slug: 'mastering-feature-engineering',
    title: 'Mastering Feature Engineering for Better Model Performance',
    date: '2024-06-28',
    author: 'Your Name',
    excerpt: 'A deep dive into the art and science of feature engineering. Learn techniques to transform raw data into powerful predictors for your models.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data processing',
    tags: ['Data Preprocessing', 'Feature Engineering', 'Machine Learning'],
  },
  {
    id: '3',
    slug: 'big-data-analytics-tools',
    title: 'Navigating the Landscape of Big Data Analytics Tools',
    date: '2024-05-10',
    author: 'Your Name',
    excerpt: 'An overview of popular big data tools like Spark, Hadoop, and Kafka. Understand their use cases and how they fit into a modern data stack.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'big data server',
    tags: ['Big Data', 'Spark', 'Hadoop', 'Data Engineering'],
  },
];
