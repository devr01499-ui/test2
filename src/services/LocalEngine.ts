import { KNOWLEDGE_BASE } from '../knowledgeBase';

export interface LocalResponse {
  text: string;
  navigate: string | null;
}

/**
 * Claritiy AI Self-Reliant Reasoning Engine
 * This engine provides high-level strategic consulting without external API dependencies.
 */
class ReasoningEngine {
  private static instance: ReasoningEngine;
  private context: typeof KNOWLEDGE_BASE;

  private constructor() {
    this.context = KNOWLEDGE_BASE;
    Object.freeze(this.context); // Security: Protect the knowledge base from runtime modification
  }

  public static getInstance(): ReasoningEngine {
    if (!ReasoningEngine.instance) {
      ReasoningEngine.instance = new ReasoningEngine();
    }
    return ReasoningEngine.instance;
  }

  /**
   * Processes user input and returns a strategic response
   * Uses intent classification and keyword scoring
   */
  public async process(input: string): Promise<LocalResponse> {
    const query = input.toLowerCase().trim();
    
    // 1. Intent: Navigation
    if (query.includes('service') || query.includes('what do you do') || query.includes('capabilities')) {
      return {
        text: `Claritiy specializes in ${this.context.services.map(s => s.title).join(', ')}. Our mission is to ${this.context.company.mission}. Would you like to explore a specific service?`,
        navigate: null
      };
    }

    if (query.includes('product') || query.includes('software') || query.includes('tool')) {
      return {
        text: `Our proprietary suite includes ${this.context.products.map(p => p.name).join(', ')}. These are designed as the infrastructure for an AI-first enterprise.`,
        navigate: null
      };
    }

    if (query.includes('contact') || query.includes('book') || query.includes('demo') || query.includes('call') || query.includes('schedule')) {
      return {
        text: `To discuss a tailored AI strategy for your business, I recommend scheduling a consultation. You can reach us at ${this.context.company.contact.email} or book directly here.`,
        navigate: null
      };
    }

    if (query.includes('blog') || query.includes('article') || query.includes('read') || query.includes('insight')) {
      return {
        text: "I've curated our latest strategic insights for you. Navigating to our knowledge hub now.",
        navigate: null
      };
    }

    // 2. Intent: Specific Service Deep Dive
    for (const service of this.context.services) {
      const title = service.title.toLowerCase();
      const id = service.id.toLowerCase();
      if (query.includes(title) || query.includes(id.replace('ai-', ''))) {
        return {
          text: `${service.title}: ${service.description} ${service.deepInsights} We excel because ${service.howWeExcel}`,
          navigate: null
        };
      }
    }

    // 3. Intent: Business Value / ROI
    if (query.includes('roi') || query.includes('value') || query.includes('cost') || query.includes('price') || query.includes('money')) {
      return {
        text: `At Claritiy, we focus on measurable impact. ${this.context.company.roi} Our pricing models are designed to ensure a positive return from the first deployment.`,
        navigate: null
      };
    }

    // 4. Intent: FAQ / Security / Privacy
    if (query.includes('privacy') || query.includes('security') || query.includes('data') || query.includes('safe')) {
      const faq = this.context.faqs.find(f => f.q.toLowerCase().includes('privacy'));
      return {
        text: faq ? faq.a : "Security is our first value. We deploy models in isolated environments to ensure your proprietary data never leaks.",
        navigate: null
      };
    }

    // 5. Intent: Greetings
    if (query.match(/hi|hello|hey|greetings/)) {
      return {
        text: `Greetings. I am your Claritiy Strategic Consultant. How can I help you navigate the AI landscape today?`,
        navigate: null
      };
    }

    // 6. Fallback: Strategic Guidance
    return {
      text: "As your consultant, I recommend exploring our core services in Automation, Voice AI, or Enterprise Transformation to see where we can drive the most immediate value for your organization.",
      navigate: null
    };
  }
}

// Export a protected instance of the engine
export const LocalEngine = ReasoningEngine.getInstance();
