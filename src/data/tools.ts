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
  { slug: 'mortgage-calculator', title: 'Mortgage Calculator', description: 'Calculate monthly mortgage payments with full amortization schedule. Compare loan terms and interest rates to find the best option for your home purchase or refinance. Free and instant.', icon: 'fa-house-chimney', category: 'financial', color: '#2563eb' },
  { slug: 'compound-interest-calculator', title: 'Compound Interest Calculator', description: 'See how your investments grow with compound interest. Daily, monthly, and yearly compounding options to project your savings growth over any time period. Plan your financial future.', icon: 'fa-chart-simple', category: 'financial', color: '#d97706' },
  { slug: 'savings-calculator', title: 'Savings Calculator', description: 'Project your savings growth with regular contributions and compound interest. Plan for any financial goal — retirement, education, or a big purchase. See monthly and yearly projections.', icon: 'fa-piggy-bank', category: 'financial', color: '#0d9488' },
  { slug: 'auto-loan-calculator', title: 'Auto Loan Calculator', description: 'Calculate monthly car payments and total interest for your auto loan. Compare buying vs. leasing with an easy side-by-side view. Plan your car purchase budget confidently.', icon: 'fa-car-side', category: 'financial', color: '#0891b2' },
  { slug: 'car-loan-calculator', title: 'Car Loan Calculator', description: 'Estimate monthly car payments and total interest for any vehicle loan. Compare different loan terms, down payments, and interest rates to find the best deal.', icon: 'fa-car', category: 'financial', color: '#059669' },
  { slug: 'home-loan-prepayment-calculator', title: 'Home Loan Prepayment Calculator', description: 'See how prepayments save interest and shorten your loan tenure. Plan your mortgage payoff strategy with extra payment scenarios and see how much you can save.', icon: 'fa-hand-holding-dollar', category: 'financial', color: '#dc2626' },
  { slug: 'credit-card-payoff-calculator', title: 'Credit Card Payoff Calculator', description: 'See how long it takes to pay off credit card debt and how much interest you can save by paying extra each month. Compare payoff strategies and find your debt-free date.', icon: 'fa-credit-card', category: 'financial', color: '#ef4444' },
  { slug: 'sip-calculator', title: 'SIP Calculator', description: 'Calculate how your monthly SIP investments grow over time with compounding returns. Plan your Systematic Investment Plan and see projected wealth for any time horizon.', icon: 'fa-chart-line', category: 'financial', color: '#6366f1' },
  { slug: 'salary-calculator', title: 'Salary Calculator', description: 'Estimate your take-home pay after federal taxes and FICA deductions. Based on current IRS tax brackets and standard deduction. See your hourly, weekly, and monthly breakdown.', icon: 'fa-money-bill-wave', category: 'financial', color: '#10b981' },
  { slug: 'inflation-calculator', title: 'Inflation Calculator', description: 'See how inflation changes purchasing power over time. Based on historical CPI data with forward projections. Understand what your money will be worth in the future.', icon: 'fa-cart-shopping', category: 'financial', color: '#f59e0b' },
  { slug: 'vat-calculator', title: 'VAT Calculator', description: 'Quickly add or remove VAT from any amount. Supports all standard VAT rates for any country including EU, UK, Australia, and more. Perfect for businesses and invoices.', icon: 'fa-receipt', category: 'financial', color: '#7c3aed' },
  { slug: 'tip-calculator', title: 'Tip Calculator', description: 'Split bills and calculate tips easily. Perfect for restaurants, group dining, and service tips. Customize tip percentage and split among any number of people.', icon: 'fa-utensils', category: 'financial', color: '#ec4899' },
  { slug: 'fuel-cost-calculator', title: 'Fuel Cost Calculator', description: 'Calculate fuel costs for any road trip. Estimate gas expenses based on distance, vehicle fuel efficiency, and current fuel prices. Plan your travel budget accurately.', icon: 'fa-gas-pump', category: 'financial', color: '#2563eb' },

  // === Business Finance & Investment ===
  { slug: 'small-business-loan-calculator', title: 'Small Business Loan Calculator', description: 'Calculate business loan EMIs, total interest, and debt-to-income ratio. Plan your business financing with confidence using detailed amortization schedules and payment breakdowns.', icon: 'fa-handshake', category: 'business-finance', color: '#0d9488' },
  { slug: 'startup-valuation-calculator', title: 'Startup Valuation Calculator', description: 'Estimate your startup pre-money and post-money valuation using Berkus, Scorecard, and VC methods. Get realistic valuation ranges for investor pitches and fundraising.', icon: 'fa-rocket', category: 'business-finance', color: '#9333ea' },
  { slug: 'business-loan-repayment-calculator', title: 'Business Loan Repayment Calculator', description: 'Compare bank, SBA, and online lender repayment terms side by side. Full amortization schedule with total interest analysis for any business loan amount and term.', icon: 'fa-building-columns', category: 'business-finance', color: '#059669' },
  { slug: 'investment-roi-calculator', title: 'Investment ROI Calculator', description: 'Calculate return on investment for any asset. See ROI percentage, annualized return, and total profit with dollar-cost averaging scenarios. Make smarter investment decisions.', icon: 'fa-chart-pie', category: 'business-finance', color: '#6366f1' },

  // === Homeowner & Construction ===
  { slug: 'paint-calculator', title: 'Paint Calculator', description: 'Calculate how much paint you need for any room or wall. Enter wall dimensions to get exact gallons needed including coverage and coat estimates. No more guesswork or waste.', icon: 'fa-paint-roller', category: 'homeowner', color: '#0d9488' },
  { slug: 'concrete-calculator', title: 'Concrete & Gravel Calculator', description: 'Estimate concrete or gravel for slabs, driveways, and patios. Volume with wastage factor and bag count for any project size. Accurate material estimates for contractors and DIYers.', icon: 'fa-truck', category: 'homeowner', color: '#7c3aed' },
  { slug: 'solar-calculator', title: 'Solar Panel Calculator', description: 'Estimate solar panel ROI and savings for your home. Payback period, 25-year savings projection, and complete system cost analysis. See if solar makes financial sense where you live.', icon: 'fa-sun', category: 'homeowner', color: '#0891b2' },

  // === Real Estate & Mortgages ===
  { slug: 'home-affordability-calculator', title: 'Home Affordability Calculator', description: 'Calculate how much house you can afford based on your income, down payment, and monthly debts. Uses the standard 28/36 DTI rule lenders follow for mortgage approval.', icon: 'fa-house-circle-check', category: 'real-estate', color: '#0d7377' },
  { slug: 'rent-vs-buy-calculator', title: 'Rent vs Buy Calculator', description: 'Compare renting vs buying a home over any time period. See break-even analysis, total cost comparison, and equity building to decide whether renting or buying is right for you.', icon: 'fa-scale-balanced', category: 'real-estate', color: '#6366f1' },
  { slug: 'property-tax-calculator', title: 'Property Tax Calculator', description: 'Estimate annual property taxes by home value and location. Includes state-by-state comparison and year-by-year projections. Plan for property tax costs before buying a home.', icon: 'fa-file-invoice-dollar', category: 'real-estate', color: '#d97706' },

  // === Health & Wellness ===
  { slug: 'bmi-calculator', title: 'BMI Calculator', description: 'Calculate your Body Mass Index instantly. See your BMI category, healthy weight range, and what your results mean for your health. Free and works on any device.', shortDescription: 'Calculate your BMI instantly', icon: 'fa-weight-scale', category: 'health-wellness', color: '#10b981' },
  { slug: 'body-fat-calculator', title: 'Body Fat Calculator', description: 'Estimate your body fat percentage using the U.S. Navy circumference method. No special equipment needed — just a tape measure. Track your fitness progress accurately over time.', icon: 'fa-person', category: 'health-wellness', color: '#d97706' },
  { slug: 'ideal-weight-calculator', title: 'Ideal Weight Calculator', description: 'Find your ideal weight using Devine, Robinson, Miller, and Hamwi formulas. See your consensus healthy weight range based on height, age, and gender from multiple medical formulas.', icon: 'fa-weight-scale', category: 'health-wellness', color: '#0d9488' },
  { slug: 'calorie-calculator', title: 'Calorie Calculator', description: 'Find your daily calorie needs based on age, height, weight, activity level, and fitness goals. Whether you want to lose weight, gain muscle, or maintain — get your target calories.', icon: 'fa-fire', category: 'health-wellness', color: '#db2777' },
  { slug: 'pregnancy-due-date-calculator', title: 'Pregnancy Due Date Calculator', description: 'Calculate your estimated due date using the standard Naegele rule. See current pregnancy week, trimester, and key milestones. Track your pregnancy journey day by day.', shortTitle: 'Due Date Calculator', icon: 'fa-baby', category: 'health-wellness', color: '#6366f1' },
  { slug: 'ovulation-calculator', title: 'Ovulation & Fertility Calculator', description: 'Find your fertile window and ovulation day based on your cycle. Plan for pregnancy with accurate cycle-based tracking. Understand your most fertile days each month.', icon: 'fa-calendar-check', category: 'health-wellness', color: '#d97706' },
  { slug: 'age-calculator', title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days. Find the precise duration between any two dates. Perfect for birthdays, anniversaries, and milestone tracking.', icon: 'fa-cake-candles', category: 'health-wellness', color: '#6d28d9' },

  // === Health & Insurance ===
  { slug: 'health-subsidy-calculator', title: 'Health Insurance Subsidy Calculator', description: 'Estimate your ACA premium tax credit based on income and household size. See how much you can save on health marketplace plans. Plan your healthcare budget with confidence.', icon: 'fa-hospital', category: 'health-insurance', color: '#2563eb' },
  { slug: 'long-term-care-calculator', title: 'Long-Term Care Cost Calculator', description: 'Project future long-term care costs based on age, care type, and inflation. Plan for nursing home, assisted living, or home care expenses in your retirement plan.', icon: 'fa-wheelchair', category: 'health-insurance', color: '#7c3aed' },
  { slug: 'life-insurance-calculator', title: 'Life Insurance Needs Calculator', description: 'Calculate how much life insurance you need using the DIME method. Income replacement, debts, education costs, and final expenses included. Protect your family the right way.', icon: 'fa-umbrella', category: 'health-insurance', color: '#059669' },

  // === Utility Tools ===
  { slug: 'password-generator', title: 'Password Generator', description: 'Generate strong, secure passwords instantly. Customizable length and character types — uppercase, lowercase, numbers, and symbols. Protect your accounts with uncrackable passwords.', icon: 'fa-key', category: 'utility', color: '#0d9488' },
  { slug: 'currency-converter', title: 'Currency Converter', description: 'Convert between 160+ world currencies with live exchange rates. Fast and accurate conversions for USD, EUR, GBP, JPY, and more. Free currency converter for travelers and businesses.', icon: 'fa-money-bill-transfer', category: 'utility', color: '#d97706' },
  { slug: 'percentage-calculator', title: 'Percentage Calculator', description: 'Calculate percentages, percentage changes, and ratios instantly. Perfect for discounts, tips, taxes, data analysis, and everyday math. Three versatile percentage calculators in one tool.', icon: 'fa-percent', category: 'utility', color: '#8b5cf6' },
  { slug: 'qr-code-generator', title: 'QR Code Generator', description: 'Create free QR codes for URLs, text, contact info, and more. Download high-quality QR codes instantly in PNG and SVG formats. No signup or watermark.', icon: 'fa-qrcode', category: 'utility', color: '#9333ea' },
  { slug: 'word-counter', title: 'Word Counter', description: 'Count words, characters, sentences, and paragraphs in real time. Essential writing tool for students, writers, and SEO professionals. Track reading time and keyword density too.', icon: 'fa-file-lines', category: 'utility', color: '#a16207' },
  { slug: 'json-formatter', title: 'JSON Formatter', description: 'Format, validate, and beautify JSON data with one click. Perfect for developers working with APIs, configuration files, and data structures. Minify and compress JSON too.', icon: 'fa-code', category: 'utility', color: '#2563eb' },
  { slug: 'unit-converter', title: 'Unit Converter', description: 'Convert between hundreds of units across length, weight, volume, temperature, area, speed, and more. Fast and accurate conversions for everyday use, school, and work.', icon: 'fa-ruler-combined', category: 'utility', color: '#7c3aed' },
  { slug: 'time-zone-converter', title: 'Time Zone Converter', description: 'Convert times between world time zones instantly. Plan international calls, video meetings, and travel across time zones. See the current time in multiple cities at once.', icon: 'fa-globe', category: 'utility', color: '#4f46e5' },
  { slug: 'color-converter', title: 'Color Picker & Converter', description: 'Pick colors and convert between HEX, RGB, and HSL formats. Visual color picker with live preview and copy-to-clipboard. Essential tool for web designers and developers.', icon: 'fa-palette', category: 'utility', color: '#6366f1' },
  { slug: 'reading-time-calculator', title: 'Reading Time Calculator', description: 'Estimate reading and speaking time for any text. Perfect for speeches, podcasts, presentations, and content planning. Know exactly how long your text takes to read or say.', icon: 'fa-clock', category: 'utility', color: '#6366f1' },

  // === Legal Tools ===
  { slug: 'personal-injury-calculator', title: 'Personal Injury Settlement Estimator', description: 'Estimate the value of a personal injury claim considering medical bills, lost wages, and pain and suffering. Get a realistic settlement range for insurance negotiations or legal planning.', icon: 'fa-gavel', category: 'legal', color: '#dc2626' },
  { slug: 'patent-cost-calculator', title: 'Patent Cost Calculator', description: 'Estimate patent filing costs including USPTO fees, attorney fees, drawings, and maintenance over the full patent life. Plan your intellectual property budget accurately.', icon: 'fa-file-invoice', category: 'legal', color: '#0891b2' },
  { slug: 'divorce-calculator', title: 'Divorce Cost Calculator', description: 'Estimate total divorce costs including filing fees, attorney fees, mediation, and asset division. Understand the financial side of divorce and plan for what comes ahead.', icon: 'fa-scale-balanced', category: 'legal', color: '#9333ea' },
  { slug: 'workers-comp-calculator', title: 'Workers Comp Settlement Estimator', description: 'Estimate workers compensation settlements including lost wages, permanent disability, and medical cost reimbursement. Get a realistic range for your injury claim settlement.', icon: 'fa-shield', category: 'legal', color: '#0d9488' },

  // === Tech, Developer & Math ===
  { slug: 'kafka-cost-calculator', title: 'Kafka Cost Calculator', description: 'Estimate Apache Kafka and cloud infrastructure costs. Compare Confluent Cloud, AWS MSK, Azure Event Hubs, and self-managed Kafka. Optimize your event streaming budget.', icon: 'fa-server', category: 'developer', color: '#2563eb' },
  { slug: 'api-pricing-calculator', title: 'API Pricing Calculator', description: 'Estimate OpenAI API costs for GPT models. Token-based pricing with monthly volume projections. Compare models and usage tiers to manage your AI development costs.', icon: 'fa-bolt', category: 'developer', color: '#0891b2' },
  { slug: 'dns-checker', title: 'DNS Propagation Checker', description: 'Check DNS record propagation across global locations. Look up A, AAAA, CNAME, MX, NS, TXT, and SOA records from multiple servers worldwide. Verify your DNS changes instantly.', icon: 'fa-globe', category: 'developer', color: '#7c3aed' },
  { slug: 'prime-number-checker', title: 'Prime Number Checker', description: 'Check if any number is prime and get its prime factorization. Perfect for students, teachers, and math enthusiasts. Works with numbers up to millions in milliseconds.', icon: 'fa-sigma', category: 'developer', color: '#d97706' },

  // === E-commerce & Retail ===
  { slug: 'breakeven-roas-calculator', title: 'Breakeven ROAS & CPA Calculator', description: 'Find your breakeven ROAS and target ROAS based on product costs, overhead, and desired profit margins. Essential for optimizing ad spend across Facebook, Google, and Amazon.', icon: 'fa-chart-line', category: 'ecommerce', color: '#d97706' },
  { slug: 'amazon-fba-calculator', title: 'Amazon FBA Revenue Calculator', description: 'Calculate Amazon FBA profit including referral fees, fulfillment fees, and storage costs. See your true net margin for any product before you list it on Amazon.', icon: 'fa-box', category: 'ecommerce', color: '#dc2626' },
  { slug: 'wholesale-margin-calculator', title: 'Wholesale Margin Calculator', description: 'Calculate wholesale prices, retail markup, and profit margins across your supply chain. Optimize your pricing strategy from manufacturer to end customer with clear margin analysis.', icon: 'fa-cubes', category: 'ecommerce', color: '#059669' },

  // === SaaS & Tech Metrics ===
  { slug: 'micro-saas-profit-calculator', title: 'Micro SaaS Profit Calculator', description: 'Analyze MRR, ARR, and net income for your micro SaaS business. Track churn impact, operating costs, and profitability. Make data-driven decisions to grow your SaaS.', icon: 'fa-cloud', category: 'saas', color: '#6366f1' },
  { slug: 'saas-conversion-simulator', title: 'SaaS Conversion Simulator', description: 'Simulate your SaaS funnel from visitor to paying customer. See how small improvements in conversion rates impact monthly recurring revenue and annual growth.', icon: 'fa-filter', category: 'saas', color: '#0891b2' },
  { slug: 'ltv-cac-ratio-calculator', title: 'LTV:CAC Ratio Calculator', description: 'Calculate your LTV:CAC ratio, payback period, and customer profitability. Understand your SaaS unit economics to optimize acquisition spend and maximize customer lifetime value.', icon: 'fa-scale-balanced', category: 'saas', color: '#0d9488' },
  { slug: 'cloud-migration-cost-estimator', title: 'Cloud Migration Cost Estimator', description: 'Compare AWS, Azure, and GCP costs side by side. Estimate cloud migration expenses including compute, storage, networking, and labor. Plan your cloud infrastructure budget.', icon: 'fa-server', category: 'saas', color: '#2563eb' },
  { slug: 'saas-pricing-calculator', title: 'SaaS Pricing & Profit Calculator', description: 'Analyze MRR, ARR, LTV, CAC payback, and gross margin for your SaaS. Understand your unit economics and profitability with scenario modeling and pricing optimization.', icon: 'fa-chart-line', category: 'saas', color: '#0891b2' },

  // === Freelancing & Consulting ===
  { slug: 'project-cost-estimator', title: 'Project Cost Estimator', description: 'Calculate total project costs including labor, tools, and expenses. Built-in contingency buffer for accurate budgeting. Perfect for freelancers and agencies quoting client projects.', icon: 'fa-calculator', category: 'freelancing', color: '#7c3aed' },
  { slug: 'day-rate-calculator', title: 'Day Rate Calculator (UK/US)', description: 'Convert salary to contractor day rate instantly. Compare permanent vs freelance earnings with tax considerations for both UK and US markets. Know what to charge as a contractor.', icon: 'fa-clock', category: 'freelancing', color: '#d97706' },
  { slug: 'freelance-rate-calculator', title: 'Freelance Rate Calculator', description: 'Find your ideal hourly or project rate as a freelancer. Account for expenses, taxes, billable utilization, and desired income. Set rates that cover your costs and generate profit.', icon: 'fa-briefcase', category: 'freelancing', color: '#0d9488' },

  // === Human Resources ===
  { slug: 'employee-cost-calculator', title: 'Employee Cost Calculator', description: 'Calculate the true cost of an employee including salary, payroll taxes, benefits, training, and overhead. Understand fully loaded cost before making hiring decisions.', icon: 'fa-users', category: 'hr', color: '#0d9488' },
  { slug: 'overtime-pay-calculator', title: 'Overtime Pay Calculator', description: 'Calculate overtime pay based on FLSA rules. See regular vs overtime earnings for weekly, monthly, and annual periods. Ensure compliance with federal and state overtime laws.', icon: 'fa-clock', category: 'hr', color: '#2563eb' },

  // === Education & Classroom ===
  { slug: 'gpa-calculator', title: 'GPA Calculator', description: 'Calculate your weighted and unweighted GPA on a 4.0 scale. Track semester and cumulative grades with ease. Perfect for high school and college students planning for graduation.', icon: 'fa-award', category: 'education', color: '#059669' },
  { slug: 'final-grade-calculator', title: 'Final Grade Calculator', description: 'What do you need on your final exam? Calculate the exact score required to reach your target grade. Works with any grading system — percentages, points, or weighted categories.', icon: 'fa-chart-bar', category: 'education', color: '#dc2626' },
  { slug: 'college-net-price-calculator', title: 'College Net Price Calculator', description: 'Calculate the true cost of college after financial aid. Estimate EFC, grants, scholarships, and net price for any university. Plan your college finances with accurate projections.', icon: 'fa-graduation-cap', category: 'education', color: '#6366f1' },
  { slug: 'student-loan-payoff-calculator', title: 'Student Loan Payoff Calculator', description: 'Calculate student loan repayment with extra payment scenarios. See how much interest you can save and how early you can become debt-free by paying more than the minimum.', icon: 'fa-money-check-dollar', category: 'education', color: '#059669' },
  { slug: 'college-acceptance-calculator', title: 'College Acceptance Chance Calculator', description: 'Estimate your chances of getting into college based on GPA, test scores, extracurriculars, and other factors. Get realistic admissions odds for your target schools.', icon: 'fa-school', category: 'education', color: '#7c3aed' },

  // === Automotive & Travel ===
  { slug: 'ride-sharing-calculator', title: 'Ride-Sharing Fare Estimator', description: 'Estimate Uber and Lyft fares for any trip. Compare Economy, Comfort, XL, and Lux options side by side. Plan your ride costs based on distance, time, and service type.', icon: 'fa-taxi', category: 'automotive', color: '#d97706' },
  { slug: 'ev-charging-calculator', title: 'EV Charging Cost Calculator', description: 'Calculate EV charging costs and compare with gas savings. Level 1, Level 2, and DC fast charging analysis for any electric vehicle. See how much you save driving electric.', icon: 'fa-bolt', category: 'automotive', color: '#10b981' },
  { slug: 'tire-size-calculator', title: 'Tire Size Calculator', description: 'Compare tire sizes side by side. Calculate diameter, sidewall height, circumference, and speedometer error when changing tire sizes. Essential for car enthusiasts and mechanics.', icon: 'fa-car', category: 'automotive', color: '#2563eb' },
  { slug: 'moving-cost-calculator', title: 'Moving Cost Estimator', description: 'Estimate your relocation costs based on distance, home size, and services needed. Compare DIY vs full-service moving companies. Plan your moving budget with accurate estimates.', icon: 'fa-truck-moving', category: 'moving', color: '#d97706' },

  // === Unique & Lifestyle ===
  { slug: 'wedding-budget-calculator', title: 'Wedding Budget Calculator', description: 'Plan your wedding budget across 10 categories with detailed cost breakdowns. Get vendor allocation recommendations and see how changes affect your total. Stay on budget for your big day.', icon: 'fa-ring', category: 'lifestyle', color: '#db2777' },
  { slug: 'pet-cost-calculator', title: 'Pet Lifetime Cost Calculator', description: 'Calculate the true cost of owning a pet. First year, annual recurring, and 15-year lifetime cost projections for dogs and cats. Know what pet ownership really costs before adopting.', icon: 'fa-paw', category: 'lifestyle', color: '#0d9488' },

  // === Food & Kitchen ===
  { slug: 'air-fryer-converter', title: 'Air Fryer Converter', description: 'Convert oven recipes to air fryer settings instantly. Temperature and time adjustment with presets for common foods. Never guess your air fryer cooking time again.', icon: 'fa-wind', category: 'food', color: '#d97706' },
  { slug: 'pizza-dough-calculator', title: 'Pizza Dough Calculator', description: 'Perfect pizza dough using baker percentages. Get exact flour, water, yeast, and salt quantities for Neapolitan, NY-style, and any pizza style. Based on your desired dough ball count.', icon: 'fa-pizza-slice', category: 'food', color: '#db2777' },
  { slug: 'recipe-nutrition-calculator', title: 'Recipe Nutrition Calculator', description: 'Get nutrition facts for any homemade recipe. Add ingredients and serving size to see calories, protein, carbs, fat, and more per serving. Track what you cook with precision.', icon: 'fa-leaf', category: 'food', color: '#059669' },

  // === Marketing & Advertising ===
  { slug: 'b2b-lead-value-calculator', title: 'B2B Lead Value Calculator', description: 'Calculate the true value of your B2B leads based on conversion rates, average deal size, and cost per lead. Optimize your sales and marketing spend for maximum ROI.', icon: 'fa-users', category: 'ecommerce', color: '#0891b2' },
  { slug: 'marketing-split-tester', title: 'Marketing Split Tester', description: 'Compare conversion rates between two marketing channels with statistical significance analysis. Make data-driven decisions about where to invest your advertising budget.', icon: 'fa-flask', category: 'ecommerce', color: '#7c3aed' },

  // === Travel ===
  { slug: 'flight-time-calculator', title: 'Flight Time Calculator', description: 'Estimate flight times between cities with airport codes, great-circle distance calculation, and example airlines for reference. Plan your travel itinerary with accurate flight durations.', icon: 'fa-plane', category: 'utility', color: '#2563eb' },

  // === Crafting ===
  { slug: 'knitting-needle-size-converter', title: 'Knitting Needle Size Converter', description: 'Convert knitting needle sizes between US, UK, Japanese, and metric (mm) systems with a full reference chart. Never get confused by different international sizing systems again.', icon: 'fa-code-branch', category: 'utility', color: '#7c3aed' },
  { slug: 'crochet-hook-size-converter', title: 'Crochet Hook Size Converter', description: 'Convert crochet hook sizes between US letter, UK, Japanese, and metric (mm) systems with a complete reference chart. Switch between different international hook sizes instantly.', icon: 'fa-code-fork', category: 'utility', color: '#db2777' },
];

export const toolBySlug: Record<string, Tool> = Object.fromEntries(
  tools.map(t => [t.slug, t])
);

export const totalToolsCount = tools.length;
