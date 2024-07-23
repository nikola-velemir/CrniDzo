import FooterLogo from "./FooterLogo";

type FooterWorkTimeProps = {
  work_days_and_hours: { name: string; start: string; end: string }[];
  logo_src: string;
};

function CapitalizeWorkDay(work_day: string): string {
  return work_day.charAt(0).toUpperCase() + work_day.slice(1);
}
const FooterWorkTime = ({
  work_days_and_hours,
  logo_src,
}: FooterWorkTimeProps) => {
  return (
    <div className="row">
      <div className="col-12 footer-section-title">Radno vreme:</div>
      <FooterLogo image_src={logo_src}></FooterLogo>
      <div className="col-12 work-time-info">
        <div>
          {`${CapitalizeWorkDay(work_days_and_hours[0].name)} -
            ${CapitalizeWorkDay(
              work_days_and_hours[work_days_and_hours.length - 1].name
            )}`}
        </div>
        <div>
          {`${work_days_and_hours[0].start} -
    ${work_days_and_hours[0].end}`}
        </div>
      </div>
    </div>
  );
};

export default FooterWorkTime;
