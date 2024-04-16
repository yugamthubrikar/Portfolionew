import styles from "@/app/components/skills.module.css";

const Skill = (props: { title: string; level: number }) => {

    
  const lvl = { "--num": props.level } as React.CSSProperties;

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.percent} data-text={props.title} style={lvl}>
          <div className={styles.dot}></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        </div>
        <div className={styles.number}>
          <h2>
            {String(props.level)}<span>%</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
