import React, { useState } from 'react';
import { ContactFormData, ProjectType } from '../../types';
import { Button } from '../ui/Button';
import { COMPANY_EMAIL } from '../../data/content';
import { Send, Mail, AlertCircle, CheckCircle, Info } from 'lucide-react';

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

    // Because Vaeltrum does not fabricate delivery states or pretend a backend API exists
    // when none is connected, we immediately construct a pre-filled mailto dispatch
    // while giving the user full visibility and direct transmission.
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
    }, 600);
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
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase text-foreground-muted mb-2">
            Your Name <span className="text-accent-sky">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ada Lovelace"
            className={`w-full rounded-lg bg-background-charcoal border px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue/80'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase text-foreground-muted mb-2">
            Work Email <span className="text-accent-sky">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ada@company.com"
            className={`w-full rounded-lg bg-background-charcoal border px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors ${
              errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue/80'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company & Project Type Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase text-foreground-muted mb-2">
            Company / Organization <span className="text-foreground-subtle text-[10px]">(Optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Systems"
            className="w-full rounded-lg bg-background-charcoal border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent-blue/80 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-mono uppercase text-foreground-muted mb-2">
            Project Type <span className="text-accent-sky">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-lg bg-background-charcoal border border-border px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent-blue/80 transition-colors"
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
        <label htmlFor="description" className="block text-xs font-mono uppercase text-foreground-muted mb-2">
          Project Description <span className="text-accent-sky">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe the product requirements, existing challenges, or what problem you need to solve..."
          className={`w-full rounded-lg bg-background-charcoal border px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors resize-y ${
            errors.description ? 'border-rose-500/70 focus:border-rose-500' : 'border-border focus:border-accent-blue/80'
          }`}
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
            <AlertCircle className="w-3 h-3" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Transparent Authenticity Feedback State */}
      {submissionStatus === 'direct-mailto-ready' && (
        <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-xs text-foreground space-y-2 font-mono">
          <div className="flex items-center gap-2 text-accent-sky font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Ready for Direct Dispatch</span>
          </div>
          <p className="text-foreground-muted leading-relaxed">
            Your inquiry parameters have been validated. Your default email client was opened to transmit this directly to <span className="text-foreground font-medium">{COMPANY_EMAIL}</span>.
          </p>
          <p className="text-foreground-subtle">
            If your email application did not launch automatically, you can email us directly at <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent-sky underline">{COMPANY_EMAIL}</a> with your project details.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="justify-center sm:w-auto"
        >
          {isSubmitting ? 'Validating...' : 'Send Project Inquiry'}
        </Button>

        <span className="text-xs font-mono text-foreground-subtle text-center sm:text-right">
          Direct email route: {COMPANY_EMAIL}
        </span>
      </div>
    </form>
  );
};
