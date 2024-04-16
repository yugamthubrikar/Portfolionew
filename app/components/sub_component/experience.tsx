import styles from "@/app/components/timeline.module.css";


const Experience = (props: {
  duration: string;
  employer: string;
  designatoin: string;
  rolesandresponsibilities: string[];
}) => {
  return (
    <li className={styles.timelineevent}>
      <label className={styles.timelineeventicon}></label>
      <div className={styles.timelineeventcopy}>
        <p className={styles.timelineeventthumbnail}>{props.duration}</p>
        <p>
          <strong>{props.employer}, Designation :- </strong>
          <br />
          {props.designatoin}
        </p>
        <div>
          <strong>Roles & Responsibilities:</strong>
          <ul className={styles.rolesandresponsibilities}>
            {props.rolesandresponsibilities.map(
              (role: string, index: number) => (
                <li key={index}>{role}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Experience;
