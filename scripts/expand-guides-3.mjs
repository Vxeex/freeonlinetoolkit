// Push all guides past 1000 words
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const boostSections = {
  'password-security-guide': `
  <h2>Creating a Personal Cybersecurity Routine</h2>
  <p>Building good cybersecurity habits protects you beyond just having strong passwords. Set a recurring calendar reminder every three months to review your accounts, update passwords for critical services, and check for any suspicious activity. Regular audits of your digital life catch potential issues before they become serious problems.</p>
  <p>Use a password manager's security dashboard to identify weak, reused, or compromised passwords. These tools highlight accounts that need attention and can generate replacement passwords with a single click. Taking 15 minutes each quarter to review your security posture dramatically reduces your risk of being compromised.</p>`,

  'bmi-health-guide': `
  <h2>Working With Your Healthcare Provider</h2>
  <p>Share your BMI trends with your healthcare provider during regular checkups. They can interpret your BMI in the context of your overall health, family history, and other risk factors. Your doctor may recommend additional screenings based on your BMI category, such as blood glucose testing for those in higher BMI ranges. These screenings can catch potential health issues early when they are most treatable.</p>
  <p>If you have concerns about your weight, discuss them openly with your provider. They can help rule out underlying medical conditions that may contribute to weight gain, such as thyroid disorders or hormonal imbalances. Your healthcare provider can also refer you to registered dietitians or weight management programs for structured support.</p>`,

  'currency-conversion-guide': `
  <h2>Business Considerations for Currency Exchange</h2>
  <p>Businesses operating internationally face unique currency challenges. Fluctuating exchange rates can significantly impact profit margins on international transactions. Many businesses use forward contracts to lock in favorable rates for future transactions, protecting their margins from sudden market movements.</p>
  <p>For freelancers and remote workers receiving income in foreign currency, setting up a multi-currency account can reduce conversion fees. Monitoring exchange rate trends and converting when rates are favorable can add up to significant savings over time. Some online platforms now offer borderless accounts that hold multiple currencies.</p>`,

  'compound-interest-guide': `
  <h2>Tax Considerations for Investment Growth</h2>
  <p>The tax treatment of your investment earnings significantly affects your actual returns. Interest earned in regular taxable accounts is subject to income tax each year, reducing your effective compounding rate. Tax-advantaged accounts like 401(k)s and IRAs allow your investments to compound without annual tax drag, potentially adding hundreds of thousands of dollars to your retirement savings over decades.</p>
  <p>In a traditional 401(k) or IRA, contributions are tax-deductible but withdrawals are taxed as ordinary income. Roth accounts offer tax-free growth and tax-free withdrawals in retirement. Health Savings Accounts (HSAs) offer triple tax advantages: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</p>`,

  'calorie-counting-guide': `
  <h2>Building Sustainable Eating Habits</h2>
  <p>Rather than following restrictive diets that are difficult to maintain, focus on building sustainable eating habits you can continue long-term. Start by adding more vegetables to your meals, choosing whole grains over refined ones, and including protein at every meal to support fullness. Small, consistent changes are more effective for long-term weight management than dramatic short-term overhauls.</p>
  <p>Mindful eating practices can help you manage your food intake without strict calorie counting. Eating without distractions like phones or television allows you to recognize fullness cues more effectively. Slowing down during meals and chewing thoroughly gives your brain time to register satiety signals from your stomach.</p>`,

  'mortgage-calculator-guide': `
  <h2>The True Cost of Waiting to Buy</h2>
  <p>Many potential homebuyers delay their purchase waiting for lower interest rates or more affordable prices. However, waiting has its own costs. Rent payments build no equity, and home prices tend to rise over time. If you wait one year for rates to drop by 0.5%, but home prices rise by 5% in that year, you may end up paying more overall despite the lower rate.</p>
  <p>Run the numbers on your specific situation using our mortgage calculator. Compare buying now versus waiting, factoring in expected rent increases, home price appreciation, and potential rate changes. Sometimes buying with a slightly higher rate and refinancing later when rates drop is a better strategy than waiting indefinitely for the perfect market conditions.</p>`,

  'startup-valuation-guide': `
  <h2>How to Improve Your Valuation Before Fundraising</h2>
  <p>Several actionable strategies can increase your startup valuation before you approach investors. Building traction through user growth, revenue, or engagement metrics is the most effective way to justify a higher valuation. Even modest revenue or a growing user base signals product-market fit and reduces investor risk.</p>
  <p>Strengthening your team by hiring experienced advisors or executives with relevant industry backgrounds can add significant perceived value. Protecting intellectual property through patents or trademarks creates defensible moats that investors value. A clear go-to-market strategy showing how you will acquire customers efficiently also strengthens your valuation position during negotiations with potential investors.</p>`,

  'fuel-efficiency-guide': `
  <h2>Alternative Fuel Vehicles and Their Efficiency</h2>
  <p>Beyond traditional gasoline cars, several alternative fuel options offer different efficiency profiles. Hybrid vehicles combine a gasoline engine with an electric motor, capturing energy during braking and using it to improve fuel economy. Plug-in hybrids offer limited all-electric range for short trips while retaining a gasoline engine for longer journeys.</p>
  <p>Battery electric vehicles (EVs) convert over 77% of electrical energy from the grid to power at the wheels, compared to about 12-30% for conventional gasoline vehicles. This inherent efficiency advantage makes EVs significantly cheaper to fuel per mile. However, upfront costs remain higher for most EV models, though prices are decreasing as battery technology improves and manufacturing scales up.</p>`,

  'personal-injury-guide': `
  <h2>Understanding Statutes of Limitations</h2>
  <p>Every state has a statute of limitations that sets a deadline for filing a personal injury lawsuit. These deadlines typically range from one to six years depending on the state and type of claim. Missing the deadline means you lose the right to seek compensation through the legal system, regardless of the merits of your case.</p>
  <p>Some circumstances can extend or pause the statute of limitations, such as the injury being discovered later (discovery rule) or the injured person being a minor at the time of the accident. Because the rules vary significantly by state and situation, consulting with an attorney promptly after an injury ensures you do not miss any critical deadlines. Most personal injury attorneys offer free initial consultations.</p>`,

  'car-loan-financing-guide': `
  <h2>Improving Your Chances of Loan Approval</h2>
  <p>If your credit score is lower than ideal, several steps can improve your chances of auto loan approval. Saving a larger down payment reduces the lender's risk and may compensate for a lower credit score. A down payment of 20% or more shows the lender you have financial skin in the game and reduces the amount they need to finance.</p>
  <p>Consider adding a co-signer with good credit to your application if you have limited credit history or a lower score. A co-signer agrees to take responsibility for the loan if you default, which significantly reduces the lender's risk. Some lenders also offer special financing programs for first-time car buyers or recent graduates with limited credit history.</p>`,

  'credit-card-payoff-guide': `
  <h2>When to Seek Professional Debt Help</h2>
  <p>If you are struggling to make minimum payments or your debt continues to grow despite your best efforts, it may be time to seek professional help. Nonprofit credit counseling agencies offer free or low-cost consultations where a certified counselor reviews your financial situation and recommends options. They can help you create a debt management plan that consolidates payments and may reduce interest rates.</p>
  <p>Be wary of debt settlement companies that promise to settle your debts for pennies on the dollar. These services often charge high fees and can damage your credit score further. In extreme cases, bankruptcy may be an option, but it should be a last resort due to its long-lasting impact on your credit and financial options. Consult with a bankruptcy attorney to understand the implications for your specific situation before making this decision.</p>`,

  'due-date-pregnancy-guide': `
  <h2>Tracking Fetal Development Milestones</h2>
  <p>Your estimated due date helps track important fetal development milestones throughout pregnancy. At 12 weeks, most major organs have formed and the risk of miscarriage drops significantly. Around 20 weeks, the anatomy ultrasound checks fetal development and can often reveal the baby's sex. By 24 weeks, the fetus reaches viability, meaning it has a chance of survival outside the womb with medical support.</p>
  <p>In the third trimester, fetal movement patterns become important indicators of well-being. Healthcare providers often recommend kick counting in the third trimester, tracking how long it takes to feel 10 movements. Any significant decrease in movement should be reported to your provider immediately, as it can sometimes indicate fetal distress requiring medical evaluation.</p>`,

  'ideal-weight-health-guide': `
  <h2>Setting Realistic Weight Goals</h2>
  <p>When setting weight goals, focus on achievable targets that support long-term health rather than an arbitrary ideal number. A realistic goal is to lose 5-10% of your current body weight, which is enough to produce meaningful health improvements like lower blood pressure and improved blood sugar control. Even modest weight loss of 5% can reduce your risk of chronic diseases.</p>
  <p>Rather than chasing the exact number from a formula, work with your healthcare provider to determine a healthy weight range for your body type and medical history. Factors like your frame size, muscle mass, and personal health goals all influence what a healthy weight looks like for you. Sustainable progress toward a healthier weight is more valuable than reaching a specific number that may not be right for your body.</p>`,

  'savings-goals-guide': `
  <h2>Retirement Savings: The Most Important Goal</h2>
  <p>Retirement savings should be a priority for most people due to the power of compound growth over long time horizons. Starting to save for retirement in your 20s instead of your 30s can potentially double your nest egg at retirement, even if you contribute the same total amount. This is because your early contributions have more time to grow through compound returns.</p>
  <p>If your employer offers a 401(k) match, contribute at least enough to get the full match. This is essentially free money that immediately doubles your contribution. For 2026, you can contribute up to $23,500 to a 401(k), with an additional $7,500 catch-up contribution allowed for those aged 50 and older. IRA contribution limits are $7,000 with a $1,000 catch-up for those 50 and older.</p>`,

  'home-affordability-guide': `
  <h2>First-Time Home Buyer Programs</h2>
  <p>First-time home buyers have access to special programs that can make purchasing more affordable. FHA loans require as little as 3.5% down and have more flexible credit requirements than conventional loans. Conventional loans through Fannie Mae and Freddie Mac offer 3% down payment options for first-time buyers. Many states also offer down payment assistance programs in the form of grants or low-interest loans.</p>
  <p>Check with your state housing finance agency for first-time buyer programs specific to your area. Some programs offer tax credits that reduce your federal tax liability each year you own the home. USDA loans offer zero down payment for homes in eligible rural and suburban areas, while VA loans provide zero down payment options for eligible veterans and active-duty military members with competitive interest rates and no PMI requirement.</p>`,
};

// Get all guide files and boost only those under ~1050 words
const files = readdirSync('src/pages/guides').filter(f => f.endsWith('.astro') && f !== 'index.astro');
let boosted = 0;
let skipped = 0;

for (const file of files) {
  const content = readFileSync('src/pages/guides/' + file, 'utf-8');
  // Estimate word count from HTML
  const textOnly = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = textOnly.split(' ').length;

  if (wordCount < 1000 && boostSections[file.replace('.astro', '')]) {
    const section = boostSections[file.replace('.astro', '')];
    const updated = content.replace('</GuideLayout>', section.trim() + '\n</GuideLayout>');
    writeFileSync('src/pages/guides/' + file, updated, 'utf-8');
    boosted++;
    console.log(`BOOSTED: ${file} (was ~${wordCount} words)`);
  } else {
    skipped++;
  }
}
console.log(`\nBoosted: ${boosted}, Already good: ${skipped}`);
