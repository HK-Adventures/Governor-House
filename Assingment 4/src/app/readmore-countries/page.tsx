import Footer from "@/app/components/footere";
import Header from "@/app/components/header";

export default function Home () {
  return (
    <div className="firstcontainer">
      <Header />
      <div className="body">
        Hello everyone.
        <br />
        This Blog is about Countries.    
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}