import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  FileText,
  Handshake,
  ShieldCheck,
  Target,
  Presentation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";

const services = [
  {
    icon: Presentation,
    title: "Professional Speeches & Presentations",
    description: "Executive-level speechwriting and presentation development for conferences, briefings, and public functions.",
  },
  {
    icon: Briefcase,
    title: "Proxy Representation & Meeting Attendance",
    description: "Vox Bureau acts on behalf of top-level executives during board meetings and inter-agency sessions, providing detailed reports.",
  },
  {
    icon: Handshake,
    title: "Client & Stakeholder Relationship Management",
    description: "Structured communication, reporting, and follow-up mechanisms for partner organizations and private sector investors.",
  },
  {
    icon: FileText,
    title: "Proposal Writing & Compliance Communication",
    description: "Grant proposals, inter-agency reports, performance briefs, and compliance-related communication support.",
  },
];

const whyUsItems = [
  {
    icon: ShieldCheck,
    title: "Confidential & Reliable",
    description: "We work with integrity and discretion, ensuring your institution's information is always handled with the utmost care.",
  },
  {
    icon: Award,
    title: "Experienced & Professional",
    description: "Our team is led by seasoned legal, communication, and compliance professionals dedicated to delivering excellence.",
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description: "We tailor every solution to align perfectly with your institution’s mission, goals, and stakeholder needs.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 animate-in fade-in-up duration-500">
                  <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Expertise in Institutional Communication
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl animate-in fade-in-up duration-500 delay-200">
                    Vox Bureau offers expert communication and institutional representation solutions tailored for high-level government bodies and national agencies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-in fade-in-up duration-500 delay-400">
                  <Button size="lg" asChild>
                    <Link href="/#contact">Request a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="business meeting"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg animate-in fade-in-up duration-500 delay-500"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Our Services</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Solutions for Institutional Excellence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a suite of services designed to enhance how your institution engages with the public, partners, and stakeholders.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Why Vox Bureau?</div>
              <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">Your Strategic Partner in Communication</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choosing us means partnering with a team that values your mission and is committed to your success.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {whyUsItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Leading Institutions
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our commitment to excellence has earned us the trust of high-level government bodies and national agencies. See the impact we've made.
            </p>
            <Button variant="secondary" size="lg" asChild className="mt-8">
              <Link href="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-md text-muted-foreground">
                Have a question or need a consultation? Fill out the form, and a member of our team will get back to you promptly.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-muted-foreground">contact@voxbureau.com</p>
              </div>
               <div className="space-y-2">
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-muted-foreground">123 Government Plaza, Suite 100, Capital City</p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Send us a message for inquiries or consultations.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Vox Bureau. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

    