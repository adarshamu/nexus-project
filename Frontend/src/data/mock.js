/* ==========================================================================
   MOCK DATA
   Frontend-only sample data for the Nexus prototype.
   No backend calls are made — every value here is illustrative.
   ========================================================================== */

/* ---------------- Current user ---------------- */

export const user = {
  name: "Jordan Lee",
  handle: "@jordan",
  email: "jordan.lee@nexus.dev",
  initials: "JL",
  avatar: "sunset",                 // LandscapeAvatar variant key
  role: "Employee",
  batch: "Full Stack Foundations A",
  streak: 12,
  progress: 74,
  milestones: 10
};

/* ---------------- Overview KPIs ---------------- */

export const dashboardCards = [
  { label: "Learning progress", value: "74%",   meta: "Across 6 sample skills",                     tone: "accent"  },
  { label: "Strongest skill",   value: "React", meta: "Consistent component patterns",              tone: "success" },
  { label: "Focus skill",       value: "Testing", meta: "Integration confidence needs practice",    tone: "warn"    },
  { label: "Milestones",        value: "10",    meta: "Illustrative completed milestones",           tone: "muted"   }
];

/* ---------------- Tech stack ---------------- */

export const stack = ["React", "TypeScript", "Node.js", "Testing", "Accessibility", "Git"];

/* ---------------- Skills ---------------- */

export const skillRows = [
  { name: "React",      status: "Improving", value: 82, tone: "improving" },
  { name: "TypeScript", status: "Focus",     value: 64, tone: "focus"     },
  { name: "Testing",    status: "Focus",     value: 58, tone: "focus"     }
];

/* ---------------- Strengths & focus areas ---------------- */

export const strengthsFocus = [
  {
    kind: "strength",
    title: "Strength: React component composition",
    body: "Reusable state patterns appear consistently in recent sample projects."
  },
  {
    kind: "focus",
    title: "Focus: test intent and integration setup",
    body: "One mistake is not treated as proof of low proficiency; patterns guide the recommendation."
  }
];

/* ---------------- Recurring difficulty categories ---------------- */

export const difficultyCategories = ["Async state", "Fixture design", "Generic constraints"];

/* ---------------- Courses ---------------- */

export const courses = [
  { id: 1, title: "Advanced React Patterns",    level: "Intermediate", progress: 72, lessons: 24, duration: "6h 20m", tag: "React"      },
  { id: 2, title: "Testing React Applications", level: "Intermediate", progress: 38, lessons: 18, duration: "4h 45m", tag: "Testing"    },
  { id: 3, title: "TypeScript for React Devs",  level: "Advanced",     progress: 55, lessons: 22, duration: "5h 10m", tag: "TypeScript" },
  { id: 4, title: "Accessibility Foundations",  level: "Beginner",     progress: 20, lessons: 12, duration: "2h 30m", tag: "A11y"       },
  { id: 5, title: "State Management Deep Dive", level: "Advanced",     progress: 0,  lessons: 16, duration: "4h 00m", tag: "React"      },
  { id: 6, title: "Node.js API Design",         level: "Intermediate", progress: 90, lessons: 20, duration: "5h 30m", tag: "Node"       }
];

/* ---------------- Experts ----------------
   Every "expert" is an employee who also happens to be an expert.
   `avatar` maps to a LandscapeAvatar variant key.
   `status` is one of: active | busy | offline. */

export const experts = [
  {
    id: 1,
    name: "Adarsha",
    avatar: "sunset",
    skill: "Java",
    proficiency: 100,
    status: "active",
    reason: "Highest match because the problem involves Java concurrency, thread pools, and async orchestration."
  },
  {
    id: 2,
    name: "Amara Osei",
    avatar: "forest",
    skill: "React",
    proficiency: 96,
    status: "active",
    reason: "Strong on component composition, reducer patterns, and modal lifecycle."
  },
  {
    id: 3,
    name: "Noah Kim",
    avatar: "night",
    skill: "Node.js",
    proficiency: 91,
    status: "active",
    reason: "Deep API design experience and a strong track record on auth and rate limiting."
  },
  {
    id: 4,
    name: "Priya Raman",
    avatar: "desert",
    skill: "Testing",
    proficiency: 88,
    status: "active",
    reason: "Extensive fixture and integration test experience across web applications."
  },
  {
    id: 5,
    name: "Diego Alvarez",
    avatar: "mountain",
    skill: "TypeScript",
    proficiency: 94,
    status: "offline",
    reason: "Matched on advanced generic constraint patterns and type-level inference."
  },
  {
    id: 6,
    name: "Lena Fischer",
    avatar: "lake",
    skill: "Accessibility",
    proficiency: 89,
    status: "offline",
    reason: "Relevant on keyboard focus, ARIA roles, and screen-reader behaviour."
  }
];

/* ---------------- Notifications ---------------- */

export const notifications = [
  {
    id: 1,
    title: "New course assigned",
    body: "Testing React Applications was assigned to you.",
    time: "2h ago",
    unread: true
  },
  {
    id: 2,
    title: "Expert replied",
    body: "Adarsha responded in your Human API thread.",
    time: "5h ago",
    unread: true
  },
  {
    id: 3,
    title: "Milestone reached",
    body: "You completed 10 milestones this batch.",
    time: "1d ago",
    unread: false
  }
];

/* ---------------- Chat — conversation sidebar ---------------- */

export const conversationSeeds = [
  { id: 1, name: "Adarsha",    avatar: "sunset", preview: "That is likely the issue. Try lifting…", time: "09:47",     unread: 2 },
  { id: 2, name: "Amara Osei", avatar: "forest", preview: "Sure, share the reducer here.",           time: "Yesterday", unread: 0 },
  { id: 3, name: "Noah Kim",   avatar: "night",  preview: "Here is a minimal repro.",                time: "Yesterday", unread: 0 }
];

/* ---------------- Chat — sample message history ---------------- */

export const demoMessages = [
  {
    id: 1,
    from: "expert",
    text: "I can help with the modal state flow. Can you share where the draft is initialized?",
    time: "09:42"
  },
  {
    id: 2,
    from: "me",
    text: "The draft lives in the modal, then we call onSave when closing.",
    time: "09:45"
  },
  {
    id: 3,
    from: "expert",
    text: "That is likely the issue. Try lifting draft state to the list or using a keyed effect on close.",
    time: "09:47"
  }
];

/* ---------------- Admin — employee roster ----------------
   Roles are limited to "Employee" and "Super Admin". */

export const adminUsers = [
  {
    id: 1,
    name: "Jordan Lee",
    handle: "@jordan",
    email: "jordan.lee@nexus.dev",
    role: "Employee",
    joined: "2026-01-12",
    progress: 74,
    status: "active"
  },
  {
    id: 2,
    name: "Adarsha",
    handle: "@adarsha",
    email: "adarsha@nexus.dev",
    role: "Employee",
    joined: "2025-11-04",
    progress: 96,
    status: "active"
  },
  {
    id: 3,
    name: "Noah Kim",
    handle: "@noah",
    email: "noah.kim@nexus.dev",
    role: "Employee",
    joined: "2025-10-22",
    progress: 91,
    status: "active"
  },
  {
    id: 4,
    name: "Priya Raman",
    handle: "@priya",
    email: "priya.r@nexus.dev",
    role: "Employee",
    joined: "2026-02-01",
    progress: 62,
    status: "active"
  },
  {
    id: 5,
    name: "Diego Alvarez",
    handle: "@diego",
    email: "diego.a@nexus.dev",
    role: "Super Admin",
    joined: "2025-09-15",
    progress: 94,
    status: "inactive"
  }
];