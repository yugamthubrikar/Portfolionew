import styles from "@/app/components/skills.module.css";
import Skill from "./sub_component/skill";

const Skills = () => {
  const html = { "--num": 85 } as React.CSSProperties;
  const css = { "--num": 57 } as React.CSSProperties;
  const js = { "--num": 30 } as React.CSSProperties;
  return (
    <>
      <div className={styles.container}>
        <Skill title="C" level={60} />
        <Skill title="C++" level={58} />
        <Skill title="Ds" level={45} />
        <Skill title="HTML" level={68} />
        <Skill title="CSS" level={78} />
        <Skill title="JS" level={42} />
        <Skill title="REACT" level={52} />
        <Skill title="TAILWIND" level={73} />
        <Skill title="TS" level={38} />
        <Skill title="NODE" level={65} />
        <Skill title="FLASK" level={40} />
        <Skill title="SQL" level={75} />
        <Skill title="PRISMA" level={60} />
        
      </div>
    </>
  );
};

export default Skills;
