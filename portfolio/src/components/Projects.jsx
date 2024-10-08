// import React from "react";
// import project from "./data/projects.json";
// const Projects = () => {
//   return (
//     <>
//       <div className="container project my-3" id="projects">
//         <h1>PROJECT</h1>
//         <div className="row d-flex justify-content-center align-content-center">
//           {project.map((data) => (
//             <>
//               <div
//                 key={data.id}
//                 className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
//               >
//                 <div
//                   className="card bg-dark text-light"
//                   style={{
//                     width: "18rem",
//                     border: "1px solid red",
//                     boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
//                   }}
//                   data-aos="flip-right"
//                   data-aos-duration="1000"
//                 >
//                   <div className="img d-flex justify-content-center align-content-center p-3 ">
//                     <img
//                       src={data.imageSrc}
//                       className="card-img-top"
//                       alt="..."
//                       style={{
//                         width: "250px",
//                         height: "200px",
//                         border: "2px solid red",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   </div>

//                   <div className="card-body text-center">
//                     <h5 className="card-title">{data.title}</h5>
//                     <p className="card-text">
//                       {data.description}
//                       Some quick example text to build on the card title and
//                       make up the bulk of the card's content.
//                     </p>
//                     <a href={data.demo} className="btn btn-primary mx-3">
//                       Demo
//                     </a>
//                     <a href={data.source} className="btn btn-warning">
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container project my-3" id="projects">
        <h1 className="text-center">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div
              key={data.id}
              className="my-4 col-sm-12 col-md-6 col-lg-4 mx-2"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "100%",
                  maxWidth: "300px", // Ensures it doesn't grow too large on wider screens
                  border: "1px solid red",
                  boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                  margin: "0 auto", // Centers the card
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "200px", // Limits the height of images
                      border: "2px solid red",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    {data.description}
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href={data.demo} className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
