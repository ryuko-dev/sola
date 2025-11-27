(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// User-specific storage utilities
__turbopack_context__.s([
    "addSystemUser",
    ()=>addSystemUser,
    "authenticateUser",
    ()=>authenticateUser,
    "clearCurrentUser",
    ()=>clearCurrentUser,
    "clearUserData",
    ()=>clearUserData,
    "deleteSystemUser",
    ()=>deleteSystemUser,
    "getCurrentSystemUser",
    ()=>getCurrentSystemUser,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getCurrentUserData",
    ()=>getCurrentUserData,
    "getSystemUsers",
    ()=>getSystemUsers,
    "getUserData",
    ()=>getUserData,
    "setCurrentUser",
    ()=>setCurrentUser,
    "setCurrentUserData",
    ()=>setCurrentUserData,
    "setSystemUsers",
    ()=>setSystemUsers,
    "setUserData",
    ()=>setUserData,
    "updateSystemUser",
    ()=>updateSystemUser
]);
const STORAGE_KEYS = {
    CURRENT_USER: "sola-current-user",
    USER_DATA_PREFIX: "sola-user-data-",
    SYSTEM_USERS: "sola-system-users"
};
function getSystemUsers() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(STORAGE_KEYS.SYSTEM_USERS);
    return data ? JSON.parse(data) : [];
}
function setSystemUsers(users) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.SYSTEM_USERS, JSON.stringify(users));
}
function addSystemUser(user) {
    const users = getSystemUsers();
    const newUser = {
        ...user,
        id: `system-user-${Date.now()}`,
        createdAt: new Date().toISOString()
    };
    setSystemUsers([
        ...users,
        newUser
    ]);
    return newUser;
}
function updateSystemUser(id, updates) {
    const users = getSystemUsers();
    const updated = users.map((u)=>u.id === id ? {
            ...u,
            ...updates
        } : u);
    setSystemUsers(updated);
}
function deleteSystemUser(id) {
    const users = getSystemUsers();
    setSystemUsers(users.filter((u)=>u.id !== id));
}
function authenticateUser(email, password) {
    const users = getSystemUsers();
    return users.find((u)=>u.email === email && u.password === password && u.isActive) || null;
}
function getCurrentUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
}
function getCurrentSystemUser() {
    const email = getCurrentUser();
    if (!email) return null;
    const users = getSystemUsers();
    return users.find((u)=>u.email === email) || null;
}
function setCurrentUser(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, email);
}
function clearCurrentUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}
function getUserData(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA_PREFIX + email);
    return data ? JSON.parse(data) : {
        projects: [],
        users: [],
        allocations: [],
        positions: []
    };
}
function setUserData(email, data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getUserData(email);
    const updated = {
        ...existing,
        ...data
    };
    localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + email, JSON.stringify(updated));
}
function clearUserData(email) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEYS.USER_DATA_PREFIX + email);
}
function getCurrentUserData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return {
        projects: [],
        users: [],
        allocations: [],
        positions: []
    };
    return getUserData(currentUser);
}
function setCurrentUserData(data) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    setUserData(currentUser, data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actual-allocation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActualAllocationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function ActualAllocationPage() {
    _s();
    const [currentUser, setCurrentUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [users, setUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [projects, setProjects] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [selectedMonth, setSelectedMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Date().getMonth());
    const [selectedYear, setSelectedYear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Date().getFullYear());
    const [isLocked, setIsLocked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [monthlyAllocation, setMonthlyAllocation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [showPercentage, setShowPercentage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isClient, setIsClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Handle client-side hydration
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            setIsClient(true);
        }
    }["ActualAllocationPage.useEffect"], []);
    // Load user data on component mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
            if (!user || !systemUser) {
                window.location.href = "/login";
                return;
            }
            setCurrentUser(user);
            // Load users and projects data from localStorage
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            const monthKey = `${selectedYear}-${selectedMonth}`;
            // Load projects
            setProjects(userData.projects || []);
            // Load lock state (only admin can change it)
            if (systemUser.role === 'admin') {
                const savedLockState = localStorage.getItem(`sola-lock-state-${user}`);
                setIsLocked(savedLockState === 'true');
            }
            // Initialize monthly allocation items
            const savedMonthlyAllocation = localStorage.getItem(`sola-monthly-allocation-${user}-${monthKey}`);
            if (savedMonthlyAllocation) {
                setMonthlyAllocation(JSON.parse(savedMonthlyAllocation));
            } else {
                // Initialize with default items for each staff member and account category
                const accountCategories = [
                    {
                        name: 'Net Salary',
                        code: '631 0001'
                    },
                    {
                        name: 'Fringe Benefit - Leave',
                        code: '631 0001'
                    },
                    {
                        name: 'Social Security',
                        code: '635 1001'
                    },
                    {
                        name: 'Employee Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Employer Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Housing',
                        code: '635 4001'
                    },
                    {
                        name: 'Other Benefits',
                        code: '602 4001'
                    }
                ];
                const defaultItems = [];
                userData.users.forEach({
                    "ActualAllocationPage.useEffect": (user)=>{
                        accountCategories.forEach({
                            "ActualAllocationPage.useEffect": (category, index)=>{
                                defaultItems.push({
                                    id: `${user.id}-${category.code}-${index}`,
                                    name: user.name,
                                    code: category.code,
                                    description: `${user.name} - ${category.name} for ${MONTHS[selectedMonth]} ${selectedYear}`,
                                    currency: 'USD',
                                    amount: 0,
                                    project: '',
                                    projectTask: '',
                                    account: `${category.name} [${category.code}]`
                                });
                            }
                        }["ActualAllocationPage.useEffect"]);
                    }
                }["ActualAllocationPage.useEffect"]);
                setMonthlyAllocation(defaultItems);
            }
            const usersWithPayroll = userData.users.map({
                "ActualAllocationPage.useEffect.usersWithPayroll": (user)=>{
                    // Load existing monthly data or create new empty structure
                    const existingPayrollData = user.payrollDataByMonth?.[monthKey];
                    const existingFringeData = user.fringeDataByMonth?.[monthKey];
                    const existingProjectData = user.projectDataByMonth?.[monthKey];
                    return {
                        ...user,
                        entity: user.entity || "Unassigned",
                        payrollDataByMonth: {
                            ...user.payrollDataByMonth,
                            [monthKey]: existingPayrollData || {
                                currency: "USD",
                                netSalary: 0,
                                socialSecurity: 0,
                                employeeTax: 0,
                                employerTax: 0,
                                housing: 0,
                                otherBenefits: 0
                            }
                        },
                        fringeDataByMonth: {
                            ...user.fringeDataByMonth,
                            [monthKey]: existingFringeData || {
                                workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear),
                                annualLeave: 0,
                                sickLeave: 0,
                                publicHolidays: 0,
                                dailyRate: 0
                            }
                        },
                        projectDataByMonth: {
                            ...user.projectDataByMonth,
                            [monthKey]: existingProjectData || {}
                        }
                    };
                }
            }["ActualAllocationPage.useEffect.usersWithPayroll"]);
            setUsers(usersWithPayroll);
        }
    }["ActualAllocationPage.useEffect"], []);
    // Check if current user is admin
    const isAdmin = ()=>{
        const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
        return systemUser?.role === 'admin';
    };
    // Toggle lock state (admin only)
    const toggleLock = ()=>{
        if (!isAdmin()) return;
        const newLockState = !isLocked;
        setIsLocked(newLockState);
        // Save lock state to localStorage
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (user) {
            localStorage.setItem(`sola-lock-state-${user}`, newLockState.toString());
        }
    };
    // Recalculate working days when month/year changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const monthKey = `${selectedYear}-${selectedMonth}`;
            setUsers({
                "ActualAllocationPage.useEffect": (prevUsers)=>prevUsers.map({
                        "ActualAllocationPage.useEffect": (user)=>({
                                ...user,
                                fringeDataByMonth: {
                                    ...user.fringeDataByMonth,
                                    [monthKey]: {
                                        ...user.fringeDataByMonth?.[monthKey] || {
                                            annualLeave: 0,
                                            sickLeave: 0,
                                            publicHolidays: 0,
                                            dailyRate: 0
                                        },
                                        workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear)
                                    }
                                }
                            })
                    }["ActualAllocationPage.useEffect"])
            }["ActualAllocationPage.useEffect"]);
        }
    }["ActualAllocationPage.useEffect"], [
        selectedMonth,
        selectedYear
    ]);
    // Reload monthly allocation when month/year changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ActualAllocationPage.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (!user) return;
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const savedMonthlyAllocation = localStorage.getItem(`sola-monthly-allocation-${user}-${monthKey}`);
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            if (savedMonthlyAllocation) {
                const loadedData = JSON.parse(savedMonthlyAllocation);
                // Update descriptions with current month/year, preserving account category
                const updatedData = loadedData.map({
                    "ActualAllocationPage.useEffect.updatedData": (item)=>{
                        // Extract account category name from the account field
                        const accountName = item.account.split(' [')[0];
                        return {
                            ...item,
                            description: `${item.name} - ${accountName} ${MONTHS[selectedMonth]} ${selectedYear}`
                        };
                    }
                }["ActualAllocationPage.useEffect.updatedData"]);
                setMonthlyAllocation(updatedData);
            } else {
                // Initialize with default items for each staff member and account category
                const accountCategories = [
                    {
                        name: 'Net Salary',
                        code: '631 0001'
                    },
                    {
                        name: 'Fringe Benefit - Leave',
                        code: '631 0001'
                    },
                    {
                        name: 'Social Security',
                        code: '635 1001'
                    },
                    {
                        name: 'Employee Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Employer Tax',
                        code: '620 1005'
                    },
                    {
                        name: 'Housing',
                        code: '635 4001'
                    },
                    {
                        name: 'Other Benefits',
                        code: '602 4001'
                    }
                ];
                const defaultItems = [];
                userData.users.forEach({
                    "ActualAllocationPage.useEffect": (user)=>{
                        accountCategories.forEach({
                            "ActualAllocationPage.useEffect": (category, index)=>{
                                defaultItems.push({
                                    id: `${user.id}-${category.code}-${index}`,
                                    name: user.name,
                                    code: category.code,
                                    description: `${user.name} - ${category.name} for ${MONTHS[selectedMonth]} ${selectedYear}`,
                                    currency: 'USD',
                                    amount: 0,
                                    project: '',
                                    projectTask: '',
                                    account: `${category.name} [${category.code}]`
                                });
                            }
                        }["ActualAllocationPage.useEffect"]);
                    }
                }["ActualAllocationPage.useEffect"]);
                setMonthlyAllocation(defaultItems);
            }
        }
    }["ActualAllocationPage.useEffect"], [
        selectedMonth,
        selectedYear
    ]);
    // Calculate working days based on user's work pattern
    const calculateWorkingDays = (workPattern, month, year)=>{
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDays = 0;
        for(let day = 1; day <= daysInMonth; day++){
            date.setDate(day);
            const dayOfWeek = date.getDay();
            if (workPattern === 'mon-fri') {
                if (dayOfWeek >= 1 && dayOfWeek <= 5) workingDays++;
            } else {
                if (dayOfWeek >= 0 && dayOfWeek <= 4) workingDays++;
            }
        }
        return workingDays;
    };
    // Filter projects that are active in the selected month
    const getActiveProjects = ()=>{
        const monthIndex = (selectedYear - 2024) * 12 + selectedMonth;
        return projects.filter((project)=>{
            const projectStartMonth = (project.startYear - 2024) * 12 + (project.startMonth || 0);
            const projectEndMonth = (project.endYear - 2024) * 12 + (project.endMonth || 11);
            return monthIndex >= projectStartMonth && monthIndex <= projectEndMonth;
        });
    };
    // Handle cell value changes
    const handleCellValueChange = (userId, field, value, section, projectId)=>{
        // Prevent changes if locked
        if (isLocked) return;
        const monthKey = `${selectedYear}-${selectedMonth}`;
        const numValue = parseFloat(value) || 0;
        setUsers((prevUsers)=>{
            const updatedUsers = prevUsers.map((user)=>{
                if (user.id === userId) {
                    if (section === 'payroll') {
                        return {
                            ...user,
                            payrollDataByMonth: {
                                ...user.payrollDataByMonth,
                                [monthKey]: {
                                    ...user.payrollDataByMonth?.[monthKey] || {
                                        currency: "USD",
                                        netSalary: 0,
                                        socialSecurity: 0,
                                        employeeTax: 0,
                                        employerTax: 0,
                                        housing: 0,
                                        otherBenefits: 0
                                    },
                                    [field]: field === 'currency' ? value : numValue
                                }
                            }
                        };
                    } else if (section === 'fringe') {
                        return {
                            ...user,
                            fringeDataByMonth: {
                                ...user.fringeDataByMonth,
                                [monthKey]: {
                                    ...user.fringeDataByMonth?.[monthKey] || {
                                        workingDays: calculateWorkingDays(user.workDays || 'mon-fri', selectedMonth, selectedYear),
                                        annualLeave: 0,
                                        sickLeave: 0,
                                        publicHolidays: 0,
                                        dailyRate: 0
                                    },
                                    [field]: numValue
                                }
                            }
                        };
                    } else if (section === 'project' && projectId) {
                        return {
                            ...user,
                            projectDataByMonth: {
                                ...user.projectDataByMonth,
                                [monthKey]: {
                                    ...user.projectDataByMonth?.[monthKey] || {},
                                    [projectId]: numValue
                                }
                            }
                        };
                    }
                }
                return user;
            });
            // Save to localStorage
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
            const updatedUserData = {
                ...userData,
                users: updatedUsers.map((user)=>({
                        ...user,
                        payrollDataByMonth: user.payrollDataByMonth,
                        fringeDataByMonth: user.fringeDataByMonth,
                        projectDataByMonth: user.projectDataByMonth
                    }))
            };
            // Save to localStorage using the same key as the main app
            const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (currentUser) {
                const storageKey = `sola-user-data-${currentUser}`;
                localStorage.setItem(storageKey, JSON.stringify(updatedUserData));
            }
            return updatedUsers;
        });
    };
    // Handle monthly allocation changes
    const handleMonthlyAllocationChange = (itemId, field, value)=>{
        // Prevent changes if locked
        if (isLocked) return;
        setMonthlyAllocation((prev)=>{
            const updated = prev.map((item)=>{
                if (item.id === itemId) {
                    return {
                        ...item,
                        [field]: value
                    };
                }
                return item;
            });
            // Save to localStorage
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (user) {
                localStorage.setItem(`sola-monthly-allocation-${user}-${monthKey}`, JSON.stringify(updated));
            }
            return updated;
        });
    };
    // Group users by entity
    const groupedByEntity = users.reduce((acc, user)=>{
        const entity = user.entity || "Unassigned";
        if (!acc[entity]) {
            acc[entity] = [];
        }
        acc[entity].push(user);
        return acc;
    }, {});
    const activeProjects = getActiveProjects();
    // Filter monthly allocation rows based on main table amounts and update currency and auto-calculate amounts
    const filteredMonthlyAllocation = monthlyAllocation.flatMap((item)=>{
        const user = users.find((u)=>u.id === item.name || u.name === item.name);
        if (!user) return [];
        const monthKey = `${selectedYear}-${selectedMonth}`;
        const payrollData = user.payrollDataByMonth?.[monthKey];
        const fringeData = user.fringeDataByMonth?.[monthKey];
        const projectData = user.projectDataByMonth?.[monthKey] || {};
        // Calculate total project hours for percentage calculation
        const totalProjectHours = activeProjects.reduce((total, project)=>total + (projectData[project.id] || 0), 0);
        // Calculate amount based on account type
        let calculatedAmount = 0;
        const dailyRate = payrollData?.netSalary && fringeData?.workingDays ? payrollData.netSalary / fringeData.workingDays : 0;
        const leaveDeduction = ((fringeData?.annualLeave || 0) + (fringeData?.sickLeave || 0) + (fringeData?.publicHolidays || 0)) * dailyRate;
        const netSalaryForProjects = (payrollData?.netSalary || 0) - leaveDeduction;
        const fringeBenefitAmount = leaveDeduction;
        // Get base amount for this account type
        let baseAmount = 0;
        switch(item.account){
            case 'Net Salary [631 0001]':
                baseAmount = netSalaryForProjects;
                break;
            case 'Social Security [635 1001]':
                baseAmount = payrollData?.socialSecurity || 0;
                break;
            case 'Employee Tax [620 1005]':
                baseAmount = payrollData?.employeeTax || 0;
                break;
            case 'Employer Tax [620 1005]':
                baseAmount = payrollData?.employerTax || 0;
                break;
            case 'Housing [635 4001]':
                baseAmount = payrollData?.housing || 0;
                break;
            case 'Other Benefits [602 4001]':
                baseAmount = payrollData?.otherBenefits || 0;
                break;
            case 'Fringe Benefit - Leave [631 0001]':
                baseAmount = fringeBenefitAmount;
                break;
            default:
                baseAmount = 0;
        }
        // Create rows for each project that has allocated hours
        const projectRows = [];
        if (totalProjectHours > 0 && baseAmount > 0) {
            activeProjects.forEach((project)=>{
                const projectHours = projectData[project.id] || 0;
                if (projectHours > 0) {
                    const projectPercentage = projectHours / totalProjectHours * 100;
                    const calculatedAmount = baseAmount * projectPercentage / 100;
                    projectRows.push({
                        ...item,
                        id: `${item.id}-${project.id}`,
                        currency: payrollData?.currency || 'USD',
                        amount: parseFloat(calculatedAmount.toFixed(2)),
                        project: project.name
                    });
                }
            });
        }
        return projectRows;
    }).filter((item)=>{
        const user = users.find((u)=>u.id === item.name || u.name === item.name);
        if (!user) return false;
        const monthKey = `${selectedYear}-${selectedMonth}`;
        const payrollData = user.payrollDataByMonth?.[monthKey];
        // Check corresponding amount in main table based on account category
        switch(item.account){
            case 'Net Salary [631 0001]':
                return payrollData?.netSalary && payrollData.netSalary > 0;
            case 'Social Security [635 1001]':
                return payrollData?.socialSecurity && payrollData.socialSecurity > 0;
            case 'Employee Tax [620 1005]':
                return payrollData?.employeeTax && payrollData.employeeTax > 0;
            case 'Employer Tax [620 1005]':
                return payrollData?.employerTax && payrollData.employerTax > 0;
            case 'Housing [635 4001]':
                return payrollData?.housing && payrollData.housing > 0;
            case 'Other Benefits [602 4001]':
                return payrollData?.otherBenefits && payrollData.otherBenefits > 0;
            case 'Fringe Benefit - Leave [631 0001]':
                // For fringe benefit, check if any leave data exists
                const fringeData = user.fringeDataByMonth?.[monthKey];
                return fringeData?.annualLeave && fringeData.annualLeave > 0 || fringeData?.sickLeave && fringeData.sickLeave > 0 || fringeData?.publicHolidays && fringeData.publicHolidays > 0;
            default:
                return true;
        }
    });
    const getContrastColor = (hex)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000" : "#fff";
    };
    // Export functions
    const exportToExcel = (data, filename)=>{
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, 'Sheet1');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `${filename}.xlsx`);
    };
    const exportMainTable = ()=>{
        const exportData = users.map((user)=>{
            const monthKey = `${selectedYear}-${selectedMonth}`;
            const payrollData = user.payrollDataByMonth?.[monthKey];
            const fringeData = user.fringeDataByMonth?.[monthKey];
            const projectData = user.projectDataByMonth?.[monthKey] || {};
            const row = {
                Name: user.name,
                Department: user.department,
                Currency: payrollData?.currency || 'USD',
                'Net Salary': payrollData?.netSalary || 0,
                'Social Security': payrollData?.socialSecurity || 0,
                'Employee Tax': payrollData?.employeeTax || 0,
                'Employer Tax': payrollData?.employerTax || 0,
                'Housing': payrollData?.housing || 0,
                'Other Benefits': payrollData?.otherBenefits || 0,
                'Annual Leave': fringeData?.annualLeave || 0,
                'Sick Leave': fringeData?.sickLeave || 0,
                'Public Holidays': fringeData?.publicHolidays || 0,
                'Working Days': fringeData?.workingDays || 0,
                'Daily Rate': payrollData?.netSalary && fringeData?.workingDays ? (payrollData.netSalary / fringeData.workingDays).toFixed(2) : '0.00'
            };
            // Add project columns
            activeProjects.forEach((project)=>{
                row[project.name] = projectData[project.id] || 0;
            });
            return row;
        });
        exportToExcel(exportData, `Actual_Allocation_${MONTHS[selectedMonth]}_${selectedYear}`);
    };
    const exportMonthlyTable = ()=>{
        const exportData = filteredMonthlyAllocation.map((item)=>{
            // Split account into name and code
            const accountName = item.account.split(' [')[0];
            const accountCode = item.account.includes(' [') ? item.account.split(' [')[1].replace(']', '') : '';
            return {
                'Account Name': accountName,
                'Account Code': accountCode,
                Description: item.description,
                Currency: item.currency,
                Amount: item.amount,
                Project: item.project,
                'Project Task': item.projectTask
            };
        });
        exportToExcel(exportData, `Monthly_Allocation_${MONTHS[selectedMonth]}_${selectedYear}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white border-b border-gray-200 px-6 py-3 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Staff Allocation Tool"
                        }, void 0, false, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-gray-600 hover:text-gray-800 font-medium",
                                    children: "Allocation"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/planning",
                                    className: "text-gray-600 hover:text-gray-800 font-medium",
                                    children: "Planning"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/actual-allocation",
                                    className: "text-blue-600 hover:text-blue-800 font-medium",
                                    children: "Actual Allocation"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 605,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex gap-2 items-center",
                            children: [
                                isClient && isAdmin() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: toggleLock,
                                    variant: isLocked ? "destructive" : "outline",
                                    size: "sm",
                                    className: "font-medium",
                                    children: isLocked ? "🔒 Locked" : "🔓 Lock"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this),
                                isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setShowPercentage(!showPercentage),
                                    variant: showPercentage ? "default" : "outline",
                                    size: "sm",
                                    className: "font-medium",
                                    children: showPercentage ? "🔢 Values" : "📊 % View"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedMonth,
                                    onChange: (e)=>setSelectedMonth(Number(e.target.value)),
                                    className: "border border-gray-300 rounded px-2 py-1 text-sm",
                                    children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: idx,
                                            children: month
                                        }, idx, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedYear,
                                    onChange: (e)=>setSelectedYear(Number(e.target.value)),
                                    className: "border border-gray-300 rounded px-2 py-1 text-sm",
                                    children: [
                                        2023,
                                        2024,
                                        2025,
                                        2026,
                                        2027
                                    ].map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: year,
                                            children: year
                                        }, year, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                                        if (user) {
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCurrentUser"])();
                                            window.location.href = "/login";
                                        }
                                    },
                                    variant: "outline",
                                    size: "sm",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/actual-allocation/page.tsx",
                    lineNumber: 590,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "Actual Allocation"
                    }, void 0, false, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 669,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: exportMainTable,
                        variant: "outline",
                        size: "sm",
                        className: "font-medium",
                        children: "📊 Export to Excel"
                    }, void 0, false, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse border border-gray-300 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 w-32",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 684,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 w-32",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 685,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: 7,
                                            children: "Payroll"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: 5,
                                            children: "Fringe"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                            colSpan: activeProjects.length + 1,
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 w-32 text-xs text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 691,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 w-32 text-xs text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Currency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Net Salary ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[631 0001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 110
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Social Security ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[635 1001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 115
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Employee Tax ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[620 1005]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 697,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Employer Tax ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[620 1005]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Housing ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[635 4001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 699,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: [
                                                "Other Benefits ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '10px',
                                                        opacity: 0.7
                                                    },
                                                    children: "[602 4001]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 114
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 700,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Working Days"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Annual Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Sick Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Public Holidays"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Daily Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, this),
                                        activeProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                style: {
                                                    backgroundColor: project.color + '20',
                                                    color: '#000'
                                                },
                                                children: project.name
                                            }, project.id, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: Object.entries(groupedByEntity).map(([entity, entityUsers])=>{
                                // Calculate total payroll amounts for this entity
                                const monthKey = `${selectedYear}-${selectedMonth}`;
                                const entityTotals = entityUsers.reduce((totals, user)=>{
                                    const payrollData = user.payrollDataByMonth?.[monthKey];
                                    if (payrollData) {
                                        totals.netSalary += payrollData.netSalary || 0;
                                        totals.socialSecurity += payrollData.socialSecurity || 0;
                                        totals.employeeTax += payrollData.employeeTax || 0;
                                        totals.employerTax += payrollData.employerTax || 0;
                                        totals.housing += payrollData.housing || 0;
                                        totals.otherBenefits += payrollData.otherBenefits || 0;
                                    }
                                    return totals;
                                }, {
                                    netSalary: 0,
                                    socialSecurity: 0,
                                    employeeTax: 0,
                                    employerTax: 0,
                                    housing: 0,
                                    otherBenefits: 0
                                });
                                const grandTotal = entityTotals.netSalary + entityTotals.socialSecurity + entityTotals.employeeTax + entityTotals.employerTax + entityTotals.housing + entityTotals.otherBenefits;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200",
                                                    children: entity
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200 text-right",
                                                    children: [
                                                        "(",
                                                        grandTotal.toFixed(2),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this),
                                                activeProjects.map((project)=>{
                                                    // Calculate average percentage for this entity and project across ALL users
                                                    const userPercentages = entityUsers.map((user)=>{
                                                        const projectData = user.projectDataByMonth?.[monthKey] || {};
                                                        const totalHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                                                        const projectHours = projectData[project.id] || 0;
                                                        return totalHours > 0 ? projectHours / totalHours * 100 : 0;
                                                    });
                                                    const avgPercentage = userPercentages.length > 0 ? userPercentages.reduce((sum, percentage)=>sum + percentage, 0) / userPercentages.length : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-1 bg-cyan-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-center font-medium",
                                                            children: showPercentage && avgPercentage > 0 ? avgPercentage.toFixed(1) + '%' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, project.id, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-1 bg-cyan-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 745,
                                            columnNumber: 17
                                        }, this),
                                        entityUsers.map((user)=>{
                                            const monthKey = `${selectedYear}-${selectedMonth}`;
                                            const payrollData = user.payrollDataByMonth?.[monthKey];
                                            const fringeData = user.fringeDataByMonth?.[monthKey];
                                            const projectData = user.projectDataByMonth?.[monthKey] || {};
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs leading-tight",
                                                            children: user.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs leading-tight text-gray-600",
                                                            children: user.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: payrollData?.currency || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "currency", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "USD",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 803,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.netSalary || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "netSalary", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.socialSecurity || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "socialSecurity", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.employeeTax || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "employeeTax", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.employerTax || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "employerTax", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.housing || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "housing", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 859,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: payrollData?.otherBenefits || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "otherBenefits", e.target.value, "payroll"),
                                                            className: "w-full text-xs text-right border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-center font-medium",
                                                            children: fringeData?.workingDays || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.annualLeave || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "annualLeave", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.sickLeave || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "sickLeave", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 898,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: fringeData?.publicHolidays || "",
                                                            onChange: (e)=>handleCellValueChange(user.id, "publicHolidays", e.target.value, "fringe"),
                                                            className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                            placeholder: "0",
                                                            disabled: isLocked,
                                                            style: {
                                                                backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 908,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-right font-medium",
                                                            children: payrollData?.netSalary && fringeData?.workingDays ? (payrollData.netSalary / fringeData.workingDays).toFixed(2) : "0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 920,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 21
                                                    }, this),
                                                    activeProjects.map((project)=>{
                                                        const totalProjectHours = activeProjects.reduce((total, p)=>total + (projectData[p.id] || 0), 0);
                                                        const projectHours = projectData[project.id] || 0;
                                                        const percentage = totalProjectHours > 0 ? (projectHours / totalProjectHours * 100).toFixed(1) : '0.0';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-gray-300 p-0.5",
                                                            style: {
                                                                backgroundColor: project.color + '10'
                                                            },
                                                            children: showPercentage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full text-xs text-center",
                                                                style: {
                                                                    backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                                },
                                                                children: [
                                                                    percentage,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: projectData[project.id] || "",
                                                                onChange: (e)=>handleCellValueChange(user.id, project.id, e.target.value, "project", project.id),
                                                                className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                                placeholder: "0",
                                                                min: "0",
                                                                max: "100",
                                                                disabled: isLocked,
                                                                style: {
                                                                    backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, project.id, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 p-0.5 bg-gray-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full text-xs text-right font-medium",
                                                            children: showPercentage ? "100%" : activeProjects.reduce((total, project)=>total + (projectData[project.id] || 0), 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                                            lineNumber: 956,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, user.id, true, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, entity, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/actual-allocation/page.tsx",
                    lineNumber: 681,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this),
            users.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 text-gray-500",
                children: "No staff data available. Please add staff members first."
            }, void 0, false, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 974,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Monthly Allocation"
                            }, void 0, false, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: exportMonthlyTable,
                                variant: "outline",
                                size: "sm",
                                className: "font-medium",
                                children: "📊 Export to Excel"
                            }, void 0, false, {
                                fileName: "[project]/app/actual-allocation/page.tsx",
                                lineNumber: 983,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 981,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse border border-gray-300 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 p-1 bg-gray-100 text-center",
                                                colSpan: 7,
                                                children: "Monthly Allocation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/actual-allocation/page.tsx",
                                                lineNumber: 996,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 995,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Account Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 999,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Account Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Currency"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1003,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1004,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-50 text-xs text-muted-foreground",
                                                    children: "Project Task"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1005,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 998,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filteredMonthlyAllocation.map((item)=>{
                                        // Split account into name and code
                                        const accountName = item.account.split(' [')[0];
                                        const accountCode = item.account.includes(' [') ? item.account.split(' [')[1].replace(']', '') : '';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs leading-tight",
                                                        children: accountName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs leading-tight",
                                                        children: accountCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1022,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-center",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1027,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: item.currency,
                                                        onChange: (e)=>handleMonthlyAllocationChange(item.id, 'currency', e.target.value),
                                                        className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                        placeholder: "USD",
                                                        disabled: isLocked,
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1032,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1031,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-right",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.amount.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1043,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1042,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full text-xs text-center",
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : '#f9fafb'
                                                        },
                                                        children: item.project
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1047,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 p-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: item.projectTask,
                                                        onChange: (e)=>handleMonthlyAllocationChange(item.id, 'projectTask', e.target.value),
                                                        className: "w-full text-xs text-center border-0 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 rounded",
                                                        placeholder: "Enter task",
                                                        disabled: isLocked,
                                                        style: {
                                                            backgroundColor: isLocked ? '#f3f4f6' : 'transparent'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/actual-allocation/page.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/app/actual-allocation/page.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/actual-allocation/page.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/actual-allocation/page.tsx",
                            lineNumber: 993,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/actual-allocation/page.tsx",
                        lineNumber: 992,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/actual-allocation/page.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/actual-allocation/page.tsx",
        lineNumber: 588,
        columnNumber: 5
    }, this);
}
_s(ActualAllocationPage, "5oINuAkYitSglBXM2s794Y4kZds=");
_c = ActualAllocationPage;
var _c;
__turbopack_context__.k.register(_c, "ActualAllocationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7f3f69fa._.js.map