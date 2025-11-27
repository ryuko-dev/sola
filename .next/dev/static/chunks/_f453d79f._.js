(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/allocation-cell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllocationCell",
    ()=>AllocationCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AllocationCell({ userId, monthIndex, allocations = [], onEdit, onSaveEdit, onRemove, onEmptyCellClick, projects = [], users = [], userEnded = false, userNotStarted = false, viewMode = 'percentage', getDaysFromPercentage, readOnly = false }) {
    _s();
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Helper to convert percentage to days based on user work pattern
    const getDaysFromPercentageLocal = (userId, monthIndex, percentage)=>{
        if (getDaysFromPercentage) {
            return getDaysFromPercentage(userId, monthIndex, percentage);
        }
        // Fallback calculation if function not provided
        const year = Math.floor(monthIndex / 12) + 2024;
        const month = monthIndex % 12;
        // Default to mon-fri for now
        const workPattern = 'mon-fri';
        const startDay = ("TURBOPACK compile-time truthy", 1) ? 1 : "TURBOPACK unreachable";
        // Calculate working days in month
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDays = 0;
        for(let day = 1; day <= daysInMonth; day++){
            date.setDate(day);
            const dayOfWeek = date.getDay();
            if (startDay === 1) {
                if (dayOfWeek >= 1 && dayOfWeek <= 5) workingDays++;
            } else {
                if (dayOfWeek >= 0 && dayOfWeek <= 4) workingDays++;
            }
        }
        return Math.round(percentage / 100 * workingDays);
    };
    // Calculate total allocated percentage for this cell
    const totalAllocated = allocations.reduce((sum, a)=>sum + (a.percentage || 0), 0);
    const freePercentage = Math.max(0, 100 - totalAllocated);
    // Determine border class based on allocation level
    const allocationBorderClass = totalAllocated === 100 ? "border-2 border-green-500" : totalAllocated > 100 ? "border-2 border-red-500" : "";
    const handleClick = ()=>{
        if (freePercentage > 0 && onEmptyCellClick && !userNotStarted) {
            onEmptyCellClick();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-user-id": userId,
        "data-month": monthIndex,
        className: `w-32 border-r border-b border-border bg-background px-1 py-0.5 min-h-8 transition-colors relative ${userEnded || userNotStarted || readOnly ? "cursor-not-allowed bg-gray-50" : freePercentage > 0 && onEmptyCellClick ? "cursor-pointer hover:bg-muted/50" : "hover:bg-muted/30"}`,
        onMouseEnter: ()=>!userEnded && !userNotStarted && !readOnly && freePercentage > 0 && setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        onClick: userEnded || userNotStarted || readOnly ? undefined : handleClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full gap-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex w-full h-4 rounded overflow-hidden bg-gray-100 ${allocationBorderClass}`,
                            children: userEnded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-[8px] font-semibold text-gray-500 bg-gray-200",
                                children: "ended"
                            }, void 0, false, {
                                fileName: "[project]/components/allocation-cell.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this) : userNotStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-[8px] font-semibold text-gray-500 bg-gray-200",
                                children: "not started"
                            }, void 0, false, {
                                fileName: "[project]/components/allocation-cell.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this) : allocations.map((allocation)=>{
                                const project = projects.find((p)=>p.id === allocation.projectId);
                                console.log("[v0] AllocationCell rendering bar:", {
                                    allocationId: allocation.id,
                                    projectId: allocation.projectId,
                                    projectColor: project?.color
                                });
                                // Keep total bar size constant: if allocations exceed 100%,
                                // normalize segments so they still fit into a 100% width bar.
                                const capacity = totalAllocated > 100 ? totalAllocated : 100;
                                const width = Math.max(0, Math.min(100, (allocation.percentage || 0) / capacity * 100));
                                // Calculate display value based on view mode
                                const displayValue = viewMode === 'days' ? Math.round(getDaysFromPercentageLocal(userId, monthIndex, allocation.percentage || 0)) : Math.round(allocation.percentage || 0);
                                const displayText = viewMode === 'days' ? `${displayValue} days` : `${displayValue}%`;
                                // Calculate days for tooltip (always show days)
                                const daysValue = getDaysFromPercentageLocal(userId, monthIndex, allocation.percentage || 0);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full text-[8px] flex items-center justify-center font-semibold relative ${readOnly ? "" : "group cursor-pointer"} text-white`,
                                    style: {
                                        backgroundColor: project?.color || "#999",
                                        width: `${width}%`,
                                        minWidth: width > 0 ? "8%" : undefined
                                    },
                                    onClick: (e)=>{
                                        if (readOnly) return;
                                        e.stopPropagation();
                                        onEdit?.(allocation.id);
                                    },
                                    title: `${project?.name ?? "Project"} - ${allocation.positionName || allocation.name || "Position"} (${displayText})`,
                                    children: [
                                        displayText,
                                        !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onRemove?.(allocation.id);
                                            },
                                            className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-cell.tsx",
                                            lineNumber: 168,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, allocation.id, true, {
                                    fileName: "[project]/components/allocation-cell.tsx",
                                    lineNumber: 149,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-cell.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        !userEnded && !userNotStarted && totalAllocated >= 90 && totalAllocated <= 100 && allocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-1 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-green-500",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-cell.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/allocation-cell.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-cell.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-cell.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                !userEnded && !userNotStarted && !readOnly && isHovering && freePercentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-primary/10 rounded text-[9px] text-primary font-medium pointer-events-none",
                    children: "Click to select position"
                }, void 0, false, {
                    fileName: "[project]/components/allocation-cell.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/allocation-cell.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/allocation-cell.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(AllocationCell, "xqXBLhnKkwZr5xY4qQxtlyrsWmc=");
_c = AllocationCell;
var _c;
__turbopack_context__.k.register(_c, "AllocationCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project-manager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectManager",
    ()=>ProjectManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProjectManager({ projects, positions = [], months, startMonth = 0, startYear = 2024, onAddProject, onUpdateProject, onDeleteProject, onUpdatePositions, onProjectSelect, selectedProjectId, onCleanupAllocations, currentUserRole }) {
    _s();
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProjectId, setEditingProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newProjectName, setNewProjectName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#3B82F6");
    const [positionBudgets, setPositionBudgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projectStartMonth, setProjectStartMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [projectStartYear, setProjectStartYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [projectEndMonth, setProjectEndMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [projectEndYear, setProjectEndYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [monthTablePage, setMonthTablePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allocationMode, setAllocationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('percentage');
    // Check if current user can edit projects
    const canEditProjects = currentUserRole === 'admin' || currentUserRole === 'editor';
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
    const YEARS = Array.from({
        length: 10
    }, (_, i)=>2024 + i);
    // Helper to calculate working days in a month
    const getWorkingDaysInMonth = (year, month, startDay = 1)=>{
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDays = 0;
        for(let day = 1; day <= daysInMonth; day++){
            date.setDate(day);
            const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
            ;
            if (startDay === 1) {
                // Monday to Friday (1-5)
                if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                    workingDays++;
                }
            } else {
                // Sunday to Thursday (0-4)
                if (dayOfWeek >= 0 && dayOfWeek <= 4) {
                    workingDays++;
                }
            }
        }
        return workingDays;
    };
    const COLORS = [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#8B5CF6",
        "#EC4899",
        "#06B6D4",
        "#EF4444",
        "#14B8A6"
    ];
    const toGlobalMonthIndex = (month, year)=>{
        return (year - 2024) * 12 + month;
    };
    const fromGlobalMonthIndex = (globalIndex)=>{
        return {
            month: globalIndex % 12,
            year: 2024 + Math.floor(globalIndex / 12)
        };
    };
    const projectDurationMonths = (()=>{
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        return Math.max(1, endIdx - startIdx + 1);
    })();
    const getDisplayMonths = ()=>{
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        const pageStart = startIdx + monthTablePage * 12;
        const pageEnd = Math.min(pageStart + 12, endIdx + 1);
        const displayMonths = [];
        for(let i = pageStart; i < pageEnd; i++){
            const { month, year } = fromGlobalMonthIndex(i);
            displayMonths.push({
                month,
                year,
                displayName: `${MONTHS[month].slice(0, 3)} ${year.toString().slice(-2)}`,
                globalIndex: i
            });
        }
        return displayMonths;
    };
    const displayMonths = getDisplayMonths();
    const maxPages = Math.ceil(projectDurationMonths / 12);
    const handleCreateProject = ()=>{
        if (!newProjectName.trim()) return;
        console.log('[DEBUG] Creating project with dates:', {
            projectStartMonth,
            projectStartYear,
            projectEndMonth,
            projectEndYear
        });
        const newProject = {
            id: `proj-${Date.now()}`,
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear,
            allocationMode
        };
        console.log('[DEBUG] Project object being created:', newProject);
        onAddProject(newProject);
        const newPositions = [];
        const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear);
        const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear);
        positionBudgets.forEach((positionBudget)=>{
            displayMonths.forEach((displayMonth, displayIdx)=>{
                const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0;
                if (percentage > 0) {
                    const position = {
                        id: `pos-${newProject.id}-${positionBudget.id}-${displayMonth.globalIndex}`,
                        projectId: newProject.id,
                        monthIndex: displayMonth.globalIndex,
                        percentage: allocationMode === 'days' ? percentage / getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1) * 100 : percentage,
                        allocated: 0,
                        name: positionBudget.name,
                        projectTask: positionBudget.projectTask,
                        days: allocationMode === 'days' ? percentage : undefined
                    };
                    newPositions.push(position);
                }
            });
        });
        if (newPositions.length > 0) {
            onUpdatePositions([
                ...positions,
                ...newPositions
            ]);
        }
        setNewProjectName("");
        setSelectedColor("#3B82F6");
        setPositionBudgets([]);
        setProjectStartMonth(0);
        setProjectStartYear(2024);
        setProjectEndMonth(0);
        setProjectEndYear(2024);
        setMonthTablePage(0);
        setAllocationMode('percentage');
        setShowCreateModal(false);
    };
    const handleEditProject = (projectId)=>{
        setEditingProjectId(projectId);
        const project = projects.find((p)=>p.id === projectId);
        if (project) {
            setNewProjectName(project.name);
            setSelectedColor(project.color);
            setProjectStartMonth(project.startMonth ?? 0);
            setProjectStartYear(project.startYear ?? 2024);
            setProjectEndMonth(project.endMonth ?? 0);
            setProjectEndYear(project.endYear ?? 2024);
            setAllocationMode(project.allocationMode ?? 'percentage');
            setMonthTablePage(0);
            const projectPositions = positions.filter((p)=>p.projectId === projectId);
            const positionMap = new Map();
            projectPositions.forEach((p)=>{
                const name = p.name || "Unnamed Position";
                if (!positionMap.has(name)) {
                    positionMap.set(name, {
                        id: `${name}-${Date.now()}`,
                        name,
                        projectTask: p.projectTask,
                        budgets: {}
                    });
                }
                const pos = positionMap.get(name);
                // Use days if available, otherwise use percentage
                const value = project.allocationMode === 'days' && p.days ? p.days : p.percentage;
                pos.budgets[p.monthIndex] = value;
            });
            setPositionBudgets(Array.from(positionMap.values()));
        }
    };
    const handleSaveEditProject = ()=>{
        if (!editingProjectId || !newProjectName.trim()) return;
        const projectId = editingProjectId // Store before clearing state
        ;
        console.log("[v0] Saving project with dates:", {
            projectId,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        });
        console.log("[v0] Saving project with color:", {
            projectId,
            selectedColor
        });
        console.log("[v0] About to call onUpdateProject with:", {
            projectId,
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear
        });
        // Update positions BEFORE updating the project to avoid triggering another project update
        const existingPositions = positions.filter((p)=>p.projectId === projectId);
        const newPositions = [];
        positionBudgets.forEach((positionBudget)=>{
            displayMonths.forEach((displayMonth)=>{
                const value = positionBudget.budgets[displayMonth.globalIndex] || 0;
                if (value > 0) {
                    const existingPos = existingPositions.find((p)=>p.monthIndex === displayMonth.globalIndex && p.name === positionBudget.name);
                    const project = projects.find((p)=>p.id === projectId);
                    const mode = project?.allocationMode || 'percentage';
                    const position = {
                        id: existingPos?.id || `pos-${projectId}-${positionBudget.id}-${displayMonth.globalIndex}`,
                        projectId,
                        monthIndex: displayMonth.globalIndex,
                        percentage: mode === 'days' ? value / getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1) * 100 : value,
                        allocated: existingPos?.allocated || 0,
                        name: positionBudget.name,
                        projectTask: positionBudget.projectTask,
                        days: mode === 'days' ? value : undefined
                    };
                    newPositions.push(position);
                }
            });
        });
        const otherPositions = positions.filter((p)=>p.projectId !== projectId);
        onUpdatePositions([
            ...otherPositions,
            ...newPositions
        ]);
        // Clean up allocations for removed positions
        if (onCleanupAllocations) {
            const validPositionIds = newPositions.map((p)=>p.id);
            onCleanupAllocations(projectId, validPositionIds);
        }
        // Now update the project
        onUpdateProject(projectId, {
            name: newProjectName,
            color: selectedColor,
            startMonth: projectStartMonth,
            startYear: projectStartYear,
            endMonth: projectEndMonth,
            endYear: projectEndYear,
            allocationMode
        });
        // Close the edit modal immediately so the project list re-renders with the new color
        setEditingProjectId(null);
        setNewProjectName("");
        setSelectedColor("#3B82F6");
        setPositionBudgets([]);
        setProjectStartMonth(0);
        setProjectStartYear(2024);
        setProjectEndMonth(0);
        setProjectEndYear(2024);
        setMonthTablePage(0);
        setAllocationMode('percentage');
    };
    const handleAddPositionLine = ()=>{
        setPositionBudgets([
            ...positionBudgets,
            {
                id: `pos-${Date.now()}`,
                name: "New Position",
                budgets: {}
            }
        ]);
    };
    const handleDeletePositionLine = (id)=>{
        setPositionBudgets(positionBudgets.filter((p)=>p.id !== id));
    };
    const handleUpdatePositionName = (id, name)=>{
        setPositionBudgets(positionBudgets.map((p)=>p.id === id ? {
                ...p,
                name
            } : p));
    };
    const handleUpdateProjectTask = (id, projectTask)=>{
        setPositionBudgets(positionBudgets.map((p)=>p.id === id ? {
                ...p,
                projectTask
            } : p));
    };
    const handleUpdatePositionBudget = (id, globalMonthIndex, value)=>{
        setPositionBudgets(positionBudgets.map((p)=>p.id === id ? {
                ...p,
                budgets: {
                    ...p.budgets,
                    [globalMonthIndex]: value
                }
            } : p));
    };
    const exportPositionsToExcel = ()=>{
        if (positionBudgets.length === 0) {
            alert("No positions to export");
            return;
        }
        let csvContent = "";
        // Create header row with project task, position name and all months
        const headerRow = [
            "Project Task",
            "Position Name",
            ...displayMonths.map((m)=>m.displayName)
        ];
        csvContent += headerRow.join(",") + "\n";
        // Add data rows for each position (only include positions with names)
        positionBudgets.filter((p)=>p.name.trim() !== "").forEach((position)=>{
            const row = [
                position.projectTask || "",
                position.name
            ];
            displayMonths.forEach((month)=>{
                const value = position.budgets[month.globalIndex] || 0;
                row.push(value.toString());
            });
            csvContent += row.join(",") + "\n";
        });
        // Create and download the file
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const projectName = newProjectName || "Project";
        const fileName = `${projectName}-positions-${allocationMode}-${new Date().toISOString().split('T')[0]}.csv`;
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const importPositionsFromExcel = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e)=>{
            try {
                const text = e.target?.result;
                const lines = text.split('\n').filter((line)=>line.trim());
                if (lines.length < 2) {
                    alert("File must contain at least a header row and one data row");
                    return;
                }
                // Parse header row to get months
                const headers = lines[0].split(',').map((h)=>h.trim());
                const monthHeaders = headers.slice(2) // Remove "Project Task" and "Position Name"
                ;
                // Parse data rows
                const importedPositions = [];
                for(let i = 1; i < lines.length; i++){
                    const values = lines[i].split(',').map((v)=>v.trim());
                    if (values.length < 3 || !values[1]) continue; // Skip empty rows
                    const projectTask = values[0];
                    const positionName = values[1];
                    const budgets = {};
                    // Map values to months
                    values.slice(2).forEach((value, index)=>{
                        if (index < displayMonths.length) {
                            const numValue = parseFloat(value) || 0;
                            budgets[displayMonths[index].globalIndex] = numValue;
                        }
                    });
                    importedPositions.push({
                        id: `imported-${positionName}-${Date.now()}-${i}`,
                        name: positionName,
                        projectTask,
                        budgets
                    });
                }
                if (importedPositions.length > 0) {
                    if (positionBudgets.some((p)=>p.name.trim() !== "")) {
                        const confirmReplace = confirm(`Import will replace existing positions with ${importedPositions.length} imported positions. Continue?`);
                        if (!confirmReplace) return;
                    }
                    // Update the positionBudgets state for the table display
                    setPositionBudgets(importedPositions);
                    alert(`Successfully imported ${importedPositions.length} positions`);
                } else {
                    alert("No valid position data found in file");
                }
            } catch (error) {
                console.error('Import error:', error);
                alert("Error importing file. Please check the file format and try again.");
            }
        };
        reader.onerror = ()=>{
            alert("Error reading file");
        };
        reader.readAsText(file);
        // Reset the file input
        if (event.target) {
            event.target.value = '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 items-center",
                children: [
                    projects.map((project)=>{
                        // Determine if text should be white or black based on background color brightness
                        const getContrastColor = (hex)=>{
                            const r = parseInt(hex.slice(1, 3), 16);
                            const g = parseInt(hex.slice(3, 5), 16);
                            const b = parseInt(hex.slice(5, 7), 16);
                            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                            return brightness > 128 ? "#000" : "#fff";
                        };
                        const textColor = getContrastColor(project.color);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center justify-between px-3 py-1.5 rounded border border-border cursor-pointer hover:opacity-80 transition-opacity w-32 h-8 ${selectedProjectId === project.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`,
                            style: {
                                backgroundColor: project.color,
                                color: textColor
                            },
                            onClick: ()=>{
                                if (onProjectSelect) {
                                    onProjectSelect(selectedProjectId === project.id ? null : project.id);
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium truncate flex-1",
                                    children: project.name
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this),
                                canEditProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        handleEditProject(project.id);
                                    },
                                    className: "px-1.5 py-0.5 text-[10px] bg-white/20 rounded hover:bg-white/30 transition-colors flex-shrink-0",
                                    style: {
                                        color: textColor
                                    },
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this);
                    }),
                    canEditProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm",
                        children: "+ New Project"
                    }, void 0, false, {
                        fileName: "[project]/components/project-manager.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project-manager.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            (showCreateModal || editingProjectId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card p-6 rounded-lg border border-border shadow-lg max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-foreground mb-4",
                            children: editingProjectId ? "Edit Project" : "Create New Project"
                        }, void 0, false, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 544,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Project Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newProjectName,
                                            onChange: (e)=>setNewProjectName(e.target.value),
                                            className: "w-full px-3 py-2 border border-border rounded text-foreground bg-card",
                                            placeholder: "Enter project name",
                                            disabled: !canEditProjects,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 551,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Project Color"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-wrap",
                                            children: COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        console.log("[v0] Color picker clicked, setting color to:", color);
                                                        setSelectedColor(color);
                                                    },
                                                    className: `w-8 h-8 rounded transition-all ${selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:opacity-80"}`,
                                                    style: {
                                                        backgroundColor: color
                                                    },
                                                    title: color
                                                }, color, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-2 block",
                                    children: "Allocation Mode"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "allocationMode",
                                                    value: "percentage",
                                                    checked: allocationMode === 'percentage',
                                                    onChange: (e)=>setAllocationMode('percentage'),
                                                    className: "text-primary",
                                                    disabled: !canEditProjects
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "% Allocation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "allocationMode",
                                                    value: "days",
                                                    checked: allocationMode === 'days',
                                                    onChange: (e)=>setAllocationMode('days'),
                                                    className: "text-primary",
                                                    disabled: !canEditProjects
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "Day Allocation"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Start Month"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectStartMonth,
                                            onChange: (e)=>setProjectStartMonth(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            disabled: !canEditProjects,
                                            children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: month
                                                }, idx, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "Start Year"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectStartYear,
                                            onChange: (e)=>setProjectStartYear(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            disabled: !canEditProjects,
                                            children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: year,
                                                    children: year
                                                }, year, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "End Month"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 645,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectEndMonth,
                                            onChange: (e)=>setProjectEndMonth(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            disabled: !canEditProjects,
                                            children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: idx,
                                                    children: month
                                                }, idx, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground mb-2 block",
                                            children: "End Year"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 661,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: projectEndYear,
                                            onChange: (e)=>setProjectEndYear(Number(e.target.value)),
                                            className: "border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground",
                                            disabled: !canEditProjects,
                                            children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: year,
                                                    children: year
                                                }, year, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-medium text-muted-foreground",
                                            children: [
                                                "Positions by Month (",
                                                allocationMode === 'days' ? 'Days' : '%',
                                                ") - Page ",
                                                monthTablePage + 1,
                                                " of ",
                                                maxPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMonthTablePage(Math.max(0, monthTablePage - 1)),
                                                    disabled: monthTablePage === 0,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: "← Prev 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMonthTablePage(Math.min(maxPages - 1, monthTablePage + 1)),
                                                    disabled: monthTablePage >= maxPages - 1,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: "Next 12 →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAddPositionLine,
                                                    className: "px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors",
                                                    disabled: !canEditProjects,
                                                    children: "+ Add Position"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: exportPositionsToExcel,
                                                    className: "px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors",
                                                    title: "Export positions to Excel",
                                                    children: "📥 Export"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>document.getElementById('excel-import-input')?.click(),
                                                    className: "px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                                                    title: "Import positions from Excel",
                                                    disabled: !canEditProjects,
                                                    children: "📤 Import"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "excel-import-input",
                                                    type: "file",
                                                    accept: ".xlsx,.xls,.csv",
                                                    onChange: importPositionsFromExcel,
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    disabled: !canEditProjects
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project-manager.tsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 678,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-border rounded overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-muted border-b border-border",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left font-semibold text-muted-foreground min-w-20",
                                                            children: "Project Task"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project-manager.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-left font-semibold text-muted-foreground min-w-40",
                                                            children: "Position Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project-manager.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 23
                                                        }, this),
                                                        displayMonths.map((displayMonth)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-2 text-center font-semibold text-muted-foreground min-w-20",
                                                                children: displayMonth.displayName
                                                            }, displayMonth.globalIndex, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-2 text-center font-semibold text-muted-foreground w-10",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project-manager.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/project-manager.tsx",
                                                lineNumber: 731,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: positionBudgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: displayMonths.length + 3,
                                                        className: "px-4 py-8 text-center text-muted-foreground",
                                                        children: 'No positions yet. Click "Add Position" to create one.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/project-manager.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project-manager.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 23
                                                }, this) : positionBudgets.map((positionBudget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t border-border hover:bg-muted/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 border-r border-border",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: positionBudget.projectTask || "",
                                                                    onChange: (e)=>handleUpdateProjectTask(positionBudget.id, e.target.value),
                                                                    className: "w-full px-2 py-1 border border-border rounded text-foreground bg-card",
                                                                    placeholder: "e.g., 01.03.01",
                                                                    disabled: !canEditProjects
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 761,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 760,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 border-r border-border",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: positionBudget.name,
                                                                    onChange: (e)=>handleUpdatePositionName(positionBudget.id, e.target.value),
                                                                    className: "w-full px-2 py-1 border border-border rounded text-foreground bg-card",
                                                                    placeholder: "e.g., Senior Developer",
                                                                    disabled: !canEditProjects
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 27
                                                            }, this),
                                                            displayMonths.map((displayMonth)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-2 border-r border-border last:border-r-0 bg-background",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        max: allocationMode === 'days' ? getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1) : 999,
                                                                        value: positionBudget.budgets[displayMonth.globalIndex] || "",
                                                                        onChange: (e)=>handleUpdatePositionBudget(positionBudget.id, displayMonth.globalIndex, e.target.value ? Number(e.target.value) : 0),
                                                                        className: "w-full px-2 py-1 text-center border border-border rounded text-foreground bg-card",
                                                                        placeholder: allocationMode === 'days' ? `0-${getWorkingDaysInMonth(displayMonth.year, displayMonth.month, 1)} days` : "0%",
                                                                        disabled: !canEditProjects
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/project-manager.tsx",
                                                                        lineNumber: 785,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, displayMonth.globalIndex, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeletePositionLine(positionBudget.id),
                                                                    className: "px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors",
                                                                    disabled: !canEditProjects,
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project-manager.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project-manager.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, positionBudget.id, true, {
                                                        fileName: "[project]/components/project-manager.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/project-manager.tsx",
                                                lineNumber: 750,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/project-manager.tsx",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 677,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowCreateModal(false);
                                        setEditingProjectId(null);
                                        setNewProjectName("");
                                        setSelectedColor("#3B82F6");
                                        setPositionBudgets([]);
                                        setProjectStartMonth(0);
                                        setProjectStartYear(2024);
                                        setProjectEndMonth(0);
                                        setProjectEndYear(2024);
                                        setMonthTablePage(0);
                                        setAllocationMode('percentage');
                                    },
                                    className: "px-4 py-2 bg-muted text-muted-foreground rounded font-medium hover:bg-muted/80 transition-colors text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 821,
                                    columnNumber: 15
                                }, this),
                                editingProjectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (window.confirm("Are you sure you want to delete this project? All positions will be removed.")) {
                                            onDeleteProject(editingProjectId);
                                            setEditingProjectId(null);
                                            setNewProjectName("");
                                            setSelectedColor("#3B82F6");
                                            setPositionBudgets([]);
                                            setProjectStartMonth(0);
                                            setProjectStartYear(2024);
                                            setProjectEndMonth(0);
                                            setProjectEndYear(2024);
                                            setMonthTablePage(0);
                                            setAllocationMode('percentage');
                                        }
                                    },
                                    className: "px-4 py-2 bg-destructive text-black rounded font-medium hover:bg-destructive/90 transition-colors text-sm",
                                    children: "Delete Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 840,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: editingProjectId ? handleSaveEditProject : handleCreateProject,
                                    className: "px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm",
                                    disabled: !canEditProjects,
                                    children: editingProjectId ? "Save Changes" : "Create Project"
                                }, void 0, false, {
                                    fileName: "[project]/components/project-manager.tsx",
                                    lineNumber: 863,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project-manager.tsx",
                            lineNumber: 820,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project-manager.tsx",
                    lineNumber: 543,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project-manager.tsx",
                lineNumber: 542,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project-manager.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_s(ProjectManager, "xf/K3Of8lK3wCr+/VKmBcOw93nI=");
_c = ProjectManager;
var _c;
__turbopack_context__.k.register(_c, "ProjectManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/components/user-management.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserManagement",
    ()=>UserManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UserManagement({ isOpen, onClose }) {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])());
    const [newUser, setNewUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        name: "",
        password: "",
        role: "editor"
    });
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        name: "",
        password: "",
        role: "editor"
    });
    const refreshUsers = ()=>{
        const allUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])();
        console.log("All users in system:", allUsers);
        setUsers(allUsers);
    };
    const handleAddUser = ()=>{
        if (!newUser.email || !newUser.name || !newUser.password) return;
        console.log("Adding user:", newUser);
        const addedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSystemUser"])({
            email: newUser.email,
            name: newUser.name,
            password: newUser.password,
            role: newUser.role,
            isActive: true
        });
        console.log("User added successfully:", addedUser);
        setNewUser({
            email: "",
            name: "",
            password: "",
            role: "editor"
        });
        setIsAdding(false);
        refreshUsers();
    };
    const handleEditUser = (user)=>{
        setEditingUser(user);
        setEditForm({
            email: user.email,
            name: user.name,
            password: user.password,
            role: user.role
        });
    };
    const handleSaveEdit = ()=>{
        if (!editingUser || !editForm.email || !editForm.name) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSystemUser"])(editingUser.id, {
            email: editForm.email,
            name: editForm.name,
            password: editForm.password || editingUser.password,
            role: editForm.role
        });
        setEditingUser(null);
        setEditForm({
            email: "",
            name: "",
            password: "",
            role: "editor"
        });
        refreshUsers();
    };
    const handleCancelEdit = ()=>{
        setEditingUser(null);
        setEditForm({
            email: "",
            name: "",
            password: "",
            role: "editor"
        });
    };
    const handleToggleActive = (userId, isActive)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSystemUser"])(userId, {
            isActive
        });
        refreshUsers();
    };
    const handleDeleteUser = (userId)=>{
        if (confirm("Are you sure you want to delete this user?")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSystemUser"])(userId);
            refreshUsers();
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "User Management"
                        }, void 0, false, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "outline",
                            size: "sm",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/user-management.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        editingUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border rounded-lg bg-blue-50 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-sm",
                                    children: [
                                        "Edit User: ",
                                        editingUser.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email",
                                    value: editForm.email,
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            email: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Name",
                                    value: editForm.name,
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            name: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Password (leave empty to keep current)",
                                    value: editForm.password,
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            password: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: editForm.role,
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            role: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "admin",
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "editor",
                                            children: "Editor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "viewer",
                                            children: "Viewer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSaveEdit,
                                            size: "sm",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleCancelEdit,
                                            variant: "outline",
                                            size: "sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this),
                        isAdding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border rounded-lg bg-gray-50 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Email",
                                    value: newUser.email,
                                    onChange: (e)=>setNewUser({
                                            ...newUser,
                                            email: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Name",
                                    value: newUser.name,
                                    onChange: (e)=>setNewUser({
                                            ...newUser,
                                            name: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Password",
                                    value: newUser.password,
                                    onChange: (e)=>setNewUser({
                                            ...newUser,
                                            password: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: newUser.role,
                                    onChange: (e)=>setNewUser({
                                            ...newUser,
                                            role: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border rounded text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "admin",
                                            children: "Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "editor",
                                            children: "Editor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "viewer",
                                            children: "Viewer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleAddUser,
                                            size: "sm",
                                            children: "Add User"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setIsAdding(false),
                                            variant: "outline",
                                            size: "sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        !isAdding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setIsAdding(true),
                            variant: "outline",
                            size: "sm",
                            children: "+ Add New User"
                        }, void 0, false, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 border rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-sm",
                                                    children: user.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-red-100 text-red-700' : user.role === 'editor' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                                                            children: user.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/user-management.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `ml-2 px-2 py-1 rounded text-xs ${user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`,
                                                            children: user.isActive ? 'Active' : 'Inactive'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/user-management.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>handleEditUser(user),
                                                    variant: "outline",
                                                    size: "sm",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>handleToggleActive(user.id, !user.isActive),
                                                    variant: "outline",
                                                    size: "sm",
                                                    children: user.isActive ? 'Deactivate' : 'Activate'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                user.email !== 'admin@sola.com' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>handleDeleteUser(user.id),
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-red-600 hover:text-red-700",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/user-management.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/user-management.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/components/user-management.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/user-management.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/user-management.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/user-management.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/user-management.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(UserManagement, "Gvx31I+JWRA59Oucb/QBsamTBrI=");
_c = UserManagement;
var _c;
__turbopack_context__.k.register(_c, "UserManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/allocation-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AllocationGrid",
    ()=>AllocationGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$allocation$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/allocation-cell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project-manager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/user-management.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
const YEARS = Array.from({
    length: 10
}, (_, i)=>2024 + i);
function AllocationGrid() {
    _s();
    // Check if user is logged in and get their role
    const [currentUser, setCurrentUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUserRole, setCurrentUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load user-specific data on component mount
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
                if (systemUser?.role === 'admin') {
                    // Admin loads their own data
                    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                    console.log("[v0] Admin loading own data:", userData.projects);
                    return userData.projects;
                } else {
                    // System users load admin's data
                    const systemUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])();
                    const adminUser = systemUsers.find({
                        "AllocationGrid.useState.adminUser": (u)=>u.role === 'admin' && u.isActive
                    }["AllocationGrid.useState.adminUser"]);
                    if (adminUser) {
                        const adminData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])(adminUser.email);
                        console.log("[v0] System user loading admin data:", adminData.projects);
                        return adminData.projects;
                    }
                }
            }
            return [];
        }
    }["AllocationGrid.useState"]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
                if (systemUser?.role === 'admin') {
                    // Admin loads their own data
                    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                    return userData.users.length > 0 ? userData.users : [
                        {
                            id: "1",
                            name: "John Doe",
                            department: "Engineering"
                        },
                        {
                            id: "2",
                            name: "Jane Smith",
                            department: "Design"
                        },
                        {
                            id: "3",
                            name: "Bob Johnson",
                            department: "Product"
                        }
                    ];
                } else {
                    // System users load admin's data
                    const systemUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])();
                    const adminUser = systemUsers.find({
                        "AllocationGrid.useState.adminUser": (u)=>u.role === 'admin' && u.isActive
                    }["AllocationGrid.useState.adminUser"]);
                    if (adminUser) {
                        const adminData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])(adminUser.email);
                        return adminData.users.length > 0 ? adminData.users : [
                            {
                                id: "1",
                                name: "John Doe",
                                department: "Engineering"
                            },
                            {
                                id: "2",
                                name: "Jane Smith",
                                department: "Design"
                            },
                            {
                                id: "3",
                                name: "Bob Johnson",
                                department: "Product"
                            }
                        ];
                    }
                }
            }
            return [
                {
                    id: "1",
                    name: "John Doe",
                    department: "Engineering"
                },
                {
                    id: "2",
                    name: "Jane Smith",
                    department: "Design"
                },
                {
                    id: "3",
                    name: "Bob Johnson",
                    department: "Product"
                }
            ];
        }
    }["AllocationGrid.useState"]);
    const [allocations, setAllocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
                if (systemUser?.role === 'admin') {
                    // Admin loads their own data
                    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                    return userData.allocations;
                } else {
                    // System users load admin's data
                    const systemUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])();
                    const adminUser = systemUsers.find({
                        "AllocationGrid.useState.adminUser": (u)=>u.role === 'admin' && u.isActive
                    }["AllocationGrid.useState.adminUser"]);
                    if (adminUser) {
                        const adminData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])(adminUser.email);
                        return adminData.allocations;
                    }
                }
            }
            return [];
        }
    }["AllocationGrid.useState"]);
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
                if (systemUser?.role === 'admin') {
                    // Admin loads their own data
                    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                    return userData.positions;
                } else {
                    // System users load admin's data
                    const systemUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSystemUsers"])();
                    const adminUser = systemUsers.find({
                        "AllocationGrid.useState.adminUser": (u)=>u.role === 'admin' && u.isActive
                    }["AllocationGrid.useState.adminUser"]);
                    if (adminUser) {
                        const adminData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])(adminUser.email);
                        return adminData.positions;
                    }
                }
            }
            return [];
        }
    }["AllocationGrid.useState"]);
    // Check login status and role on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            const systemUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentSystemUser"])();
            if (!user || !systemUser) {
                window.location.href = "/login";
            } else {
                setCurrentUserState(user);
                setCurrentUserRole(systemUser.role);
            }
        }
    }["AllocationGrid.useEffect"], []);
    // Save data to user-specific storage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                console.log("[v0] Saving projects for user:", currentUser, projects);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    projects
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        projects,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    users
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        users,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    allocations
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        allocations,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    positions
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        positions,
        currentUser
    ]);
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Grid starting month/year (top-right selectors). Persist per user.
    const [startMonth, setStartMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.startMonth ?? 0;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    const [startYear, setStartYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllocationGrid.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUserData"])();
                return userData.startYear ?? 2024;
            }
            //TURBOPACK unreachable
            ;
        }
    }["AllocationGrid.useState"]);
    // Persist starting month/year when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllocationGrid.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                    startMonth,
                    startYear
                });
            }
        }
    }["AllocationGrid.useEffect"], [
        startMonth,
        startYear,
        currentUser
    ]);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showUnallocatedModal, setShowUnallocatedModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingAllocation, setPendingAllocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUserModal, setShowUserModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingUserId, setEditingUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingUserName, setEditingUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserDept, setEditingUserDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserEntity, setEditingUserEntity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserStartDate, setEditingUserStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserEndDate, setEditingUserEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingUserWorkDays, setEditingUserWorkDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mon-fri');
    const [selectedCellMonth, setSelectedCellMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCellUser, setSelectedCellUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPositionModal, setShowPositionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUserManagement, setShowUserManagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('percentage');
    const [showMonthDetail, setShowMonthDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMonthForDetail, setSelectedMonthForDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showGanttChart, setShowGanttChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ganttStartYear, setGanttStartYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [customAllocationAmount, setCustomAllocationAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedPositionForCustom, setSelectedPositionForCustom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedProjectId, setSelectedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if current user has permission for specific actions
    const canEdit = currentUserRole === 'admin';
    const canView = currentUserRole === 'admin' || currentUserRole === 'editor' || currentUserRole === 'viewer';
    // Filter projects to show only those active between starting month and starting month + 11 months
    const filteredProjects = projects.filter((project)=>{
        console.log('[DEBUG] Checking project:', project.name);
        console.log('[DEBUG] Project dates:', {
            startMonth: project.startMonth,
            startYear: project.startYear,
            endMonth: project.endMonth,
            endYear: project.endYear,
            hasEndMonth: !!project.endMonth,
            hasEndYear: !!project.endYear,
            endMonthType: typeof project.endMonth,
            endYearType: typeof project.endYear
        });
        // If project has no end date, include it
        if (!project.endMonth || !project.endYear) {
            console.log('[DEBUG] Project has no end date, including - endMonth:', project.endMonth, 'endYear:', project.endYear);
            return true;
        }
        // Calculate project start date - ensure proper year handling
        const projectStartYear = project.startYear || 2024;
        const projectEndYear = project.endYear || 2024;
        console.log('[DEBUG] Using years:', {
            projectStartYear,
            projectEndYear
        });
        // Create date objects
        const projectStartDate = new Date(projectStartYear, project.startMonth || 0, 1);
        const projectEndDate = new Date(projectEndYear, project.endMonth, 1);
        // Calculate staff allocation start and end dates
        const staffStartDate = new Date(startYear, startMonth, 1);
        const staffEndDate = new Date(startYear, startMonth + 11, 1);
        console.log('[DEBUG] Date comparison:', {
            projectStartDate: projectStartDate.toISOString().split('T')[0],
            projectEndDate: projectEndDate.toISOString().split('T')[0],
            staffStartDate: staffStartDate.toISOString().split('T')[0],
            staffEndDate: staffEndDate.toISOString().split('T')[0]
        });
        // Check if project overlaps with staff allocation period
        const overlaps = projectStartDate <= staffEndDate && projectEndDate >= staffStartDate;
        console.log('[DEBUG] Overlap result:', {
            projectStartBeforeStaffEnd: projectStartDate <= staffEndDate,
            projectEndAfterStaffStart: projectEndDate >= staffStartDate,
            overlaps: overlaps
        });
        return overlaps;
    });
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
    const getContrastColor = (hex)=>{
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000" : "#fff";
    };
    const addProject = (project)=>{
        setProjects((prev)=>[
                ...prev,
                project
            ]);
    };
    // Export to Excel function
    const exportToExcel = ()=>{
        // Create CSV content
        let csvContent = "";
        // Add header row
        const headerRow = [
            "Staff",
            ...months.map((m)=>m.display)
        ];
        csvContent += headerRow.join(",") + "\n";
        // Add department rows and user data
        groupedUsers.forEach((group)=>{
            // Add department header
            csvContent += `${group.department},\n`;
            // Add users in this department
            group.users.forEach((user)=>{
                const userRow = [
                    user.name
                ];
                months.forEach((month)=>{
                    const userAllocations = allocations.filter((a)=>a.userId === user.id && a.monthIndex === month.globalIndex);
                    if (userAllocations.length > 0) {
                        const totalAllocated = userAllocations.reduce((sum, a)=>sum + (a.percentage || 0), 0);
                        let displayValue;
                        if (viewMode === 'days') {
                            displayValue = getDaysFromPercentage(user.id, month.globalIndex, totalAllocated);
                            userRow.push(`${displayValue} days`);
                        } else {
                            displayValue = Math.round(totalAllocated);
                            userRow.push(`${displayValue}%`);
                        }
                    } else {
                        // Check if user hasn't started or has ended
                        if (!isUserStartedInMonth(user.id, month.globalIndex)) {
                            userRow.push("not started");
                        } else if (isUserEndedInMonth(user.id, month.globalIndex)) {
                            userRow.push("ended");
                        } else {
                            userRow.push("");
                        }
                    }
                });
                csvContent += userRow.join(",") + "\n";
            });
        });
        // Create and download the file
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const fileName = `staff-allocation-${viewMode}-${new Date().toISOString().split('T')[0]}.csv`;
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // Export month detail to Excel function
    const exportMonthDetailToExcel = ()=>{
        if (!selectedMonthForDetail) return;
        // Create CSV content for month detail view
        let csvContent = "";
        // Add header row with projects
        const headerRow = [
            "Staff",
            ...filteredProjects.map((p)=>p.name),
            "Total"
        ];
        csvContent += headerRow.join(",") + "\n";
        // Add department rows and user data for the selected month
        groupedUsers.forEach((group)=>{
            // Add department header
            csvContent += `${group.department},\n`;
            // Add users in this department
            group.users.forEach((user)=>{
                const userRow = [
                    user.name
                ];
                // Add allocations for each project
                filteredProjects.forEach((project)=>{
                    const userAllocations = allocations.filter((a)=>a.userId === user.id && a.projectId === project.id && a.monthIndex === selectedMonthForDetail.globalIndex);
                    if (userAllocations.length > 0) {
                        const totalAllocated = userAllocations.reduce((sum, a)=>sum + (a.percentage || 0), 0);
                        let displayValue;
                        if (viewMode === 'days') {
                            displayValue = Math.round(getDaysFromPercentage(user.id, selectedMonthForDetail.globalIndex, totalAllocated));
                            userRow.push(`${displayValue} days`);
                        } else {
                            displayValue = Math.round(totalAllocated);
                            userRow.push(`${displayValue}%`);
                        }
                    } else {
                        userRow.push("");
                    }
                });
                // Add total column
                const totalAllocated = allocations.filter((a)=>a.userId === user.id && a.monthIndex === selectedMonthForDetail.globalIndex).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                if (viewMode === 'days') {
                    const totalDays = Math.round(getDaysFromPercentage(user.id, selectedMonthForDetail.globalIndex, totalAllocated));
                    userRow.push(`${totalDays} days`);
                } else {
                    userRow.push(`${Math.round(totalAllocated)}%`);
                }
                csvContent += userRow.join(",") + "\n";
            });
        });
        // Create and download the file
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const fileName = `staff-allocation-detail-${MONTHS[selectedMonthForDetail.month]}-${selectedMonthForDetail.year}-${viewMode}-${new Date().toISOString().split('T')[0]}.csv`;
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const updateProject = (projectId, updates)=>{
        console.log("[v0] updateProject called:", {
            projectId,
            updates
        });
        console.trace("[v0] updateProject call stack");
        setProjects((prev)=>{
            const existing = prev.find((p)=>p.id === projectId);
            if (existing && Object.entries(updates).every(([key, value])=>existing[key] === value)) {
                console.log("[v0] Skipping update: no actual changes detected");
                return prev;
            }
            const next = prev.map((p)=>p.id === projectId ? {
                    ...p,
                    ...updates
                } : p);
            console.log("[v0] projects after update:", next);
            return next;
        });
    };
    const deleteProject = (projectId)=>{
        setProjects((prev)=>prev.filter((p)=>p.id !== projectId));
        setAllocations((prev)=>prev.filter((a)=>a.projectId !== projectId));
    };
    const addUser = ()=>{
        setEditingUserId(null);
        setEditingUserName("");
        setEditingUserDept("");
        setEditingUserEntity("");
        setEditingUserStartDate("");
        setEditingUserEndDate("");
        setEditingUserWorkDays('mon-fri');
        setShowUserModal(true);
    };
    const editUser = (userId)=>{
        const user = users.find((u)=>u.id === userId);
        if (user) {
            setEditingUserId(userId);
            setEditingUserName(user.name);
            setEditingUserDept(user.department);
            setEditingUserEntity(user.entity || "");
            setEditingUserStartDate(user.startDate || "");
            setEditingUserEndDate(user.endDate || "");
            setEditingUserWorkDays(user.workDays || 'mon-fri');
            setShowUserModal(true);
        }
    };
    const saveUserChanges = ()=>{
        if (!editingUserName.trim()) return;
        if (editingUserId) {
            setUsers((prev)=>prev.map((u)=>u.id === editingUserId ? {
                        ...u,
                        name: editingUserName,
                        department: editingUserDept,
                        entity: editingUserEntity || undefined,
                        startDate: editingUserStartDate || undefined,
                        endDate: editingUserEndDate || undefined,
                        workDays: editingUserWorkDays
                    } : u));
        } else {
            const newUser = {
                id: `user-${Date.now()}`,
                name: editingUserName,
                department: editingUserDept,
                entity: editingUserEntity || undefined,
                startDate: editingUserStartDate || undefined,
                endDate: editingUserEndDate || undefined,
                workDays: editingUserWorkDays
            };
            setUsers((prev)=>[
                    ...prev,
                    newUser
                ]);
        }
        setShowUserModal(false);
        setEditingUserId(null);
        setEditingUserName("");
        setEditingUserDept("");
        setEditingUserEntity("");
        setEditingUserStartDate("");
        setEditingUserEndDate("");
        setEditingUserWorkDays('mon-fri');
    };
    const deleteUser = (userId)=>{
        setUsers((prev)=>prev.filter((u)=>u.id !== userId));
        setAllocations((prev)=>prev.filter((a)=>a.userId !== userId));
    };
    const updatePositions = (newPositions)=>{
        const updatedProjects = projects.map((project)=>({
                ...project,
                positions: newPositions.filter((p)=>p.projectId === project.id)
            }));
        setProjects(updatedProjects);
        // Update allocations to match new position budgets
        const updatedAllocations = allocations.map((allocation)=>{
            const newPosition = newPositions.find((p)=>p.projectId === allocation.projectId && p.monthIndex === allocation.monthIndex && p.name === allocation.positionName);
            if (newPosition && allocation.percentage > newPosition.percentage) {
                // Reduce allocation to match new budget
                return {
                    ...allocation,
                    percentage: newPosition.percentage
                };
            }
            return allocation;
        });
        setAllocations(updatedAllocations);
    };
    const handleMonthClick = (monthIndex)=>{
        const year = Math.floor(monthIndex / 12) + 2024;
        const month = monthIndex % 12;
        setSelectedMonthForDetail({
            year,
            month,
            globalIndex: monthIndex
        });
        setShowMonthDetail(true);
    };
    // Months shown in the grid. The globalIndex here MUST match how ProjectManager
    // stores position.monthIndex: (year - 2024) * 12 + month.
    const months = Array.from({
        length: 12
    }, (_, i)=>{
        const date = new Date(startYear, startMonth + i, 1);
        const month = date.getMonth();
        const year = date.getFullYear();
        const globalIndex = (year - 2024) * 12 + month;
        return {
            month,
            year,
            globalIndex,
            display: `${MONTHS[month].slice(0, 3).toUpperCase()} ${String(year).slice(-2)}`
        };
    });
    const handleEmptyCellClick = (userId, monthIndex)=>{
        if (!canEdit) return; // Only allow editing if user is admin
        console.log("[v0] Empty cell clicked:", {
            userId,
            monthIndex,
            selectedMonth
        });
        // Respect user end date: do not allow new allocations after their end date
        const user = users.find((u)=>u.id === userId);
        if (user?.endDate) {
            const end = new Date(user.endDate);
            if (!Number.isNaN(end.getTime())) {
                const endMonth = end.getMonth() // 0-11
                ;
                const endYear = end.getFullYear();
                const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
                if (monthIndex > endGlobalIndex) {
                    // After end date: block allocation
                    return;
                }
            }
        }
        // Respect user start date: do not allow new allocations before their start date
        if (user?.startDate) {
            const start = new Date(user.startDate);
            if (!Number.isNaN(start.getTime())) {
                const startMonth = start.getMonth() // 0-11
                ;
                const startYear = start.getFullYear();
                const startGlobalIndex = (startYear - 2024) * 12 + startMonth;
                if (monthIndex < startGlobalIndex) {
                    // Before start date: block allocation
                    return;
                }
            }
        }
        setSelectedCellUser(userId);
        setSelectedCellMonth(monthIndex);
        setShowPositionModal(true);
    };
    // Helper to check if user has ended by a given month
    const isUserEndedInMonth = (userId, monthIndex)=>{
        const user = users.find((u)=>u.id === userId);
        if (!user?.endDate) return false;
        const end = new Date(user.endDate);
        if (Number.isNaN(end.getTime())) return false;
        const endMonth = end.getMonth() // 0-11
        ;
        const endYear = end.getFullYear();
        const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
        return monthIndex > endGlobalIndex;
    };
    // Helper to check if user has started by a given month
    const isUserStartedInMonth = (userId, monthIndex)=>{
        const user = users.find((u)=>u.id === userId);
        if (!user?.startDate) return true;
        const start = new Date(user.startDate);
        if (Number.isNaN(start.getTime())) return true;
        const startMonth = start.getMonth() // 0-11
        ;
        const startYear = start.getFullYear();
        const startGlobalIndex = (startYear - 2024) * 12 + startMonth;
        return monthIndex >= startGlobalIndex;
    };
    // Helper to calculate working days in a month
    const getWorkingDaysInMonth = (year, month, startDay = 1)=>{
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let workingDays = 0;
        for(let day = 1; day <= daysInMonth; day++){
            date.setDate(day);
            const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
            ;
            if (startDay === 1) {
                // Monday to Friday (1-5)
                if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                    workingDays++;
                }
            } else {
                // Sunday to Thursday (0-4)
                if (dayOfWeek >= 0 && dayOfWeek <= 4) {
                    workingDays++;
                }
            }
        }
        return workingDays;
    };
    // Helper to convert percentage to days based on user work pattern
    const getDaysFromPercentage = (userId, monthIndex, percentage)=>{
        const user = users.find((u)=>u.id === userId);
        if (!user) return 0;
        // Get the month and year from monthIndex
        const year = Math.floor(monthIndex / 12) + 2024;
        const month = monthIndex % 12;
        // Get working days based on user's work pattern
        const workPattern = user.workDays || 'mon-fri';
        const startDay = workPattern === 'mon-fri' ? 1 : 0;
        const workingDays = getWorkingDaysInMonth(year, month, startDay);
        // Calculate days from percentage
        return Math.round(percentage / 100 * workingDays);
    };
    const handleAddAllocation = (projectId, positionName, customAmount)=>{
        if (selectedCellUser && selectedCellMonth !== null) {
            // Find the underlying position so we can link by positionId
            const project = projects.find((p)=>p.id === projectId);
            const position = project?.positions?.find((pos)=>pos.monthIndex === selectedCellMonth && pos.name === positionName);
            // If we can't find the position or it has no budget, do nothing
            if (!position || !position.percentage) {
                return;
            }
            // How much of this position is already allocated in this month (across all users)
            const alreadyAllocated = allocations.filter((a)=>a.projectId === projectId && a.monthIndex === selectedCellMonth && (a.positionId === position.id || a.positionName === positionName)).reduce((sum, a)=>sum + (a.percentage || 0), 0);
            const remaining = Math.max(0, position.percentage - alreadyAllocated);
            // Nothing left to allocate
            if (remaining <= 0) {
                return;
            }
            // Use custom amount if provided, otherwise use full remaining
            const allocationAmount = customAmount ? Math.min(customAmount, remaining) : remaining;
            const newAllocation = {
                id: `alloc-${Date.now()}`,
                userId: selectedCellUser,
                projectId,
                monthIndex: selectedCellMonth,
                percentage: allocationAmount,
                positionId: position?.id,
                positionName
            };
            setAllocations((prev)=>[
                    ...prev,
                    newAllocation
                ]);
            // Update allocated amount in positions
            setProjects((prev)=>prev.map((p)=>p.id === projectId ? {
                        ...p,
                        positions: p.positions?.map((pos)=>pos.monthIndex === selectedCellMonth && pos.name === positionName ? {
                                ...pos,
                                allocated: (pos.allocated || 0) + allocationAmount
                            } : pos)
                    } : p));
            // Close modal and reset custom allocation state
            setShowPositionModal(false);
            setSelectedPositionForCustom(null);
            setCustomAllocationAmount({});
            setSelectedCellUser(null);
            setSelectedCellMonth(null);
        }
    };
    const handleRemoveAllocation = (allocationId)=>{
        const allocation = allocations.find((a)=>a.id === allocationId);
        if (allocation) {
            setProjects((prev)=>prev.map((p)=>p.id === allocation.projectId ? {
                        ...p,
                        positions: p.positions?.map((pos)=>pos.monthIndex === allocation.monthIndex && pos.name === allocation.positionName ? {
                                ...pos,
                                allocated: Math.max(0, (pos.allocated || 0) - 1)
                            } : pos)
                    } : p));
        }
        setAllocations((prev)=>prev.filter((a)=>a.id !== allocationId));
    };
    const cleanupAllocations = (projectId, validPositionIds)=>{
        setAllocations((prev)=>{
            const filtered = prev.filter((allocation)=>{
                // Keep allocation if it's not for this project
                if (allocation.projectId !== projectId) return true;
                // Keep allocation if it has a valid positionId
                if (allocation.positionId && validPositionIds.includes(allocation.positionId)) return true;
                // Remove allocation if positionId is not in the valid list
                return false;
            });
            // Update allocated counts for the affected positions
            const removedAllocations = prev.filter((allocation)=>{
                return allocation.projectId === projectId && (!allocation.positionId || !validPositionIds.includes(allocation.positionId));
            });
            if (removedAllocations.length > 0) {
                setProjects((projectsPrev)=>projectsPrev.map((project)=>project.id === projectId ? {
                            ...project,
                            positions: project.positions?.map((position)=>{
                                const removedCount = removedAllocations.filter((a)=>a.positionId === position.id).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                return {
                                    ...position,
                                    allocated: Math.max(0, (position.allocated || 0) - removedCount)
                                };
                            })
                        } : project));
            }
            return filtered;
        });
    };
    const handleEditAllocation = (allocationId, newPercentage)=>{
        setAllocations((prev)=>prev.map((a)=>a.id === allocationId ? {
                    ...a,
                    percentage: newPercentage
                } : a));
        setEditingId(null);
        setEditValue(0);
    };
    // Only show users who are active for the current grid window.
    // If a user has an endDate before the starting month/year, hide them.
    // If a user has a startDate after the ending month/year, hide them.
    const gridStartGlobalIndex = (startYear - 2024) * 12 + startMonth;
    const gridEndGlobalIndex = gridStartGlobalIndex + 11 // 12 months total
    ;
    const activeUsers = users.filter((user)=>{
        // Check end date filtering
        if (user.endDate) {
            const end = new Date(user.endDate);
            if (!Number.isNaN(end.getTime())) {
                const endMonth = end.getMonth() // 0-11
                ;
                const endYear = end.getFullYear();
                const endGlobalIndex = (endYear - 2024) * 12 + endMonth;
                if (endGlobalIndex < gridStartGlobalIndex) {
                    return false // User ended before grid starts
                    ;
                }
            }
        }
        // Check start date filtering
        if (user.startDate) {
            const start = new Date(user.startDate);
            if (!Number.isNaN(start.getTime())) {
                const startMonth = start.getMonth() // 0-11
                ;
                const startYear = start.getFullYear();
                const startGlobalIndex = (startYear - 2024) * 12 + startMonth;
                if (startGlobalIndex > gridEndGlobalIndex) {
                    return false // User starts after grid ends
                    ;
                }
            }
        }
        return true;
    });
    // Filter users based on selected project
    const filteredUsers = selectedProjectId ? activeUsers.filter((user)=>allocations.some((allocation)=>allocation.userId === user.id && allocation.projectId === selectedProjectId)) : activeUsers;
    const groupedUsers = Array.from(filteredUsers.reduce((acc, user)=>{
        if (!acc.has(user.department)) {
            acc.set(user.department, []);
        }
        acc.get(user.department).push(user);
        return acc;
    }, new Map())).map(([dept, deptUsers])=>({
            department: dept,
            users: deptUsers.sort((a, b)=>a.name.localeCompare(b.name))
        })).sort((a, b)=>a.department.localeCompare(b.department));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: (currentUserRole === 'admin' || currentUserRole === 'editor' || currentUserRole === 'viewer') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectManager"], {
                            projects: filteredProjects,
                            positions: filteredProjects.flatMap((p)=>p.positions || []),
                            months: MONTHS,
                            startMonth: startMonth,
                            startYear: startYear,
                            onAddProject: addProject,
                            onUpdateProject: updateProject,
                            onDeleteProject: deleteProject,
                            onUpdatePositions: updatePositions,
                            onProjectSelect: setSelectedProjectId,
                            selectedProjectId: selectedProjectId,
                            onCleanupAllocations: cleanupAllocations,
                            currentUserRole: currentUserRole
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 902,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 899,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Starting Month"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 921,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: startMonth,
                                        onChange: (e)=>setStartMonth(Number.parseInt(e.target.value)),
                                        className: "border rounded px-2 py-1",
                                        children: MONTHS.map((month, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: idx,
                                                children: month
                                            }, month, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 922,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 920,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Starting Year"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 935,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: startYear,
                                        onChange: (e)=>setStartYear(Number.parseInt(e.target.value)),
                                        className: "border rounded px-2 py-1",
                                        children: YEARS.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: year,
                                                children: year
                                            }, year, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 936,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 934,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 919,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 898,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 rounded-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    selectedProjectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Filtered by: ",
                                                    projects.find((p)=>p.id === selectedProjectId)?.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedProjectId(null),
                                                className: "text-blue-600 hover:text-blue-800 font-bold",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 957,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 955,
                                        columnNumber: 15
                                    }, this),
                                    (currentUserRole === 'admin' || currentUserRole === 'editor') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: addUser,
                                        variant: "default",
                                        size: "sm",
                                        className: "bg-blue-900 hover:bg-blue-800 text-white",
                                        children: "+ New Staff"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 967,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "View:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 973,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex border rounded overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewMode('percentage'),
                                                        className: `px-3 py-1 text-sm font-medium transition-colors ${viewMode === 'percentage' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                                        children: "% View"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewMode('days'),
                                                        className: `px-3 py-1 text-sm font-medium transition-colors ${viewMode === 'days' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                                        children: "Days View"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 974,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 972,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: exportToExcel,
                                        className: "px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors ml-4",
                                        children: "Export to Excel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 998,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGanttChart(true),
                                        className: "px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors ml-2",
                                        title: "Show Project Gantt Chart",
                                        children: "📊 Gantt Chart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right mr-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: "Current User"
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium",
                                                children: currentUser
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 capitalize",
                                                children: currentUserRole
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 13
                                    }, this),
                                    currentUserRole === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowUserManagement(true),
                                        variant: "outline",
                                        size: "sm",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 17
                                            }, this),
                                            "Users"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            // Clear current user session but keep their data
                                            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                                            if (user) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUserData"])({
                                                    startMonth,
                                                    startYear
                                                }); // Save current view settings
                                            }
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCurrentUser"])();
                                            window.location.href = "/login";
                                        },
                                        variant: "outline",
                                        size: "sm",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1064,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 15
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 1013,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse border border-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-2 bg-gray-100 w-42",
                                                    children: "Staff"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 17
                                                }, this),
                                                months.map((month, idx)=>{
                                                    const monFriDays = getWorkingDaysInMonth(month.year, month.month, 1) // Monday to Friday
                                                    ;
                                                    const sunThuDays = getWorkingDaysInMonth(month.year, month.month, 0) // Sunday to Thursday
                                                    ;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-gray-300 p-2 bg-gray-100 w-32 cursor-pointer hover:bg-gray-200 text-sm",
                                                        onClick: ()=>handleMonthClick(month.globalIndex),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: month.display
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1091,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-gray-600 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                "Mon-Fri: ",
                                                                                monFriDays
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1093,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                "Sun-Thu: ",
                                                                                sunThuDays
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1094,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1079,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 bg-gray-50 w-42 text-xs text-muted-foreground",
                                                    children: "Unallocated"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 17
                                                }, this),
                                                months.map((month)=>{
                                                    const monthUnallocated = filteredProjects.flatMap((project)=>{
                                                        const positionsForMonth = project.positions?.filter((pos)=>pos.monthIndex === month.globalIndex) || [];
                                                        return positionsForMonth.map((position)=>{
                                                            const allocated = allocations.filter((a)=>a.projectId === project.id && a.monthIndex === month.globalIndex && a.positionId === position.id).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                                            const unallocated = Math.max(0, position.percentage - allocated);
                                                            if (unallocated <= 0) return null;
                                                            // Calculate display value based on project allocation mode and view mode
                                                            let displayValue;
                                                            let displayText;
                                                            if (viewMode === 'days') {
                                                                // Day view - calculate days for both allocation modes
                                                                const workingDays = getWorkingDaysInMonth(month.year, month.month, 1) // Default to Mon-Fri
                                                                ;
                                                                const calculatedDays = Math.round(unallocated / 100 * workingDays);
                                                                displayValue = calculatedDays;
                                                                displayText = `${calculatedDays} days`;
                                                            } else {
                                                                // Percentage view - show rounded percentages for both allocation modes
                                                                displayValue = Math.round(unallocated);
                                                                displayText = `${displayValue}%`;
                                                            }
                                                            return {
                                                                projectId: project.id,
                                                                projectName: project.name,
                                                                projectColor: project.color,
                                                                positionId: position.id,
                                                                positionName: position.name || "Position",
                                                                percentage: unallocated,
                                                                displayValue,
                                                                displayText
                                                            };
                                                        }).filter((p)=>p != null);
                                                    });
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 bg-gray-50 p-1 align-top",
                                                        style: {
                                                            verticalAlign: "top"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: monthUnallocated.map((pos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center h-8 rounded overflow-hidden bg-gray-200 text-[9px] text-white",
                                                                    style: {
                                                                        minWidth: "50px",
                                                                        maxWidth: "120px"
                                                                    },
                                                                    title: `${pos.projectName} - ${pos.positionName} (${pos.displayText} unallocated)`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full flex items-center justify-center px-1 text-center leading-tight",
                                                                        style: {
                                                                            backgroundColor: pos.projectColor || "#3b82f6",
                                                                            width: "100%"
                                                                        },
                                                                        children: [
                                                                            pos.positionName,
                                                                            " (",
                                                                            pos.displayText,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                        lineNumber: 1169,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, `${pos.projectId}-${pos.positionId}`, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1158,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, month.globalIndex, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: groupedUsers.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: months.length + 1,
                                                        className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200",
                                                        children: group.department
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1189,
                                                    columnNumber: 19
                                                }, this),
                                                group.users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border border-gray-300 p-1 w-42",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs leading-tight",
                                                                            children: user.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        currentUserRole === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>editUser(user.id),
                                                                            className: "text-blue-600 hover:text-blue-800 text-xs",
                                                                            children: "✏️"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1201,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 23
                                                            }, this),
                                                            months.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$allocation$2d$cell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AllocationCell"], {
                                                                    userId: user.id,
                                                                    monthIndex: month.globalIndex,
                                                                    allocations: allocations.filter((a)=>a.userId === user.id && a.monthIndex === month.globalIndex),
                                                                    project: filteredProjects.find((p)=>p.id === allocations[0]?.projectId),
                                                                    projects: filteredProjects,
                                                                    users: users,
                                                                    month: month,
                                                                    userEnded: isUserEndedInMonth(user.id, month.globalIndex),
                                                                    userNotStarted: !isUserStartedInMonth(user.id, month.globalIndex),
                                                                    viewMode: viewMode,
                                                                    getDaysFromPercentage: getDaysFromPercentage,
                                                                    readOnly: currentUserRole === 'viewer',
                                                                    onEdit: (id)=>{
                                                                        setEditingId(id);
                                                                        const alloc = allocations.find((a)=>a.id === id);
                                                                        if (alloc) setEditValue(alloc.percentage);
                                                                    },
                                                                    onSaveEdit: handleEditAllocation,
                                                                    onRemove: handleRemoveAllocation,
                                                                    onEmptyCellClick: ()=>handleEmptyCellClick(user.id, month.globalIndex)
                                                                }, `${user.id}-${month.globalIndex}`, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1211,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, user.id, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1195,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, group.department, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1077,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/allocation-grid.tsx",
                        lineNumber: 1076,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            showUserModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold mb-4",
                            children: editingUserId ? "Edit User" : "Add User"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingUserName,
                                            onChange: (e)=>setEditingUserName(e.target.value),
                                            className: "w-full border rounded px-2 py-1",
                                            placeholder: "User name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingUserDept,
                                            onChange: (e)=>setEditingUserDept(e.target.value),
                                            className: "w-full border rounded px-2 py-1",
                                            placeholder: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Entity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingUserEntity,
                                            onChange: (e)=>setEditingUserEntity(e.target.value),
                                            className: "w-full border rounded px-2 py-1",
                                            placeholder: "Entity/Country"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: editingUserStartDate,
                                                    onChange: (e)=>setEditingUserStartDate(e.target.value),
                                                    className: "w-full border rounded px-2 py-1 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1284,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1282,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    children: "End Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: editingUserEndDate,
                                                    onChange: (e)=>setEditingUserEndDate(e.target.value),
                                                    className: "w-full border rounded px-2 py-1 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[11px] text-gray-500",
                                                    children: "Leave blank if working indefinitely."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Work Days"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editingUserWorkDays,
                                            onChange: (e)=>setEditingUserWorkDays(e.target.value),
                                            className: "w-full border rounded px-2 py-1 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "mon-fri",
                                                    children: "Monday - Friday"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "sun-thu",
                                                    children: "Sunday - Thursday"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1310,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end",
                                    children: [
                                        editingUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "destructive",
                                            onClick: ()=>{
                                                deleteUser(editingUserId);
                                                setShowUserModal(false);
                                            },
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>setShowUserModal(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: saveUserChanges,
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 1248,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 1247,
                columnNumber: 9
            }, this),
            showPositionModal && selectedCellMonth !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold mb-4",
                            children: "Select Position"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: projects.flatMap((project)=>{
                                // Positions created in ProjectManager already use a global monthIndex (0 = Jan 2024, ...)
                                // Cells in the grid also use this same global monthIndex. So we just match directly.
                                const monthPositions = (project.positions || []).filter((p)=>p.monthIndex === selectedCellMonth && (p.percentage || 0) > 0).map((p)=>{
                                    const allocated = allocations.filter((a)=>a.projectId === project.id && a.monthIndex === selectedCellMonth && a.positionName === p.name).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                    const available = Math.max(0, (p.percentage || 0) - allocated);
                                    const availableDays = selectedCellUser ? getDaysFromPercentage(selectedCellUser, selectedCellMonth, available) : 0;
                                    const allocatedDays = selectedCellUser ? getDaysFromPercentage(selectedCellUser, selectedCellMonth, allocated) : 0;
                                    return {
                                        ...p,
                                        projectId: project.id,
                                        projectName: project.name,
                                        projectColor: project.color,
                                        available,
                                        availableDays,
                                        allocated,
                                        allocatedDays
                                    };
                                }).filter((p)=>p.available > 0);
                                const availablePositions = monthPositions;
                                return availablePositions.map((position)=>{
                                    const positionKey = `${position.projectId}-${position.id}`;
                                    const isCustomMode = selectedPositionForCustom === positionKey;
                                    const customValue = customAllocationAmount[positionKey] || "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-3 hover:bg-blue-50 transition-colors",
                                        style: {
                                            borderLeft: `4px solid ${position.projectColor}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: position.name || "Unnamed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1393,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: position.projectName
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-medium",
                                                                children: [
                                                                    Math.round(position.available),
                                                                    "% (",
                                                                    position.availableDays,
                                                                    " days)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1397,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: [
                                                                    Math.round(position.allocated),
                                                                    "% (",
                                                                    position.allocatedDays,
                                                                    " days) allocated"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1396,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1391,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200 rounded-full h-2 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full transition-all duration-300",
                                                    style: {
                                                        width: `${position.allocated / position.percentage * 100}%`,
                                                        backgroundColor: position.projectColor
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1407,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: !isCustomMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                handleAddAllocation(position.projectId, position.name || "", position.available);
                                                            },
                                                            className: "flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors",
                                                            children: [
                                                                "Allocate Full (",
                                                                Math.round(position.available),
                                                                "%)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1421,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedPositionForCustom(positionKey);
                                                                setCustomAllocationAmount({
                                                                    ...customAllocationAmount,
                                                                    [positionKey]: Math.round(position.available).toString()
                                                                });
                                                            },
                                                            className: "flex-1 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700 transition-colors",
                                                            children: "Custom Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1420,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    max: Math.round(position.available),
                                                                    value: customValue,
                                                                    onChange: (e)=>{
                                                                        setCustomAllocationAmount({
                                                                            ...customAllocationAmount,
                                                                            [positionKey]: e.target.value
                                                                        });
                                                                    },
                                                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded text-sm",
                                                                    placeholder: `Enter % (max: ${Math.round(position.available)})`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1445,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1444,
                                                            columnNumber: 29
                                                        }, this),
                                                        selectedCellUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: customValue ? `${Math.round(Number(customValue) / 100 * getDaysFromPercentage(selectedCellUser, selectedCellMonth, 100))} days` : '0 days'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1462,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const amount = Number(customValue);
                                                                        if (amount > 0 && amount <= position.available) {
                                                                            handleAddAllocation(position.projectId, position.name || "", amount);
                                                                        }
                                                                    },
                                                                    disabled: !customValue || Number(customValue) <= 0 || Number(customValue) > position.available,
                                                                    className: "flex-1 px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    children: "Allocate Custom"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1467,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setSelectedPositionForCustom(null);
                                                                        setCustomAllocationAmount({
                                                                            ...customAllocationAmount,
                                                                            [positionKey]: ""
                                                                        });
                                                                    },
                                                                    className: "flex-1 px-3 py-2 bg-gray-400 text-white rounded text-sm hover:bg-gray-500 transition-colors",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1479,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1466,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1418,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, positionKey, true, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1384,
                                        columnNumber: 21
                                    }, this);
                                });
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1339,
                            columnNumber: 13
                        }, this),
                        projects.every((project)=>!project.positions?.some((p)=>p.monthIndex === selectedCellMonth && (p.percentage || 0) > 0)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800",
                            children: "No positions available for this month. Add positions in the project settings."
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1504,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>{
                                setShowPositionModal(false);
                                setSelectedPositionForCustom(null);
                                setCustomAllocationAmount({});
                            },
                            className: "w-full mt-4",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1508,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 1337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 1336,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserManagement"], {
                isOpen: showUserManagement,
                onClose: ()=>setShowUserManagement(false)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 1520,
                columnNumber: 7
            }, this),
            showMonthDetail && selectedMonthForDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-4 w-full max-w-7xl max-h-[95vh] overflow-y-auto mx-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold",
                                            children: [
                                                "Staff Allocation Detail - ",
                                                MONTHS[selectedMonthForDetail.month],
                                                " ",
                                                selectedMonthForDetail.year
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1531,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "View:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1536,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex border rounded overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setViewMode('percentage'),
                                                            className: `px-2 py-1 text-xs font-medium transition-colors ${viewMode === 'percentage' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                                            children: "% View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1538,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setViewMode('days'),
                                                            className: `px-2 py-1 text-xs font-medium transition-colors ${viewMode === 'days' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                                            children: "Days View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1548,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: exportMonthDetailToExcel,
                                                    className: "px-2 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors ml-3",
                                                    children: "Export to Excel"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1560,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1535,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1530,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowMonthDetail(false);
                                        setSelectedMonthForDetail(null);
                                    },
                                    className: "px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-xs",
                                    children: "× Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1568,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse border border-gray-300 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-100 w-32 text-xs",
                                                    children: "Staff"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1583,
                                                    columnNumber: 21
                                                }, this),
                                                filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-gray-300 p-1 bg-gray-100 min-w-24 text-xs",
                                                        style: {
                                                            backgroundColor: project.color,
                                                            color: getContrastColor(project.color)
                                                        },
                                                        children: project.name
                                                    }, project.id, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1585,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 p-1 bg-gray-100 w-32 text-xs",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1593,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1581,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: groupedUsers.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: filteredProjects.length + 2,
                                                            className: "border border-gray-300 p-1 font-semibold text-xs text-gray-800 bg-cyan-200",
                                                            children: group.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1600,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                        lineNumber: 1599,
                                                        columnNumber: 23
                                                    }, this),
                                                    group.users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-gray-300 p-1 text-xs",
                                                                    children: user.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1606,
                                                                    columnNumber: 27
                                                                }, this),
                                                                filteredProjects.map((project)=>{
                                                                    const userAllocations = allocations.filter((a)=>a.userId === user.id && a.monthIndex === selectedMonthForDetail.globalIndex);
                                                                    const projectAllocations = userAllocations.filter((a)=>a.projectId === project.id);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "border border-gray-300 p-0.5 text-center",
                                                                        children: projectAllocations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col gap-0.5",
                                                                            children: projectAllocations.map((allocation)=>{
                                                                                const position = project.positions?.find((p)=>p.id === allocation.positionId);
                                                                                const displayValue = viewMode === 'days' ? getDaysFromPercentage(user.id, selectedMonthForDetail.globalIndex, allocation.percentage) : Math.round(allocation.percentage || 0);
                                                                                const displayText = viewMode === 'days' ? `${Math.round(displayValue)} days` : `${displayValue}%`;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] px-1 py-0.5 rounded text-white leading-tight",
                                                                                    style: {
                                                                                        backgroundColor: project.color
                                                                                    },
                                                                                    title: `${position?.name || 'Position'} - ${Math.round(allocation.percentage || 0)}%`,
                                                                                    children: displayText
                                                                                }, allocation.id, false, {
                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                    lineNumber: 1631,
                                                                                    columnNumber: 41
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1618,
                                                                            columnNumber: 35
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-gray-400",
                                                                            children: "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1643,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, project.id, false, {
                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                        lineNumber: 1616,
                                                                        columnNumber: 31
                                                                    }, this);
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-gray-300 p-0.5 text-center text-xs font-medium",
                                                                    children: (()=>{
                                                                        const totalAllocated = allocations.filter((a)=>a.userId === user.id && a.monthIndex === selectedMonthForDetail.globalIndex).reduce((sum, a)=>sum + (a.percentage || 0), 0);
                                                                        const totalDays = getDaysFromPercentage(user.id, selectedMonthForDetail.globalIndex, totalAllocated);
                                                                        const roundedTotalAllocated = Math.round(totalAllocated);
                                                                        const roundedTotalDays = Math.round(totalDays);
                                                                        // Determine progress bar color and border
                                                                        let barColor = '#F59E0B' // Yellow (default for < 100%)
                                                                        ;
                                                                        let borderColor = 'transparent';
                                                                        if (roundedTotalAllocated >= 100) {
                                                                            if (roundedTotalAllocated > 100) {
                                                                                barColor = '#10B981'; // Green
                                                                                borderColor = '#EF4444'; // Red border for > 100%
                                                                            } else {
                                                                                barColor = '#10B981'; // Green
                                                                                borderColor = 'transparent';
                                                                            }
                                                                        } else {
                                                                            barColor = '#F59E0B'; // Yellow
                                                                            borderColor = 'transparent';
                                                                        }
                                                                        const displayText = viewMode === 'days' ? `${roundedTotalDays} days` : `${roundedTotalAllocated}%`;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-full h-3 rounded relative overflow-hidden",
                                                                                style: {
                                                                                    backgroundColor: '#E5E7EB',
                                                                                    border: borderColor !== 'transparent' ? `2px solid ${borderColor}` : 'none'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "h-full rounded transition-all duration-300",
                                                                                        style: {
                                                                                            width: `${Math.min(totalAllocated, 100)}%`,
                                                                                            backgroundColor: barColor
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                        lineNumber: 1689,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 flex items-center justify-center text-[9px] font-medium",
                                                                                        children: viewMode === 'days' ? `${roundedTotalDays} days` : `${roundedTotalAllocated}%`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                        lineNumber: 1697,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1681,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1679,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    })()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1648,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, user.id, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1605,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, group.department, true, {
                                                fileName: "[project]/components/allocation-grid.tsx",
                                                lineNumber: 1598,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1596,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 1580,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1579,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 1528,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 1527,
                columnNumber: 9
            }, this),
            showGanttChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold",
                                    children: "Project Gantt Chart"
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1721,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowGanttChart(false),
                                    className: "text-gray-500 hover:text-gray-700 text-2xl font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/allocation-grid.tsx",
                                    lineNumber: 1722,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1720,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-gray-500",
                                children: "No projects to display in Gantt chart"
                            }, void 0, false, {
                                fileName: "[project]/components/allocation-grid.tsx",
                                lineNumber: 1732,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-3 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-gray-700",
                                                            children: "Project Timeline (Monthly View)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1741,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                "Based on today's date: ",
                                                                new Date().toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1742,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1740,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-medium text-gray-600",
                                                            children: "Start Year:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1747,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: ganttStartYear,
                                                            onChange: (e)=>setGanttStartYear(Number(e.target.value)),
                                                            className: "border border-gray-300 rounded px-2 py-1 text-xs bg-white",
                                                            children: (()=>{
                                                                const allDates = projects.flatMap((p)=>[
                                                                        p.startYear || 2024,
                                                                        p.endYear || 2024
                                                                    ]);
                                                                const minYear = Math.min(...allDates, new Date().getFullYear() - 2);
                                                                const maxYear = Math.max(...allDates, new Date().getFullYear() + 2);
                                                                const years = [];
                                                                for(let y = minYear; y <= maxYear; y++){
                                                                    years.push(y);
                                                                }
                                                                return years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: year,
                                                                        children: year
                                                                    }, year, false, {
                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                        lineNumber: 1765,
                                                                        columnNumber: 31
                                                                    }, this));
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1739,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/allocation-grid.tsx",
                                        lineNumber: 1738,
                                        columnNumber: 19
                                    }, this),
                                    (()=>{
                                        // Create months for 2 years from ganttStartYear
                                        const months = [];
                                        const monthNames = [
                                            'Jan',
                                            'Feb',
                                            'Mar',
                                            'Apr',
                                            'May',
                                            'Jun',
                                            'Jul',
                                            'Aug',
                                            'Sep',
                                            'Oct',
                                            'Nov',
                                            'Dec'
                                        ];
                                        for(let year = ganttStartYear; year < ganttStartYear + 2; year++){
                                            for(let m = 0; m < 12; m++){
                                                months.push({
                                                    year,
                                                    month: m,
                                                    label: `${monthNames[m]} ${year}`
                                                });
                                            }
                                        }
                                        const today = new Date();
                                        const currentYear = today.getFullYear();
                                        const currentMonth = today.getMonth();
                                        const currentMonthIndex = months.findIndex((m)=>m.year === currentYear && m.month === currentMonth);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border rounded-lg overflow-hidden relative",
                                                    children: [
                                                        currentMonthIndex >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 pointer-events-none",
                                                            style: {
                                                                left: `calc((3 / (months.length + 3)) * 100% + ${(currentMonthIndex + 0.5) * (97 / (months.length + 3))}%)`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-2 -left-3 w-6 h-4 bg-red-500 text-white text-xs rounded flex items-center justify-center font-bold",
                                                                children: "Today"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                lineNumber: 1805,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1799,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid bg-gray-100",
                                                            style: {
                                                                gridTemplateColumns: '3fr repeat(24, 1fr)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-0.5 text-xs font-medium text-gray-700 border-r",
                                                                    children: "Project"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 1813,
                                                                    columnNumber: 29
                                                                }, this),
                                                                months.map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-0 text-xs font-medium text-center text-gray-700 border-r last:border-r-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs",
                                                                                children: month.label.split(' ')[0]
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1816,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs font-bold",
                                                                                children: month.label.split(' ')[1]
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1817,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, `${month.year}-${month.month}`, true, {
                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                        lineNumber: 1815,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 1812,
                                                            columnNumber: 27
                                                        }, this),
                                                        (()=>{
                                                            const ongoingProjects = projects.filter((p)=>{
                                                                const start = new Date(p.startYear || 2024, p.startMonth || 0, 1);
                                                                const end = new Date(p.endYear || 2024, p.endMonth || 11, 1);
                                                                return today >= start && today <= end;
                                                            });
                                                            if (ongoingProjects.length > 0) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-0.5 bg-blue-50 text-xs font-medium text-blue-700 border-b",
                                                                            style: {
                                                                                gridColumn: '1 / -1'
                                                                            },
                                                                            children: [
                                                                                "🔵 Ongoing (",
                                                                                ongoingProjects.length,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1833,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        ongoingProjects.map((project)=>{
                                                                            const projectStart = new Date(project.startYear || 2024, project.startMonth || 0, 1);
                                                                            const projectEnd = new Date(project.endYear || 2024, project.endMonth || 11, 1);
                                                                            const totalDays = Math.ceil((projectEnd.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24));
                                                                            const elapsedDays = Math.ceil((today.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24));
                                                                            const completionPercentage = Math.max(0, Math.min(100, Math.round(elapsedDays / totalDays * 100)));
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid border-b hover:bg-gray-50 relative",
                                                                                style: {
                                                                                    gridTemplateColumns: '3fr repeat(24, 1fr)'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-0.5 border-r",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2 h-2 rounded flex-shrink-0",
                                                                                                    style: {
                                                                                                        backgroundColor: project.color
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1847,
                                                                                                    columnNumber: 45
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs font-medium truncate",
                                                                                                    children: project.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1851,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 1846,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                        lineNumber: 1845,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    months.map((month, index)=>{
                                                                                        const monthStart = new Date(month.year, month.month, 1);
                                                                                        const monthEnd = new Date(month.year, month.month + 1, 0);
                                                                                        const overlapStart = projectStart < monthStart ? monthStart : projectStart;
                                                                                        const overlapEnd = projectEnd > monthEnd ? monthEnd : projectEnd;
                                                                                        const hasOverlap = overlapStart <= overlapEnd;
                                                                                        const monthDays = Math.ceil((monthEnd.getTime() - monthStart.getTime()) / (1000 * 60 * 60 * 24));
                                                                                        const overlapDays = hasOverlap ? Math.ceil((overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24)) : 0;
                                                                                        const monthCoverage = hasOverlap ? overlapDays / monthDays * 100 : 0;
                                                                                        const isCurrentMonthInProject = month.year === currentYear && month.month === currentMonth && today >= projectStart && today <= projectEnd;
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "border-r last:border-r-0 p-0",
                                                                                            children: hasOverlap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "relative h-3 bg-gray-200 rounded overflow-hidden",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "h-full rounded transition-all duration-300",
                                                                                                        style: {
                                                                                                            width: `${monthCoverage}%`,
                                                                                                            backgroundColor: project.color,
                                                                                                            opacity: isCurrentMonthInProject ? 1 : 0.8
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                                        lineNumber: 1874,
                                                                                                        columnNumber: 51
                                                                                                    }, this),
                                                                                                    isCurrentMonthInProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "absolute inset-0 border-2 border-blue-400 rounded pointer-events-none"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                                        lineNumber: 1884,
                                                                                                        columnNumber: 53
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 1873,
                                                                                                columnNumber: 49
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 1888,
                                                                                                columnNumber: 49
                                                                                            }, this)
                                                                                        }, `${month.year}-${month.month}`, false, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 1871,
                                                                                            columnNumber: 45
                                                                                        }, this);
                                                                                    })
                                                                                ]
                                                                            }, project.id, true, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1844,
                                                                                columnNumber: 39
                                                                            }, this);
                                                                        })
                                                                    ]
                                                                }, void 0, true);
                                                            }
                                                            return null;
                                                        })(),
                                                        (()=>{
                                                            const completedProjects = projects.filter((p)=>{
                                                                const end = new Date(p.endYear || 2024, p.endMonth || 11, 1);
                                                                return today > end;
                                                            });
                                                            if (completedProjects.length > 0) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-0.5 bg-green-50 text-xs font-medium text-green-700 border-b",
                                                                            style: {
                                                                                gridColumn: '1 / -1'
                                                                            },
                                                                            children: [
                                                                                "🟢 Completed (",
                                                                                completedProjects.length,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1912,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        completedProjects.map((project)=>{
                                                                            const projectStart = new Date(project.startYear || 2024, project.startMonth || 0, 1);
                                                                            const projectEnd = new Date(project.endYear || 2024, project.endMonth || 11, 1);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid border-b hover:bg-gray-50",
                                                                                style: {
                                                                                    gridTemplateColumns: '3fr repeat(24, 1fr)'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-0.5 border-r",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2 h-2 rounded flex-shrink-0",
                                                                                                    style: {
                                                                                                        backgroundColor: project.color
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1923,
                                                                                                    columnNumber: 45
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs font-medium truncate",
                                                                                                    children: project.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1927,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 1922,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                        lineNumber: 1921,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    months.map((month)=>{
                                                                                        const monthStart = new Date(month.year, month.month, 1);
                                                                                        const monthEnd = new Date(month.year, month.month + 1, 0);
                                                                                        const overlapStart = projectStart < monthStart ? monthStart : projectStart;
                                                                                        const overlapEnd = projectEnd > monthEnd ? monthEnd : projectEnd;
                                                                                        const hasOverlap = overlapStart <= overlapEnd;
                                                                                        const monthDays = Math.ceil((monthEnd.getTime() - monthStart.getTime()) / (1000 * 60 * 60 * 24));
                                                                                        const overlapDays = hasOverlap ? Math.ceil((overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24)) : 0;
                                                                                        const monthCoverage = hasOverlap ? overlapDays / monthDays * 100 : 0;
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "border-r last:border-r-0 p-0",
                                                                                            children: hasOverlap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "relative h-3 bg-gray-200 rounded overflow-hidden",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "h-full rounded transition-all duration-300",
                                                                                                    style: {
                                                                                                        width: `${monthCoverage}%`,
                                                                                                        backgroundColor: project.color,
                                                                                                        opacity: 0.7
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1946,
                                                                                                    columnNumber: 51
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 1945,
                                                                                                columnNumber: 49
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 1957,
                                                                                                columnNumber: 49
                                                                                            }, this)
                                                                                        }, `${month.year}-${month.month}`, false, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 1943,
                                                                                            columnNumber: 45
                                                                                        }, this);
                                                                                    })
                                                                                ]
                                                                            }, project.id, true, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1920,
                                                                                columnNumber: 39
                                                                            }, this);
                                                                        })
                                                                    ]
                                                                }, void 0, true);
                                                            }
                                                            return null;
                                                        })(),
                                                        (()=>{
                                                            const plannedProjects = projects.filter((p)=>{
                                                                const start = new Date(p.startYear || 2024, p.startMonth || 0, 1);
                                                                return today < start;
                                                            });
                                                            if (plannedProjects.length > 0) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-0.5 bg-yellow-50 text-xs font-medium text-yellow-700 border-b",
                                                                            style: {
                                                                                gridColumn: '1 / -1'
                                                                            },
                                                                            children: [
                                                                                "🟡 Planned (",
                                                                                plannedProjects.length,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 1981,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        plannedProjects.map((project)=>{
                                                                            const projectStart = new Date(project.startYear || 2024, project.startMonth || 0, 1);
                                                                            const projectEnd = new Date(project.endYear || 2024, project.endMonth || 11, 1);
                                                                            const daysUntilStart = Math.ceil((projectStart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid border-b hover:bg-gray-50",
                                                                                style: {
                                                                                    gridTemplateColumns: '3fr repeat(24, 1fr)'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "p-0.5 border-r",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2 h-2 rounded flex-shrink-0",
                                                                                                    style: {
                                                                                                        backgroundColor: project.color
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1993,
                                                                                                    columnNumber: 45
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs font-medium truncate",
                                                                                                    children: project.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 1997,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 1992,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/allocation-grid.tsx",
                                                                                        lineNumber: 1991,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    months.map((month)=>{
                                                                                        const monthStart = new Date(month.year, month.month, 1);
                                                                                        const monthEnd = new Date(month.year, month.month + 1, 0);
                                                                                        const overlapStart = projectStart < monthStart ? monthStart : projectStart;
                                                                                        const overlapEnd = projectEnd > monthEnd ? monthEnd : projectEnd;
                                                                                        const hasOverlap = overlapStart <= overlapEnd;
                                                                                        const monthDays = Math.ceil((monthEnd.getTime() - monthStart.getTime()) / (1000 * 60 * 60 * 24));
                                                                                        const overlapDays = hasOverlap ? Math.ceil((overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24)) : 0;
                                                                                        const monthCoverage = hasOverlap ? overlapDays / monthDays * 100 : 0;
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "border-r last:border-r-0 p-0",
                                                                                            children: hasOverlap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "relative h-3 bg-gray-200 rounded overflow-hidden",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "h-full rounded transition-all duration-300",
                                                                                                    style: {
                                                                                                        width: `${monthCoverage}%`,
                                                                                                        backgroundColor: project.color,
                                                                                                        opacity: 0.6,
                                                                                                        borderStyle: 'dashed'
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                                                    lineNumber: 2016,
                                                                                                    columnNumber: 51
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 2015,
                                                                                                columnNumber: 49
                                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "h-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                                lineNumber: 2028,
                                                                                                columnNumber: 49
                                                                                            }, this)
                                                                                        }, `${month.year}-${month.month}`, false, {
                                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                                            lineNumber: 2013,
                                                                                            columnNumber: 45
                                                                                        }, this);
                                                                                    })
                                                                                ]
                                                                            }, project.id, true, {
                                                                                fileName: "[project]/components/allocation-grid.tsx",
                                                                                lineNumber: 1990,
                                                                                columnNumber: 39
                                                                            }, this);
                                                                        })
                                                                    ]
                                                                }, void 0, true);
                                                            }
                                                            return null;
                                                        })()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 1796,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-gray-700 mb-2",
                                                            children: "Timeline Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 2045,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-600",
                                                            children: [
                                                                "Showing: ",
                                                                ganttStartYear,
                                                                " - ",
                                                                ganttStartYear + 1,
                                                                " (24 months)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 2046,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 2044,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-gray-700 mb-2",
                                                            children: "Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 2053,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-3 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-green-600",
                                                                            children: projects.filter((p)=>new Date() > new Date(p.endYear || 2024, p.endMonth || 11, 1)).length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2056,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500",
                                                                            children: "Completed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2059,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 2055,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-blue-600",
                                                                            children: projects.filter((p)=>{
                                                                                const start = new Date(p.startYear || 2024, p.startMonth || 0, 1);
                                                                                const end = new Date(p.endYear || 2024, p.endMonth || 11, 1);
                                                                                return today >= start && today <= end;
                                                                            }).length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2062,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500",
                                                                            children: "Ongoing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2069,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 2061,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-yellow-600",
                                                                            children: projects.filter((p)=>new Date() < new Date(p.startYear || 2024, p.startMonth || 0, 1)).length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2072,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500",
                                                                            children: "Planned"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                                            lineNumber: 2075,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                                    lineNumber: 2071,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/allocation-grid.tsx",
                                                            lineNumber: 2054,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/allocation-grid.tsx",
                                                    lineNumber: 2052,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/allocation-grid.tsx",
                                            lineNumber: 1794,
                                            columnNumber: 23
                                        }, this);
                                    })()
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/allocation-grid.tsx",
                            lineNumber: 1730,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/allocation-grid.tsx",
                    lineNumber: 1719,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/allocation-grid.tsx",
                lineNumber: 1718,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/allocation-grid.tsx",
        lineNumber: 897,
        columnNumber: 5
    }, this);
}
_s(AllocationGrid, "SQz57D4hX5Ke+xps568SOLn6C00=");
_c = AllocationGrid;
var _c;
__turbopack_context__.k.register(_c, "AllocationGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f453d79f._.js.map