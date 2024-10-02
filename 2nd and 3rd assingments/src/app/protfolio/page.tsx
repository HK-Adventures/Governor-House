import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
export default function about () {
    return (
        <div className="headerfirst">
            <Header />
            <div className="protfolio">
                My name is Hassan Khan.
                <br />
                I'm Learning next.js and Web3.0 from Governor House.
            <div className="image">
        <Image
          src={"/images/my-pic.jpg"}
            height={250}
          width={250}
          alt="right">
          </Image> 
        </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        </div>
    );
}