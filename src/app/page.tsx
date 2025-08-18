
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { Footer } from "@/components/footer";

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
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Office meeting with laptops",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Professionals collaborating",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
        >
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 text-white text-left">
                <div className="space-y-2 animate-in fade-in-up duration-500">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Expertise in Institutional Communication
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Vox Bureau offers expert communication and institutional representation solutions tailored for high-level government bodies and national agencies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-in fade-in-up duration-500 delay-200">
                  <Button size="lg" asChild>
                    <Link href="/#contact">Request a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solutions for Institutional Excellence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a suite of services designed to enhance how your institution engages with the public, partners, and stakeholders.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary-foreground">Why Vox Bureau?</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Your Strategic Partner in Communication</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choosing us means partnering with a team that values your mission and is committed to your success.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {whyUsItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Leading Institutions
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Our commitment to excellence has earned us the trust of high-level government bodies and national agencies. See the impact we've made.
            </p>
            <Button variant="default" size="lg" asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
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
      <Footer />
    </div>
  );
}
