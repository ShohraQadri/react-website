import React from 'react'

function Company() {

  const companies = [
    {
      name: "Pegipegi",
      rating: 4.9,
      review: 50
    },
    {
      name: "Kompas Group",
      rating: 4.9,
      review: 50
    },
    {
      name: "Group Avows",
      rating: 4.9,
      review: 50
    },
    {
      name: "Lalamove",
      rating: 4.9,
      review: 50
    },
    {
      name: "PT Midas Daya Taknologi",
      rating: 4.9,
      review: 50
    },
    {
      name: "Slemens",
      rating: 4.9,
      review: 50
    },
    {
      name: "eFishery",
      rating: 4.9,
      review: 50
    },
    {
      name: "Cermati",
      rating: 4.9,
      review: 50
    },
    {
      name: "Whiz (YC W22)",
      rating: 4.9,
      review: 50
    },
    {
      name: "JULO",
      rating: 4.9,
      review: 50
    },
    {
      name: "UOB",
      rating: 4.9,
      review: 50
    },
    {
      name: "Logisly",
      rating: 4.9,
      review: 50
    },
  ]
  return (
   
    <div className="container text-center">
        <div className="row cat-1 justify-content-between mt-5 mb-5">
           {companies.map((el, idx) => (
             <div key={idx} className="col-3 p-2 d-flex gap-3 align-items-center  align-items-start my-3" style={{width: "24%"}}>
             <img src={`/img/company-${idx + 1}.png`} alt="" className="img-w" style={{width:'3rem'}} />
             <span
               className="d-flex flex-column align-items-start"
             >
               <h6 className="card-heading">{el.name}</h6>

               <span className="">
                <span className='pe-1 '> ⭐{el.rating} rating</span>
                <span className=" ps-1 border-start">{el.review}+ rating</span>
               </span>
        
             </span>
           </div>
          ))}
        </div>
        
   
      
      </div>
   
  )
}

export default Company