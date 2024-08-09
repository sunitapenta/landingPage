import Image from "next/image";
import styles from "../../page.module.css";
import mg from "/public/img/mg.png"
import sk from "/public/img/sk.png"
import rv from "/public/img/rv.png"
import avk from "/public/img/avk.png"
import ss from "/public/img/ss.png"
import improved from "../../../../public/img/improved.png";
import reduce from "/public/img/reduced.png"
import exam from "/public/img/exam.png"


export default function MentorsDiv() {
    return (
        <div className={styles.mentor_div}>
            <div className={styles.mentor_div_title_container}>
                <div className={styles.mentor_div_gradient_title}>
                    <p>Mentors</p>
                </div>
                <div className={styles.mentor_div_subtitle}>
                    <p>Our Mentors</p>
                </div>
            </div>


            <div className={styles.mentor_container}>
                <div className={styles.mentor_content}>
                    <Image className={styles.mentor_imgs} src={mg} alt={"mg image"}/>
                    <div className={styles.mentor_bg}>
                        <p className={styles.mentor_detail}>
                            Faculty: <span className={styles.mentor_spam}> Maths</span>
                        </p>
                        <p className={styles.mentor_detail}>Educational Qualifications:</p>
                        <p className={styles.mentor_detail}>M.Sc. (Information Technology)</p>
                        <p className={styles.mentor_detail}>B.Sc (Maths Hons. Gold Medalist)</p>
                        <p className={styles.mentor_detail}>Punjab Technical University</p>
                        <p className={styles.mentor_detail}>Manipur Central University</p>
                    </div>
                </div>
                <div className={styles.mentor_content}>
                    <Image className={styles.mentor_imgs} src={sk} alt={"sk image"}/>
                    <div className={styles.mentor_bg}>
                        <p className={styles.mentor_detail}>
                            Faculty: <span className={styles.mentor_spam}> Biology</span>
                        </p>
                        <p className={styles.mentor_detail}>Educational Qualifications:</p>
                        <p className={styles.mentor_detail}>M.Sc. (Biotechnology, University, Rank 3), B.Ed</p>
                        <p className={styles.mentor_detail}>University of Mumbai</p>
                    </div>
                </div>
            </div>


            <div className={styles.mentor_container}>
                <div className={styles.mentor_content}>
                    <Image className={styles.mentor_imgs} src={rv} alt={"rv image"}/>
                    <div className={styles.mentor_bg}>
                        <p className={styles.mentor_detail}>
                            Faculty: <span className={styles.mentor_spam}> Maths</span>
                        </p>
                        <p className={styles.mentor_detail}>Educational Qualifications:</p>
                        <p className={styles.mentor_detail}>M.Sc. (Maths)</p>
                        <p className={styles.mentor_detail}>University of Mumbai</p>
                    </div>
                </div>
                <div className={styles.mentor_content}>
                    <Image className={styles.mentor_imgs} src={avk} alt={"avk image"}/>
                    <div className={styles.mentor_bg}>
                        <p className={styles.mentor_detail}>
                            Faculty: <span className={styles.mentor_spam}> Maths</span>
                        </p>
                        <p className={styles.mentor_detail}>Educational Qualifications:</p>
                        <p className={styles.mentor_detail}>B.E (Mechanical), MBA (Operations)</p>
                        <p className={styles.mentor_detail}>University of Mumbai</p>
                    </div>
                </div>
            </div>


            <div className={styles.mentor_container}>
                <div className={styles.mentor_content}>
                    <Image className={styles.mentor_imgs} src={ss} alt={"ss image"}/>
                    <div className={styles.mentor_bg}>
                        <p className={styles.mentor_detail}>
                            Faculty: <span className={styles.mentor_spam}> Maths</span>
                        </p>
                        <p className={styles.mentor_detail}>Educational Qualifications:</p>
                        <p className={styles.mentor_detail}>M.Sc (Physics), PGDBM, B.Ed</p>
                        <p className={styles.mentor_detail}>University of Mumbai</p>
                    </div>
                </div>
            </div>

        </div>
    )
}