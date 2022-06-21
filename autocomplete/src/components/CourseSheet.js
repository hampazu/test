import React, { Fragment } from "react";
import AutoCompleteText from "./AutoCompleteText";
import courses from "./listCourses.js";
import { useState } from "react";

const [courseProp, setCourseProp] = [[]];

const CourseSheet = () => {
    let sems = [
      { sno: 1, name: "1st" },
      { sno: 2, name: "2nd" },
      { sno: 3, name: "3rd" },
      { sno: 4, name: "4th" },
      { sno: 5, name: "5th" },
      { sno: 6, name: "6th" },
      { sno: 7, name: "7th" },
      { sno: 8, name: "8th" },
    ];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "75px" }}>Code</th>
            <th style={{ width: "450px" }}>Title</th>
            <th style={{ width: "25px", textAlign: "center" }}>Cr</th>
          </tr>
          {sems.map(s => (
            <Fragment>
              <tr key={s.sno}>
                <th colspan="3" style={{ fontWeight: "bold" }}>
                  {s.name} Semester
                </th>
              </tr>
              <tr>
                <td>courseCode</td>
                <td style={{ height: "25px" }}> <AutoCompleteText items={courses} semester={s.sno} /> </td>
                {
                  courses.sort().map(c => (
                    
                    <Fragment>
                      <tr>
                        
                      </tr>
                    </Fragment>
                  ))
                }
                <td>crhr</td>
                {/* <td>
                  <a href={url} onClick={() => thandleClick(std.regno)}>
                      {std.name}
                  </a>
                </td> */}
                
              </tr>
            </Fragment>
            // <tr key={std._id}>
            //   <td>{std.regno}</td>
            //   <td>
            //       <a href={url} onClick={() => handleClick(std.regno)}>
            //           {std.name}
            //       </a>
            //   </td>
            // </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSheet;
