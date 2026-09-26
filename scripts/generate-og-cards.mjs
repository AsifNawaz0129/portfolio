import { chromium } from 'playwright';

async function generateAllOgCards() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2
  });

  // ==========================================
  // 1. HOMEPAGE OG CARD (public/og-image.png)
  // ==========================================
  const homeCardHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1200px;
      height: 630px;
      background-color: #111110;
      font-family: 'Inter', system-ui, sans-serif;
      color: #f5f3ef;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 56px 64px;
      position: relative;
      overflow: hidden;
    }

    .glow-accent {
      position: absolute;
      top: -100px;
      right: -50px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(224, 93, 56, 0.18) 0%, rgba(224, 93, 56, 0) 70%);
      pointer-events: none;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      pointer-events: none;
    }

    .frame-border {
      position: absolute;
      inset: 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      pointer-events: none;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 26px;
      font-weight: 700;
      font-style: italic;
      color: #ffffff;
    }

    .brand-logo .sans {
      font-style: normal;
      font-family: 'Inter', sans-serif;
      font-weight: 800;
    }

    .brand-logo .dot {
      color: #e05d38;
      font-style: normal;
    }

    .domain-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #9e9a93;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4px 12px;
      border-radius: 9999px;
    }

    .status-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.06em;
      color: #6ee7b7;
      background: rgba(6, 78, 59, 0.45);
      border: 1px solid rgba(52, 211, 153, 0.35);
      padding: 6px 14px;
      border-radius: 9999px;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      background-color: #34d196;
      border-radius: 50%;
      box-shadow: 0 0 8px #34d196;
    }

    /* Main Section: 2 Columns */
    .main-grid {
      display: grid;
      grid-template-columns: 1.35fr 0.9fr;
      gap: 36px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .headline {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 58px;
      font-weight: 700;
      line-height: 1.05;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .headline .italic-name {
      font-style: italic;
      color: #e05d38;
      position: relative;
      display: inline-block;
    }

    .role-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #f5f3ef;
      margin-top: 10px;
    }

    .role-row .dash {
      color: #e05d38;
      font-size: 18px;
    }

    .bio-text {
      font-size: 16px;
      line-height: 1.55;
      color: #9e9a93;
      margin-top: 12px;
      max-width: 580px;
    }

    .bio-text strong {
      color: #f5f3ef;
      font-weight: 600;
    }

    /* Pills Container */
    .pills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
    }

    .skill-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f5f3ef;
    }

    .skill-pill.accent {
      background: rgba(224, 93, 56, 0.15);
      border-color: rgba(224, 93, 56, 0.45);
      color: #ffffff;
    }

    /* Right Orbit Node Graphic */
    .orbit-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Footer Row */
    .footer-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 18px;
      position: relative;
      z-index: 2;
    }

    .footer-copy {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #807c75;
    }

    .metrics-group {
      display: flex;
      gap: 24px;
    }

    .metric-box {
      display: flex;
      align-items: baseline;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
    }

    .metric-num {
      font-size: 18px;
      font-weight: 700;
      color: #e05d38;
      font-family: 'Charter', serif;
      font-style: italic;
    }

    .metric-lbl {
      font-size: 12px;
      color: #9e9a93;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  </style>
</head>
<body>
  <div class="glow-accent"></div>
  <div class="grid-bg"></div>
  <div class="frame-border"></div>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="brand-group">
      <div class="brand-logo"><span class="sans">A</span>N<span class="dot">.</span></div>
      <div class="domain-badge">anawaz.dev</div>
    </div>
    <div class="status-pill">
      <span class="status-dot"></span>
      OPEN TO WORK &bull; REMOTE (GLOBAL)
    </div>
  </div>

  <!-- Main Hero Grid -->
  <div class="main-grid">
    <div>
      <h1 class="headline">
        Asif <span class="italic-name">Nawaz
          <svg style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 10px; color: #e05d38;" viewBox="0 0 160 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M 4 8 Q 24 16, 44 8 T 84 8 T 124 8 T 156 8"/></svg>
        </span>
      </h1>
      <div class="role-row">
        <span class="dash">—</span>
        <span>Senior SDET &bull; AI QA Architect</span>
      </div>
      <p class="bio-text">
        Engineering scalable, code-first test infrastructure across enterprise web, mobile, and API ecosystems with <strong>Playwright, Cypress, CI/CD matrices, and autonomous QA workflows</strong>.
      </p>

      <div class="pills-row">
        <div class="skill-pill accent">🎭 Playwright & Cypress</div>
        <div class="skill-pill">🧠 AI-Driven QA</div>
        <div class="skill-pill">⚡ CI/CD Pipelines</div>
        <div class="skill-pill">📱 Mobile & REST APIs</div>
      </div>
    </div>

    <!-- Orbit Graphic -->
    <div class="orbit-container">
      <svg width="310" height="310" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="185" stroke="#2e2d2a" stroke-width="1.5" stroke-dasharray="6 6"/>
        <circle cx="200" cy="200" r="145" stroke="#2e2d2a" stroke-width="1.5"/>
        <circle cx="200" cy="200" r="105" stroke="#2e2d2a" stroke-width="1.5"/>
        
        <!-- Rotating Accent Indicator -->
        <path d="M 285, 96 A 145,145 0 0,1 345, 200" stroke="#e05d38" stroke-width="4" stroke-linecap="round"/>
        <circle cx="345" cy="200" r="6" fill="#e05d38"/>
        <circle cx="345" cy="200" r="12" stroke="#e05d38" stroke-width="1.5" opacity="0.4"/>

        <!-- Center Node -->
        <circle cx="200" cy="200" r="54" fill="#1a1918" stroke="#2e2d2a" stroke-width="2"/>
        <text x="200" y="188" font-family="'Charter', Georgia, serif" font-weight="700" font-size="20" fill="#f5f3ef" text-anchor="middle">QA</text>
        <text x="200" y="210" font-family="'Charter', Georgia, serif" font-weight="700" font-size="16" fill="#f5f3ef" text-anchor="middle">Excellence</text>
        <text x="200" y="228" font-family="'Charter', Georgia, serif" font-weight="700" font-size="13" fill="#e05d38" text-anchor="middle">Node</text>

        <!-- Node text labels -->
        <text x="200" y="80" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" letter-spacing="0.2em" fill="#807c75" text-anchor="middle">EXECUTION SPEED</text>
        <text x="200" y="332" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" letter-spacing="0.2em" fill="#807c75" text-anchor="middle">AI QUALITY GATES</text>
      </svg>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer-bar">
    <div class="footer-copy">asifnawaz.dev &bull; Senior Quality Engineering Platform</div>
    <div class="metrics-group">
      <div class="metric-box">
        <span class="metric-num">8+</span>
        <span class="metric-lbl">Years Exp</span>
      </div>
      <div class="metric-box">
        <span class="metric-num">60%</span>
        <span class="metric-lbl">Reduction</span>
      </div>
      <div class="metric-box">
        <span class="metric-num">99.8%</span>
        <span class="metric-lbl">Stability</span>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  await page.setContent(homeCardHtml, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/og-image.png', type: 'png' });
  console.log('✓ Generated public/og-image.png');

  // ==========================================
  // 2. BLOG POST SPECIFIC CARD (public/og-blog-maestro.png)
  // ==========================================
  const blogPostCardHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1200px;
      height: 630px;
      background-color: #111110;
      font-family: 'Inter', system-ui, sans-serif;
      color: #f5f3ef;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 56px 64px;
      position: relative;
      overflow: hidden;
    }

    .glow-accent {
      position: absolute;
      top: -120px;
      left: 300px;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(224, 93, 56, 0.16) 0%, rgba(224, 93, 56, 0) 70%);
      pointer-events: none;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      pointer-events: none;
    }

    .frame-border {
      position: absolute;
      inset: 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      pointer-events: none;
    }

    /* Top Bar */
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 26px;
      font-weight: 700;
      font-style: italic;
      color: #ffffff;
    }

    .brand-logo .sans {
      font-style: normal;
      font-family: 'Inter', sans-serif;
      font-weight: 800;
    }

    .brand-logo .dot {
      color: #e05d38;
      font-style: normal;
    }

    .section-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #e05d38;
      background: rgba(224, 93, 56, 0.12);
      border: 1px solid rgba(224, 93, 56, 0.3);
      padding: 4px 14px;
      border-radius: 9999px;
    }

    .read-time {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #9e9a93;
    }

    /* Center Content */
    .center-content {
      position: relative;
      z-index: 2;
      margin-top: 10px;
    }

    .tags-row {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }

    .tag-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: #e05d38;
      background: rgba(224, 93, 56, 0.1);
      border: 1px solid rgba(224, 93, 56, 0.25);
      padding: 4px 12px;
      border-radius: 9999px;
    }

    .article-title {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 46px;
      font-weight: 700;
      line-height: 1.15;
      color: #ffffff;
      letter-spacing: -0.02em;
      max-width: 1020px;
    }

    .article-desc {
      font-size: 18px;
      line-height: 1.55;
      color: #9e9a93;
      margin-top: 16px;
      max-width: 960px;
    }

    .article-desc strong {
      color: #f5f3ef;
      font-weight: 600;
    }

    /* Footer Row */
    .footer-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 20px;
      position: relative;
      z-index: 2;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .author-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #1a1918;
      border: 1.5px solid #e05d38;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Charter', serif;
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }

    .author-name {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
    }

    .author-role {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #9e9a93;
    }

    .site-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #807c75;
    }
  </style>
</head>
<body>
  <div class="glow-accent"></div>
  <div class="grid-bg"></div>
  <div class="frame-border"></div>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="brand-group">
      <div class="brand-logo"><span class="sans">A</span>N<span class="dot">.</span></div>
      <div class="section-pill">&#40; engineering &bull; blog &#41;</div>
    </div>
    <div class="read-time">Sept 1, 2026 &bull; 7 min read</div>
  </div>

  <!-- Article Title & Intro -->
  <div class="center-content">
    <div class="tags-row">
      <span class="tag-badge">#MobileTesting</span>
      <span class="tag-badge">#Maestro</span>
      <span class="tag-badge">#ReactNative</span>
      <span class="tag-badge">#MCP</span>
      <span class="tag-badge">#AI_QA</span>
    </div>
    <h1 class="article-title">
      Why We Chose Maestro Over Appium (And How It Accelerated Our Mobile PRs)
    </h1>
    <p class="article-desc">
      How choosing Maestro over Appium for our modular React Native app eliminated flaky UI tests, cut local execution time, and leveraged <strong>MCP (Model Context Protocol) & AI agents</strong> to make mobile QA effortless.
    </p>
  </div>

  <!-- Footer -->
  <div class="footer-bar">
    <div class="author-info">
      <div class="author-avatar">AN</div>
      <div>
        <div class="author-name">Asif Nawaz</div>
        <div class="author-role">Senior SDET &bull; AI QA Architect</div>
      </div>
    </div>
    <div class="site-tag">anawaz.dev/blog</div>
  </div>
</body>
</html>
  `;

  await page.setContent(blogPostCardHtml, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/og-blog-maestro.png', type: 'png' });
  console.log('✓ Generated public/og-blog-maestro.png');

  // ==========================================
  // 3. BLOG INDEX CARD (public/og-blog.png)
  // ==========================================
  const blogIndexCardHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1200px;
      height: 630px;
      background-color: #111110;
      font-family: 'Inter', system-ui, sans-serif;
      color: #f5f3ef;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 56px 64px;
      position: relative;
      overflow: hidden;
    }

    .glow-accent {
      position: absolute;
      top: -100px;
      right: 0px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(224, 93, 56, 0.18) 0%, rgba(224, 93, 56, 0) 70%);
      pointer-events: none;
    }

    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 85%);
      pointer-events: none;
    }

    .frame-border {
      position: absolute;
      inset: 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      pointer-events: none;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 26px;
      font-weight: 700;
      font-style: italic;
      color: #ffffff;
    }

    .brand-logo .sans {
      font-style: normal;
      font-family: 'Inter', sans-serif;
      font-weight: 800;
    }

    .brand-logo .dot {
      color: #e05d38;
      font-style: normal;
    }

    .domain-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #9e9a93;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4px 12px;
      border-radius: 9999px;
    }

    .center-content {
      position: relative;
      z-index: 2;
      margin-top: 10px;
    }

    .headline {
      font-family: 'Charter', 'Georgia', serif;
      font-size: 54px;
      font-weight: 700;
      line-height: 1.1;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .headline .italic-accent {
      font-style: italic;
      color: #e05d38;
    }

    .sub-lead {
      font-size: 18px;
      line-height: 1.6;
      color: #9e9a93;
      margin-top: 14px;
      max-width: 860px;
    }

    .topics-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
    }

    .topic-card {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 600;
      color: #f5f3ef;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 8px 16px;
      border-radius: 12px;
    }

    .footer-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 18px;
      position: relative;
      z-index: 2;
    }

    .author-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #807c75;
    }

    .site-link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #e05d38;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="glow-accent"></div>
  <div class="grid-bg"></div>
  <div class="frame-border"></div>

  <div class="top-bar">
    <div class="brand-group">
      <div class="brand-logo"><span class="sans">A</span>N<span class="dot">.</span></div>
      <div class="domain-badge">anawaz.dev/blog</div>
    </div>
  </div>

  <div class="center-content">
    <h1 class="headline">
      <span class="italic-accent">Engineering</span> Articles &amp; Technical Breakdowns
    </h1>
    <p class="sub-lead">
      Practical architecture deep-dives on building resilient test automation, scaling CI/CD matrices, and integrating AI into modern quality engineering workflows.
    </p>

    <div class="topics-grid">
      <div class="topic-card">🎭 Playwright &amp; Cypress</div>
      <div class="topic-card">📱 Maestro &amp; Mobile Automation</div>
      <div class="topic-card">🧠 AI Agents &amp; MCP Integration</div>
      <div class="topic-card">⚡ CI/CD Release Gates</div>
      <div class="topic-card">📊 Performance &amp; Scalability</div>
    </div>
  </div>

  <div class="footer-bar">
    <div class="author-note">By Asif Nawaz &bull; Senior SDET &amp; AI QA Architect</div>
    <div class="site-link">anawaz.dev/blog &rarr;</div>
  </div>
</body>
</html>
  `;

  await page.setContent(blogIndexCardHtml, { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/og-blog.png', type: 'png' });
  console.log('✓ Generated public/og-blog.png');

  await browser.close();
}

generateAllOgCards().catch(console.error);
