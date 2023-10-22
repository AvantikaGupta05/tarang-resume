import bsStyle from "../../styles/Bootstrap.module.scss";
import s from "./Experience.module.scss";
import { Title } from "../";

const Experience = ({ sectionTitle, items }) => {
  return (
    <>
      <Title text={sectionTitle} />
      <div className={`${bsStyle["jumbotron-fluid"]} ${bsStyle["pt-5"]}`}>
        <div className={bsStyle.container}>
          <div className={`${s.timeline} ${bsStyle.body} ${bsStyle.white}`}>
            <div className={s.point}> </div>

            {items.map(({ designation, company, year, description }) => {
              return (
                <div className={s.point}>
                  <div className={s.year}> {year} </div>
                  <div
                    className={`${s.bocata} ${bsStyle["text-left"]} ${bsStyle.body} ${bsStyle.row}`}
                  >
                    <div
                      className={`${bsStyle["col-md-12"]} ${bsStyle.small} ${s.title} ${bsStyle["pb-2"]}`}
                    >
                      {company}
                    </div>
                    <div
                      className={`${bsStyle["col-md-6"]} ${bsStyle.body} ${bsStyle.small}`}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </div>
                    <div
                      className={`${bsStyle["col-md-6"]} ${bsStyle.body} ${bsStyle.small}`}
                    >
                      Constitution of the company and a basic team
                    </div>
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

export default Experience;
