import Image from "next/image";
import Responsive from "../responsive/page";
import Footer from "@/app/components/footere";
import Header from "@/app/components/header";
import Link from "next/link";
export default function Blogs () {
    return (

        <div className="blogs-page-first">
            < Header />
            <div className="responses">
              <Responsive />
            </div>
            <div className="footer">
           <Footer />
         </div>
         </div>
    );
}