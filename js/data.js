/**
 * PB SYSTEM - Initial Freight Forwarding & Logistics Seed Data
 * Clean Fresh Seed - Zero Sample Data (/fix 3)
 * Admin password synchronized to latest: "Asyhub-2k26" (/fix 8)
 */
const INITIAL_PB_DATA = {
    settings: {
        rates: {
            containerRate: 0,
            lumsumRate: 0,
            dutyRate: 0
        },
        telegram: {
            botToken: "",
            groupId: "",
            messageDraft: ""
        },
        theme: "blue",
        mode: "light",
        language: "en",
        sync: {
            isMasterServer: true,
            serverHostIp: "127.0.0.1:3000",
            lastSyncTime: new Date().toISOString()
        },
        autoBackupIntervalMinutes: 5,
        lastBackupTime: new Date().toISOString(),
        announcement: {
            title: "សេចក្តីជូនដំណឹងពី Admin (Broadcast Notice)",
            content: "សូមស្វាគមន៍មកកាន់ប្រព័ន្ធ PB SYSTEM! សូមបុគ្គលិកទាំងអស់ត្រួតពិនិត្យឯកសារគយ និងទូកុងតឺន័រឱ្យបានត្រឹមត្រូវមុនពេលចេញទំនិញ។",
            priority: "important",
            author: "Koeung Rasydana (Admin)",
            updatedAt: new Date().toISOString()
        },
        fuelSurchargePercent: 0,
        fuelSurchargePeriod: "daily",
        botQA: [
            {
                id: "QA-001",
                triggerKeywords: "office, location, ទីតាំង, ទីស្នាក់ការ",
                response: "PB Logistics Co., Ltd. - Phnom Penh Port Special Economic Zone / Sihanoukville Branch. Tel: +855 12 345 678",
                active: true
            },
            {
                id: "QA-002",
                triggerKeywords: "working hours, ម៉ោងធ្វើការ, ម៉ោង",
                response: "Working Hours: Mon - Sat: 8:00 AM - 5:30 PM (Customs clearance operations 24/7 on-call).",
                active: true
            },
            {
                id: "QA-003",
                triggerKeywords: "customs, clearance, ឯកសារគយ, គយ",
                response: "For Customs Clearance support, please contact the Document Operations Team or check your assigned Job# in PB System.",
                active: true
            },
            {
                id: "QA-004",
                triggerKeywords: "emergency, hotline, បន្ទាន់, ទាក់ទង",
                response: "Urgent Operations Hotline: +855 89 999 888 (24/7 Operations Manager)",
                active: true
            }
        ]
    },
    users: [
        {
            id: "USR-001",
            username: "admin",
            password: "Asyhub-2k26",
            fullName: "Koeung Rasydana (SysAdmin)",
            role: "admin",
            status: "active",
            permissions: {
                dashboard: true,
                requestNote: true,
                counting: true,
                report: true,
                costing: true,
                tasks: true,
                settings: true,
                userManagement: true,
                chat: true,
                trucks: true,
                invoice: true,
                telegramBot: true
            }
        }
    ],
    tasks: [],
    requestNotes: [],
    jobs: [],
    costings: [],
    chats: [],
    trucks: [],
    truckExpenses: [],
    invoices: []
};
