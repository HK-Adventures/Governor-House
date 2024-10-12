import { px } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Responsive() {
    return (
      <div className="parentContainer">
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/sports.jpg"}
          height={300}
          width={300}
          alt="/">
          </Image>
          </div>
        <h1 className="title">Sports</h1>
        <p className="description">
          In this blog you'll find information about many sports like Cricket , Football , Basketball etc. 
        </p>
        <Link href="/readmore-sports"> <button className="readMore"> Read More</button> </Link>

      </div>
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/computer.jpg"}
          height={300}
          width={300}
          alt="/"
          objectFit="round-corners">
          </Image>
          </div>
        <h1 className="title">Computer</h1>
        <p className="description">
          In this blog you'll find information about Computers , super Computers , Quantam Computers and many more. 
        </p>
        <Link href="/readmore-computer"> <button className="readMore"> Read More</button> </Link>
 
      </div>
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/countries.jpg"}
          height={300}
          width={300}
          alt="/">
          </Image>
          </div>
        <h1 className="title">Countries</h1>
        <p className="description">
          In this blog you'll find information about many Countries and their affairs.
        </p>
        <Link href="/readmore-countries"> <button className="readMore"> Read More</button> </Link>
 
      </div>
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/crypto.jpg"}
          height={300}
          width={300}
          alt="/">
          </Image>
          </div>
        <h1 className="title"> Crypto </h1>
        <p className="description">
          In this blog you'll find information about many crypto currencies on how to buy and sell them and many more.  
        </p>
        <Link href="/readmore-crypto"> <button className="readMore"> Read More</button> </Link>

      </div>
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/money.jpg"}
          height={300}
          width={300}
          alt="Rounded Image">
          </Image>
          </div>
        <h1 className="title">Money Management</h1>
        <p className="description">
          In this blog you'll find information about Money Management on how to manage your finances and invest money strategically.
        </p>
        <Link href="/readmore-money"> <button className="readMore"> Read More</button> </Link>
 
      </div>
      <div className="childContainer">
        <div className="imageContainer">
        <Image
          src={"/images/social-media.jpg"}
          height={300}
          width={300}
          alt="/">
          </Image>
          </div>
        <h1 className="title">Social Media</h1>
        <p className="description">
          In this blog you'll find information about advantages of and disadvantages of social media.
        </p>
        <Link href="/readmore-social-media"> <button className="readMore"> Read More</button> </Link>
      </div>
      </div>
    );
}