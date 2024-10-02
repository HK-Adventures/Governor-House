import Link from "next/link";
export default function contact () {
    return (
        <div className="headerfirst">
            <div className="header">
            <ul className="headerbuttons">
          <Link href={"/"}> <li> Home </li> </Link>
          <Link href={"/contact"}> <li> Contact Me </li> </Link>
          <Link href={"/protfolio"}> <li> Protfolio </li> </Link>
        </ul>
            </div>
            <div className="contactinfo">
                Phone Numer: +92 319 1939538
            </div>
            
        </div>
    );
}