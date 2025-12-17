import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Activity, MessageSquare, Pill, ChevronRight, Download } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-serif">Hello, Alex</h1>
            <p className="text-muted-foreground">Here is your health overview for today.</p>
          </div>
          <Button>Book New Appointment</Button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Upcoming Visit", value: "Feb 24", sub: "10:00 AM", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
            { title: "Messages", value: "2 New", sub: "Dr. Wilson", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-50" },
            { title: "Lab Results", value: "Available", sub: "Blood Work", icon: Activity, color: "text-green-500", bg: "bg-green-50" },
            { title: "Prescriptions", value: "1 Active", sub: "Refill in 5 days", icon: Pill, color: "text-orange-500", bg: "bg-orange-50" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity / Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold font-serif">Recent Activity</h2>
                <Button variant="link" className="text-primary p-0">View All</Button>
              </div>
              <Card className="border-none shadow-md overflow-hidden">
                <div className="divide-y divide-border">
                   {[
                     { title: "Appointment Confirmed", desc: "General Checkup with Dr. Wilson", date: "Today, 9:41 AM", icon: Calendar },
                     { title: "Prescription Refilled", desc: "Amoxicillin 500mg - 30 tablets", date: "Yesterday", icon: Pill },
                     { title: "Lab Results Ready", desc: "Comprehensive Metabolic Panel", date: "Feb 10", icon: FileText },
                   ].map((item, i) => (
                     <div key={i} className="p-4 hover:bg-secondary/30 transition-colors flex items-center gap-4">
                       <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                         <item.icon className="h-5 w-5 text-muted-foreground" />
                       </div>
                       <div className="flex-1">
                         <h4 className="font-medium text-sm">{item.title}</h4>
                         <p className="text-sm text-muted-foreground">{item.desc}</p>
                       </div>
                       <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                       <ChevronRight className="h-4 w-4 text-muted-foreground" />
                     </div>
                   ))}
                </div>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-bold font-serif mb-4">Current Medications</h2>
              <Card className="border-none shadow-md p-0">
                 <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                          <Pill className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="font-bold">Amoxicillin</h4>
                          <p className="text-sm text-muted-foreground">500mg • Take 1 tablet daily</p>
                       </div>
                    </div>
                    <Button variant="outline" size="sm">Request Refill</Button>
                 </div>
              </Card>
            </section>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-6">
            <Card className="border-none shadow-md bg-gradient-to-br from-primary to-blue-600 text-white">
              <CardContent className="p-6">
                 <h3 className="font-serif font-bold text-lg mb-2">Premium Care Plan</h3>
                 <p className="text-blue-100 text-sm mb-6">You are covered for unlimited video consultations and priority support.</p>
                 <Button variant="secondary" className="w-full text-primary font-semibold">View Benefits</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Recent Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                 {[
                   "Blood Work Report.pdf",
                   "Vaccination Record.pdf",
                   "Invoice #00239.pdf"
                 ].map((doc, i) => (
                   <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/30 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                         <FileText className="h-4 w-4 text-muted-foreground" />
                         <span className="text-sm font-medium truncate max-w-[150px]">{doc}</span>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground hover:text-primary" />
                   </div>
                 ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
