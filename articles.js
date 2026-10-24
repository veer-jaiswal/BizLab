/* YOUR ARTICLES. Copy a block, paste it at the TOP of the list, and edit it.
   id: short, unique, letters and dashes only | section: business, venture, finance, or economy
   date: YYYY-MM-DDTHH:MM (the time shown on the article, 24-hour) | body: wrap paragraphs in <p>, subheadings in <h2>
   Don't use the backtick character inside body. Tables: <table>. Summary box: <div class="takeaways">. */
const ARTICLES = [
{
id: "distribution-beats-product", section: "business", date: "2026-10-19T08:32",
title: "Distribution Beats Product More Often Than Founders Want to Admit",
summary: "A mediocre product with a reliable way to reach customers often beats a great one nobody finds. How to think about distribution before you build.",
body: `
<p>Ask a first-time founder why their startup might fail and you’ll usually hear about competition, funding, or timing. Ask an experienced investor and you’ll hear something simpler: nobody found out the product existed.</p>
<p>Building something good feels like the hard part, so founders spend most of their energy there. But a mediocre product with a reliable way of reaching customers will often beat a great product with no way of reaching anyone. This is uncomfortable because it suggests quality isn’t what decides who wins.</p>
<h2>The myth of “if you build it, they will come”</h2>
<p>The idea that a great product spreads on its own is comforting, and it’s true for a tiny number of cases. Most of the time, the products you think of as organic successes had a distribution engine baked in from the start. Dropbox’s referral program gave users extra storage for inviting friends, so growth was built into how the product worked. Slack spread team by team because using it with a colleague made it better. These weren’t accidents. Distribution was part of the design.</p>
<p>The founders who skip this step end up in a familiar place: a polished product, a launch day spike from friends and a Product Hunt post, and then a flat line.</p>
<h2>What distribution actually means</h2>
<p>Distribution is the repeatable way you get in front of the people who want what you’re selling, at a cost lower than what they’ll pay you over time. The key words are repeatable and cost. A viral tweet is not distribution. It’s luck. Distribution is something you can do again next month and roughly predict the result of.</p>
<p>The main channels are fairly limited:</p>
<ul>
<li><strong>Direct sales</strong>, where you or a team talk to customers one at a time. Slow, but it works well for expensive products and is how most B2B companies start.</li>
<li><strong>Content and search</strong>, where you publish things people look for and they find you. It compounds over time but takes months before it pays off.</li>
<li><strong>Paid advertising</strong>, where you buy attention. It’s fast and scalable, but it only works if each customer is worth more than what you paid to get them.</li>
<li><strong>Partnerships and platforms</strong>, where you reach customers through someone who already has them, like an app store, a marketplace, or another company’s product.</li>
<li><strong>Virality and referrals</strong>, where existing users bring new ones. Powerful, but it only works when the product is naturally shared.</li>
</ul>
<p>Most successful companies are really good at one or two of these, not all of them.</p>
<h2>The question to ask before you build</h2>
<p>Before writing any code, ask: how will the first thousand customers hear about this? If your answer is vague, like “social media” or “word of mouth,” you don’t have a plan yet. You have a hope.</p>
<p>A better answer is specific. “We’ll sell to independent dental practices by cold emailing office managers and offering a free audit” is a plan you can test in a week. “We’ll go viral” is not.</p>
<p>This doesn’t mean you need a finished distribution strategy on day one. It means you should treat distribution as a product problem of equal weight. Early on, run small experiments. Try three channels, spend a little on each, and see which one produces customers at a cost that makes sense. Most will fail. One might work, and then you put everything behind it.</p>
<h2>Why this matters for how you evaluate businesses</h2>
<p>If you’re looking at a company, whether as an investor, an employee, or a competitor, the product demo only tells you part of the story. The questions that matter more are:</p>
<ul>
<li>How do they acquire customers today?</li>
<li>What does it cost to acquire one?</li>
<li>Does that cost go down or up as they scale?</li>
</ul>
<p>That last question separates strong businesses from fragile ones. Some channels get more expensive as you use them. Paid ads are the classic example: the first customers you reach are the cheapest, and as you push further the price climbs. Other channels get cheaper over time. Content builds up. Referrals build on themselves. Brand recognition makes every other channel work better.</p>
<p>A company whose acquisition costs are rising while its product advantage shrinks is in trouble, even if revenue is growing right now.</p>
<h2>The uncomfortable implication</h2>
<p>If distribution matters this much, then incumbents have a big advantage. A large company that already has a million customers can launch a mediocre product and reach them tomorrow. A startup with a better product has to fight for every customer individually.</p>
<p>This is why so many startup wins come from areas where incumbents can’t or won’t use their distribution. Maybe the new product would cannibalize their main business. Maybe the customers are too small to care about. Maybe the incumbent just moves too slowly. Great startups often find a gap like this and then build their own distribution before the incumbent wakes up.</p>
<h2>What to do with this</h2>
<p>If you’re building something, spend as much time thinking about how people will find it as you do on what it does. Talk to potential customers before you build, and ask where they currently look for solutions. Their answer tells you where your distribution might live.</p>
<p>If you’re analyzing a business, look past the product. Ask how customers actually arrive and whether that path gets stronger or weaker with scale.</p>
<p>And if you’re deciding between two ideas, pick the one where the path to customers is clearer, even if the product is less exciting. The boring business with a reliable way to find buyers usually beats the brilliant one that nobody can find.</p>
<p>A good product gets you the right to compete. Distribution decides who wins.</p>
`},
{
id: "what-a-moat-actually-is", section: "venture", date: "2026-10-21T16:56",
title: "What a Moat Actually Is (and Why Most Startups Don’t Have One)",
summary: "Most advantages founders call a moat can be copied. The real sources of durable advantage, and a simple test for each.",
body: `
<p>Warren Buffett popularized the idea of an economic moat: a durable advantage that protects a business from competitors, like water around a castle. It’s one of the most useful ideas in business, and one of the most misused. Founders claim to have moats all the time. Most of what they describe isn’t one.</p>
<h2>What a moat is not</h2>
<p>A moat is not being first. Plenty of first movers got crushed by better-funded followers. It’s not having a good product, because good products get copied. It’s not having great founders or a smart team, because teams can be hired away. It’s not even having technology, because technology that’s impressive today often becomes a commodity within a few years.</p>
<p>All of these are advantages, but they’re temporary. A moat is something that gets harder for competitors to overcome over time, not something that simply exists today.</p>
<h2>The real sources of moats</h2>
<p>Economists and investors tend to group durable advantages into a handful of types.</p>
<p><strong>Network effects.</strong> The product gets more valuable as more people use it. A marketplace is the clearest example: buyers go where the sellers are, and sellers go where the buyers are. Once a marketplace reaches critical mass, a competitor can’t just offer a similar product, because they’d also need to bring both sides over at the same time. This is hard, which is why it protects the incumbent.</p>
<p><strong>Switching costs.</strong> It’s painful for customers to leave. Think of a company whose entire accounting history sits inside one software tool, with employees trained on it and other systems connected to it. Even if a competitor were cheaper, the effort and risk of moving keeps the customer in place. Enterprise software depends heavily on this.</p>
<p><strong>Scale economies.</strong> Being big makes you cheaper. A company producing at huge volume spreads its fixed costs over more units, so its cost per unit falls. A smaller rival can’t match the price without losing money. Costco is a good illustration: its buying power lets it keep prices low, which brings in more customers, which increases buying power further.</p>
<p><strong>Brand.</strong> People pay more or choose you by default because they trust you. This is real but harder to build than it sounds, and it only counts as a moat if the brand lets you charge more or keeps customers loyal. Lots of well-known brands have no pricing power at all.</p>
<p><strong>Proprietary assets or regulation.</strong> Patents, licenses, exclusive data, or regulatory approvals that others can’t easily get. These can be powerful but are often time-limited or open to legal challenge.</p>
<h2>The test: can a well-funded competitor just copy you?</h2>
<p>Here’s a practical way to check whether a business has a moat. Imagine a competitor with plenty of money and talent decides to attack. Could they replicate what you do in a couple of years? If yes, you don’t have a moat yet.</p>
<p>Take a simple example. A company builds a nice app that does one useful thing. A large company with a bigger team and more users decides to add that feature to its existing product. The startup’s customers already use the big company’s product, so they just turn the feature on. The startup’s advantage disappears. This happens constantly.</p>
<p>Now compare that with a company whose customers have years of data stored in the product, whose workflows depend on it, and whose users are also the people their customers interact with. Copying the features isn’t enough. A competitor would need to replicate all of that history and connection, and that’s the moat.</p>
<h2>Moats are built, usually slowly</h2>
<p>The tricky part is that a young company rarely has a moat. It has a head start, and the work is turning that head start into something durable before competitors catch up.</p>
<p>This usually means making deliberate choices early. If you’re building a network, focus on getting density in one small group before expanding. If you’re relying on switching costs, make your product deeply integrated into how customers work. If you’re chasing scale, use your early advantage to cut costs in ways competitors can’t match.</p>
<p>The best founders think about this explicitly. They ask: what will make us harder to beat in three years than we are today? If the answer is “nothing, we’ll just keep building features,” that’s a warning sign.</p>
<h2>Moats can also erode</h2>
<p>No moat lasts forever. Technology shifts can make switching costs disappear. Networks can fragment when a new platform emerges. Brands fade when quality slips. Regulation changes.</p>
<p>Some of the most famous business stories involve a moat that looked permanent right until it wasn’t. The businesses that endure tend to keep investing in their advantage instead of assuming it protects them automatically.</p>
<h2>How to use this</h2>
<p>If you’re evaluating a company, ask which type of moat it has and whether it’s strengthening or weakening. A company with growing network effects is in a very different position from one coasting on a brand.</p>
<p>If you’re starting something, be honest about where you stand today. It’s fine to have no moat at the beginning. It’s a problem to have no plan for building one.</p>
<p>And when someone tells you they have a moat, ask the simple question: what stops a bigger company from doing this next quarter? The answer will tell you almost everything.</p>
`},
{
id: "raise-your-prices", section: "business", date: "2026-10-24T01:32",
title: "Raise Your Prices: Why Cheap Is Usually the Riskier Strategy",
summary: "The math behind why underpricing is risky, and practical ways to raise prices without losing your customers.",
body: `
<p>When a new business is struggling to get customers, the instinct is to lower the price. It feels logical. If people aren’t buying, make it easier to say yes.</p>
<p>In practice, underpricing is one of the most common and most expensive mistakes small businesses and startups make. It rarely solves the problem it’s meant to solve, and it creates new ones.</p>
<h2>The math most people skip</h2>
<p>Start with a simple example. Say you sell a product for $50 and it costs you $30 to deliver. Your margin is $20 per sale. Now you raise the price to $55. Your margin goes from $20 to $25, a 25 percent increase in profit per sale from a 10 percent increase in price.</p>
<p>That means you could lose a meaningful chunk of your customers and still make the same total profit. If you currently sell 100 units, you’d make $2,000. At $55, you’d only need to sell 80 units to make $2,000. Anything above that is extra.</p>
<p>Now run it the other way. If you cut the price from $50 to $45, your margin drops from $20 to $15, a 25 percent fall. You’d need to sell 133 units just to make the same $2,000. A small discount requires a big jump in volume to break even, and most businesses never see that jump.</p>
<p>Price is the most powerful lever in a business because it flows straight to the bottom line. Changes in price matter more than most other changes you could make.</p>
<h2>Why low prices backfire</h2>
<p>Cheap prices attract a certain kind of customer. They’re more price-sensitive, more likely to leave for a lower offer, more demanding relative to what they pay, and less likely to value what you do. If you compete on price, you compete with everyone who is willing to go lower, and eventually someone will.</p>
<p>Low prices also send a signal. In many categories, price is how customers judge quality. A very cheap consultant, software tool, or service can make buyers suspicious: why is it so cheap, what’s wrong with it? A higher price often makes the same offer seem more credible.</p>
<p>And low prices leave no room for error. If your margin is thin, one bad month, one unexpected cost, or one wave of refunds can sink you. You can’t invest in better service, better products, or marketing because there’s nothing left over.</p>
<h2>Cost-plus pricing is a trap</h2>
<p>Many people set prices by adding a margin to their costs. It feels fair and simple, but it ignores the most important question: what is this worth to the customer?</p>
<p>Customers don’t care what it cost you to make something. They care about what it does for them. If your software saves a company $50,000 a year, charging $5,000 might feel generous to you, but you’re leaving enormous value on the table. A price of $15,000 would still be a great deal from their perspective.</p>
<p>This is called value-based pricing. Instead of starting with your costs, you start with the outcome the customer gets and price a fraction of that. It requires understanding your customers well enough to know what the problem is costing them, which is a good habit anyway.</p>
<h2>How to raise prices without losing everyone</h2>
<p>The fear of raising prices is mostly about losing customers, so it helps to be practical.</p>
<p><strong>Test before you commit.</strong> Try a higher price with new customers only and see what happens to conversion. You’ll often find that sales drop much less than you feared, or not at all.</p>
<p><strong>Offer tiers.</strong> Give customers a basic, a standard, and a premium option. Many will choose the middle one, and a few will go premium. Even the existence of a higher tier makes the middle one look reasonable.</p>
<p><strong>Anchor high.</strong> If people see a high number first, the next number feels smaller. This is why restaurants sometimes list one very expensive item on the menu.</p>
<p><strong>Communicate the value.</strong> Raising prices works best when customers understand what they get. A price increase paired with a better offering, clearer results, or improved service goes down much easier.</p>
<p><strong>Grandfather existing customers if you need to.</strong> Letting loyal customers keep their old rate while new customers pay more reduces backlash and still improves your economics over time.</p>
<h2>When cheap actually works</h2>
<p>To be fair, low prices aren’t always wrong. Some businesses are built on being the low-cost option, and they work because they’ve designed everything around it: lean operations, huge volume, and tight control of costs. Walmart and Costco are examples. But their model is a deliberate strategy backed by scale, not just a small business hoping that a discount will bring in customers.</p>
<p>If you don’t have a structural cost advantage, competing on price is risky. You’re fighting on terrain where bigger players are stronger.</p>
<h2>The takeaway</h2>
<p>If you’re starting a business and unsure what to charge, resist the urge to pick the lowest number that feels safe. Start higher than is comfortable. It’s much easier to lower a price later than to raise it, and the customers who say yes at a higher price are usually better customers anyway.</p>
<p>If you already have customers, look at your pricing as something to test, not something you set once. A modest increase might be the single most profitable move available to you.</p>
<p>The goal is not to be the cheapest. It’s to be clearly worth what you charge.</p>
`},
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
