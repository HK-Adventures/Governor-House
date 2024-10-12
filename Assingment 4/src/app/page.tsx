import Footer from "./components/footere";
import Header from "@/app/components/header";

export default function Home () {
  return (
    <div className="firstcontainer">
      <Header />
      <div className="body">
        Hello everyone.
        <br />
        This is Home Page.
        <br />
        Click on the Blogs button to view a few Blogs on popular topics.      
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}