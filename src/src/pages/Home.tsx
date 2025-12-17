import { Navbar } from "@/components/Navbar";
import { ArrowRight, Video, MessageSquare, FileText, Activity } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/professional_telehealth_doctor_consultation_on_laptop_screen_in_modern_bright_setting.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-serif text-foreground tracking-tight mb-6">
              Modern Telehealth <br className="hidden lg:block" /> Made Simple
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Speak to licensed clinicians online, get prescriptions, and manage your health—all from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/consultation" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg text-base font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer">
                Start Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground hover:bg-gray-50 px-8 py-3 rounded-lg text-base font-semibold transition-all shadow-sm cursor-pointer">
                Patient Login
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                     {/* Placeholder avatars */}
                     <span className="text-[10px] font-bold text-gray-400">Dr</span>
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ patients</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[600px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={heroImage} 
                alt="Telehealth Consultation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="text-sm font-semibold text-green-600">Connected</p>
                </div>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-3/4 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif mb-4">Complete Care Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to manage your health journey, simplified.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="h-8 w-8 text-primary" />,
                title: "Video Consultation",
                desc: "High-quality secure video consultations with licensed healthcare professionals anytime, anywhere."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Secure Messaging",
                desc: "Communicate directly with your doctors using our end-to-end encrypted messaging system."
              },
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "Lab Results & Rx",
                desc: "Instant access to your lab results and prescription management through your personal dashboard."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
