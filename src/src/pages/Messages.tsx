import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Paperclip, MoreVertical, Search } from "lucide-react";

export default function Messages() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 flex gap-6 h-[calc(100vh-64px)]">
        {/* Sidebar - Chat List */}
        <div className="w-80 bg-white rounded-2xl border border-border shadow-sm hidden md:flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9 bg-secondary/50 border-none" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`p-4 hover:bg-secondary/50 cursor-pointer transition-colors border-b border-border/50 flex gap-3 ${i === 1 ? 'bg-secondary/30' : ''}`}>
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">DR</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm truncate">Dr. Sarah Wilson</h4>
                    <span className="text-xs text-muted-foreground">10:30 AM</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">Please let me know if the symptoms persist...</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white rounded-2xl border border-border shadow-sm flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex justify-between items-center bg-white z-10">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">SW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">Dr. Sarah Wilson</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 bg-slate-50">
            <div className="space-y-6">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">SW</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%]">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm border border-border">
                    <p>Hello Alex, how are you feeling today? Has the medication helped with the migraines?</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block ml-1">10:30 AM</span>
                </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className="bg-slate-900 text-white text-xs">ME</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%]">
                  <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-none shadow-sm text-sm">
                    <p>Hi Dr. Wilson. Yes, much better thanks! I still have a bit of nausea though.</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block mr-1 text-right">10:32 AM</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">SW</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%]">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm border border-border">
                    <p>That can be a common side effect. It should subside in a day or two. If it persists, let me know immediately.</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block ml-1">10:33 AM</span>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-border">
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input className="flex-1 bg-secondary/30 border-transparent focus:border-primary" placeholder="Type a secure message..." />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-center">
               <span className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-slate-300"></span> 
                 End-to-end encrypted secure messaging
               </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
