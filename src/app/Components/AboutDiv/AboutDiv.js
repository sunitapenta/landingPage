import styles from "../../page.module.css";

export default function AboutDiv() {
    return (
        <div className={styles.about_div}>
            <div className={styles.about_div_title_container}>
                <div className={styles.about_div_gradient_title}>
                    <p>About</p>
                </div>
                <div className={styles.about_div_subtitle}>
                    <p>About the program</p>
                </div>
            </div>


            <div className={styles.about_div_content}>
                <p>Often, students refrain from participating in class discussions or raising their hands when they have
                    questions. For many students, this is because they fear they will look silly, nervous, or less smart
                    if they get the answer wrong, and their classmates will judge them for it. However, it is important
                    to address the concerns of the students so that they understand the concepts well and meet their
                    learning objectives.
                    <br/>
                    <br/>
                    Topper Learning{"'"}s <span>{"'"}Topper Mentor{"'"} </span> will allow students to interact with a
                    personalised mentor and clarify all their academic doubts without fearing being judged or ridiculed.
                </p>
            </div>
        </div>
    )
}