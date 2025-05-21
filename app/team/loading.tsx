import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { AppSidebar } from "@/components/app-sidebar"

export default function TeamLoading() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl -z-10 rounded-3xl opacity-30"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 dark:border-slate-700 p-6 md:p-8">
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-full max-w-2xl" />
              </div>
            </div>

            <Card className="border-blue-100 dark:border-slate-700 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-60" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Skeleton className="h-10 w-full sm:w-[260px]" />
                    <div className="flex gap-3">
                      <Skeleton className="h-10 w-full sm:w-[130px]" />
                      <Skeleton className="h-10 w-full sm:w-[150px]" />
                      <Skeleton className="h-10 w-full sm:w-[120px]" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-blue-100 dark:border-slate-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-blue-50 dark:bg-slate-800/50 border-b border-blue-100 dark:border-slate-700">
                          <th className="text-left py-3 px-4 font-medium text-sm">
                            <Skeleton className="h-4 w-20" />
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-sm">
                            <Skeleton className="h-4 w-16" />
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-sm hidden md:table-cell">
                            <Skeleton className="h-4 w-24" />
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-sm hidden lg:table-cell">
                            <Skeleton className="h-4 w-16" />
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-sm">
                            <Skeleton className="h-4 w-16" />
                          </th>
                          <th className="text-right py-3 px-4 font-medium text-sm">
                            <Skeleton className="h-4 w-20 ml-auto" />
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-100 dark:divide-slate-700">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <tr key={index} className="bg-white dark:bg-slate-800">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <div>
                                  <Skeleton className="h-4 w-24 mb-1" />
                                  <Skeleton className="h-3 w-32" />
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Skeleton className="h-5 w-16 rounded-full" />
                            </td>
                            <td className="py-3 px-4 hidden md:table-cell">
                              <Skeleton className="h-4 w-20" />
                            </td>
                            <td className="py-3 px-4 hidden lg:table-cell">
                              <Skeleton className="h-4 w-24" />
                            </td>
                            <td className="py-3 px-4">
                              <Skeleton className="h-5 w-16 rounded-full" />
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Skeleton className="h-8 w-8 rounded-md ml-auto" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
