type FooterWorkTimeProps = {
  work_days_and_hours: { name: string; start: string; end: string }[];
};

function CapitalizeWorkDay(work_day: string): string {
  return work_day.charAt(0).toUpperCase() + work_day.slice(1);
}
const FooterWorkTime = ({ work_days_and_hours }: FooterWorkTimeProps) => {
  return (
    <div className="col-12">
      <div className="work-time-info row">
        <div className="col-12">
          <div>Radno vreme:</div>
        </div>
        <div className="col-12">
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
    </div>
  );
};

export default FooterWorkTime;
