import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home () {
  return (
    <div className="firstcontainer">
      <Header />
      <div className="body">
        Hello everyone.
        <br />
        This is Home Page.       
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}