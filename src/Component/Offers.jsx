import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Offers() {
  const offers = [
    {
      title: "Tech rookie Internship Program (TRIP) -ios eng...",
      company: "PT Midas Daya Taknlogi",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Business Development Support - Banking",
      company: "Lalamove",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Program Managment Oofficer -Multimedia Nusantara poly...",
      company: "Kompas Group",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Cyber Security Engineer",
      company: "Group Avows",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Visual Designer (Freelance)",
      company: "Whiz (YC W22)",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Risk Manager",
      company: "Julo",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Transporter Management Executive",
      company: "Logisly",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
    {
      title: "Capacity $ Configuration",
      company: "Logisly",
      rating: 4.1,
      review: 50,
      requirement: "fresher",
      location: "Jakarta",
      time: "23",
      points: [
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
        "tech Rookie Internship program (TRIP) -Data Analyst Internn",
        "Internshop",
        "Hybrid",
      ],
      tags: [
        "SQL",
        "Tableu",
        "Python",
        "Attensiion to details",
        "Critical thinking",
      ],
    },
  ];

  return (
    <div className="sky-blue">
      <div className="row justify-content-between position-relative gap-2">
        {offers.map((el, idx) => (
          <div
            className="col-3  card pt-3 product-wrap "
            style={{ width: "24%" }}
          >
            <div className=" product">
            
            <div className="d-flex">
              <div className="img">
                <img
                  src={`/img/icon-${idx + 1}.png`}
                  alt=""
                  className="pe-2"
                  style={{ width: "3rem" }}
                />
              </div>
              <div className="title h6">{el.title}</div>
            </div>

            <div className="d-flex small justify-content-between">
              <span className="company">{el.company}</span>
              <div className="title h6">
              
                ⭐{el.rating} | 
                <span className="reviews cust-font-here">{el.review} +</span>
                </div>

            </div>

            <div className="d-flex small justify-content-between">
              <span className="">
                <span className="req"> <i class="fa-solid fa-suitcase"></i> {el.requirement}</span>
                <span className="location"> <i class="fa-solid fa-location-dot"></i> {el.location}</span>
              </span>
              <span className="time cust-font-here">  {el.time} hours ago</span>
            </div>

            <ul className="muted small cust-font-here ms-2 pt-0 ps-3">
              {el.points.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>

            <div className="tags border-top border-bottom my-3 py-2 text-muted small">
              {el.tags.map((tag, index) => (
                <span className="px-2 border-end" key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <button className="btn btn-primary w-100 mb-2 random-apply-btn" >Apply now <i class="fa-solid fa-chevron-right"></i></button>
            </div>
            </div>
          </div>
        ))}
      </div>


      <div className="row">
              <button className="btn btn-primary mt-3 w-auto ms-1 random-offer-btn" >All Job offers <i class="fa-solid fa-chevron-right"></i></button>
            </div>
    </div>
  );
}

export default Offers;
