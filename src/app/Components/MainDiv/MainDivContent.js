import Image from "next/image";
import styles from "../../page.module.css";
import underline from "/public/img/underline.png"
import arrow from "/public/img/Right arrow.png"
import boy from "/public/img/boy.png"

export default function MainDivContent() {
    return (
        <>
            <div className={styles.main_div_left}>
                <div className={styles.main_div_left_title}>
                    <p>Topper <span> Mentor </span></p>
                    <Image
                        src={underline}
                        alt={"mentor underline"}
                        width={239}
                        height={28}
                    />
                </div>
                <div className={styles.main_div_left_content}>
                    <p>{"'"}The Topper Mentor{"'"} program aims to provide personalised guidance and support through a
                        dedicated academic mentor for the students who can guide them, answer their questions, and
                        provide additional support throughout their studies. </p>
                </div>
            </div>

            <button className={styles.enroll_btn}>Enroll Now<span><Image src={arrow} alt={"right arrow"} /></span></button>



            <div className={styles.main_div_right}>
                <Image src={boy} alt={"boy"}/>
            </div>
        </>
    )
}