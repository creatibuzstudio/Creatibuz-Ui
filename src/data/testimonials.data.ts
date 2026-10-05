import { Review } from "@/services/review.service";

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    reviewText:
      "“I’ve worked with Creatibuz Studio on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development.”",
    rating: 5,
    satisfactionRate: "90%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c1",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "52%", label: "Higher Online Conversion Rate" },
      { value: "37%", label: "Increase In Organic Search Traffic" },
    ],
    client: {
      id: "c1",
      name: "Jessica Epley",
      email: "jessica@example.com",
      role: "Finance Manager, TN HomeBuyers",
    },
  },
  {
    id: "rev-2",
    reviewText:
      "“Their 48-hour turnarounds on initial design concepts completely changed our release cycle. Creatibuz Studio is our secret weapon for continuous product iteration and rapid market validation.”",
    rating: 5,
    satisfactionRate: "96%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c2",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "3.4x", label: "Faster Feature Release Cycles" },
      { value: "68%", label: "Reduction In Design Revision Time" },
    ],
    client: {
      id: "c2",
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      role: "Co-Founder, SaaSify",
    },
  },
  {
    id: "rev-3",
    reviewText:
      "“The UI polish and attention to interaction design blew our executive team away. We saw an immediate 34% lift in user engagement after redesigning our dashboard and core workflows.”",
    rating: 5,
    satisfactionRate: "95%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c3",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "34%", label: "Lift In Daily Active Engagement" },
      { value: "4.9/5", label: "Average User Feedback Rating" },
    ],
    client: {
      id: "c3",
      name: "Marcus Vance",
      email: "marcus@example.com",
      role: "VP of Product, CloudScale",
    },
  },
  {
    id: "rev-4",
    reviewText:
      "“Working with Creatibuz feels like having a senior in-house design team on speed dial. Communication is transparent, proactive, and always delivers ahead of deadline with impeccable fidelity.”",
    rating: 5,
    satisfactionRate: "98%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c4",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "85%", label: "Faster Developer Implementation" },
      { value: "2.6x", label: "Increase In Product Retention" },
    ],
    client: {
      id: "c4",
      name: "Elena Rostova",
      email: "elena@example.com",
      role: "Design Director, FinEdge",
    },
  },
  {
    id: "rev-5",
    reviewText:
      "“From Figma design systems to clean production frontend code, everything was structured impeccably. Saved our engineers weeks of work and allowed our team to ship with confidence.”",
    rating: 5,
    satisfactionRate: "94%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c5",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "120+", label: "Engineering Hours Saved Per Sprint" },
      { value: "99.9%", label: "Production-Ready Component Match" },
    ],
    client: {
      id: "c5",
      name: "Alex Thorne",
      email: "alex@example.com",
      role: "CTO, DevCore",
    },
  },
  {
    id: "rev-6",
    reviewText:
      "“Thanks to the personalized attention and guidance provided by Creatibuz Studio. I highly recommend them to any team looking for high-converting product UI and rock-solid development.”",
    rating: 5,
    satisfactionRate: "92%Client Satisfactions",
    thumbUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c6",
    createdAt: "",
    updatedAt: "",
    stats: [
      { value: "45%", label: "Higher Demo Request Rate" },
      { value: "2.1x", label: "Pipeline Velocity Improvement" },
    ],
    client: {
      id: "c6",
      name: "Bonnie M. Pattison",
      email: "bonnie@example.com",
      role: "Product Lead, NextWave",
    },
  },
];
