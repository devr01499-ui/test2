import { Service, BlogPost, Product } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Stop wasting time on repetitive tasks. Let AI handle the busy work while your team focuses on strategic growth.',
    description: 'We build intelligent workflows that handle repetitive tasks automatically—from data entry and invoice processing to customer onboarding and report generation. Our AI systems don\'t just follow rules; they learn your business patterns and make smart decisions, helping you operate faster and more efficiently.',
    icon: 'Zap',
    videoUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'Smart Task Management: Analysis -> Automation -> Execution -> Results',
    pros: [
      'Save up to 75% of manual work hours — Free your team from data entry, document processing, and routine approvals',
      'AI that makes intelligent decisions — Our systems analyze context, prioritize tasks, and handle exceptions automatically',
      'Seamless integration with existing tools — Works with your CRM, ERP, accounting software, and custom databases'
    ],
    howWeExcel: 'We don\'t just set up simple automation tools. We build intelligent AI systems that continuously learn from your business operations, adapt to changing patterns, and get smarter over time. This means you stay ahead of competitors who are stuck with static automation that requires constant manual updates.',
    industries: [
      { name: 'Manufacturing', content: 'Automate inventory tracking, supply chain forecasting, and quality control alerts to reduce downtime by 40% and improve yield rates.' },
      { name: 'Healthcare', content: 'Streamline patient onboarding, appointment scheduling, and insurance claim processing securely and efficiently while maintaining HIPAA compliance.' },
      { name: 'Logistics', content: 'Optimize delivery routes in real-time and automate fleet maintenance scheduling, saving thousands in fuel and repair costs annually.' }
    ]
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    tagline: 'Never miss a customer inquiry again. Our AI chatbots provide instant, accurate answers 24/7—like having your best support agent available around the clock.',
    description: 'Smart chatbots that communicate like real people. Powered by advanced natural language AI, our chatbots understand context, handle complex questions, and provide instant, accurate responses. They work on your website, mobile app, WhatsApp, and Facebook Messenger—wherever your customers are.',
    icon: 'MessageSquare',
    videoUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'Smart Chat: Question -> Knowledge Search -> AI Answer -> Happy Customer',
    pros: [
      'Instant answers for every customer query — Respond to hundreds of inquiries simultaneously without delays',
      'Works 24/7 across all channels — Website, mobile app, WhatsApp, Messenger, Slack—we integrate everywhere',
      'Trained on your specific business data — Uses your knowledge base, product catalog, and FAQs for accurate, relevant responses'
    ],
    howWeExcel: 'Our chatbots aren\'t basic FAQ responders. They\'re trained on your company\'s knowledge base, product catalog, and historical conversations to provide accurate, helpful, and genuinely human-like support. They understand context, handle multi-turn conversations, and escalate complex issues to human agents seamlessly—building real trust with your customers.',
    industries: [
      { name: 'E-commerce', content: 'Handle thousands of \'Where Is My Order\' (WISMO) queries instantly, recommend products based on browsing history, and recover abandoned carts with personalized offers—all automatically.' },
      { name: 'Customer Support', content: 'Deflect up to 80% of level-one support tickets automatically, freeing your human agents to focus on complex, high-value customer issues that require empathy and judgment.' },
      { name: 'SaaS', content: 'Guide users through onboarding flows seamlessly inside your application, answer technical documentation questions on the fly, and reduce time-to-value for new customers.' }
    ]
  },
  {
    id: 'ai-voice',
    title: 'AI Voice Agents',
    tagline: 'Scale your phone operations 10x without hiring a single new agent. Our AI voice assistants sound completely human and never miss a call.',
    description: 'AI-powered voice assistants that sound completely human. They handle your customer calls, book appointments, qualify leads, and follow up automatically—all with natural, conversational speech that customers love. No robotic menus, no frustrating hold times.',
    icon: 'Phone',
    videoUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'Voice Assistant: Listening -> Understanding -> Human-like Response',
    pros: [
      'Lightning-fast response times — Answers calls in under 2 seconds, no hold music, no wait times',
      'Indistinguishable from human agents — Natural speech patterns, emotional intelligence, and conversational flow',
      'Automatic CRM updates — Every call logged, transcribed, and synced to your sales pipeline instantly'
    ],
    howWeExcel: 'Our voice AI is built for real, complex conversations—not just scripted responses. It handles interruptions gracefully, understands regional accents, adapts to the caller\'s tone, and asks clarifying questions when needed. This provides a vastly better experience than old-fashioned IVR systems, leading to higher customer satisfaction and conversion rates.',
    industries: [
      { name: 'Real Estate', content: 'Qualify property leads instantly over the phone and automatically book viewings directly into your calendar—no more playing phone tag with prospects.' },
      { name: 'Auto Dealerships', content: 'Follow up with test drive inquiries within seconds and handle routine service booking calls hands-free, letting your sales team focus on closing deals.' },
      { name: 'Clinics & Salons', content: 'Never miss a booking again. Voice agents manage your entire reception desk—handling cancellations, rescheduling, appointment reminders, and FAQs without human intervention.' }
    ]
  },
  {
    id: 'ai-transformation',
    title: 'AI Strategy & Transformation',
    tagline: 'Don\'t gamble on AI. Get a proven roadmap that aligns technology investments with real business outcomes.',
    description: 'A clear, actionable plan to help your business adopt AI strategically. We guide you through technology selection, infrastructure setup, team training, and phased implementation—ensuring your AI investments deliver measurable ROI from day one.',
    icon: 'RefreshCw',
    videoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'AI Roadmap: Business Audit -> Strategy -> Setup -> Success',
    pros: [
      'Complete AI adoption roadmap — Step-by-step plan from quick wins to enterprise-wide transformation',
      'Expert technology recommendations — We\'ve vetted 500+ AI tools so you don\'t waste money on the wrong platforms',
      'Comprehensive team training — Upskill your workforce to work alongside AI effectively and confidently'
    ],
    howWeExcel: 'We don\'t just hand you software recommendations and walk away. We help you rethink your entire business for the AI era—identifying new revenue opportunities, redesigning processes for automation, and building internal AI capabilities that give you a sustainable competitive edge for years to come.',
    industries: [
      { name: 'Enterprise Corporate', content: 'Develop comprehensive, company-wide AI adoption roadmaps with stringent security, compliance, and governance guardrails for Fortune 500 organizations.' },
      { name: 'Finance & Banking', content: 'Strategize the deployment of predictive analytics for fraud detection, credit risk assessment, and portfolio management—safely navigating regulatory requirements.' },
      { name: 'Retail Chains', content: 'Restructure merchandising strategy with AI-driven demand forecasting, dynamic pricing models, and personalized marketing campaigns that increase margins by 15-25%.' }
    ]
  },
  {
    id: 'ai-experts',
    title: 'Hire AI Experts',
    tagline: 'Stop struggling with 6-month hiring cycles. Access elite AI talent in weeks, not months.',
    description: 'Get access to world-class AI talent without the lengthy hiring process. We provide pre-vetted AI engineers, data scientists, and ML researchers who can join your team immediately and start delivering results. Whether you need a single specialist or an entire AI department, we have the talent you need.',
    icon: 'Users',
    videoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'Expert Matching: Sourcing -> Vetting -> Selection -> Onboarding',
    pros: [
      'Access to top-tier AI talent — PhD-level researchers, senior ML engineers, and specialists in LLMs, computer vision, NLP',
      'Build your AI team in weeks, not months — Pre-vetted experts ready to start immediately, no lengthy interview processes',
      'Technical and business expertise combined — Our experts understand both cutting-edge AI and real-world business constraints'
    ],
    howWeExcel: 'We maintain a global network of the world\'s best AI talent—including researchers from top labs, engineers from FAANG companies, and domain specialists across 40+ industries. Our rigorous vetting process ensures you get experts who can lead your most critical AI projects with confidence, not junior developers who need hand-holding.',
    industries: [
      { name: 'Tech Startups', content: 'Scale your engineering team rapidly with pre-vetted AI specialists to hit seed funding milestones faster and build your MVP in weeks instead of months.' },
      { name: 'Research Labs', content: 'Bring in elite PhD-level talent to tackle complex machine learning challenges, fine-tune large language models, and publish cutting-edge research.' },
      { name: 'Agencies', content: 'White-label our AI experts to deliver high-end AI development projects for your enterprise clients without building an internal AI department.' }
    ]
  },
  {
    id: 'ai-jarvis',
    title: 'Custom AI Jarvis',
    tagline: 'What if you had a digital twin who handled everything you hate doing? That\'s your custom AI Jarvis.',
    description: 'A fully customized, personalized AI assistant designed specifically for your daily operations. Your own Jarvis that integrates with your unique software stack, learns your communication style, and automates your specific personal or business tasks—from email management to meeting scheduling to research synthesis.',
    icon: 'Cpu',
    videoUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=75&fm=webp&w=800',
    demoContent: 'Personalized Assistant: Command -> Context Retrieval -> Action Execution',
    pros: [
      'Tailor-made for your specific workflow — Not a generic assistant—built around your exact daily routines and preferences',
      'Integrates with your entire software stack — Email, calendar, CRM, project management, Slack, custom internal tools—all connected',
      'Learns your personal style over time — Adapts to your communication patterns, decision-making preferences, and work habits'
    ],
    howWeExcel: 'We treat your AI Jarvis as a bespoke product, not a configuration of existing software. We map out your exact daily operations, communication patterns, and decision-making processes, then build an AI agent that acts exactly as you would—saving you hours of management time daily and ensuring nothing falls through the cracks.',
    industries: [
      { name: 'Executive Management', content: 'Your Jarvis drafts emails in your exact tone, schedules multi-timezone meetings autonomously, summarizes daily KPI reports, and prepares briefing documents before every call.' },
      { name: 'Software Development Teams', content: 'Automate code reviews, sprint planning summaries, cross-team communication tracking, and technical documentation—all from a single custom terminal interface.' },
      { name: 'Legal & Compliance', content: 'Let your Jarvis instantly scan thousands of contracts for specific clauses, draft initial legal briefs based on case precedent, and trigger compliance alerts for regulatory changes.' }
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'ai-consultancy-2026',
    title: 'Why Your Business Needs an AI Consultancy in 2026',
    excerpt: 'Navigate the complex landscape of AI strategy and implementation with expert guidance to ensure sustainable business growth.',
    content: `
      ## Introduction: The AI Gold Rush
      In 2026, artificial intelligence is no longer a luxury—it's the baseline for survival. However, the gap between "having AI" and "using AI effectively" is widening. This is where an AI consultancy becomes your most valuable partner.

      ## The Strategic Gap
      Many organizations rush into AI implementation without a clear strategy, leading to fragmented systems and wasted resources. An AI consultancy provides:
      - **Strategic Roadmap**: Aligning AI initiatives with core business goals.
      - **Technical Vetting**: Choosing the right models and infrastructure.
      - **Risk Mitigation**: Ensuring data privacy and ethical compliance.

      ## Case Study: From Chaos to Clarity
      We recently helped a mid-sized logistics firm reduce operational overhead by 40% through a structured AI audit and targeted automation deployment.

      ## Conclusion
      Partnering with experts like Claritiy ensures you don't just follow the trend, but lead the revolution.
    `,
    date: 'March 18, 2026',
    author: 'Alex Chen',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maximizing-ai-roi',
    title: 'Maximizing ROI with AI Automation: A Guide for Enterprises',
    excerpt: 'Discover how to identify high-impact processes for AI automation and measure success through clear KPIs and efficiency gains.',
    content: `
      ## Automation vs. Intelligence
      Traditional RPA is about following rules. AI automation is about making decisions. For enterprises, this shift is the key to unlocking massive ROI.

      ## Identifying High-Impact Processes
      Not every task should be automated. We look for:
      - **High Volume**: Repetitive tasks that consume human hours.
      - **Data Rich**: Processes with enough historical data to train models.
      - **Decision Heavy**: Tasks requiring pattern recognition or prediction.

      ## Measuring Success
      ROI isn't just about cost savings. It's about:
      - **Speed to Market**: How much faster can you deliver?
      - **Error Reduction**: Eliminating the "human tax" on data entry.
      - **Employee Satisfaction**: Freeing your team for creative work.

      ## Conclusion
      AI automation is a competitive necessity. Start small, scale fast, and measure everything.
    `,
    date: 'March 16, 2026',
    author: 'Sarah Miller',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'evolution-of-chatbots',
    title: 'Beyond Basic Support: The Evolution of AI Chatbots',
    excerpt: 'How generative AI is transforming chatbots from simple FAQ responders into powerful lead generation and sales tools.',
    content: `
      ## The Death of the Scripted Bot
      The era of "Press 1 for Support" is over. Modern AI chatbots are conversational, empathetic, and highly capable of complex problem-solving.

      ## Personalization at Scale
      By integrating with your CRM, AI chatbots can provide tailored recommendations based on a user's history, significantly increasing conversion rates.

      ## Lead Generation Powerhouse
      A chatbot isn't just a support tool; it's a 24/7 sales agent. It qualifies leads, books meetings, and handles objections in real-time.

      ## Conclusion
      If your chatbot isn't contributing to your bottom line, it's time for an upgrade to Claritiy's conversational AI.
    `,
    date: 'March 14, 2026',
    author: 'David Park',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-voice-agents-sales',
    title: 'The Rise of AI Voice Agents: Transforming Outbound Sales',
    excerpt: 'Explore the technology behind natural-sounding AI voice agents and how they are scaling sales teams without increasing headcount.',
    content: `
      ## The Sound of Success
      Voice AI has reached a tipping point where it is indistinguishable from human speech. For outbound sales, this is a game-changer.

      ## Scaling Without Headcount
      Imagine a sales team that can make 10,000 calls simultaneously, never gets tired, and follows every script perfectly while adapting to the prospect's tone.

      ## Compliance and Ethics
      Navigating the legal landscape of AI calling is complex. We build agents that are fully compliant with global regulations while maintaining high performance.

      ## Conclusion
      Voice is the most natural interface. AI voice agents allow you to own that interface at scale.
    `,
    date: 'March 12, 2026',
    author: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-business-transformation',
    title: 'The Roadmap to Complete AI Business Transformation',
    excerpt: 'A step-by-step guide to overhauling your business infrastructure for an AI-first era, from data foundations to culture.',
    content: `
      ## Transformation is a Journey
      AI transformation isn't a single software purchase; it's a fundamental shift in how your business operates.

      ## Phase 1: The Data Foundation
      AI is only as good as your data. We start by cleaning, structuring, and centralizing your data assets.

      ## Phase 2: Cultural Alignment
      Your team needs to see AI as a co-pilot, not a replacement. Upskilling and change management are critical.

      ## Phase 3: Iterative Deployment
      We start with high-impact pilots, prove the value, and then scale across departments.

      ## Conclusion
      The future belongs to the AI-native. Start your transformation today.
    `,
    date: 'March 10, 2026',
    author: 'Alex Chen',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hiring-ai-experts',
    title: 'How to Hire the Right Remote AI Experts for Your Team',
    excerpt: 'Navigate the global AI talent shortage by learning how to vet, hire, and manage elite remote AI engineers and consultants.',
    content: `
      ## The Talent War
      The demand for AI expertise far outstrips the supply. Finding the right talent requires a global perspective and a rigorous vetting process.

      ## What to Look For
      - **Mathematical Rigor**: Beyond just using libraries, do they understand the underlying logic?
      - **Domain Expertise**: Have they solved problems in your specific industry?
      - **Communication**: Can they explain complex AI concepts to non-technical stakeholders?

      ## The Claritiy Advantage
      We maintain a pre-vetted pool of elite AI experts, allowing you to bypass the 6-month hiring cycle and start building immediately.

      ## Conclusion
      Don't let a lack of talent stall your innovation. Hire the experts who have already done it.
    `,
    date: 'March 8, 2026',
    author: 'Sarah Miller',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Claritiy Core',
    description: 'Our all-in-one AI platform for your business. It helps you manage all your AI tools and data in one secure place.',
    price: 'Enterprise Quote',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=75&fm=webp&w=800'
  },
  {
    id: 'p2',
    name: 'VoiceFlow Pro',
    description: 'The best system for AI voice calls. It handles thousands of calls at once with perfect clarity and no delays.',
    price: 'Enterprise Quote',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=75&fm=webp&w=800'
  },
  {
    id: 'p3',
    name: 'Custom AI CRM',
    description: 'A smart sales platform that helps you find and close more deals. It uses AI to predict what your customers need before they even ask.',
    price: 'Enterprise Quote',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&fm=webp&w=800'
  }
];
