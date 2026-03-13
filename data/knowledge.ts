import { KnowledgeEntry } from "@/types/chat";

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    topic: "newborn-feeding",
    label: "Newborn Feeding",
    summary:
      "In the first weeks, frequent feeds are common. Many newborns feed 8 to 12 times in 24 hours.",
    reassurance:
      "Cluster feeding and short intervals can be normal in early development.",
    home_care_tips: [
      "Track wet and dirty diapers to monitor intake.",
      "Feed on early hunger cues: rooting, hand-to-mouth, stirring.",
      "Use skin-to-skin to support feeding and calming."
    ],
    red_flags: [
      "Fewer wet diapers than expected for age.",
      "Very sleepy baby who cannot stay awake to feed.",
      "Persistent vomiting or poor weight gain."
    ],
    provider_follow_up: [
      "If feeding pain is persistent.",
      "If latch or transfer feels ineffective.",
      "If diaper output drops suddenly."
    ],
    emergency_escalation:
      "If your baby is difficult to wake, not feeding, or looks floppy or blue, seek urgent care now.",
    suggested_questions: [
      "How many wet diapers should I expect this week?",
      "How can I tell if milk transfer is enough?",
      "When is spit-up not normal?"
    ]
  },
  {
    topic: "newborn-sleep",
    label: "Newborn Sleep",
    summary:
      "Newborn sleep is often fragmented, with short stretches and frequent waking for feeds.",
    reassurance:
      "Short sleep cycles are very common in week one to eight.",
    home_care_tips: [
      "Use daytime light exposure and calm nighttime routines.",
      "Follow safe sleep: back to sleep, firm surface, no loose bedding.",
      "Try soothing cycles: feed, burp, swaddle, rock, and settle."
    ],
    red_flags: [
      "Hard to wake for feeds repeatedly.",
      "Breathing pauses with color change.",
      "Persistent inconsolable crying with fever."
    ],
    provider_follow_up: [
      "If sleep patterns suddenly change with poor feeding.",
      "If reflux, cough, or breathing concerns appear."
    ],
    emergency_escalation:
      "Call emergency services for breathing difficulty, blue lips, or unresponsiveness.",
    suggested_questions: [
      "How long should newborn sleep stretches be?",
      "What are safe swaddling guidelines?",
      "When should I worry about overtiredness?"
    ]
  },
  {
    topic: "newborn-fever",
    label: "Newborn Fever",
    summary:
      "For babies under 3 months, fever can be serious and should be evaluated promptly.",
    reassurance:
      "Many causes are treatable, and early evaluation helps protect your baby.",
    home_care_tips: [
      "Use a rectal thermometer for infants when possible.",
      "Keep your baby lightly dressed and monitor behavior.",
      "Offer feeds frequently to support hydration."
    ],
    red_flags: [
      "Temperature of 100.4 F (38 C) or higher under 3 months.",
      "Poor feeding, lethargy, persistent vomiting.",
      "Breathing difficulty, bluish lips, or seizure."
    ],
    provider_follow_up: [
      "Call pediatric care team immediately for fever under 3 months."
    ],
    emergency_escalation:
      "If fever is paired with breathing trouble, seizure, blue color, or reduced responsiveness, seek emergency care now.",
    suggested_questions: [
      "What temperature counts as fever by age?",
      "What symptoms mean urgent care now?",
      "How should I monitor hydration?"
    ]
  },
  {
    topic: "postpartum-bleeding",
    label: "Postpartum Bleeding",
    summary:
      "Postpartum bleeding often tapers over several weeks, but flow pattern and associated symptoms matter.",
    reassurance:
      "Light to moderate bleeding can be normal in the early postpartum period.",
    home_care_tips: [
      "Track pad usage and clot size.",
      "Rest, hydrate, and avoid overexertion during heavier flow days.",
      "Report any abrupt increase after initial improvement."
    ],
    red_flags: [
      "Soaking a pad in an hour or less.",
      "Passing clots larger than a golf ball.",
      "Dizziness, faintness, rapid heartbeat, or severe pain."
    ],
    provider_follow_up: [
      "Call your obstetric provider the same day for concerning changes."
    ],
    emergency_escalation:
      "For heavy bleeding with dizziness, shortness of breath, or large clots, seek urgent emergency care now.",
    suggested_questions: [
      "How long does postpartum bleeding usually last?",
      "What clot size is concerning?",
      "When should I call labor and delivery triage?"
    ]
  },
  {
    topic: "breastfeeding-pain",
    label: "Breastfeeding Pain",
    summary:
      "Mild early nipple tenderness can happen, but severe or persistent pain should be assessed.",
    reassurance:
      "Many latch-related pain issues improve with positioning support.",
    home_care_tips: [
      "Reposition for deeper latch and chin-leading attachment.",
      "Break suction gently and relatch if pain stays sharp.",
      "Use expressed milk or nipple-safe emollient after feeding."
    ],
    red_flags: [
      "Cracked bleeding nipples with worsening pain.",
      "Fever, breast redness, or flu-like symptoms.",
      "Baby unable to latch or poor transfer signs."
    ],
    provider_follow_up: [
      "Contact lactation support or your clinician in the next 24 hours if pain is severe."
    ],
    emergency_escalation:
      "If you have high fever with severe breast pain and feel acutely unwell, seek urgent care.",
    suggested_questions: [
      "How do I improve latch depth?",
      "Could this be mastitis?",
      "When should I pump instead of direct feed?"
    ]
  },
  {
    topic: "postpartum-anxiety",
    label: "Postpartum Anxiety",
    summary:
      "Persistent worry, racing thoughts, or panic can occur postpartum and deserve support.",
    reassurance:
      "You are not alone. Postpartum anxiety is common and treatable.",
    home_care_tips: [
      "Use brief grounding: slow exhale and shoulder release.",
      "Take sleep support where possible with family help.",
      "Reduce information overload and focus on one plan at a time."
    ],
    red_flags: [
      "Intrusive thoughts involving harm.",
      "Panic episodes that impair care routines.",
      "Severe insomnia and inability to function."
    ],
    provider_follow_up: [
      "Contact your OB/midwife or primary care clinician within 24 to 48 hours."
    ],
    emergency_escalation:
      "If you have thoughts of harming yourself or baby, seek emergency help now and do not stay alone.",
    suggested_questions: [
      "How do I know if this is anxiety vs normal worry?",
      "What treatment options are available postpartum?",
      "How should I ask my partner for support?"
    ]
  },
  {
    topic: "postpartum-depression",
    label: "Postpartum Depression",
    summary:
      "Low mood, hopelessness, or persistent tearfulness beyond typical adjustment may indicate postpartum depression.",
    reassurance:
      "This is a medical condition, not a personal failure, and treatment helps.",
    home_care_tips: [
      "Share symptoms with a trusted person today.",
      "Keep routines simple: hydration, meals, brief daylight exposure.",
      "Use check-ins with your support network."
    ],
    red_flags: [
      "Thoughts of self-harm or harming baby.",
      "Feeling unable to care for yourself or baby.",
      "Profound hopelessness with worsening daily function."
    ],
    provider_follow_up: [
      "Call your clinician promptly for screening and treatment planning."
    ],
    emergency_escalation:
      "If there is immediate safety concern or self-harm thoughts, call emergency services now.",
    suggested_questions: [
      "What symptoms mean I should seek urgent help?",
      "What therapies are safe postpartum?",
      "How can family help in practical ways?"
    ]
  },
  {
    topic: "maternal-mood",
    label: "Maternal Mood Changes",
    summary:
      "Mood shifts are common early postpartum, but persistent distress should be assessed and supported.",
    reassurance:
      "Emotional fluctuations are common, and support can make a real difference quickly.",
    home_care_tips: [
      "Use small daily check-ins on sleep, appetite, and energy.",
      "Ask one support person for a concrete daily task.",
      "Limit pressure to do everything perfectly."
    ],
    red_flags: [
      "Persistent sadness most of the day.",
      "Severe anxiety that disrupts care or sleep.",
      "Thoughts of self-harm or harm to baby."
    ],
    provider_follow_up: [
      "Contact your clinician this week for a postpartum mood screen."
    ],
    emergency_escalation:
      "If safety concerns arise, seek emergency services now and avoid staying alone.",
    suggested_questions: [
      "What mood changes are common in the first month?",
      "How do I ask for mental health support?",
      "What if symptoms are worsening quickly?"
    ]
  },
  {
    topic: "jaundice",
    label: "Newborn Jaundice",
    summary:
      "Mild jaundice can be common in newborns, but progression and feeding patterns must be monitored.",
    reassurance:
      "Many cases improve with close follow-up and feeding support.",
    home_care_tips: [
      "Monitor feeding frequency and diaper output carefully.",
      "Keep scheduled bilirubin follow-up visits.",
      "Watch for yellowing spreading to legs or increasing sleepiness."
    ],
    red_flags: [
      "Very sleepy baby with poor feeding.",
      "Rapidly deepening yellow color.",
      "High-pitched cry, limpness, or difficult arousal."
    ],
    provider_follow_up: [
      "Contact your pediatric team same day for worsening jaundice signs."
    ],
    emergency_escalation:
      "If baby is very hard to wake, feeding poorly, or looks unwell, seek urgent care now.",
    suggested_questions: [
      "How do I monitor jaundice at home safely?",
      "When is bilirubin testing needed again?",
      "What feeding steps support recovery?"
    ]
  },
  {
    topic: "diapering",
    label: "Diaper Output",
    summary:
      "Diaper patterns help assess hydration and feeding adequacy in early infancy.",
    reassurance:
      "Changes can happen day to day, but consistent output trends are most informative.",
    home_care_tips: [
      "Track wet and stool diapers by day.",
      "Note stool color changes and consistency.",
      "Review trends during pediatric visits."
    ],
    red_flags: [
      "Marked drop in wet diapers.",
      "Blood in stool or very pale stools.",
      "No stooling with vomiting and abdominal distension."
    ],
    provider_follow_up: [
      "Call your pediatric clinician for sudden output changes."
    ],
    emergency_escalation:
      "If dehydration signs or lethargy appear, urgent in-person evaluation is needed.",
    suggested_questions: [
      "How many wet diapers are expected by age?",
      "What stool colors are concerning?",
      "When is constipation urgent?"
    ]
  },
  {
    topic: "crying-and-soothing",
    label: "Crying and Soothing",
    summary:
      "Frequent crying can be normal in newborns, though sudden pattern changes should be reviewed.",
    reassurance:
      "Many babies have fussy windows, especially in evenings, during the first months.",
    home_care_tips: [
      "Try a calming sequence: feed, burp, swaddle, sway, settle.",
      "Use skin-to-skin and reduce stimulation.",
      "Take short caregiver breaks when you feel overwhelmed."
    ],
    red_flags: [
      "Inconsolable high-pitched cry with fever.",
      "Poor feeding with persistent vomiting.",
      "Lethargy or weak cry."
    ],
    provider_follow_up: [
      "Call pediatric care for persistent inconsolable crying."
    ],
    emergency_escalation:
      "For breathing changes, blue color, or unresponsiveness, seek emergency care now.",
    suggested_questions: [
      "How much crying is typical by age?",
      "What soothing steps are safest overnight?",
      "When should crying be evaluated urgently?"
    ]
  },
  {
    topic: "c-section-recovery",
    label: "C-Section Recovery",
    summary:
      "Recovery includes incision healing, pain control, mobility, and monitoring for infection signs.",
    reassurance:
      "Steady improvement is expected, though some soreness can persist for weeks.",
    home_care_tips: [
      "Support incision when coughing or standing.",
      "Walk gently each day to reduce stiffness and clot risk.",
      "Keep incision clean and dry as instructed."
    ],
    red_flags: [
      "Fever with increasing incision redness or drainage.",
      "Worsening severe pain not controlled by medications.",
      "Leg swelling, chest pain, or shortness of breath."
    ],
    provider_follow_up: [
      "Contact your surgical or obstetric team for wound concerns."
    ],
    emergency_escalation:
      "Chest pain, breathing trouble, or heavy bleeding require urgent emergency evaluation.",
    suggested_questions: [
      "What activity level is safe this week?",
      "When can I resume lifting or exercise?",
      "How do I know if my incision is healing well?"
    ]
  },
  {
    topic: "pelvic-floor",
    label: "Pelvic Floor Recovery",
    summary:
      "Pelvic floor symptoms like heaviness or urine leakage can occur postpartum and often improve with care.",
    reassurance:
      "These symptoms are common and treatable with guided recovery support.",
    home_care_tips: [
      "Avoid straining and constipation triggers.",
      "Practice gentle breath-coordinated pelvic floor exercises.",
      "Use gradual return to impact activities."
    ],
    red_flags: [
      "Severe pelvic pain or pressure worsening quickly.",
      "New inability to control urine or stool.",
      "Associated fever or heavy bleeding."
    ],
    provider_follow_up: [
      "Ask for pelvic floor physical therapy referral."
    ],
    emergency_escalation:
      "If severe pain, bleeding, or systemic symptoms occur, urgent evaluation is needed.",
    suggested_questions: [
      "When should I start pelvic floor rehab?",
      "What symptoms suggest prolapse?",
      "What can I safely do at home now?"
    ]
  },
  {
    topic: "formula-feeding",
    label: "Formula Feeding",
    summary:
      "Formula-fed babies may have variable intake patterns; cue-based feeding and growth trends guide adequacy.",
    reassurance:
      "Many healthy feeding plans include formula, fully or partially.",
    home_care_tips: [
      "Prepare formula exactly per label instructions.",
      "Use paced bottle feeding and observe satiety cues.",
      "Track tolerance, stooling, and spit-up patterns."
    ],
    red_flags: [
      "Frequent forceful vomiting.",
      "Poor weight gain or dehydration signs.",
      "Blood in stool or persistent feeding refusal."
    ],
    provider_follow_up: [
      "Review feeding volumes with pediatric clinician if concerns persist."
    ],
    emergency_escalation:
      "If baby is lethargic, not feeding, or has breathing/color changes, seek urgent care now.",
    suggested_questions: [
      "How much formula is typical for this age?",
      "What are signs of formula intolerance?",
      "How can I reduce gas during bottle feeding?"
    ]
  },
  {
    topic: "pumping",
    label: "Pumping and Milk Expression",
    summary:
      "Pumping plans vary by goals, supply, and infant feeding needs.",
    reassurance:
      "A flexible pumping routine can work well and does not need to be perfect to be effective.",
    home_care_tips: [
      "Check flange fit and comfort regularly.",
      "Use consistent sessions when building supply.",
      "Store milk safely with clear labels and times."
    ],
    red_flags: [
      "Persistent pain during pumping.",
      "Abrupt supply drop with breast symptoms.",
      "Blocked ducts with fever or flu-like illness."
    ],
    provider_follow_up: [
      "Contact lactation support for ongoing pain or supply challenges."
    ],
    emergency_escalation:
      "If fever and severe breast pain occur with feeling acutely unwell, seek urgent care.",
    suggested_questions: [
      "How often should I pump in the first weeks?",
      "How do I know if flange size is correct?",
      "What storage timelines are safest?"
    ]
  },
  {
    topic: "partner-support",
    label: "Partner and Family Support",
    summary:
      "Practical support and shared planning improve postpartum recovery and family wellbeing.",
    reassurance:
      "It is appropriate to need help and divide responsibilities intentionally.",
    home_care_tips: [
      "Create a simple nightly duty rotation.",
      "Assign one partner as default meal and hydration support.",
      "Use daily 10-minute emotional check-ins."
    ],
    red_flags: [
      "Caregiver burnout with safety lapses.",
      "Isolation without backup support.",
      "Escalating conflict affecting care routines."
    ],
    provider_follow_up: [
      "Discuss support stressors in postpartum visits."
    ],
    emergency_escalation:
      "If anyone feels unsafe or unable to maintain immediate care, activate emergency support.",
    suggested_questions: [
      "How can partners share overnight care fairly?",
      "What signs show a caregiver needs urgent rest?",
      "How do we build a realistic first-month plan?"
    ]
  },
  {
    topic: "when-to-call-provider",
    label: "When to Call Your Provider",
    summary:
      "If symptoms worsen, feel unusual, or interfere with feeding, recovery, or safety, timely clinician contact is appropriate.",
    reassurance:
      "Calling for guidance early is often the safest and most efficient next step.",
    home_care_tips: [
      "Write down symptom timeline, severity, and triggers.",
      "Track temperature, bleeding, and feeding trends.",
      "Prepare concise questions before calling."
    ],
    red_flags: [
      "Rapidly worsening symptoms.",
      "Persistent fever or severe pain.",
      "Any concerns about maternal or newborn safety."
    ],
    provider_follow_up: [
      "Use same-day call for concerning changes.",
      "Escalate to urgent care if office guidance is delayed and symptoms worsen."
    ],
    emergency_escalation:
      "For severe symptoms such as chest pain, breathing trouble, or unresponsiveness, seek emergency services now.",
    suggested_questions: [
      "Is this something to call today or monitor overnight?",
      "What details help my clinician triage quickly?",
      "When should I skip phone triage and go in directly?"
    ]
  },
  {
    topic: "emergency-red-flags",
    label: "Emergency Red Flags",
    summary:
      "Some postpartum and newborn symptoms require immediate emergency evaluation.",
    reassurance:
      "Acting quickly is protective and appropriate when red flags are present.",
    home_care_tips: [
      "Call emergency services for life-threatening symptoms.",
      "Do not drive alone if severely symptomatic.",
      "Bring recent medication and symptom notes if possible."
    ],
    red_flags: [
      "Chest pain, trouble breathing, seizures.",
      "Heavy bleeding with dizziness or fainting.",
      "Infant blue lips, fever under 3 months, or unresponsiveness."
    ],
    provider_follow_up: [
      "Notify your care team after emergency evaluation."
    ],
    emergency_escalation:
      "If any emergency red flag is present, seek emergency care now.",
    suggested_questions: [
      "What symptoms should never wait?",
      "How do I prepare for urgent evaluation?",
      "What should I monitor after emergency discharge?"
    ]
  },
  {
    topic: "general-fourth-trimester",
    label: "Fourth Trimester Basics",
    summary:
      "The first 12 weeks after birth involve major physical and emotional adjustments for parent and baby.",
    reassurance:
      "Needing support in this period is normal and expected.",
    home_care_tips: [
      "Prioritize sleep blocks, nutrition, and hydration.",
      "Accept practical support with meals and infant care.",
      "Track symptoms and bring them to follow-up visits."
    ],
    red_flags: [
      "Escalating pain, fever, or heavy bleeding.",
      "Breathing symptoms or chest pain.",
      "Rapidly worsening mood or safety concerns."
    ],
    provider_follow_up: [
      "Schedule postpartum and newborn follow-ups as recommended."
    ],
    emergency_escalation:
      "If red-flag symptoms are present, seek urgent care now.",
    suggested_questions: [
      "What is normal in week one versus week six?",
      "How can I divide night duties with a partner?",
      "What symptoms should not wait?"
    ]
  }
];
