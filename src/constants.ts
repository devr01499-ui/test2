import { Service, BlogPost, Product } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'We build smart workflows that handle repetitive tasks automatically. Our AI systems help your business run faster and more efficiently by taking over manual processes.',
    icon: 'Zap',
    videoUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    demoContent: 'Smart Task Management: Analysis -> Automation -> Execution -> Results',
    pros: [
      'Save up to 75% of your time',
      'AI that makes smart decisions for you',
      'Works perfectly with your existing tools'
    ],
    howWeExcel: 'We don\'t just set up simple tools. We build smart AI systems that learn your business and get better over time, making sure you always stay ahead of the competition.'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Smart chatbots that talk to your customers like a real person. We use advanced AI to provide instant, accurate answers and help you close more sales 24/7.',
    icon: 'MessageSquare',
    videoUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200',
    demoContent: 'Smart Chat: Question -> Knowledge Search -> AI Answer -> Happy Customer',
    pros: [
      'Instant answers for every customer',
      'Works on your website 24/7',
      'Trained on your specific business data'
    ],
    howWeExcel: 'Our chatbots aren\'t just basic responders. They are trained on your company\'s knowledge to provide accurate, helpful, and human-like support that builds real trust with your customers.'
  },
  {
    id: 'ai-voice',
    title: 'AI Voice Agents',
    description: 'AI-powered voice assistants that sound completely human. They can handle your customer calls, book appointments, and follow up with leads automatically.',
    icon: 'Phone',
    videoUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200',
    demoContent: 'Voice Assistant: Listening -> Understanding -> Human-like Response',
    pros: [
      'Super fast response times',
      'Sounds like a real person',
      'Automatically updates your CRM'
    ],
    howWeExcel: 'Our voice AI is built for real conversations. It can handle interruptions and complex questions naturally, providing a much better experience than old-fashioned phone systems.'
  },
  {
    id: 'ai-transformation',
    title: 'AI Strategy',
    description: 'A clear plan to help your business adopt AI. We guide you through the process of choosing the right tools and setting up the infrastructure you need to grow.',
    icon: 'RefreshCw',
    videoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    demoContent: 'AI Roadmap: Business Audit -> Strategy -> Setup -> Success',
    pros: [
      'A complete plan for your AI journey',
      'Expert advice on the best AI tools',
      'Training for your whole team'
    ],
    howWeExcel: 'We don\'t just give you software; we give you a competitive edge. We help you rethink your business for the AI era, making sure you\'re ready for the future.'
  },
  {
    id: 'ai-experts',
    title: 'Hire AI Experts',
    description: 'Get access to top AI talent without the long hiring process. We provide pre-vetted experts who can help you build and scale your AI projects quickly.',
    icon: 'Users',
    videoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    demoContent: 'Expert Matching: Sourcing -> Vetting -> Selection -> Onboarding',
    pros: [
      'Access to top-tier AI researchers',
      'Build your AI team in weeks, not months',
      'Experts who understand both tech and business'
    ],
    howWeExcel: 'We have a deep network of the world\'s best AI talent. We find the people who can lead your most important projects and help you scale your business with confidence.'
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
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p2',
    name: 'VoiceFlow Pro',
    description: 'The best system for AI voice calls. It handles thousands of calls at once with perfect clarity and no delays.',
    price: 'Enterprise Quote',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p3',
    name: 'Custom AI CRM',
    description: 'A smart sales platform that helps you find and close more deals. It uses AI to predict what your customers need before they even ask.',
    price: 'Enterprise Quote',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
  }
];
