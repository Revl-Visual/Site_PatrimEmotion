import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LegalPageLayoutProps = {
  title: React.ReactNode;
  version?: string;
  children: React.ReactNode;
  afterContent?: React.ReactNode;
};

/** Structure commune des pages légales / informatives (CGU, mentions, chartes, etc.) */
export default function LegalPageLayout({
  title,
  version,
  children,
  afterContent,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-[#003662] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="pe-heading-hero text-white text-center text-balance uppercase tracking-wide">
              {title}
            </h1>
          </div>
        </section>

        <section className="section-alt-blue py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {version ? (
              <p className="mb-10 text-sm md:text-base font-semibold text-[#003662]/80">
                {version}
              </p>
            ) : null}
            <div className="space-y-12 pe-body-lead text-[#003662]/90 leading-relaxed">
              {children}
            </div>
          </div>
        </section>

        {afterContent}
      </main>
      <Footer />
    </>
  );
}
