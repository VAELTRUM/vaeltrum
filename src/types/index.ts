export type ProjectType = 
  | 'SaaS Product'
  | 'Enterprise Software'
  | 'Web Application'
  | 'Custom Software'
  | 'Other';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: ProjectType;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface CorePrinciple {
  number: string;
  title: string;
  description: string;
}

export interface TechStackCategory {
  category: string;
  technologies: {
    name: string;
    description: string;
  }[];
}
