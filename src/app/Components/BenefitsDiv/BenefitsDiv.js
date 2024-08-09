import Image from "next/image";
import styles from "../../page.module.css";
import access from "/public/img/access.png"
import improved from "../../../../public/img/improved.png";
import reduce from "/public/img/reduced.png"
import exam from "/public/img/exam.png"


export default function BenefitsDiv() {
    return (
        <div className={styles.benefits_div}>
            <div className={styles.benefits_div_title_container}>
                <div className={styles.benefits_div_gradient_title}>
                    <p>Benefits</p>
                </div>
                <div className={styles.benefits_div_subtitle}>
                    <p>Key Benefits</p>
                </div>
            </div>

            <div className={styles.benefits_div_benefits_container}>
                <div className={styles.benefits_div_benefits_container_col}>
                    <div className={styles.benefits_div_benefits_benifits}>
                        <div className={styles.col_title}>
                            <p>Access to a Personalized Mentor</p>
                            <Image src={access} alt={"access image"} width={40} height={40}/>
                        </div>
                        <div className={styles.col_content}>
                            <p> A personalized mentor who can guide, answer questions, clarify doubts, offer additional
                                support, and help to develop strong academic foundations.</p>
                        </div>
                    </div>
                    <div className={styles.benefits_div_benefits_benifits}>
                        <div className={styles.col_title}>
                            <p>Improved Learning</p>
                            <Image src={improved} alt={"improved image"} width={40} height={40}/>
                        </div>
                        <div className={styles.col_content}>
                            <p>
                                Personalized guidance and support can lead to a better understanding of concepts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.benefits_div_benefits_container_col}>
                    <div className={styles.benefits_div_benefits_benifits}>
                        <div className={styles.col_title}>
                            <p>Reduced Anxiety</p>
                            <Image src={reduce} alt={"anxiety image"} width={40} height={40}/>
                        </div>
                        <div className={styles.col_content}>
                            <p>
                                With a dedicated point of contact, your child can clarify doubts without fear of
                                judgment.
                            </p>
                        </div>
                    </div>
                    <div className={styles.benefits_div_benefits_benifits}>
                        <div className={styles.col_title}>
                            <p>
                                Exam Preparation
                            </p>
                            <Image src={exam} alt={"exam image"} width={40} height={40}/>
                        </div>
                        <div className={styles.col_content}>
                            <p>
                                Mock tests and exam prep strategies can boost your child{"'"}s exam confidence.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}