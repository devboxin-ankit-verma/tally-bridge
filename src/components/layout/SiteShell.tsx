import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

/** Shared chrome for all pages */
export default function SiteShell({ children }: Props) {
  return (
    <>
      <Header />
      <div className="site-main relative w-full max-w-[100vw] overflow-x-clip pt-[72px] sm:pt-[76px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
