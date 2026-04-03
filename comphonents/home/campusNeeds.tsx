"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageSquare, GraduationCap, BarChart3, CreditCard, Building2, Users } from 'lucide-react';
import FeatureShowcase, { PillarData } from '../features/feature';

const pillars: PillarData[] = [
    {
        letter: 'S',
        tag: 'UNIFIED MANAGEMENT',
        title: 'Students & Staff',
        desc: 'Comprehensive student and staff management system with automated workflows, digital records, and seamless onboarding processes. Track attendance, performance, and engagement all in one place.',
        icon: <Users className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Digital Onboarding",
                description: "Paperless documentation and automated verification workflows for new admissions.",
                benefits: ["Document OCR", "Biometric Integration", "Auto-ID Gen"],
                image: "https://images.unsplash.com/photo-1554224155-16974a4ea2c5?auto=format&fit=crop&q=80"
            },
            {
                title: "Attendance Intelligence",
                description: "Automated attendance tracking with exception alerts and analytics.",
                benefits: ["Smart QR scans", "Absent flags", "Daily reports"],
                image: "https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80"
            },
            {
                title: "Performance Dashboards",
                description: "Real-time KPIs for student achievement and teacher success.",
                benefits: ["Grade curves", "Growth trends", "Custom filters"],
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            },
            {
                title: "Staff Roster & HR",
                description: "Centralized employee records, scheduling and payroll snapshots.",
                benefits: ["Shift planners", "Leave requests", "Contract reminders"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            },
            {
                title: "Feedback Loops",
                description: "Two-way student and staff input channels for continuous improvement.",
                benefits: ["Surveys", "Action items", "Engagement streams"],
                image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'C',
        tag: 'REAL-TIME CONNECTIVITY',
        title: 'Communication',
        desc: 'Instant notifications, announcements, and messaging system. Keep everyone connected with push notifications, email alerts, and in-app communication channels for students, staff, and parents.',
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Circular Management System",
                description: "A centralized communication system that enables institutions to create, manage, and distribute circulars with controlled visibility and targeted delivery.        ",
                benefits: [
                    "Centralized Communication",
                    "Targeted Delivery",
                    "Role-Based Access",
                    "Priority Management"
                ],
                image: "https://media.istockphoto.com/id/1080310630/photo/love-letter-envelope.jpg?s=612x612&w=0&k=20&c=3go2_Tq6VGpUYCsR5milVQRQKuvE58r8Lu_Ow0FOFNY=",
                sections: [
                    {
                        title: "Overview",
                        content: "The Circular Management System in RS SOLUTIONS provides a structured approach to creating, managing, and distributing official announcements across the institution. It ensures that communication remains clear and relevant by allowing circulars to be targeted to specific users such as classes, departments, or the entire campus, while also supporting priority levels and attachments to improve the quality and effectiveness of information delivery.",
                        image: "https://img.freepik.com/premium-vector/report-result-analyze-inspection-review-icon-paper-sheet-audit-sales-growth-graph-data-overview_101884-2320.jpg?semt=ais_incoming&w=740&q=80"
                    },
                    {
                        title: "Role-Based Access",
                        content: "Authorized users can create circulars by entering key details such as title, reference number, date, and content, along with optional attachments and importance levels. The process involves accessing the Circulars module, filling in the required information, selecting the appropriate audience, and choosing whether to publish immediately or save as a draft, after which the circular is displayed in a structured listing where users can search and filter based on different criteria for easy access.",
                        image: "https://supertokens.com/covers/what-is-rbac-cover.png"
                    },
                    {
                        title: "Access Control and System Behavior",
                        content: "The system operates on a role-based access model where the Principal has full visibility across the institution, Heads of Department can manage circulars within their departments, faculty can create circulars for specific classes, and students have view-only access. Visibility is determined by both the creator’s role and the selected audience, ensuring that circulars are delivered only to relevant users while maintaining controlled, secure, and well-organized communication.",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCMM8MENLpCKw1Q3jq3gUk5rXlWZKO2UPww&s"
                    },

                    {
                        title: "",
                        content: "The Circular Management System enhances institutional communication by introducing structure, control, and relevance. It ensures that information is delivered efficiently to the right audience while maintaining clarity and reducing unnecessary communication. This results in a more organized and effective information flow across the institution.",
                        image: "data:image/jpeg;base64,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"
                    },
                ]
            },
            {
                title: "Event Announcements",
                description: "Automated event reminders, updates, and calendar sync.",
                benefits: ["Auto follow-ups", "RSVP tracking", "Push alerts"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            },
            {
                title: "Parent Engagement",
                description: "Dedicated portal for parent communications and student progress summaries.",
                benefits: ["Live chat", "Report cards", "Alerts"],
                image: "https://images.unsplash.com/photo-1581091870627-c24e539dd3dc?auto=format&fit=crop&q=80"
            },
            {
                title: "Emergency Broadcast",
                description: "High-priority alerts with acknowledgement and escalation workflows.",
                benefits: ["Geo-targeted", "Read receipts", "SLA logs"],
                image: "https://images.unsplash.com/photo-1581092580515-3c2efd7de0ee?auto=format&fit=crop&q=80"
            },
            {
                title: "Feedback Channels",
                description: "Structured feedback survey routing with sentiment analytics.",
                benefits: ["Pulse checks", "AI insights", "Auto tickets"],
                image: "https://images.unsplash.com/photo-1590608897129-79efbb8cb3ff?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'A',
        tag: 'EXCELLENCE IN EDUCATION',
        title: 'Academics',
        desc: 'Digital classrooms, assignment management, grade tracking, and curriculum planning. Empower educators with tools for lesson planning, assessments, and student progress monitoring.',
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Curriculum Builder",
                description: "Drag-and-drop course design with standards tagging.",
                benefits: ["Version history", "Shared libraries", "Standards mapping"],
                image: "https://images.unsplash.com/photo-1587614382346-4ec4c23ecf35?auto=format&fit=crop&q=80"
            },
            {
                title: "Assessment Engine",
                description: "Create auto-graded, rubric-based and project assessments.",
                benefits: ["Question bank", "Adaptive difficulty", "Live grading"],
                image: "https://images.unsplash.com/photo-1559028012-4810c5f7f3a5?auto=format&fit=crop&q=80"
            },
            {
                title: "Gradebook Analytics",
                description: "Visualized classroom performance and equity checks.",
                benefits: ["Heatmaps", "Intervention flags", "Trend lines"],
                image: "https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80"
            },
            {
                title: "Learning Paths",
                description: "Personalized student learning journeys and mastery tracking.",
                benefits: ["Recommendations", "Milestone badges", "Relearning plans"],
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            },
            {
                title: "Collaboration Spaces",
                description: "Virtual group workspaces with shared docs and discussion boards.",
                benefits: ["Real-time editing", "Peer reviews", "Resource sharing"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'M',
        tag: 'DATA-DRIVEN INSIGHTS',
        title: 'Monitoring',
        desc: 'Real-time analytics, performance dashboards, and comprehensive reporting. Monitor key metrics, track trends, and make informed decisions with powerful data visualization tools.',
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        image: "https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Analytics Hub",
                description: "Unified KPI dashboards across campus operations.",
                benefits: ["Custom widgets", "Snapshot export", "Smart alerts"],
                image: "https://images.unsplash.com/photo-1551516594-2a53d496f061?auto=format&fit=crop&q=80"
            },
            {
                title: "Predictive Modeling",
                description: "Student attrition and resource demand forecasts.",
                benefits: ["Regression models", "What-if scenarios", "What-if sliders"],
                image: "https://images.unsplash.com/photo-1561414920-f132b60f06e4?auto=format&fit=crop&q=80"
            },
            {
                title: "Compliance Tracker",
                description: "Automated reporting for accreditation and audit readiness.",
                benefits: ["Policy mapping", "Gap alerts", "Automated exports"],
                image: "https://images.unsplash.com/photo-1517242027353-96af1f7a5cf9?auto=format&fit=crop&q=80"
            },
            {
                title: "Resource Utilization",
                description: "Track lab, classroom and facility usage in real time.",
                benefits: ["Occupancy heatmap", "Peak alerts", "Utilization trend"],
                image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&q=80"
            },
            {
                title: "Actionable Insights",
                description: "AI-driven recommendations for performance improvement.",
                benefits: ["Issue tickets", "Smart next steps", "Impact scoring"],
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'P',
        tag: 'FINANCIAL EXCELLENCE',
        title: 'Payments',
        desc: 'Streamlined fee collection, invoice generation, and financial tracking. Accept online payments, manage scholarships, and automate billing processes with complete transparency.',
        icon: <CreditCard className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Smart Billing",
                description: "Automated invoicing and multi-cycle fee plans.",
                benefits: ["Partial payments", "Auto-retry", "SMS reminders"],
                image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80"
            },
            {
                title: "Scholarship Manager",
                description: "Automated scholarship eligibility and award workflows.",
                benefits: ["Slot management", "Approval flows", "Distribution tracking"],
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            },
            {
                title: "Expense Tracking",
                description: "Department budgets, invoices and spend audit trails.",
                benefits: ["Category tags", "Threshold alerts", "Financial years"],
                image: "https://images.unsplash.com/photo-1588776814546-d8b5b6ad6b89?auto=format&fit=crop&q=80"
            },
            {
                title: "Payment Gateway",
                description: "Secure multi-currency and multi-method checkout support.",
                benefits: ["Card/UPI/ACH", "PCI compliance", "Refund automation"],
                image: "https://images.unsplash.com/photo-1549421263-64a4f20e376c?auto=format&fit=crop&q=80"
            },
            {
                title: "Financial Reports",
                description: "Real-time cashflow and audit-ready financial statements.",
                benefits: ["P&L overview", "Receivables aging", "Forecast tools"],
                image: "https://images.unsplash.com/photo-1543418239-2d85f27b499b?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'U',
        tag: 'CAMPUS MANAGEMENT',
        title: 'University Operations',
        desc: 'Manage hostel allocations, transport logistics, library resources, and facility bookings. Streamline campus operations with automated workflows and resource optimization.',
        icon: <Building2 className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1731977188312-889e607b8c6a?w=500&auto=format&fit=crop&q=60",
        subFeatures: [
            {
                title: "Facility Booking",
                description: "Centralized reservations for rooms, labs and equipment.",
                benefits: ["Booking calendar", "Conflict checks", "Usage fees"],
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80"
            },
            {
                title: "Transport Scheduling",
                description: "Route management and live bus tracking for campus transit.",
                benefits: ["Pick-up alerts", "ETA updates", "Capacity planning"],
                image: "https://images.unsplash.com/photo-1528256952176-78409138514e?auto=format&fit=crop&q=80"
            },
            {
                title: "Inventory Control",
                description: "Asset tracking for labs, libraries and office equipment.",
                benefits: ["Check-in/out", "Maintenance logs", "Life-cycle alerts"],
                image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a1e?auto=format&fit=crop&q=80"
            },
            {
                title: "Security Admin",
                description: "Visitor management and access control monitoring.",
                benefits: ["ID workflows", "visitor passes", "incident logs"],
                image: "https://images.unsplash.com/photo-1609695535237-7a9aa122fcf6?auto=format&fit=crop&q=80"
            },
            {
                title: "Housekeeping Tasking",
                description: "Automated cleaning schedules with status dashboards.",
                benefits: ["Task assignment", "Service ratings", "completion reports"],
                image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80"
            }
        ]
    },
    {
        letter: 'S',
        tag: 'SMART TIME MANAGEMENT',
        title: 'Scheduling',
        desc: 'Automated timetable generation, exam scheduling, and event planning. Intelligent conflict resolution ensures optimal resource allocation and scheduling efficiency.',
        icon: <Calendar className="w-6 h-6 text-white" />,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
        subFeatures: [
            {
                title: "Timetable Generator",
                description: "Auto-build course schedules with professor and room constraints.",
                benefits: ["Conflict minimization", "cross-term sync", "export to calendar"],
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            },
            {
                title: "Exam Engine",
                description: "Schedule exams, assign invigilators and publish results securely.",
                benefits: ["Seat planners", "question banks", "proctoring alerts"],
                image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80"
            },
            {
                title: "Event Planner",
                description: "Campus event workflows with resource and attendee management.",
                benefits: ["Invite tracking", "notifications", "check-in"],
                image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
            },
            {
                title: "Faculty Load",
                description: "Balanced task distribution and credits per instructor.",
                benefits: ["Workload analytics", "auto-assign", "compliance checks"],
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
            },
            {
                title: "Holiday Calendar",
                description: "Dynamic holidays and custom blackout dates for schedule safety.",
                benefits: ["localization", "rollover rules", "auto-check"],
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            }
        ]
    }
];

const CampusNeeds = () => {
    const [selectedPillar, setSelectedPillar] = React.useState<PillarData | null>(null);
    return (
        <div className="bg-black text-white min-h-screen selection:bg-blue-500/30 font-sans overflow-x-hidden" id="campus-needs">

            {/* Hero Header Section */}
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-ms mb-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
                    Powered by campus360
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                    Everything Your <span className="text-gray-400">Campus</span> <br />
                    <span className="text-white">Needs</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                    Seven powerful pillars working in perfect harmony to transform your institution&apos;s operations and deliver exceptional experiences.
                </p>
            </section>

            {/* Main Pillars Zig-Zag Content */}
            <div className="max-w-7xl mx-auto px-6 space-y-40 pb-40 relative">

                {/* --- CENTRAL ORANGE GLOW LINE (From Video) --- */}
                {/* --- CENTRAL ORANGE GLOW DIAGONAL LINE --- */}
                <div className="absolute inset-0 hidden md:block z-0 pointer-events-none">

                    <div
                        className="absolute top-0 left-1/4 w-[2px] h-full -translate-x-1/2 
    bg-gradient-to-b from-blue-500/0 via-emerald-500/25 to-blue-500/0
    -rotate-[12deg]
    origin-top
    shadow-[0_0_25px_rgba(59,130,246,0.45)]"
                    />

                </div>
                {pillars.map((pillar, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className="relative group">

                            {/* STATIC BACKGROUND LETTER */}
                            <span className="absolute z-0 text-[26rem] font-black text-white/[0.03] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block leading-none">
                                {pillar.letter}
                            </span>

                            {/* SIDE ANIMATED CONTENT */}
                            <div
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative z-10`}
                            >
                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.45)]">
                                            {pillar.icon}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 flex items-center justify-center border border-emerald-500/40 rounded-lg bg-emerald-500/10 backdrop-blur-sm">
                                                <span className="text-emerald-400 font-black text-xs">{pillar.letter}</span>
                                            </div>
                                            <span className="text-blue-400 text-[10px] font-black tracking-[0.25em] uppercase">
                                                {pillar.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                        {pillar.title}
                                    </h2>

                                    <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                                        {pillar.desc}
                                    </p>

                                    <button onClick={() => setSelectedPillar(pillar)} className="group flex items-center gap-3 bg-blue-500/10 hover:bg-blue-600/40 border border-blue-500/40 px-5 py-3 rounded-2xl transition-all duration-300">
                                        <span className="text-blue-400 font-bold text-sm  ">Learn More</span>
                                        <span className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                                    </button>
                                </motion.div>

                                {/* Image Side with ZIG-ZAG SHADOW */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 relative w-full group"
                                >
                                    <div className={`absolute -inset-4 bg-blue-600/35 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                      ${isEven ? '-top-10 -right-10' : '-top-10 -left-10'}`}></div>

                                    <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    );
                })}

            </div>
            <AnimatePresence>
                {selectedPillar && (
                    <FeatureShowcase pillarData={selectedPillar} onBack={() => setSelectedPillar(null)} />
                )}
            </AnimatePresence>
        </div>

    );
};

export default CampusNeeds;