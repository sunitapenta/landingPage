import MainDiv from "@/app/Components/MainDiv/MainDiv";
import FloatingDiv from "@/app/Components/FloatingDiv/FloatingDiv";
import AboutDiv from "@/app/Components/AboutDiv/AboutDiv";
import BenefitsDiv from "@/app/Components/BenefitsDiv/BenefitsDiv";
import EnrollDiv from "@/app/Components/EnrollDiv/EnrollDiv";
import AchievementDiv from "@/app/Components/AchievementDiv/AchievementDiv";
import MentorsDiv from "@/app/Components/MentorsDiv/MentorsDiv";
import Footer from "@/app/Components/Footer/Footer";


export default function Page() {
    return (
        <>
            <MainDiv/>
            <FloatingDiv/>
            <AboutDiv/>
            <BenefitsDiv/>
            <EnrollDiv/>
            <AchievementDiv/>
            <MentorsDiv/>
            <Footer/>
        </>
    );
}
