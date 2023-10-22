import bsStyle from "../../styles/Bootstrap.module.scss";
import s from "./Qualifications.module.scss";
import { Title } from "../";

const Qualifications = ({ sectionTitle, items }) => {
  return (
    <>
      <Title text={sectionTitle} />
      <div className={`${bsStyle["jumbotron-fluid"]} ${bsStyle["pt-5"]}`}>
        <div className={bsStyle.container}>
          <div className={`${s.timeline} ${bsStyle.body} ${bsStyle.white}`}>
            <div className={s.point}> </div>

            {items.map(({ title, school, year, grade, unit, icon }) => {
              return (
                <div className={s.point}>
                  <div className={s.year}> {year} </div>
                  <div
                    className={`${s.bocata} ${bsStyle["text-left"]} ${bsStyle.body} ${bsStyle.row}`}
                  >
                    <div
                      className={`${bsStyle["col-md-12"]} ${bsStyle.small} ${s.title} ${bsStyle["pb-2"]}`}
                    >
                      {title} - {school}
                    </div>
                    <div
                      className={`${bsStyle["col-md-6"]} ${bsStyle.body} ${bsStyle.small}`}
                    >
                      {grade} {unit}
                    </div>
                    {/* <div
                      className={`${bsStyle["col-md-6"]} ${bsStyle.body} ${bsStyle.small}`}
                    >
                      Constitution of the company and a basic team
                    </div> */}
                  </div>
                  <i className={s.arrow}></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualifications;
