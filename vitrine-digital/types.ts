export interface AuditResult {
  checklist: string[];
  summary: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  AUDIT = 'audit',
  CONTACT = 'contact',
  TESTIMONIALS = 'testimonials'
}