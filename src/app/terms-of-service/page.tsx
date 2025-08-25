
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfService({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Terms of Service</h1>
          <div className="space-y-6 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our website, https://voxbureau.com (the "Site"), and any of our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">2. Our Services</h2>
            <p>
              Vox Bureau ("we", "us", "our") provides specialized advisory in governance, risk, compliance, stakeholder engagement, corporate communication, and public sector finance ("Services"). The information provided on our Site is for general informational purposes only and does not constitute legal, financial, or professional advice. Specific client engagements are governed by separate, legally binding contracts.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">3. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are and will remain the exclusive property of Vox Bureau and its licensors. Our content is protected by copyright, trademark, and other laws of both the Federal Republic of Nigeria and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">4. User Conduct</h2>
            <p>
              You agree not to use the Site in any way that is unlawful, or that could harm Vox Bureau or any third party. You are responsible for any information you submit through our contact forms and agree not to provide any content that is false, misleading, or infringes on the rights of others.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">5. Disclaimers and Limitation of Liability</h2>
            <p>
              Our Site and Services are provided on an "AS IS" and "AS AVAILABLE" basis. While we strive to provide accurate and timely information, we make no warranties, expressed or implied, regarding the operation of our site or the information, content, or materials included.
            </p>
            <p>
              To the fullest extent permissible by law, Vox Bureau disclaims all warranties. We will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:voxbureau.info@gmail.com" className="text-accent hover:underline">
                voxbureau.info@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
