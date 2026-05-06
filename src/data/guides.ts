export interface Guide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  relatedToolSlug?: string;
}

export const guides: Guide[] = [
  {
    slug: 'mortgage-calculator-guide',
    title: 'How to Use a Mortgage Calculator to Plan Your Home Purchase',
    description: 'Learn how to use a mortgage calculator effectively, understand interest rates, and plan your home purchase with confidence.',
    icon: 'fa-house-chimney',
    color: '#2563eb',
    relatedToolSlug: 'mortgage-calculator',
  },
  {
    slug: 'bmi-health-guide',
    title: 'Understanding Your BMI: A Complete Health Guide',
    description: 'Learn what your BMI means, its limitations, and how to use it alongside other health metrics for a complete picture.',
    icon: 'fa-weight-scale',
    color: '#10b981',
    relatedToolSlug: 'bmi-calculator',
  },
  {
    slug: 'compound-interest-guide',
    title: 'Compound Interest Explained: Make Your Money Work Harder',
    description: 'Understand how compound interest works and how you can use it to grow your wealth over time.',
    icon: 'fa-chart-simple',
    color: '#d97706',
    relatedToolSlug: 'compound-interest-calculator',
  },
  {
    slug: 'password-security-guide',
    title: 'Password Security: How to Create Strong Passwords',
    description: 'Learn best practices for creating and managing secure passwords to protect your online accounts.',
    icon: 'fa-key',
    color: '#0d9488',
    relatedToolSlug: 'password-generator',
  },
  {
    slug: 'currency-conversion-guide',
    title: 'Currency Conversion: A Complete Guide for Travelers',
    description: 'Learn how currency exchange rates work, understand conversion fees, and get tips for getting the best rates when traveling.',
    icon: 'fa-money-bill-transfer',
    color: '#d97706',
    relatedToolSlug: 'currency-converter',
  },
  {
    slug: 'calorie-counting-guide',
    title: 'Calorie Counting: A Beginner Guide to Managing Your Diet',
    description: 'Learn the basics of calorie counting, how to track your intake, and how to set realistic nutrition goals.',
    icon: 'fa-fire',
    color: '#db2777',
    relatedToolSlug: 'calorie-calculator',
  },
];
