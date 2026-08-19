// Artfully Studio - Chatbot Knowledge Base
// Comprehensive FAQ with intent-based responses

export interface Intent {
  id: string;
  category: string;
  question: string;
  triggers: string[];
  answer: string;
  quickReply: string;
  quickActions?: string[];
}

export const knowledgeBase: Intent[] = [
  // 1. Studio Overview, Location & Operating Hours
  {
    id: "intent.studio.about",
    category: "Studio Overview",
    question: "What is Artfully?",
    triggers: [
      "what is artfully",
      "tell me about your studio",
      "who are you",
      "studio concept",
      "what do you do",
      "about artfully",
      "about studio",
      "your studio"
    ],
    answer: "Artfully is a premier creative space and art studio in Salem, Tamil Nadu. We specialize in empowering artistic expression across all age groups through structured foundation programs for children, guided adult learning sessions, casual walk-in art activities, and immersive weekend masterclass workshops.",
    quickReply: "Artfully is a creative art studio in Salem offering kids' foundation courses, adult classes, walk-in art sessions, and weekend workshops for all skill levels! 🎨"
  },
  {
    id: "intent.studio.location",
    category: "Studio Overview",
    question: "Where is the studio located?",
    triggers: [
      "address",
      "location",
      "where are you",
      "where is studio",
      "situated",
      "how to reach",
      "directions",
      "landmark",
      "map",
      "where located",
      "find you"
    ],
    answer: "Our physical studio is located in Salem, Tamil Nadu. We are conveniently accessible from major commercial hubs in the city. You can search 'Artfully Studio Salem' on Google Maps for direct turn-by-turn navigation.",
    quickReply: "We are in Salem, Tamil Nadu! Search 'Artfully Studio' on Google Maps to find us. 📍"
  },
  {
    id: "intent.studio.hours",
    category: "Studio Overview",
    question: "What are your operating hours?",
    triggers: [
      "working hours",
      "open timing",
      "closing time",
      "weekend hours",
      "is studio open",
      "opening times",
      "when open",
      "hours",
      "timings",
      "schedule"
    ],
    answer: "Artfully is open Wednesday through Monday. Our standard operating hours are 10:00 AM to 7:00 PM. We are closed on Tuesdays for regular studio maintenance and deep art material inventory setup. Special weekend workshops may run past standard hours with pre-registration.",
    quickReply: "Open Wednesday–Monday: 10:00 AM to 7:00 PM. Closed on Tuesdays. ⏰"
  },
  {
    id: "intent.studio.contact",
    category: "Studio Overview",
    question: "How can I contact the studio?",
    triggers: [
      "phone number",
      "email",
      "contact details",
      "talk to human",
      "customer support",
      "whatsapp contact",
      "reach you",
      "call you",
      "message"
    ],
    answer: "You can reach our studio front team directly via phone or WhatsApp at +91 73589 82333 during studio working hours (10:00 AM – 7:00 PM, Wed–Mon). You can also email us at hello@artfully.in or message us on Instagram @Artfully.",
    quickReply: "Call/WhatsApp us at +91 73589 82333 (Wed–Mon, 10am–7pm) or email hello@artfully.in! 📞"
  },
  {
    id: "intent.studio.parking",
    category: "Studio Overview",
    question: "Is parking available?",
    triggers: [
      "car parking",
      "bike parking",
      "where to park",
      "vehicle space",
      "parking available",
      "two wheeler parking"
    ],
    answer: "Yes! We have dedicated parking spaces for two-wheelers directly in front of the studio and accessible street parking available for cars nearby.",
    quickReply: "Yes, dedicated bike parking and nearby car parking are available at our studio. 🚗"
  },

  // 2. Art Mediums, Disciplines & Programs
  {
    id: "intent.mediums.list",
    category: "Art Mediums",
    question: "What art mediums do you teach?",
    triggers: [
      "mediums offered",
      "what art forms",
      "art styles",
      "painting types",
      "list of classes",
      "what can i learn",
      "art techniques",
      "types of art"
    ],
    answer: "We teach a vibrant range of fine art and craft mediums:\n\n• Watercolor Painting: Wash techniques, blending, and transparent layering\n• Acrylic Painting: Canvas work, color mixing, and brush technique\n• Texture Art & Impasto: Palette knife techniques and dimensional pastes\n• Islamic Geometry: Geometric compass construction and intricate pattern rendering\n• Decoupage: Surface transformation using napkins, papers, and specialized sealants\n• Mandala & Zentangle: Pattern meditation, symmetry, and detailed fine-line drawing\n• Pottery & Clay Modeling: Hand-building, slab work, and tactile sculpting",
    quickReply: "We offer Watercolor, Acrylics, Texture Art, Islamic Geometry, Decoupage, Mandala/Zentangle, and Pottery! 🎨"
  },
  {
    id: "intent.program.kids",
    category: "Programs",
    question: "Do you offer art programs for children?",
    triggers: [
      "kids foundation",
      "art for children",
      "kids class",
      "age for kids",
      "junior drawing program",
      "child classes",
      "children program",
      "kids art"
    ],
    answer: "Yes! Our Kids Art Foundation Program is designed to cultivate creativity, spatial reasoning, color understanding, and fine motor skills in children. Lessons are structured step-by-step in a fun, safe, and highly encouraging studio environment led by experienced instructors.",
    quickReply: "Yes! We run structured Art Foundation Programs for children, building core skills step-by-step in a safe, encouraging space. 👶🎨"
  },
  {
    id: "intent.program.adults",
    category: "Programs",
    question: "Are there classes for adults?",
    triggers: [
      "adult art class",
      "classes for adults",
      "beginners adult",
      "stress buster art",
      "hobby classes adults",
      "adult learning",
      "grown up classes"
    ],
    answer: "Absolutely! Our adult classes cater to all experience levels—from complete beginners looking for a creative outlet or stress-relief activity, to intermediate artists wanting to master specialized techniques like Islamic geometry, texture art, or acrylic painting.",
    quickReply: "Yes! We have adult classes for all skill levels—perfect whether you're trying art for the first time or expanding existing skills. 🖌️"
  },
  {
    id: "intent.program.walkin",
    category: "Programs",
    question: "How do walk-in sessions work?",
    triggers: [
      "walk in",
      "drop in session",
      "casual art",
      "quick painting",
      "pay per visit",
      "walkin art",
      "walk-in",
      "spontaneous"
    ],
    answer: "Walk-in sessions allow you to drop into the studio during working hours, select a canvas, ceramic, or paper medium from our menu, and enjoy creative painting at your own pace! We provide all paints, brushes, aprons, and guidance. Perfect for spontaneous weekend outings or casual creative breaks.",
    quickReply: "Drop in anytime during open hours! Pick an art activity, get full access to supplies and guidance, and create at your own pace. 🚶‍♀️"
  },
  {
    id: "intent.program.workshops",
    category: "Programs",
    question: "What are weekend masterclass workshops?",
    triggers: [
      "weekend workshop",
      "masterclass",
      "special workshop",
      "sunday workshop",
      "upcoming workshops",
      "saturday workshop"
    ],
    answer: "Our weekend workshops are intensive 2 to 4-hour immersive sessions focused on a specific art style (such as Pottery Hand-building, Texture Art, or Islamic Geometry). You complete a finished, high-quality masterpiece to take home in a single session. All premium materials are included.",
    quickReply: "Weekend workshops are focused 2–4 hr sessions on specialized art forms where you complete a finished artwork in one day! 🎭"
  },

  // 3. Materials, Prerequisites & Studio Rules
  {
    id: "intent.prereq.experience",
    category: "Prerequisites",
    question: "Do I need prior experience?",
    triggers: [
      "no experience",
      "can't draw",
      "beginner friendly",
      "need experience",
      "never painted",
      "first time",
      "beginner"
    ],
    answer: "No prior experience is required at all! Over 80% of our adult students and workshop attendees are absolute beginners. Our instructors break down every single artwork into simple, manageable visual steps so everyone leaves with a piece they are proud of.",
    quickReply: "None needed! All our sessions are 100% beginner-friendly with step-by-step guidance from our teachers. ✨"
  },
  {
    id: "intent.supplies.provided",
    category: "Materials",
    question: "Do I need to bring supplies?",
    triggers: [
      "bring paints",
      "buy materials",
      "provide canvas",
      "what to bring",
      "art kit needed",
      "materials provided",
      "supplies included"
    ],
    answer: "No, you don't need to bring anything! We provide all professional-grade materials—including canvases, artist-grade paints, brushes, clay, tools, easels, and aprons. If you prefer to bring your own specialized personal tools, you are welcome to do so, but it is not required.",
    quickReply: "Everything is provided! All paints, canvases, brushes, and tools are included in your session fee. 🎨"
  },
  {
    id: "intent.clothing.attire",
    category: "Studio Rules",
    question: "What should I wear?",
    triggers: [
      "dress code",
      "what to wear",
      "stain paints",
      "aprons provided",
      "clothing advice",
      "attire"
    ],
    answer: "We recommend wearing comfortable, casual clothing. While we provide protective studio aprons, paints like acrylics and ceramic glazes can sometimes stain fabrics. Please dress in clothes you wouldn't mind getting a tiny speck of paint on!",
    quickReply: "Wear comfortable casual clothes. We provide aprons, but acrylic paints can stain, so dress casually! 👕"
  },
  {
    id: "intent.artwork.pickup",
    category: "Studio Rules",
    question: "Can I take my artwork home immediately?",
    triggers: [
      "take artwork home",
      "drying time",
      "when to collect",
      "pottery drying",
      "pick up painting",
      "take home"
    ],
    answer: "For acrylic, watercolor, and craft sessions, you can take your artwork home the same day (we have drying stations on-site!). For textured art with thick impasto layers or pottery/clay creations requiring air drying or curing, we safely store your piece and invite you to collect it after 24–48 hours.",
    quickReply: "Canvas and paint pieces can go home same day! Textured/clay works can be collected in 24–48 hours after full drying. 🖼️"
  },

  // 4. Registration, Pricing & Payment Policies
  {
    id: "intent.booking.how",
    category: "Registration",
    question: "How do I register or book?",
    triggers: [
      "how to register",
      "book seat",
      "reserve spot",
      "workshop registration",
      "enroll now",
      "sign up",
      "join"
    ],
    answer: "You can book directly through our official website, by calling us at +91 73589 82333, or by sending us a message on WhatsApp. Early registration is recommended for weekend workshops as seat capacity is strictly limited for individual attention.",
    quickReply: "Book online at our website or send us a WhatsApp message at +91 73589 82333 to reserve your seat! 📝"
  },
  {
    id: "intent.pricing.general",
    category: "Pricing",
    question: "How much do classes cost?",
    triggers: [
      "price",
      "fees",
      "cost",
      "pricing list",
      "rate card",
      "how much",
      "workshop cost",
      "course fee"
    ],
    answer: "Our pricing varies by program type:\n\n• Walk-in Sessions: Starting from affordable rates depending on canvas size and medium chosen\n• Weekend Masterclasses: Per seat (inclusive of all take-home materials & refreshments)\n• Kids / Adult Regular Courses: Monthly packages available\n\nFor exact pricing details, please contact us via WhatsApp at +91 73589 82333 or email hello@artfully.in.",
    quickReply: "Walk-ins, Weekend Masterclasses, and Monthly courses available at competitive rates. Contact us for detailed pricing! 💰"
  },
  {
    id: "intent.payment.methods",
    category: "Payment",
    question: "What payment options do you accept?",
    triggers: [
      "payment methods",
      "upi",
      "google pay",
      "gpay",
      "phonepe",
      "cash",
      "card",
      "net banking",
      "how to pay"
    ],
    answer: "We accept all major payment modes, including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, Cash, and Direct Bank Transfers. Online registration links support instant UPI and card checkout.",
    quickReply: "We accept GPay, PhonePe, UPI, Credit/Debit Cards, and Cash! 💳"
  },
  {
    id: "intent.policy.cancellation",
    category: "Policies",
    question: "What is your cancellation policy?",
    triggers: [
      "refund policy",
      "cancel booking",
      "missed class",
      "reschedule",
      "money back",
      "sick leave",
      "cancellation"
    ],
    answer: "• Weekend Workshops: Cancellations made at least 48 hours in advance are eligible for a full credit transfer to a future workshop. Cancellations within 48 hours are non-refundable but transferable to a friend.\n\n• Monthly Foundation Classes: If you miss a scheduled regular class, we offer up to 2 makeup sessions per month subject to seat availability.",
    quickReply: "Workshop cancellations 48 hours prior get a credit transfer for future events! Regular class misses can be made up (up to 2/month). 🔄"
  },

  // 5. Private Events, Corporate & Custom Sessions
  {
    id: "intent.event.birthday",
    category: "Events",
    question: "Can I host a birthday party?",
    triggers: [
      "birthday party",
      "private event",
      "venue hire",
      "art party",
      "kids birthday",
      "private studio booking",
      "celebration"
    ],
    answer: "Yes! We host custom creative birthday parties, private group painting parties, and family gatherings. We handle the art theme setup, artist-guided activities, and craft stations so your guests take home their own custom artwork. Contact our team to request custom event packages and menus.",
    quickReply: "Yes! We host private art parties and birthdays. Message us to plan your custom group theme! 🎉"
  },
  {
    id: "intent.event.corporate",
    category: "Events",
    question: "Do you conduct corporate events?",
    triggers: [
      "corporate event",
      "team building",
      "company workshop",
      "offsite art",
      "corporate wellness",
      "office event"
    ],
    answer: "Yes, we design hands-on creative team-building activities, collaborative mural creation workshops, and stress-busting art sessions for companies and organizations. We can host your team at our studio or conduct the session directly at your corporate venue in or around Salem.",
    quickReply: "Yes, we offer studio and on-site corporate art sessions for team building and wellness. Contact us for custom quotes! 💼"
  },
  {
    id: "intent.event.custom_gift",
    category: "Events",
    question: "Do you offer gift vouchers?",
    triggers: [
      "gift voucher",
      "gift card",
      "present",
      "buy experience",
      "gift art class",
      "gift certificate"
    ],
    answer: "Yes! Artfully gift vouchers are available in any amount and can be redeemed for any of our regular classes, weekend workshops, or walk-in sessions. They make thoughtful, memorable gifts for birthdays, anniversaries, and holidays.",
    quickReply: "Yes! Give the gift of creativity with an Artfully Gift Voucher. Available for any amount at the studio or online. 🎁"
  },

  // 6. System Intents
  {
    id: "intent.system.greeting",
    category: "System",
    question: "Welcome Greeting",
    triggers: [
      "hi",
      "hello",
      "hey",
      "start",
      "good morning",
      "good evening",
      "vanakkam",
      "namaste"
    ],
    answer: "Hello and welcome to Artfully! 🎨 I am your automated assistant. How can I help you today?\n\nYou can ask me about:\n• 🎨 Art mediums & classes (Watercolor, Acrylics, Texture, Geometry, Pottery)\n• 🗓️ Weekend masterclass schedules\n• 🖌️ Walk-in painting sessions\n• 📍 Location & studio hours in Salem\n\nWe're open Wednesday–Monday, 10 AM–7 PM (Closed Tuesdays)",
    quickReply: "Welcome to Artfully! 🎨 How can I help you today? Ask about classes, workshops, walk-ins, or studio location!",
    quickActions: ["Classes", "Workshops", "Walk-In", "Contact"]
  },
  {
    id: "intent.system.human_handoff",
    category: "System",
    question: "Talk to a human",
    triggers: [
      "speak to human",
      "talk to person",
      "manager",
      "call me back",
      "representative",
      "agent",
      "real person"
    ],
    answer: "I am transferring your conversation to our studio coordination team. Please leave your name, phone number, and a short message regarding your inquiry, and a team member will reply shortly!\n\n📞 Call/WhatsApp: +91 73589 82333 (Wed–Mon, 10 AM – 7 PM)\n📧 Email: hello@artfully.in",
    quickReply: "Transferring you to our studio coordinator! Please drop your name and question, and we will get back to you shortly. 👋"
  },
  {
    id: "intent.system.thanks",
    category: "System",
    question: "Thank you",
    triggers: [
      "thank",
      "thanks",
      "appreciate",
      "helpful"
    ],
    answer: "You're very welcome! 😊 Feel free to ask me anything else about our studio, classes, or workshops. I'm here to help make your creative journey amazing!",
    quickReply: "Happy to help! Feel free to ask anything else about Artfully! 🎨"
  },
  {
    id: "intent.system.goodbye",
    category: "System",
    question: "Goodbye",
    triggers: [
      "bye",
      "goodbye",
      "see you",
      "later"
    ],
    answer: "Goodbye! 👋 Thanks for chatting with me. Can't wait to see you create something amazing at Artfully Studio! Feel free to come back anytime!",
    quickReply: "See you at the studio! Happy creating! 🎨✨"
  }
];

// Keyword matching function with scoring
export function findBestIntent(userMessage: string): Intent | null {
  const message = userMessage.toLowerCase().trim();
  
  // Skip very short messages
  if (message.length < 2) return null;

  let bestMatch: { intent: Intent; score: number } | null = null;

  for (const intent of knowledgeBase) {
    let score = 0;
    let matchedTriggers = 0;

    for (const trigger of intent.triggers) {
      const triggerWords = trigger.toLowerCase().split(" ");
      const messageWords = message.split(" ");

      // Exact phrase match (highest score)
      if (message.includes(trigger.toLowerCase())) {
        score += 10;
        matchedTriggers++;
      }
      // Partial word matches
      else {
        let wordMatches = 0;
        for (const triggerWord of triggerWords) {
          for (const messageWord of messageWords) {
            if (messageWord.includes(triggerWord) || triggerWord.includes(messageWord)) {
              wordMatches++;
            }
          }
        }
        // Score based on percentage of trigger words matched
        if (wordMatches > 0) {
          score += (wordMatches / triggerWords.length) * 5;
          matchedTriggers++;
        }
      }
    }

    // Update best match if this intent scores higher
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { intent, score };
    }
  }

  // Return the best match if it meets minimum threshold
  return bestMatch && bestMatch.score >= 2 ? bestMatch.intent : null;
}

// Fallback response
export const fallbackResponse: Intent = {
  id: "intent.system.fallback",
  category: "System",
  question: "Default Fallback",
  triggers: [],
  answer: "I'm sorry, I didn't quite catch that. Could you try rephrasing your question?\n\nI can help you with:\n\n1️⃣ Art Classes & Programs (Kids, Adults, Walk-in)\n2️⃣ Weekend Workshops & Masterclasses\n3️⃣ Studio Location & Hours in Salem\n4️⃣ Pricing & Registration\n5️⃣ Birthday Parties & Corporate Events\n6️⃣ Contact Information\n\nWhat would you like to know?",
  quickReply: "I didn't catch that! Would you like to check our workshop schedule, studio address, or speak to a staff member?",
  quickActions: ["Classes", "Workshops", "Location", "Contact"]
};
