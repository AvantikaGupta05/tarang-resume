import s from "./App.module.scss";
import { HeroSection, Skills, Experience, Qualifications } from "./components";
import { resume } from "./config/resume";

function App() {
  const { about, skills, experiences, qualifications } = resume;
  return (
    <div className={s.container}>
      <div className={s.content}>
        <HeroSection {...about} />
        <Skills {...skills} />
        <Experience {...experiences} />
        <Qualifications {...qualifications} />
      </div>
    </div>
  );
}

export default App;
