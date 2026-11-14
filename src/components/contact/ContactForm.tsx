import React, { useState } from 'react';
import { ContactFormData, ProjectType } from '../../types';
import { Button } from '../ui/Button';
import { COMPANY_EMAIL } from '../../data/content';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PROJECT_TYPES: ProjectType[] = [
  'SaaS Product',
  'Enterprise Software',
  'Web Application',
  'Custom Software',
  'Other',
];

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  description?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'SaaS Product',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'direct-mailto-ready' | 'backend-unconfigured'
  >('idle');

  // Strict client-side validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe what you are looking to build.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide at least 15 characters of detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('direct-mailto-ready');

      // Launch email client with all structured details
      const subject = encodeURIComponent(`[Vaeltrum Project Inquiry] ${formData.projectType} — ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Vaeltrum Team,\n\n` +
        `Name: ${formData.name}\n` +
        `Work Email: ${formData.email}\n` +
        `Company / Organization: ${formData.company || 'N/A'}\n` +
        `Project Type: ${formData.projectType}\n\n` +
        `Project Overview:\n${formData.description}\n\n` +
        `--\nSent via Vaeltrum Project Inquiry Form`
      );

      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-mono uppercase text-foreground-muted mb-2 font-medium">
            Your Name <span className="text-accent-sky">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ada Lovelace"
            className={`w-full rounded-xl bg-background-charcoal border px-4 py-3 text-base text-foreground placeholder:text-foreground-subtle focus:outline-none transition-all duration-200 ${
              errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30'
            }`}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-mono uppercase text-foreground-muted mb-2 font-medium">
            Work Email <span className="text-accent-sky">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ada@company.com"
            className={`w-full rounded-xl bg-background-charcoal border px-4 py-3 text-base text-foreground placeholder:text-foreground-subtle focus:outline-none transition-all duration-200 ${
              errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30'
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company & Project Type Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs sm:text-sm font-mono uppercase text-foreground-muted mb-2 font-medium">
            Company / Organization <span className="text-foreground-subtle text-xs font-normal">(Optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Systems"
            className="w-full rounded-xl bg-background-charcoal border border-border px-4 py-3 text-base text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs sm:text-sm font-mono uppercase text-foreground-muted mb-2 font-medium">
            Project Type <span className="text-accent-sky">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-xl bg-background-charcoal border border-border px-4 py-3 text-base text-foreground focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all duration-200 cursor-pointer"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-background-card text-foreground">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="description" className="block text-xs sm:text-sm font-mono uppercase text-foreground-muted mb-2 font-medium">
          Project Description <span className="text-accent-sky">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe the product requirements, existing challenges, or what problem you need to solve..."
          className={`w-full rounded-xl bg-background-charcoal border px-4 py-3 text-base text-foreground placeholder:text-foreground-subtle focus:outline-none transition-all duration-200 resize-y ${
            errors.description ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30'
          }`}
        />
        {errors.description && (
          <p className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Transparent Authenticity Feedback State */}
      {submissionStatus === 'direct-mailto-ready' && (
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-accent-blue/10 border border-accent-blue/40 text-xs sm:text-sm text-foreground space-y-2 font-mono"
        >
          <div className="flex items-center gap-2 text-accent-sky font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Ready for Direct Transmission</span>
          </div>
          <p className="text-foreground-muted leading-relaxed">
            Your inquiry has been verified. Your default mail client was triggered to send this directly to <span className="text-foreground font-semibold">{COMPANY_EMAIL}</span>.
          </p>
          <p className="text-foreground-subtle">
            If your email application did not launch automatically, you can email us directly at <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent-sky underline">{COMPANY_EMAIL}</a> with your project requirements.
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="justify-center sm:w-auto text-base px-8 py-3.5"
        >
          {isSubmitting ? 'Validating...' : 'Send Project Inquiry'}
        </Button>

        <span className="text-xs sm:text-sm font-mono text-foreground-subtle text-center sm:text-right">
          Direct email route: {COMPANY_EMAIL}
        </span>
      </div>
    </form>
  );
};
