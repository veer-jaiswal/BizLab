/* YOUR ARTICLES. To add one, copy a block below, paste it at the TOP of the list, and change it.
   - id: short and unique, letters and dashes only (it becomes the link)
   - section: business, venture, finance, or economy
   - date: YYYY-MM-DD
   - body: your text. Wrap each paragraph in <p>...</p>. Use <h2>...</h2> for subheadings.
   - Don't use the backtick character ` inside the body.
   These four are SAMPLES. Replace them with your own writing. */
const ARTICLES = [
  {
    id: "unspoken-assumptions",
    section: "business",
    title: "The most expensive assumption is the one nobody says out loud.",
    summary: "Why unstated assumptions quietly cost the most, and a simple way to surface them.",
    date: "2026-10-19",
    body: `
      <p>Most business mistakes don't start with a bad decision. They start with a decision nobody made, because everyone assumed the answer was obvious.</p>
      <p>"Customers will pay for this." "The team agrees on the goal." "This will take two months." Nobody argues with these statements because nobody has stated them, and a statement that was never made can't be tested.</p>
      <h2>Say it out loud</h2>
      <p>Before committing to a plan, finish the sentence "This only works if..." three times. The answers are usually your real risks. If one is uncomfortable to say in a meeting, check it first, while checking is still cheap.</p>
    `
  },
  {
    id: "what-a-no-means",
    section: "venture",
    title: "What founders get wrong about a “no.”",
    summary: "Most investor rejections are less final, and less informative, than they feel.",
    date: "2026-10-05",
    body: `
      <p>For a founder, a pass from an investor can feel like a verdict on the company. Often it's a much narrower statement.</p>
      <p>Investors pass for reasons that have little to do with quality: the fund focuses on a different stage or sector, it already backs a competitor, the check size doesn't fit, or the timing is off. A single no says more about the fund than about you.</p>
      <h2>Look for patterns</h2>
      <p>One no is thin evidence. The same objection across many conversations is real information. Ask politely what would have changed the answer, and treat each no as a data point to collect.</p>
    `
  },
  {
    id: "profit-vs-cash",
    section: "finance",
    title: "Profit is an opinion. Cash is a fact.",
    summary: "Why a company can be profitable on paper and still run out of money.",
    date: "2026-10-08",
    body: `
      <p>Profit follows accounting rules that record revenue when it's earned and expenses when they're incurred, not necessarily when money moves. That makes it useful for judging performance, but it isn't the same as cash in the bank.</p>
      <p>A company can sell a lot, report a profit, and still be short of cash. Customers may take 60 days to pay while employees and suppliers need paying now, and inventory has to be bought before it's sold.</p>
      <h2>The question to ask</h2>
      <p>If nothing else changed, how many months could we keep paying our bills? That number is easier to act on than a profit figure.</p>
    `
  },
  {
    id: "economy-is-not-weather",
    section: "economy",
    title: "The economy is not a weather report.",
    summary: "How to turn macro noise into a useful operating question.",
    date: "2026-09-28",
    body: `
      <p>A weather report tells you what's coming and leaves you no say in it. Economic news is often read the same way: inflation is up, rates are changing, growth is slowing, and the reader is left with vague dread or optimism.</p>
      <p>A better move is to turn the headline into a question about your own situation. Interest rates, for example, change the cost of borrowing, which can affect how easily a company raises money.</p>
      <h2>From headline to decision</h2>
      <p>Which of my costs does this change? Which customers are most sensitive to it? What would I do differently if it lasted a year instead of a quarter? Forecasters frequently miss turning points, so the goal isn't to predict. It's to know your exposure and stay flexible.</p>
    `
  }
];
