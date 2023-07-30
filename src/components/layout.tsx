import Navbar from "@/components/navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
