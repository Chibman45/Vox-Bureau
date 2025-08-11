"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const successStories = [
  {
    client: "National Directorate of Urban Planning",
    challenge:
      "The National Directorate of Urban Planning (NDUP) was struggling with poor public perception after a series of controversial zoning changes. Their core messages were failing to resonate with community stakeholders, leading to widespread project opposition and delays.",
    solution:
      "Vox Bureau was engaged to manage stakeholder relationships and refine their communication strategy. We developed a series of clear, transparent presentations and facilitated town hall meetings where NDUP officials could address public concerns directly. By acting as a trusted intermediary, we helped rebuild trust and foster constructive dialogue.",
    outcome:
      "Within six months, public trust in the NDUP increased by 25%, and two major infrastructure projects received community approval, unlocking over $50 million in development funds.",
  },
  {
    client: "Ministry of Health & Wellness",
    challenge:
      "During a national health crisis, the Ministry of Health & Wellness faced challenges with disjointed internal messaging. Critical information was not being disseminated effectively between departments, causing confusion and slowing down response times.",
    solution:
      "Our team was brought in to provide proxy representation in daily crisis meetings, ensuring that the Minister’s directives were clearly understood and acted upon. We implemented a streamlined reporting system and drafted all internal communications to ensure consistency and clarity, freeing up ministry leadership to focus on strategic decisions.",
    outcome:
      "Internal communication efficiency improved by 40%, and the Ministry was able to launch a successful public vaccination campaign two weeks ahead of schedule.",
  },
  {
    client: "Federal Agency for Innovation",
    challenge:
      "The Federal Agency for Innovation (FAI) had a groundbreaking research proposal but failed to secure a critical international grant due to a poorly written application. The submission was dense, lacked a compelling narrative, and failed to meet key compliance requirements.",
    solution:
      "Vox Bureau's proposal writing team completely overhauled the grant application. We restructured the narrative to highlight the project's strategic importance, wrote a powerful executive summary, and ensured every section was fully compliant with the grant's stringent guidelines. Our professional speechwriters also prepared the FAI's director for the final presentation to the grant committee.",
    outcome:
      "The revised proposal was a success, securing a $15 million grant that has since positioned the nation as a leader in technological innovation.",
  },
  {
    client: "Department of Environmental Protection",
    challenge:
      "The Department of Environmental Protection (DEP) needed to communicate a new set of complex environmental regulations to industrial stakeholders. Their initial attempts were met with resistance and misunderstanding, threatening to derail the entire policy rollout.",
    solution:
      "We developed a series of targeted presentations and compliance communication materials tailored to different industry segments. Our team also provided proxy representation at key industry briefings, patiently explaining the new regulations and gathering feedback. This allowed the DEP to make minor adjustments that demonstrated their willingness to partner with the private sector.",
    outcome:
      "The new regulations were adopted with a 95% compliance rate within the first year, and the DEP was praised for its collaborative approach to policymaking.",
  },
];


export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
                  Client Success Stories
                </h1>
                <p className="max-w-[800px] text-muted-foreground md:text-xl">
                  Our strategies deliver measurable results. Discover how we have helped public institutions overcome their most pressing communication and representation challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{story.client}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-primary/90 mb-2">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-bold text-lg text-accent mb-2">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
                  </div>
                   <Separator />
                  <div>
                    <h3 className="font-bold text-lg text-emerald-600 mb-2">The Outcome</h3>
                    <p className="text-muted-foreground leading-relaxed">{story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
