import Link from "next/link";
export default function Footer () {
    return (
        <div className="footerfirst">
            <div className="footersecond">
                <ul>
                    <li> Made By Hassaan Khan </li>
                    <li> <Link href={"https://github.com/HK-Adventures/Governor-House"}> Github </Link>  </li>
                </ul>
            </div>
        </div>
    );
}