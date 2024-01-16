import React from "react";
import "../App.css";


function Category() {
  const jobs = [
    {
      jobName: "Busniss development",
      opening: 2,
      img: "graph"
    },
    {
      jobName: "Desgining",
      opening: 3,
      img: "pencil"
    },
    {
      jobName: "Development",
      opening: 1,
      img: "tag"
    },
    {
      jobName: "Content Writer",
      opening: 2,
      img: "pen"
    },
  ];

  return (
    <div className="container ">
      <div className="d-flex justify-content-between mt-2">
        <h4 className="heading-1">
          <strong>Search by Category</strong>
        </h4>

        <p className="blue hover-black">
          <strong> All Categorys <i class="fa-solid fa-chevron-right img-move"></i></strong>
        </p>
      </div>
      <div className="container text-center">
        <div className="row cat-1 justify-content-between">
           {jobs.map((el, idx) => (
             <div key={idx} className="col-3 p-2 d-flex gap-3 align-items-center  align-items-start my-3" style={{width: "24%"}}>
             <img src={`/img/${el.img}.png`} alt="" className="img-w img-fluid" />
             <span
               className="d-flex flex-column align-items-start"
             >
               <h6 className="card-heading">{el.jobName}</h6>
               <p className="mb-0">{el.opening} Openings</p>
             </span>
           </div>
          ))}
        </div>
        
        <div className="row cat-1 justify-content-between">
           {jobs.map((el, idx) => (
             <div className="col-3 p-2 d-flex gap-3 align-items-center  align-items-start my-3" style={{width: "24%"}}>
             <img src={`/img/${el.img}.png`} alt="" className="img-w" />
             <span
               className="d-flex flex-column align-items-start"
             >
               <h6 className="card-heading">{el.jobName}</h6>
               <p className="mb-0">{el.opening} Openings</p>
             </span>
           </div>
          ))}
        </div>
      
      </div>
    </div>
  );
}

export default Category;
