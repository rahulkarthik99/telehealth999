import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Clock, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Appointments() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);

  const times = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "04:30 PM"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold font-serif mb-3">Book an Appointment</h1>
          <p className="text-muted-foreground">Select a date and time to meet with your specialist.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose your preferred slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center border rounded-lg p-4 bg-white">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                />
              </div>

              <div>
                <Label className="mb-3 block">Available Times</Label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={cn(
                        "text-sm py-2 px-3 rounded-md border transition-all",
                        time === t 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-white hover:bg-secondary border-border text-foreground"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg h-fit">
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Tell us a bit about your visit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Please describe your symptoms or reason for consultation..." 
                  className="min-h-[120px]"
                />
              </div>

              <div className="bg-secondary/30 p-4 rounded-lg space-y-3 mt-4">
                <div className="flex items-center gap-3 text-sm">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <span className="font-medium">
                    {date ? date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' }) : "Select a date"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{time || "Select a time"}</span>
                </div>
              </div>

              <Button className="w-full mt-4" size="lg" disabled={!date || !time}>
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
