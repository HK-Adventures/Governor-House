import Link from "next/link"
export default function Header () {
    return (
        <div className="headerfirst">
            <div className="headersecond">
            <ul className="headerbuttons">
          <Link href={"/"}> <li> Home </li> </Link>
          <Link href={"/contact"}> <li> Contact Me </li> </Link>
          <Link href={"/protfolio"}> <li> Protfolio </li> </Link>
        </ul>
            </div>
        </div>
    );
}