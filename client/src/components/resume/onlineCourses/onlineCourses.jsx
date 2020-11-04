import React from "react";
import { Grid, Box } from "@material-ui/core";

import TopicHeader from "../topicHeader";
import { COURSES } from "./courseList";

import "./onlineCourses.scss";

const OnlineCourses = () => {
  return (
    <>
      <TopicHeader>Online Courses</TopicHeader>

      <Grid container justify="center">
        <Grid item xs={11} sm={10}>
          <Box
            style={{
              margin: "1vh auto",
              padding: "2%",
            }}
          >
            <ul className="online-course-li1">
              {COURSES.map((course, i) => (
                <div key={i}>
                  <li>{course.courseName}</li>
                  <ul className="online-course-li2">
                    <li>
                      <em>Issuing Organization: </em>
                      {course.platform}
                    </li>
                    <li>
                      <em>Credential URL: </em>{" "}
                      <span
                        className="credential-link"
                        onClick={() => window.open(`${course.credentialUrl}`)}
                      >
                        See credential
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OnlineCourses;
