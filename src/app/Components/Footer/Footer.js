import Image from "next/image";
import styles from "../../page.module.css";
import news18 from "/public/img/news18-logo.png"
import nw18 from "/public/img/nw18-logo.png"
import seperator from "/public/img/seperator.png"


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <Image src={news18} alt={"nw18 logo"}/>
                <Image src={seperator} alt={"seperator logo"}/>
                <Image src={nw18} alt={"nw18 logo"}/>
            </div>
            <hr/>
            <p> Copyright Notice © 2024 Greycells18 Media Limited and its licensors.
                All rights reserved.</p>
        </div>
    )
}