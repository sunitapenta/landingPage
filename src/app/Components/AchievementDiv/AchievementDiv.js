import Image from "next/image";
import styles from "../../page.module.css";
import teach from "/public/img/teach.png"
import degree from "/public/img/degree.png"


export default function AchievementDiv() {
    return (<div className={styles.achievement_div}>
        <div className={styles.achievement_div_title}>
            <p>
                Student Achievement Graph or timeline
            </p>
        </div>
        <div className={styles.achievement_container}>
            <Image src={teach} alt={"teach image"} width={546} height={466}/>
            <div className={styles.achievement_div_right}>
                <div className={styles.achievement_title}>
                    <p>Access to a personalized Mentor<br/>
                        <span className={styles.achievement_span}>
                                Each subscription comes with a personalized assigned mentor.
                            </span>
                    </p>
                </div>

                <div className={styles.achievement_title}>
                    <p>Introductory Call with the Mentor<br/>
                        <span className={styles.achievement_span}>
                            The academic mentor will connect with the users to understand their educational details, syllabus, learning styles, weak areas, etc.
                        </span>
                    </p>
                </div>

                <div className={styles.achievement_title}>
                    <p>Feature Tour with the Mentor <br/>
                        <span className={styles.achievement_span}>
The academic mentor will conduct a demo session explaining the navigation and usage of features on the website for a particular board grade.                             </span>
                    </p>
                </div>
            </div>
        </div>


        <div className={styles.achievement_container2}>
            <div className={styles.achievement_div_left}>
                <div className={styles.achievement_title}>
                    <p>
                        <span className={styles.achievement_span}>

The academic mentor will communicate important academic updates on the website through WhatsApp or emails.                           </span>
                    </p>
                </div>

                <div className={styles.achievement_title}>
                    <p>Live Mock Tests Supervised by the Mentor Just Before Exams<br/>
                        <span className={styles.achievement_span}>
                            The academic mentor will create customised, proctored mock tests based on the user&apos;s syllabus and evaluate the users&apos; answer sheets later.
                        </span><br/>
                        <span className={styles.achievement_span}>
                            Two online tests will be conducted for each of Physics, Chemistry, Maths, and Biology—one before the half-yearly exam and one before the final exams—for a specified duration and supervised by the mentor.
                        </span>
                    </p>
                </div>

                <div className={styles.achievement_title}>
                    <p>Strategies Your Exam Preparation through Live Online Classes <br/>
                        <span className={styles.achievement_span}>
Based on the learner&apos;s performance in the two live mock tests, the mentor would conduct online classes to discuss the evaluated answer sheet and focus on identifying the user&apos;s weak areas and formulating strategies to overcome these and perform well in their school exams.                        </span>
                    </p>
                </div>


            </div>
            <Image src={degree} alt={"degree image"} width={686} height={458}/>

            {/*<div className={styles.achievement_div_left_img}>*/}
            {/*</div>*/}

        </div>
    </div>)
}