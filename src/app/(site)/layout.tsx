import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SmoothScrollProvider } from "@/components/site/smooth-scroll";
import { ScrollAnimations } from "@/components/site/scroll-animations";
import { BackToTop } from "@/components/site/back-to-top";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Header />
      <main id="main" className="min-h-dvh">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <BackToTop />
      <ScrollAnimations />
    </SmoothScrollProvider>
  );
}
