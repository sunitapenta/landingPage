import Image from "next/image";
import styles from "../../page.module.css";
import logo from "/public/img/TL logo.png"
import whatsapp from "/public/img/whatsapp icon.png"
import phone from "/public/img/phone icon.png"
import seperator from "/public/img/seperator.png"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Image
                src={logo}
                alt="TL logo"
                width={172}
                height={52}
            />

            <div className={styles.contact_container}>
                <Image
                    src={whatsapp}
                    alt={"Whatsapp"}
                    width={35.65}
                    height={35.65}
                />
                <Image
                    src={seperator}
                    alt={"seperator"}
                    width={2}
                    height={18}
                />
                <Image
                    src={phone}
                    alt={"phone"}
                    width={46}
                    height={46}
                />
                <div className={styles.contact_detail}>
                    <div className={styles.contact_number}>
                        <p>89292 63204</p>
                    </div>
                    <div className={styles.contact_time}>
                        <p>9.00am - 9.00pm IST all days</p>
                    </div>
                </div>
            </div>
        </nav>
    )

}