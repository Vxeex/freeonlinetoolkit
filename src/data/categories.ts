export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  toolSlugs: string[];
}

export const categories: Category[] = [
  {
    id: 'financial',
    name: 'Financial Calculators',
    icon: 'fa-chart-line',
    description: 'Plan your finances with accurate calculators for loans, investments, and everyday budgeting.',
    toolSlugs: [
      'mortgage-calculator', 'compound-interest-calculator', 'savings-calculator',
      'auto-loan-calculator', 'car-loan-calculator', 'home-loan-prepayment-calculator',
      'credit-card-payoff-calculator', 'sip-calculator', 'salary-calculator',
      'inflation-calculator', 'vat-calculator', 'tip-calculator', 'fuel-cost-calculator',
    ],
  },
  {
    id: 'business-finance',
    name: 'Business Finance & Investment',
    icon: 'fa-chart-pie',
    description: 'Evaluate investments, value startups, and compare business loan options with specialized calculators.',
    toolSlugs: [
      'small-business-loan-calculator', 'startup-valuation-calculator',
      'business-loan-repayment-calculator', 'investment-roi-calculator',
    ],
  },
  {
    id: 'homeowner',
    name: 'Homeowner & Construction',
    icon: 'fa-house',
    description: 'Plan your home improvement projects with accurate material estimates and solar savings analysis.',
    toolSlugs: ['paint-calculator', 'concrete-calculator', 'solar-calculator'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Mortgages',
    icon: 'fa-house-chimney',
    description: 'Understand your home buying power and compare renting vs. buying with data-driven insights.',
    toolSlugs: ['home-affordability-calculator', 'rent-vs-buy-calculator', 'property-tax-calculator'],
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    icon: 'fa-heart-pulse',
    description: 'Track your health, body composition, and reproductive wellness with specialized calculators.',
    toolSlugs: [
      'bmi-calculator', 'body-fat-calculator', 'ideal-weight-calculator',
      'calorie-calculator', 'pregnancy-due-date-calculator', 'ovulation-calculator', 'age-calculator',
    ],
  },
  {
    id: 'health-insurance',
    name: 'Health & Insurance',
    icon: 'fa-hospital',
    description: 'Plan your healthcare coverage, long-term care needs, and life insurance with specialized estimators.',
    toolSlugs: ['health-subsidy-calculator', 'long-term-care-calculator', 'life-insurance-calculator'],
  },
  {
    id: 'utility',
    name: 'Utility Tools',
    icon: 'fa-screwdriver-wrench',
    description: 'Everyday utilities for quick tasks, conversions, and productivity boosts.',
    toolSlugs: [
      'password-generator', 'currency-converter', 'percentage-calculator',
      'qr-code-generator', 'word-counter', 'json-formatter', 'unit-converter',
      'time-zone-converter', 'color-converter', 'reading-time-calculator',
    ],
  },
  {
    id: 'legal',
    name: 'Legal Tools',
    icon: 'fa-gavel',
    description: 'Estimate legal costs for personal injury, patents, divorce, and workers compensation claims.',
    toolSlugs: ['personal-injury-calculator', 'patent-cost-calculator', 'divorce-calculator', 'workers-comp-calculator'],
  },
  {
    id: 'developer',
    name: 'Tech, Developer & Math',
    icon: 'fa-microchip',
    description: 'Tools for developers, system architects, and math enthusiasts.',
    toolSlugs: ['kafka-cost-calculator', 'api-pricing-calculator', 'dns-checker', 'prime-number-checker'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    icon: 'fa-cart-shopping',
    description: 'Optimize your online sales with calculators for ROAS, FBA revenue, and wholesale margin analysis.',
    toolSlugs: ['breakeven-roas-calculator', 'amazon-fba-calculator', 'wholesale-margin-calculator', 'b2b-lead-value-calculator', 'marketing-split-tester'],
  },
  {
    id: 'saas',
    name: 'SaaS & Tech Metrics',
    icon: 'fa-cloud',
    description: 'Deep-dive into SaaS unit economics, conversion funnels, and cloud infrastructure cost analysis.',
    toolSlugs: [
      'micro-saas-profit-calculator', 'saas-conversion-simulator', 'ltv-cac-ratio-calculator',
      'cloud-migration-cost-estimator', 'saas-pricing-calculator',
    ],
  },
  {
    id: 'freelancing',
    name: 'Freelancing & Consulting',
    icon: 'fa-briefcase',
    description: 'Price your services confidently with project cost estimators, day rate calculators, and freelance rate analysis.',
    toolSlugs: ['project-cost-estimator', 'day-rate-calculator', 'freelance-rate-calculator'],
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: 'fa-users',
    description: 'Calculate total employee costs, overtime pay, and understand the true cost of your workforce.',
    toolSlugs: ['employee-cost-calculator', 'overtime-pay-calculator'],
  },
  {
    id: 'education',
    name: 'Education & Classroom',
    icon: 'fa-graduation-cap',
    description: 'Academic tools for students and teachers. Track grades, estimate reading time, and plan study goals.',
    toolSlugs: [
      'gpa-calculator', 'final-grade-calculator', 'college-net-price-calculator',
      'student-loan-payoff-calculator', 'college-acceptance-calculator',
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive & Travel',
    icon: 'fa-car',
    description: 'Plan your transportation costs with ride-sharing fare estimates and EV charging cost comparisons.',
    toolSlugs: ['ride-sharing-calculator', 'ev-charging-calculator', 'tire-size-calculator'],
  },
  {
    id: 'lifestyle',
    name: 'Unique & Lifestyle',
    icon: 'fa-heart',
    description: 'Specialized calculators for life big moments — from weddings to pet ownership planning.',
    toolSlugs: ['wedding-budget-calculator', 'pet-cost-calculator', 'moving-cost-calculator'],
  },
  {
    id: 'food',
    name: 'Food & Kitchen',
    icon: 'fa-utensils',
    description: 'Cooking tools for perfect recipes, conversions, and nutrition tracking.',
    toolSlugs: ['air-fryer-converter', 'pizza-dough-calculator', 'recipe-nutrition-calculator'],
  },
];
