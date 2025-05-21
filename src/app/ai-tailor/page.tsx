import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/common/page-header';
import { DescriptionTailorForm } from '@/components/ai-tailor/description-tailor-form';

export const metadata: Metadata = {
  title: 'AI Description Tailor',
  description: 'Use AI to tailor your project descriptions for different audiences.',
};

export default function AiTailorPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        title="AI-Powered Description Tailor"
        description="Craft the perfect project narrative for any audience. Let AI help you communicate your work effectively."
      />
      <DescriptionTailorForm />
    </Container>
  );
}
