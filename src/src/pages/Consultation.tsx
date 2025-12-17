import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mic, Video as VideoIcon, PhoneOff, Monitor, Settings } from "lucide-react";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-serif">Virtual Consultation</h1>
            <p className="text-muted-foreground">Dr. Sarah Wilson • General Practice</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-green-600">Live Secure Connection</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 h-[600px]">
          {/* Main Video Area */}
          <div className="lg:col-span-2 bg-black rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-zinc-900">
              <div className="text-center">
                <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <VideoIcon className="h-10 w-10 text-zinc-500" />
                </div>
                <p className="text-zinc-400">Waiting for doctor to join...</p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-center gap-4">
                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md">
                  <Mic className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md">
                  <VideoIcon className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="destructive" className="rounded-full h-14 w-14 shadow-lg">
                  <PhoneOff className="h-6 w-6" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md">
                  <Monitor className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Self View */}
            <div className="absolute top-6 right-6 w-48 h-32 bg-zinc-800 rounded-lg border-2 border-white/10 shadow-lg overflow-hidden">
               <div className="w-full h-full flex items-center justify-center bg-zinc-700">
                 <span className="text-xs text-zinc-400">Your Camera</span>
               </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col">
            <h3 className="font-serif font-semibold text-lg mb-4">Consultation Details</h3>
            
            <div className="space-y-6 flex-1">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Patient</label>
                <p className="text-foreground font-medium">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">ID: #839201</p>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Reason for Visit</label>
                <p className="text-sm text-foreground">Annual checkup review and prescription renewal request.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Vitals</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                   <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Heart Rate</p>
                      <p className="font-mono font-medium">72 bpm</p>
                   </div>
                   <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Blood Pressure</p>
                      <p className="font-mono font-medium">120/80</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
              <Button className="w-full">View Medical History</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
