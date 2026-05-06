export interface Tool {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  shortDescription?: string;
  icon: string;
  category: string;
  color: string;
}

// Tools data compiled from homepage and shared.js
export const tools: Tool[] = [
  // === Financial Calculators ===
  { slug: 'mortgage-calculator', title: 'Mortgage Calculator', description: 'Calculate monthly mortgage payments with full amortization schedule. Compare loan terms and interest rates.', icon: 'fa-house-chimney', category: 'financial', color: '#2563eb' },
  { slug: 'compound-interest-calculator', title: 'Compound Interest Calculator', description: 'See how your investments grow with compound interest. Daily, monthly, and yearly compounding options.', icon: 'fa-chart-simple', category: 'financial', color: '#d97706' },
  { slug: 'savings-calculator', title: 'Savings Calculator', description: 'Project your savings growth with regular contributions and compound interest. Plan for any financial goal.', icon: 'fa-piggy-bank', category: 'financial', color: '#0d9488' },
  { slug: 'auto-loan-calculator', title: 'Auto Loan Calculator', description: 'Calculate monthly car payments and total interest. Compare buying vs. leasing with an easy side-by-side view.', icon: 'fa-car-side', category: 'financial', color: '#0891b2' },
  { slug: 'car-loan-calculator', title: 'Car Loan Calculator', description: 'Estimate monthly car payments and total interest. Compare different loan terms and down payments.', icon: 'fa-car', category: 'financial', color: '#059669' },
  { slug: 'home-loan-prepayment-calculator', title: 'Home Loan Prepayment Calculator', description: 'See how prepayments save interest and shorten your loan tenure. Plan your mortgage payoff strategy.', icon: 'fa-hand-holding-dollar', category: 'financial', color: '#dc2626' },
  { slug: 'credit-card-payoff-calculator', title: 'Credit Card Payoff Calculator', description: 'See how long it takes to pay off credit card debt and how much interest you can save by paying extra.', icon: 'fa-credit-card', category: 'financial', color: '#ef4444' },
  { slug: 'sip-calculator', title: 'SIP Calculator', description: 'Calculate how your monthly investments grow over time. Systematic Investment Plan with compounding returns.', icon: 'fa-chart-line', category: 'financial', color: '#6366f1' },
  { slug: 'salary-calculator', title: 'Salary Calculator', description: 'Estimate your take-home pay after federal taxes and FICA. Based on current tax brackets and standard deduction.', icon: 'fa-money-bill-wave', category: 'financial', color: '#10b981' },
  { slug: 'inflation-calculator', title: 'Inflation Calculator', description: 'See how inflation changes purchasing power over time. Based on historical CPI data with forward projections.', icon: 'fa-cart-shopping', category: 'financial', color: '#f59e0b' },
  { slug: 'vat-calculator', title: 'VAT Calculator', description: 'Quickly add or remove VAT from any amount. Supports all standard VAT rates for any country.', icon: 'fa-receipt', category: 'financial', color: '#7c3aed' },
  { slug: 'tip-calculator', title: 'Tip Calculator', description: 'Split bills and calculate tips easily. Perfect for restaurants, group dining, and service tips.', icon: 'fa-utensils', category: 'financial', color: '#ec4899' },
  { slug: 'fuel-cost-calculator', title: 'Fuel Cost Calculator', description: 'Calculate fuel costs for any trip. Estimate gas expenses based on distance and vehicle efficiency.', icon: 'fa-gas-pump', category: 'financial', color: '#2563eb' },

  // === Business Finance & Investment ===
  { slug: 'small-business-loan-calculator', title: 'Small Business Loan Calculator', description: 'Calculate business loan EMIs, total interest, and debt-to-income ratio. Plan your business financing with confidence.', icon: 'fa-handshake', category: 'business-finance', color: '#0d9488' },
  { slug: 'startup-valuation-calculator', title: 'Startup Valuation Calculator', description: 'Estimate your startup pre-money and post-money valuation using Berkus, Scorecard, and VC methods.', icon: 'fa-rocket', category: 'business-finance', color: '#9333ea' },
  { slug: 'business-loan-repayment-calculator', title: 'Business Loan Repayment Calculator', description: 'Compare bank, SBA, and online lender repayment terms side by side. Full amortization with total interest analysis.', icon: 'fa-building-columns', category: 'business-finance', color: '#059669' },
  { slug: 'investment-roi-calculator', title: 'Investment ROI Calculator', description: 'Calculate return on investment for any asset. See ROI percentage, annualized return, and profit with DCA scenarios.', icon: 'fa-chart-pie', category: 'business-finance', color: '#6366f1' },

  // === Homeowner & Construction ===
  { slug: 'paint-calculator', title: 'Paint Calculator', description: 'Calculate how much paint you need for any room. Wall square footage with coverage and coat estimates.', icon: 'fa-paint-roller', category: 'homeowner', color: '#0d9488' },
  { slug: 'concrete-calculator', title: 'Concrete & Gravel Calculator', description: 'Estimate concrete or gravel for slabs, driveways, and patios. Volume with wastage factor and bag count.', icon: 'fa-truck', category: 'homeowner', color: '#7c3aed' },
  { slug: 'solar-calculator', title: 'Solar Panel Calculator', description: 'Estimate solar panel ROI and savings. Payback period, 25-year savings, and system cost analysis.', icon: 'fa-sun', category: 'homeowner', color: '#0891b2' },

  // === Real Estate & Mortgages ===
  { slug: 'home-affordability-calculator', title: 'Home Affordability Calculator', description: 'Calculate how much house you can afford based on income, down payment, and debts. Uses the 28/36 DTI rule.', icon: 'fa-house-circle-check', category: 'real-estate', color: '#0d7377' },
  { slug: 'rent-vs-buy-calculator', title: 'Rent vs Buy Calculator', description: 'Compare renting vs buying a home over time. See break-even analysis and total cost comparison.', icon: 'fa-scale-balanced', category: 'real-estate', color: '#6366f1' },
  { slug: 'property-tax-calculator', title: 'Property Tax Calculator', description: 'Estimate annual property taxes by home value and location. Includes state comparison and year-by-year projections.', icon: 'fa-file-invoice-dollar', category: 'real-estate', color: '#d97706' },

  // === Health & Wellness ===
  { slug: 'bmi-calculator', title: 'BMI Calculator', description: 'Calculate your Body Mass Index instantly. See your BMI category and healthy weight range.', shortDescription: 'Calculate your BMI instantly', icon: 'fa-weight-scale', category: 'health-wellness', color: '#10b981' },
  { slug: 'body-fat-calculator', title: 'Body Fat Calculator', description: 'Estimate your body fat percentage using the U.S. Navy circumference method. No special equipment needed.', icon: 'fa-person', category: 'health-wellness', color: '#d97706' },
  { slug: 'ideal-weight-calculator', title: 'Ideal Weight Calculator', description: 'Find your ideal weight using Devine, Robinson, Miller, and Hamwi formulas. See your consensus range.', icon: 'fa-weight-scale', category: 'health-wellness', color: '#0d9488' },
  { slug: 'calorie-calculator', title: 'Calorie Calculator', description: 'Find your daily calorie needs based on age, height, weight, activity level, and fitness goals.', icon: 'fa-fire', category: 'health-wellness', color: '#db2777' },
  { slug: 'pregnancy-due-date-calculator', title: 'Pregnancy Due Date Calculator', description: 'Calculate your due date using Naegele rule. See current week, trimester, and key milestones.', shortTitle: 'Due Date Calculator', icon: 'fa-baby', category: 'health-wellness', color: '#6366f1' },
  { slug: 'ovulation-calculator', title: 'Ovulation & Fertility Calculator', description: 'Find your fertile window and ovulation day. Plan for pregnancy with cycle-based tracking.', icon: 'fa-calendar-check', category: 'health-wellness', color: '#d97706' },
  { slug: 'age-calculator', title: 'Age Calculator', description: 'Calculate exact age in years, months, and days. Find the duration between any two dates.', icon: 'fa-cake-candles', category: 'health-wellness', color: '#6d28d9' },

  // === Health & Insurance ===
  { slug: 'health-subsidy-calculator', title: 'Health Insurance Subsidy Calculator', description: 'Estimate your ACA premium tax credit based on income and household size. See how much you can save on marketplace plans.', icon: 'fa-hospital', category: 'health-insurance', color: '#2563eb' },
  { slug: 'long-term-care-calculator', title: 'Long-Term Care Cost Calculator', description: 'Project future long-term care costs based on age, care type, and inflation. Plan for nursing home or home care.', icon: 'fa-wheelchair', category: 'health-insurance', color: '#7c3aed' },
  { slug: 'life-insurance-calculator', title: 'Life Insurance Needs Calculator', description: 'Calculate how much life insurance you need using the DIME method. Income replacement, debts, education, and final expenses.', icon: 'fa-umbrella', category: 'health-insurance', color: '#059669' },

  // === Utility Tools ===
  { slug: 'password-generator', title: 'Password Generator', description: 'Generate strong, secure passwords instantly. Customizable length and character types included.', icon: 'fa-key', category: 'utility', color: '#0d9488' },
  { slug: 'currency-converter', title: 'Currency Converter', description: 'Convert between 160+ world currencies with live exchange rates. Fast and accurate conversions.', icon: 'fa-money-bill-transfer', category: 'utility', color: '#d97706' },
  { slug: 'percentage-calculator', title: 'Percentage Calculator', description: 'Calculate percentages, percentage changes, and ratios. Perfect for discounts, data analysis, and math.', icon: 'fa-percent', category: 'utility', color: '#8b5cf6' },
  { slug: 'qr-code-generator', title: 'QR Code Generator', description: 'Create free QR codes for URLs, text, and more. Download high-quality QR codes instantly.', icon: 'fa-qrcode', category: 'utility', color: '#9333ea' },
  { slug: 'word-counter', title: 'Word Counter', description: 'Count words, characters, sentences, and paragraphs. Real-time text analysis for writers and SEO.', icon: 'fa-file-lines', category: 'utility', color: '#a16207' },
  { slug: 'json-formatter', title: 'JSON Formatter', description: 'Format, validate, and beautify JSON data. Perfect for developers working with APIs and data.', icon: 'fa-code', category: 'utility', color: '#2563eb' },
  { slug: 'unit-converter', title: 'Unit Converter', description: 'Convert between hundreds of units across length, weight, volume, temperature, area, and speed.', icon: 'fa-ruler-combined', category: 'utility', color: '#7c3aed' },
  { slug: 'time-zone-converter', title: 'Time Zone Converter', description: 'Convert times between world time zones. Plan international calls and meetings across time zones.', icon: 'fa-globe', category: 'utility', color: '#4f46e5' },
  { slug: 'color-converter', title: 'Color Picker & Converter', description: 'Pick colors and convert between HEX, RGB, and HSL. Visual color picker with live preview.', icon: 'fa-palette', category: 'utility', color: '#6366f1' },
  { slug: 'reading-time-calculator', title: 'Reading Time Calculator', description: 'Estimate reading and speaking time for any text. Perfect for speeches, podcasts, and presentations.', icon: 'fa-clock', category: 'utility', color: '#6366f1' },

  // === Legal Tools ===
  { slug: 'personal-injury-calculator', title: 'Personal Injury Settlement Estimator', description: 'Estimate the value of a personal injury claim considering medical bills, lost wages, and pain and suffering.', icon: 'fa-gavel', category: 'legal', color: '#dc2626' },
  { slug: 'patent-cost-calculator', title: 'Patent Cost Calculator', description: 'Estimate patent filing costs including USPTO fees, attorney fees, drawings, and maintenance over the full patent life.', icon: 'fa-file-invoice', category: 'legal', color: '#0891b2' },
  { slug: 'divorce-calculator', title: 'Divorce Cost Calculator', description: 'Estimate total divorce costs including filing fees, attorney fees, mediation, and asset division.', icon: 'fa-scale-balanced', category: 'legal', color: '#9333ea' },
  { slug: 'workers-comp-calculator', title: 'Workers Comp Settlement Estimator', description: 'Estimate workers compensation settlements including lost wages, permanent disability, and medical cost reimbursement.', icon: 'fa-shield', category: 'legal', color: '#0d9488' },

  // === Tech, Developer & Math ===
  { slug: 'kafka-cost-calculator', title: 'Kafka Cost Calculator', description: 'Estimate Apache Kafka and cloud infrastructure costs. Compare Confluent, AWS MSK, Azure, and self-managed.', icon: 'fa-server', category: 'developer', color: '#2563eb' },
  { slug: 'api-pricing-calculator', title: 'API Pricing Calculator', description: 'Estimate OpenAI API costs for GPT models. Token-based pricing with monthly volume projections.', icon: 'fa-bolt', category: 'developer', color: '#0891b2' },
  { slug: 'dns-checker', title: 'DNS Propagation Checker', description: 'Check DNS record propagation across global locations. A, AAAA, CNAME, MX, NS, TXT, and SOA records.', icon: 'fa-globe', category: 'developer', color: '#7c3aed' },
  { slug: 'prime-number-checker', title: 'Prime Number Checker', description: 'Check if any number is prime and get its prime factorization. Perfect for students and math lovers.', icon: 'fa-sigma', category: 'developer', color: '#d97706' },

  // === E-commerce & Retail ===
  { slug: 'breakeven-roas-calculator', title: 'Breakeven ROAS & CPA Calculator', description: 'Find your breakeven ROAS and target ROAS based on product costs and desired profit margins.', icon: 'fa-chart-line', category: 'ecommerce', color: '#d97706' },
  { slug: 'amazon-fba-calculator', title: 'Amazon FBA Revenue Calculator', description: 'Calculate Amazon FBA profit including referral fees, fulfillment fees, and storage costs.', icon: 'fa-box', category: 'ecommerce', color: '#dc2626' },
  { slug: 'wholesale-margin-calculator', title: 'Wholesale Margin Calculator', description: 'Calculate wholesale prices, retail markup, and profit margins. Optimize your pricing strategy across the supply chain.', icon: 'fa-cubes', category: 'ecommerce', color: '#059669' },

  // === SaaS & Tech Metrics ===
  { slug: 'micro-saas-profit-calculator', title: 'Micro SaaS Profit Calculator', description: 'Analyze MRR, ARR, and net income for your micro SaaS. Track churn impact and operating cost efficiency.', icon: 'fa-cloud', category: 'saas', color: '#6366f1' },
  { slug: 'saas-conversion-simulator', title: 'SaaS Conversion Simulator', description: 'Simulate your SaaS funnel from visitor to paying customer. See how conversion rate changes impact monthly revenue.', icon: 'fa-filter', category: 'saas', color: '#0891b2' },
  { slug: 'ltv-cac-ratio-calculator', title: 'LTV:CAC Ratio Calculator', description: 'Calculate your LTV:CAC ratio, payback period, and customer profitability. Understand your unit economics.', icon: 'fa-scale-balanced', category: 'saas', color: '#0d9488' },
  { slug: 'cloud-migration-cost-estimator', title: 'Cloud Migration Cost Estimator', description: 'Compare AWS, Azure, and GCP costs side by side. Estimate cloud migration expenses including compute, storage, and labor.', icon: 'fa-server', category: 'saas', color: '#2563eb' },
  { slug: 'saas-pricing-calculator', title: 'SaaS Pricing & Profit Calculator', description: 'Analyze MRR, ARR, LTV, CAC payback, and gross margin. Understand your SaaS unit economics and profitability.', icon: 'fa-chart-line', category: 'saas', color: '#0891b2' },

  // === Freelancing & Consulting ===
  { slug: 'project-cost-estimator', title: 'Project Cost Estimator', description: 'Calculate total project costs including labor, tools, and expenses. Built-in contingency buffer for accurate budgeting.', icon: 'fa-calculator', category: 'freelancing', color: '#7c3aed' },
  { slug: 'day-rate-calculator', title: 'Day Rate Calculator (UK/US)', description: 'Convert salary to contractor day rate. Compare permanent vs freelance earnings with tax considerations.', icon: 'fa-clock', category: 'freelancing', color: '#d97706' },
  { slug: 'freelance-rate-calculator', title: 'Freelance Rate Calculator', description: 'Find your ideal hourly or project rate. Account for expenses, taxes, and billable utilization.', icon: 'fa-briefcase', category: 'freelancing', color: '#0d9488' },

  // === Human Resources ===
  { slug: 'employee-cost-calculator', title: 'Employee Cost Calculator', description: 'Calculate the true cost of an employee including salary, taxes, benefits, training, and overhead.', icon: 'fa-users', category: 'hr', color: '#0d9488' },
  { slug: 'overtime-pay-calculator', title: 'Overtime Pay Calculator', description: 'Calculate overtime pay based on FLSA rules. See regular vs overtime earnings for weekly, monthly, and annual periods.', icon: 'fa-clock', category: 'hr', color: '#2563eb' },

  // === Education & Classroom ===
  { slug: 'gpa-calculator', title: 'GPA Calculator', description: 'Calculate weighted and unweighted GPA on a 4.0 scale. Track semester and cumulative grades with ease.', icon: 'fa-award', category: 'education', color: '#059669' },
  { slug: 'final-grade-calculator', title: 'Final Grade Calculator', description: 'What do you need on your final exam? Calculate the score required to reach your target grade.', icon: 'fa-chart-bar', category: 'education', color: '#dc2626' },
  { slug: 'college-net-price-calculator', title: 'College Net Price Calculator', description: 'Calculate the true cost of college after financial aid. Estimate EFC, grants, and net price for any university.', icon: 'fa-graduation-cap', category: 'education', color: '#6366f1' },
  { slug: 'student-loan-payoff-calculator', title: 'Student Loan Payoff Calculator', description: 'Calculate student loan repayment with extra payments. See how much interest you can save and payoff time reduction.', icon: 'fa-money-check-dollar', category: 'education', color: '#059669' },
  { slug: 'college-acceptance-calculator', title: 'College Acceptance Chance Calculator', description: 'Estimate your chances of getting into college based on GPA, test scores, extracurriculars, and other factors.', icon: 'fa-school', category: 'education', color: '#7c3aed' },

  // === Automotive & Travel ===
  { slug: 'ride-sharing-calculator', title: 'Ride-Sharing Fare Estimator', description: 'Estimate Uber and Lyft fares based on distance, time, and service type. Compare Economy, Comfort, XL, and Lux options.', icon: 'fa-taxi', category: 'automotive', color: '#d97706' },
  { slug: 'ev-charging-calculator', title: 'EV Charging Cost Calculator', description: 'Calculate EV charging costs and compare with gas savings. Level 1, Level 2, and DC fast charging analysis.', icon: 'fa-bolt', category: 'automotive', color: '#10b981' },

  // === Moving & Automotive ===
  { slug: 'tire-size-calculator', title: 'Tire Size Calculator', description: 'Compare tire sizes side by side. Calculate diameter, speedometer error, and fitment differences.', icon: 'fa-car', category: 'automotive', color: '#2563eb' },
  { slug: 'moving-cost-calculator', title: 'Moving Cost Estimator', description: 'Estimate your relocation costs based on distance, home size, and services needed. Compare DIY vs full-service.', icon: 'fa-truck-moving', category: 'moving', color: '#d97706' },

  // === Unique & Lifestyle ===
  { slug: 'wedding-budget-calculator', title: 'Wedding Budget Calculator', description: 'Plan your wedding budget across 10 categories. Get detailed cost breakdowns and vendor allocation recommendations.', icon: 'fa-ring', category: 'lifestyle', color: '#db2777' },
  { slug: 'pet-cost-calculator', title: 'Pet Lifetime Cost Calculator', description: 'Calculate the true cost of owning a pet. First year, annual recurring, and lifetime cost projections for dogs and cats.', icon: 'fa-paw', category: 'lifestyle', color: '#0d9488' },

  // === Food & Kitchen ===
  { slug: 'air-fryer-converter', title: 'Air Fryer Converter', description: 'Convert oven recipes to air fryer settings instantly. Temperature and time adjustment with presets.', icon: 'fa-wind', category: 'food', color: '#d97706' },
  { slug: 'pizza-dough-calculator', title: 'Pizza Dough Calculator', description: 'Perfect pizza dough with baker percentages. Get exact flour, water, yeast for any style.', icon: 'fa-pizza-slice', category: 'food', color: '#db2777' },
  { slug: 'recipe-nutrition-calculator', title: 'Recipe Nutrition Calculator', description: 'Get nutrition facts for any recipe. Add ingredients and see calories, protein, carbs, and fat per serving.', icon: 'fa-leaf', category: 'food', color: '#059669' },

  // === Marketing & Advertising ===
  { slug: 'b2b-lead-value-calculator', title: 'B2B Lead Value Calculator', description: 'Calculate the true value of your B2B leads based on conversion rates, deal size, and cost per lead.', icon: 'fa-users', category: 'ecommerce', color: '#0891b2' },
  { slug: 'marketing-split-tester', title: 'Marketing Split Tester', description: 'Compare conversion rates between two marketing channels with statistical significance analysis.', icon: 'fa-flask', category: 'ecommerce', color: '#7c3aed' },
];

export const toolBySlug: Record<string, Tool> = Object.fromEntries(
  tools.map(t => [t.slug, t])
);

export const totalToolsCount = tools.length;
