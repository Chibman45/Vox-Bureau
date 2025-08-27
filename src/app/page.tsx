
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
  Building,
  HeartHandshake,
  MessageCircle,
  Scale,
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
    icon: Scale,
    title: "Governance, Risk & Compliance (GRC) Advisory",
    items: [
      "Compliance Experience Design",
      "Compliance Management",
      "Institutional Reputation Risk Insurance Advisory",
      "Regulatory & Legal Advisory",
      "Governance Structuring for Businesses",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Stakeholder Engagement & Client Reputation Management (CRM)",
    items: [
      "Stakeholder Communication Strategies",
      "Reputation & Crisis Management",
      "Public Relations (PR) Campaigns",
      "Community & Public Sector Engagement",
      "Investor & Shareholder Relations",
      "Customer Relations Management",
      "Client Maintenance & Retention Strategies",
    ],
  },
  {
    icon: MessageCircle,
    title: "Corporate Communication & Specialized Advisory",
    items: [
      "Specialized Communication for Leadership",
      "Speechwriting & Presentation Design",
      "Proposal & Business Document Drafting",
      "Corporate Advisory & Strategic Communication",
      "Proxy Representation at Meetings",
      "Detailed Proxy Meeting Reports",
    ],
  },
  {
    icon: Building,
    title: "Public Sector & Financial Advisory",
    items: [
      "Public Sector Financial & Operational Advisory",
      "Policy Advisory & Government Relations",
      "Institutional Partnerships & Development Support",
    ],
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

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
    const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=2070&auto=format&fit=crop",
      alt: "Professional black woman smiling in an office",
      "data-ai-hint": "professional woman"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop",
      alt: "Black woman in a business suit leading a meeting",
      "data-ai-hint": "business meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=2070&auto=format&fit=crop",
      alt: "Group of diverse professionals collaborating",
      "data-ai-hint": "team collaboration",
      position: "object-center"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      alt: "Black professional man presenting at a whiteboard",
      "data-ai-hint": "man presenting",
      position: "object-center"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      alt: "Two black professionals in a discussion",
      "data-ai-hint": "business discussion"
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
        >
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"} ${image.position || ''}`}
              priority={index === 0}
              data-ai-hint={image['data-ai-hint']}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 text-white text-left">
                <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-1000">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Expertise in Institutional Communication
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Vox Bureau offers expert communication and institutional representation solutions tailored for high-level government bodies and national agencies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row animate-in fade-in slide-in-from-top-8 duration-1000 delay-200">
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
            <div className="mx-auto grid max-w-7xl items-stretch justify-center gap-8 py-12 sm:grid-cols-1 md:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
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
                <p className="text-muted-foreground">voxbureau.info@gmail.com</p>
              </div>
               <div className="space-y-2">
                <h3 className="font-semibold">Our Office</h3>
<<<<<<< HEAD
                <p className="text-muted-foreground">No 14 Quarry Rd Bmuko Dutse Alhaji, Abuja</p>
=======
                <p className="text-muted-foreground">No 14 Quary Rd Bmuko Dutse Alhaji, Abuja</p>
>>>>>>> ba88a74 (Implement vercel analytics)
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
