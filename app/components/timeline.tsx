import styles from "@/app/components/timeline.module.css";
import Experience from "./sub_component/experience";

const Timeline = () => {
  const myExperience = [
    {
      duration: "Jan 2015 – Jun 2017",
      designation: "Marketing Excuetive",
      employer: "BOSCH (Alf Automobile Pvt. Ltd.)",
      rar: [
        "Closed large sales in line with company targets.",
        "Triggered territory growth by overhauling lead generation procedures.",
        "Finalised winning sales contracts to close lucrative deals.",
      ],
    },
    {
      duration: "Aug 2017 – Sep 2020",
      designation: "Sales Executive",
      employer: "Unnati Vehicle Pvt. Ltd. Nagpur",
      rar: [
        "Liaised with customers to determine needs and provide recommendations.",
        "Executed complete sales cycle process from prospecting through contract negotiations and closings.",
        "Secured new clients through targeted prospecting and networking",
        "Collaborated with sales and marketing teams to produce ideas for sales aids, promotions and leaflets",
      ],
    },
    {
      duration: "Sep 2020 – Jun 2021",
      designation: "Sales Executive",
      employer: "Provincial Nissan Pvt. Ltd. Nagpur",
      rar: [
        "Sustained customer base by facilitating market research to formulate brand strategies.",
        "Documented orders and coordinated deliveries, taking into account customer requests.",
        "Presented products with polished demonstrations highlighting functions, usability and unique selling points to help close sales.",
      ],
    },
    {
      duration: "Jul 2021 – Jun 2023",
      designation: "KIA Experience Consultant",
      employer: "JAIKAVanijya Pvt. Ltd. Nagpur",
      rar: [
        "Inspired teams to achieve or exceed goals through regular motivation, implementing loyalty incentives and facilitating Team - building activities.",
        "Delivered quality service with friendly and professional demeanor.",
        "Maintained excellent employee relationships by cultivating supportive, positive and helpful working environment.",
        "Tactfully handled complaints from staff, management and clients using excellent problem-solving and dispute resolution skills.",
        "Resolved complex customer enquiries, disputes and complaints.",
      ],
    },
  ];

  return (
    <>
      <ul className={styles.timeline}>
        {myExperience.map((role, index: number) => (
          <Experience
            key={index}
            duration={role.duration}
            designatoin={role.designation}
            employer={role.employer}
            rolesandresponsibilities={role.rar}
          />
        ))}
      </ul>
    </>
  );
};

export default Timeline;
