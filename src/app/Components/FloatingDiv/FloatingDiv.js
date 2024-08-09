import Image from "next/image";
import styles from "../../page.module.css";
import logo from "/public/img/TL logo.png"
import seperator from "../../../../public/img/seperator2.png";

export default function FloatingDiv() {
    return (
        <div className={styles.floating_div}>
            <div className={styles.floating_div_sections}>
                <div className={styles.floating_div_header}>
                    <p>Classes Covered</p>
                </div>
                <div className={styles.floating_div_content}>
                    <p>6th Class to 10th Class</p>
                </div>
            </div>
            <Image
                src={seperator}
                alt={"seperator"}
                width={2}
                height={48}
            />
            <div className={styles.floating_div_sections}>
                <div className={styles.floating_div_header}>
                    <p>Classes Covered</p>
                </div>
                <div className={styles.floating_div_content}>
                    <p>6th Class to 10th Class</p>
                </div>
            </div>
            <Image
                src={seperator}
                alt={"seperator"}
                width={2}
                height={48}
            />
            <div className={styles.floating_div_sections}>
                <div className={styles.floating_div_header}>
                    <p>Classes Covered</p>
                </div>
                <div className={styles.floating_div_content}>
                    <p>6th Class to 10th Class</p>
                </div>
            </div>
        </div>
    )
}