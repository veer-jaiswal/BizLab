/* YOUR ARTICLES. Copy a block, paste it at the TOP of the list, and edit it.
   id: short, unique, letters and dashes only | section: business, venture, finance, or economy
   date: YYYY-MM-DDTHH:MM (the time shown on the article, 24-hour) | body: wrap paragraphs in <p>, subheadings in <h2>
   Don't use the backtick character inside body. Tables: <table>. Summary box: <div class="takeaways">. */
const ARTICLES = [
{
id: "how-to-read-a-balance-sheet", section: "finance", date: "2026-10-20T08:30",
title: "How to Read a Balance Sheet: A Plain-English Guide",
summary: "A step-by-step walk through assets, liabilities, and equity, and the few ratios that turn the numbers into insight.",
body: `
<p>A balance sheet is a snapshot. It lists what a company owns, what it owes, and what is left over for its owners on a single date. An income statement shows how a business performed over a period; the balance sheet shows where it stands at one moment. Reading one well is among the most useful skills in business and investing, and it takes less math than most people expect.</p>
<h2>The equation that runs everything</h2>
<p>Every balance sheet obeys one identity: <strong>assets = liabilities + equity</strong>. Assets are the resources a company controls. Liabilities are what it owes to others. Equity is the remainder, the portion of assets that belongs to the owners. The sheet balances because every asset was paid for either by borrowing or by owner funds.</p>
<h2>Assets: what the company controls</h2>
<p>Assets are grouped by how quickly they can become cash, usually from most liquid to least.</p>
<ul><li><strong>Current assets</strong> are expected to turn into cash within a year: cash, accounts receivable (money customers owe), and inventory.</li><li><strong>Non-current assets</strong> last longer: equipment, buildings, and intangibles such as patents or acquired goodwill.</li></ul>
<p>A company full of cash and receivables has flexibility. One whose assets are mostly specialized equipment has less room to maneuver if sales slow.</p>
<h2>Liabilities: what the company owes</h2>
<p>Liabilities follow the same logic. Current liabilities fall due within a year, such as accounts payable, wages owed, and the near-term portion of debt. Non-current liabilities include long-term loans and bonds. Debt is not automatically bad, since it can fund growth that equity alone could not. What matters is whether the company can meet its obligations when they come due.</p>
<h2>Equity: what is left for the owners</h2>
<p>Equity typically includes the money owners invested plus retained earnings, the profits a company has kept rather than paid out. Equity that grows through retained profit is a healthy sign. Equity that shrinks because of repeated losses deserves a closer look.</p>
<h2>A worked example</h2>
<p>Here is a small company with illustrative numbers:</p>
<table><tr><th>Item</th><th>Amount</th></tr>
<tr><td>Cash</td><td>$40,000</td></tr><tr><td>Accounts receivable</td><td>$30,000</td></tr><tr><td>Inventory</td><td>$50,000</td></tr><tr><td>Equipment</td><td>$80,000</td></tr>
<tr><th>Total assets</th><th>$200,000</th></tr>
<tr><td>Accounts payable</td><td>$35,000</td></tr><tr><td>Short-term debt</td><td>$25,000</td></tr><tr><td>Long-term loan</td><td>$60,000</td></tr>
<tr><th>Total liabilities</th><th>$120,000</th></tr>
<tr><td>Owner equity</td><td>$80,000</td></tr>
<tr><th>Liabilities + equity</th><th>$200,000</th></tr></table>
<p>Both sides equal $200,000, so the sheet balances. Now we can ask what the numbers say about the company&rsquo;s health.</p>
<h2>Three measures that do the heavy lifting</h2>
<ul><li><strong>Working capital</strong> is current assets minus current liabilities. Here that is $120,000 &minus; $60,000 = $60,000. A positive figure means short-term resources cover short-term bills.</li>
<li><strong>Current ratio</strong> is current assets divided by current liabilities: 2.0 in this case. Above 1 suggests the company can pay near-term obligations, though healthy levels vary by industry. A stricter version, the quick ratio, leaves out inventory because it can be slow to sell.</li>
<li><strong>Debt-to-equity</strong> is total liabilities divided by equity: 1.5 here, meaning $1.50 of obligations for every $1 of owner funds. Definitions differ, and some use only interest-bearing debt, so always check which one is being quoted.</li></ul>
<h2>What to look for</h2>
<p>A single balance sheet says little on its own. Compare several periods to see direction, and compare against similar companies, because a software firm and a grocery chain have very different norms. Watch for receivables growing faster than sales (customers paying slowly), inventory piling up, short-term debt rising relative to cash, and large goodwill compared with total assets.</p>
<p>Also remember what the balance sheet leaves out. Many assets are recorded near their original cost, so book value can differ from market value, and the statement says nothing about how cash moved during the period. Read it alongside the income statement and the cash flow statement.</p>
<div class="takeaways"><h2>Key takeaways</h2><ul><li>Assets = liabilities + equity, always.</li><li>Liquidity (current assets vs. current liabilities) tells you about near-term safety.</li><li>Debt-to-equity tells you how much the company leans on borrowing.</li><li>Trends and peer comparisons matter more than any single number.</li></ul></div>
`},
{
id: "how-venture-capital-works", section: "venture", date: "2026-10-19T09:15",
title: "How Venture Capital Works: Funds, Returns, and the Power Law",
summary: "Why venture investors pass on good businesses, and how fund math shapes which startups get funded.",
body: `
<p>Venture capital looks like a simple story: investors back promising startups, and some become huge. Underneath is a financial structure with its own incentives, and understanding it explains behavior that otherwise seems puzzling, like why an investor can like your company and still say no.</p>
<h2>Who is involved</h2>
<p>A venture firm raises money into a fund. The <strong>limited partners</strong> (LPs) supply most of the capital and are typically institutions such as pension funds, university endowments, foundations, and wealthy families. The <strong>general partners</strong> (GPs) are the investors who run the fund and choose the startups. Funds commonly have a life of around ten years, and money is called from LPs gradually as deals are made rather than all at once.</p>
<p>GPs are usually paid in two ways: an annual management fee, often around 2% of committed capital, and <strong>carried interest</strong>, a share of profits often around 20%. Exact terms vary by firm, but the key point is that GPs earn the most when the fund returns a lot more than it was given.</p>
<h2>The power law</h2>
<p>Startup outcomes are not evenly spread. Many companies fail or return little, and a handful return far more than everything else combined. Consider an illustrative $100 million fund that invests $4 million in each of 25 companies:</p>
<table><tr><th>Outcome</th><th>Companies</th><th>Money back</th></tr>
<tr><td>Lose everything</td><td>10</td><td>$0</td></tr><tr><td>Return about 1x</td><td>10</td><td>$40M</td></tr><tr><td>Return about 4x</td><td>4</td><td>$64M</td></tr><tr><td>Return about 30x</td><td>1</td><td>$120M</td></tr>
<tr><th>Total</th><th>25</th><th>$224M</th></tr></table>
<p>The fund returns roughly 2.2 times its money, and the single best company supplies more than half of that. Take away that one outcome and the fund barely breaks even. This is why investors search for companies that could be very large, not merely good.</p>
<h2>What this means for founders</h2>
<p>When an investor says a business is &ldquo;not venture-scale,&rdquo; the comment is about fund math, not about quality. A profitable company that might be sold for a modest sum can be an excellent business and a poor fit for a fund that needs outliers. The questions investors ask follow from this: How big can the market get? Can this team win it? Can the company grow fast enough to matter to the fund?</p>
<p>Funding also costs ownership. Each round sells new shares, which dilutes existing holders. If a company sells 20% of itself in a round, everyone who owned it before now owns 80% of what they had. Over several rounds, founders can end up with a much smaller share, so it matters whether the growth the money buys is worth the dilution.</p>
<h2>Alternatives</h2>
<p>Venture is one financing path among several. Many strong companies are built with customer revenue, small angel investments, bank or revenue-based financing, or grants. The right choice depends on how fast the market rewards speed and how much capital the business truly needs.</p>
<div class="takeaways"><h2>Key takeaways</h2><ul><li>Funds need a few outsized winners to work, so investors hunt for very large outcomes.</li><li>A pass often reflects fund fit and math, not a verdict on your company.</li><li>Every round trades ownership for capital, so raise only what the plan needs.</li></ul></div>
`},
{
id: "unit-economics", section: "business", date: "2026-10-16T10:00",
title: "Unit Economics: The Math That Decides Whether a Business Can Scale",
summary: "How to measure what one customer earns and costs, and why growth without this math can lose money faster.",
body: `
<p>Growth feels like progress, but it can hide a problem. If each new customer costs more to win and serve than they ever pay back, getting bigger only makes the losses bigger. <strong>Unit economics</strong> is the habit of checking this at the smallest level: what does one customer or one order earn and cost?</p>
<h2>Start with contribution margin</h2>
<p>Pick your unit, such as a customer, an order, or a subscriber. Then subtract the variable costs of serving that unit from the revenue it brings in. What remains is the <strong>contribution margin</strong>, the amount each unit contributes toward paying fixed costs and, eventually, profit.</p>
<p>Take a subscription box priced at $30 a month. Product, packaging, shipping, and payment fees cost $18 for each box. The contribution is $12 per customer per month, or 40%.</p>
<h2>Add the cost of winning the customer</h2>
<p><strong>Customer acquisition cost</strong> (CAC) is total sales and marketing spend divided by the number of new customers it produced. Suppose CAC is $60. Dividing it by monthly contribution gives the <strong>payback period</strong>: $60 &divide; $12 = 5 months. Until then, the customer is a net cost, which matters because cash goes out before it comes back.</p>
<h2>Estimate lifetime value</h2>
<p>If the average customer stays 15 months, lifetime contribution is $12 &times; 15 = $180. Comparing that with CAC gives a ratio of 3 to 1. Many operators treat roughly 3 to 1, with payback inside a year, as a comfortable range, but these are rules of thumb that shift with the business model and its access to cash.</p>
<h2>See how fragile it is</h2>
<p>Now suppose customers cancel sooner and the average stay falls to 6 months. Lifetime contribution drops to $72, only 1.2 times CAC. After rent, salaries, and software, that business is probably losing money on every customer it adds. The product did not change. Retention did.</p>
<table><tr><th>Scenario</th><th>Average stay</th><th>Lifetime contribution</th><th>vs. $60 CAC</th></tr>
<tr><td>Healthy retention</td><td>15 months</td><td>$180</td><td>3.0x</td></tr><tr><td>Weak retention</td><td>6 months</td><td>$72</td><td>1.2x</td></tr></table>
<h2>Do not forget fixed costs</h2>
<p>Contribution has to cover fixed costs too. If fixed costs are $24,000 a month, the business needs $24,000 &divide; $12 = 2,000 paying subscribers just to break even. That number is a useful target and a reality check on how fast the plan has to grow.</p>
<h2>Common mistakes</h2>
<ul><li>Leaving out real variable costs such as returns, support, or payment fees.</li><li>Blending organic and paid customers, which hides the true cost of paid growth.</li><li>Using revenue instead of margin when estimating lifetime value.</li><li>Averaging all customers together instead of tracking groups that joined in the same period.</li></ul>
<div class="takeaways"><h2>Key takeaways</h2><ul><li>Measure what one customer earns after variable costs, not just revenue.</li><li>Payback period tells you how long cash is at risk.</li><li>Retention often decides whether the math works.</li><li>Check that total contribution can cover fixed costs.</li></ul></div>
`},
{
id: "inflation-and-interest-rates", section: "economy", date: "2026-10-13T07:45",
title: "Inflation, Interest Rates, and Why Central Banks Move Slowly",
summary: "How rate decisions reach prices and jobs, and why the effects take so long to show up.",
body: `
<p>Few economic tools are as discussed, and as misunderstood, as the interest rate decision. When a central bank raises or lowers its policy rate, the aim is to steer inflation and employment without causing a recession. The mechanics are simple on paper. The timing is what makes them hard.</p>
<h2>What inflation is</h2>
<p>Inflation is a sustained rise in the general level of prices, usually tracked with a price index such as the consumer price index. It can come from strong demand chasing limited goods, from higher costs for inputs like energy and labor, or from people expecting prices to rise and acting on that expectation by raising their own prices and wage demands.</p>
<h2>How rates reach the economy</h2>
<p>In the United States, the Federal Reserve works under a dual mandate of stable prices and maximum employment, and it targets 2% inflation over time. Its main tool is the target for the short-term policy rate. Changing it passes through the economy in several steps:</p>
<ul><li><strong>Borrowing costs</strong> move. Mortgages, business loans, and credit cards generally become more or less expensive.</li><li><strong>Spending and investment</strong> respond. Higher rates discourage borrowing and delay projects; lower rates encourage them.</li><li><strong>Asset prices</strong> adjust. Higher rates raise the return investors demand, which tends to push down the value of long-lived assets such as stocks and property.</li><li><strong>Demand cools or warms</strong>, which eventually affects hiring, wages, and prices.</li></ul>
<h2>Real versus nominal rates</h2>
<p>The headline rate is the <strong>nominal</strong> rate. What matters for behavior is the <strong>real</strong> rate, roughly the nominal rate minus expected inflation. A 5% rate with 3% expected inflation is about a 2% real rate, which is far less restrictive than a 5% rate with 1% expected inflation.</p>
<h2>Why central banks move slowly</h2>
<p>Policy works with long and uncertain lags. Estimates often put the full effect of a rate change at a year or more, and the lag varies by economy and period. Data is also noisy and gets revised, so a central bank can read a trend wrongly. Moving too late lets inflation settle in. Moving too hard risks needless job losses. Because of this, officials tend to move in steps, signal their intentions in advance, and watch how the data responds.</p>
<h2>Expectations matter</h2>
<p>If households and businesses trust that inflation will return to target, they behave in ways that help it get there. If they stop believing, tightening has to be harsher to regain credibility. Much of central bank communication aims to keep expectations anchored.</p>
<h2>What it means for you</h2>
<p>Rate changes affect what a business pays to borrow, what customers can afford to finance, and what savers earn. For a founder or investor, a useful question is not &ldquo;what will the Fed do?&rdquo; but &ldquo;how exposed are we if rates stay high, or fall quickly?&rdquo;</p>
<div class="takeaways"><h2>Key takeaways</h2><ul><li>Rates influence prices indirectly, through borrowing, spending, and expectations.</li><li>Real rates, not nominal ones, show how tight policy really is.</li><li>Long lags are why central banks move gradually and why outcomes are hard to predict.</li></ul></div>
`}
];
