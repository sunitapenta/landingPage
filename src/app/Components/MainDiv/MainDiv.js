import styles from "../../page.module.css";
import Navbar from "@/app/Components/MainDiv/Navbar";
import MainDivContent from "@/app/Components/MainDiv/MainDivContent";



export default function MainDiv() {
    return (
        <main className={styles.hero}>
            <Navbar/>
            <MainDivContent/>

        </main>
    );
}
