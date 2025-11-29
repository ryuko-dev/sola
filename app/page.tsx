import { AllocationGrid } from "@/components/allocation-grid"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-semibold text-gray-900">Sola Allocation Tool</h1>
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Allocation
            </Link>
            <Link 
              href="/planning" 
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Planning
            </Link>
            <Link 
              href="/actual-allocation" 
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Payroll Allocation
            </Link>
            <Link 
              href="/expense-allocation" 
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Expense Allocation
            </Link>
            <Link 
              href="/scheduled-records" 
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Scheduled Records
            </Link>
          </div>
        </div>
      </nav>
      <AllocationGrid />
    </main>
  )
}
