import Image from "next/image";
import styles from "../../page.module.css";
import kid from "/public/img/kid.png"


export default function EnrollDiv() {
    return (
        <div className={styles.enroll_div}>
            <div className={styles.enroll_div_title_container}>
                <div className={styles.enroll_div_gradient_title}>
                    <p>Enroll</p>
                </div>
                <div className={styles.enroll_div_subtitle}>
                    <p>How to Enroll?</p>
                </div>
            </div>

            <div className={styles.enroll_div_content}>
                <Image src={kid} alt={"kid image"} width={560} height={562}/>
                <div className={styles.bullets}>
                    <div className={styles.bullet_points}>
                        <div className={styles.points}>
                            <p>1</p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Visit<span className={styles.enroll_spam}>&nbsp; www.topperlearning.com </span>
                                and click on &apos;Pricing&apos;.
                            </p>
                        </div>
                    </div>


                    <div className={styles.bullet_points}>
                        <div className={styles.points}>
                            <p>2</p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Choose your desired <span className={styles.enroll_spam}> &apos;Course&apos;.</span>

                            </p>
                        </div>
                    </div>


                    <div className={styles.bullet_points}>
                        <div className={styles.points}>
                            <p>3</p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Select your <span className={styles.enroll_spam}> &apos;Board&apos;</span> and
                                <span className={styles.enroll_spam}> &apos;Class&apos;.</span>
                            </p>
                        </div>
                    </div>


                    <div className={styles.bullet_points}>
                        <div className={styles.points}>
                            <p>4</p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Click on <span className={styles.enroll_spam}> &apos;View Pack Details&apos;</span> for
                                the Topper Mentor Pack
                            </p>
                        </div>
                    </div>


                    <div className={styles.bullet_points}>
                        <div className={styles.points}>
                            <p>5</p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Click on <span className={styles.enroll_spam}> &apos;Buy Now&apos; </span> to purchase
                                the pack
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}