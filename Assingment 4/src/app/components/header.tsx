import Link from "next/link"
export default function Header () {
    return (
        <div className="headerfirst">
            <div className="headersecond">
            <ul className="headerbuttons">
          <Link href={"/"}> <li> Home </li> </Link>
          <Link href={"/blogs"}> <li> Blogs </li> </Link>
        </ul>
            </div>
        </div>
    );
}