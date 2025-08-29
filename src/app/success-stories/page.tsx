import type { Metadata } from 'next';
import SuccessStoriesClientPage from './success-stories-client-page';


export const metadata: Metadata = {
  title: "Success Stories",
  description: "Discover how Vox Bureau has helped public institutions overcome their most pressing communication and representation challenges through our expert advisory services.",
};


export default function SuccessStoriesPage() {
  return <SuccessStoriesClientPage />;
}
