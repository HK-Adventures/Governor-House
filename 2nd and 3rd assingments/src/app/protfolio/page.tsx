import Link from "next/link";
export default function about () {
    return (
        <div className="headerfirst">
            <div className="header">
            <ul className="headerbuttons">
          <Link href={"/"}> <li> Home </li> </Link>
          <Link href={"/contact"}> <li> Contact Me </li> </Link>
          <Link href={"/protfolio"}> <li> Protfolio </li> </Link>
        </ul>
            </div>
            <div className="protfolio">
                My name is Hassan Khan.
                <br />
                I'm Learning next.js and Web3.0 from Governor House.
            </div>
        </div>
    );
}