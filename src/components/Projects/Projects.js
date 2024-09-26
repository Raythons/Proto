import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ECommerce from "../../Assets/Projects/ECommerce.png";
import DVLD from "../../Assets/Projects/DVLD.png";
import GYM from "../../Assets/Projects/GYM.png";
import Bank from "../../Assets/Projects/Bank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DVLD}
              isBlog={false}
              title="DVLD"
              description="Local Driving License Management Department application streamlines the process of issuing, renewing,detaining, and releasing driving licenses within a local driving license management department. It empowers multiple employees to work collaboratively on license-related tasks, ensuring efficient and accurate operations."
              ghLink="https://github.com/Raythons/DVLD"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="E-Commerce"
              description="a E-Commerce Platform That i Have Built With My Friend It's a E-Commerce Platform That makes you shopping  and ordering and keep tracking of order with admin dashboard"
              ghLink="https://github.com/Roger-css/Ecommerce-app-mernStack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GYM}
              isBlog={false}
              title="GMS"
              description="Gym Management System Built With Windows Forms To Organize And Manage The WorkFlow Of Gyms , Subscriptions And Players And Coaches And financial Accounting of the Gym "
              ghLink="https://github.com/Roger-css/Gym_management_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bank}
              title="Simple Bank"
              description="Simple Bank Project Built With c++ On Console App That Manage The Workflow Of The Bank Creating Account , Keep Tracking Of Transactions And Operations"
              ghLink="https://github.com/Raythons/Back-System-OOP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
