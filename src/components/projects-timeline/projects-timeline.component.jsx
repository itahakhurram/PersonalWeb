import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_1968 from "../../assets/img/projects/1968.jpg";
import L_go from "../../assets/img/projects/go.png";
import L_COVIDTRACKER from "../../assets/img/projects/covid.png";
import L_weather from "../../assets/img/projects/weather.jpg";
import L_calc from "../../assets/img/projects/Calc.png";
import L_quizbee from "../../assets/img/projects/quizbee.jpg";
import L_space from "../../assets/img/projects/spaceinvader.jpg";
import L_ping from "../../assets/img/projects/ping.jpg";
import L_tic from "../../assets/img/projects/tictac.jpg";
import L_home from "../../assets/img/projects/home.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_PY from "../../assets/img/skills/python.svg";
import L_JS from "../../assets/img/skills/javascript.svg";
import Image from "react-bootstrap/Image";
import L_firebase from "../../assets/img/skills/firebase.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_j from "../../assets/img/skills/java.svg";
import L_e from "../../assets/img/skills/eclipse.svg";
import L_wapi from "../../assets/img/skills/wapi.png";
import L_vscode from "../../assets/img/skills/visual-studio-code.svg";
import L_vercel from "../../assets/img/skills/vercel-inc.png";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>



        <ImageEvent
            date="28/06/2023"
            className="text-center"
            text="ResearchConnect Global: Mapping Collaborative Minds"
            src={L_1968}
            alt="ResearchConnect Global: Mapping Collaborative Minds" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Operated with university professors and researchers to conceptualize, design, and implement an interactive platform using React and API integration. The platform serves as a global networking hub for researchers, displaying geographical locations and ongoing research projects, fostering worldwide collaboration. Presented the project to an audience of 90+, highlighting its potential to revolutionize research collaboration and academic networking.
                        <hr />
                        
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="Visual Studio"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                
               
              </div>
            </div>
          </ImageEvent>


        {/* Project: WLUGo */}

        <ImageEvent
            date="11/01/2023"
            className="text-center"
            text="WLUGo"
            src={L_go}
            alt="WLUGo" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> WLU Go is a web application that allows users to view, rate, and review the courses offered at Wilfrid Laurier University (WLU). It would help students get an idea of what a course is like by reading reviews and different rating parameters. As of now, there is no dedicated way for WLU students to get a thorough understanding of the courses offered other than through word of mouth. We want WLU Go to be a one-stop universal web application that is easily accessible and provides information on any WLU course with just a quick course code search.
                        <hr />
                        
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="Visual Studio"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PY}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/WLUGO"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>


        {/* Project: COVID-19 Tracker */}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Covid-19 Tracker"
            src={L_COVIDTRACKER}
            alt="Covid-19 Tracker" >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Build a live COVID-19 mobile and web compatible tracker using React and used RESTful API to accumulate statistical data on COVID-19 cases, recovered cases and deaths, deployed on Firebase.
                        <hr />
                        
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="Visual Studio"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_firebase}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/Covid-19-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>


{/* Project: weather app */}
<ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Weather App"
            src={L_weather}
            alt="Weather App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS  
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Fetched weather data using the OpenWeatherMap Weather API and displayed temperature with icon, also developed a search functionality allowing users to retrieve weather data for any selected city worldwide. Deployed using Firebase.
                        <hr />
                       
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="Visual Studio"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                         
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_wapi}
                                alt="OpenWeather API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              OpenWeather API
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vercel}
                                alt="Vercel"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Vercel
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/itahakhurram/Weather-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: calc*/}
          <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Basic Calculator"
            src={L_calc}
            alt="Basic Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A basic calculator with functionality of division, multiplication, addition, and subtraction. 
                        <hr />
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JS}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="VSCODE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/Calculator_JS"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: QuizBee */}
          <ImageEvent
            date="21/01/2020"
            className="text-center"
            text="Quizbee"
            src={L_quizbee}
            alt="Quizbee"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Quizbee designed to test general knowledge from all over the world.
                        <hr />
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="VSCODE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/quizbee"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

          {/* Project: Space Invader */}

          <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="Space Invader"
            src={L_space}
            alt="Space Invader"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> •	Built an existing arcade game “Space Invader” 2D version using python library pygame in Visual studio.
                        <hr />
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                         
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PY}
                                alt="PYTHON"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="VSCODE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Visual Studio
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/Space-Invader"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

            {/* Project: Homeland Statistics */}

            <ImageEvent
            date="14/03/2020"
            className="text-center"
            text="Homeland Statistics"
            src={L_home}
            alt="Homeland Statistics"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> •	Designed the website using Figma and Adobe Photoshop, and build a live countries statistic using React and API, which displays population, area, Gini and neighboring countries, deployed using Vercel.
                        <hr />
                        
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JS}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="VSCODE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Visual Studio
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vercel}
                                alt="Vercel"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Vercel
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/itahakhurram/Homeland-Statistic"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            date="15/12/2019"
            className="text-center"
            text="Ping Pong"
            src={L_ping}
            alt="Ping Pong"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 2D version of an existing multiplayer Arcade game "Ping Pong".
                        <hr />
                      
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_PY}
                                alt="PYTHON"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_vscode}
                                alt="VSCODE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Visual Studio
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/itahakhurram/pingpong"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: tic tac*/}
          <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="Tic Tac Toe"
            src={L_tic}
            alt="Tic Tac Toe"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Build an existing multiplayer game Tic Tac Toe.
                        <hr />
                       
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_j}
                                alt="JAVA"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_e}
                                alt="ECLIPSE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Eclipse
                            </span>
                          </li>
                        </ul>
                      
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/itahakhurram/Tic-Tac-Toe" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;