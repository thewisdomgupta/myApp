import React from "react";
import { Accordion, Spinner } from "react-bootstrap";
import { Wave } from 'react-animated-text';
import Img1 from '../Image/CompoFriend.png'

const HomeMessage = () => {
  return (
    <div>
      <Spinner animation="grow" variant="success"/>
      <spin className="Spin">Compo Friend Secure Mode Activated</spin>
      <Spinner animation="grow" variant="success"/>
      <br />
      <img
        src={Img1}
        alt="Compo Friend Logo"
        className='rotate'
      ></img>
      <img
        src={Img1}
        alt="Compo Friend Logo"
        className='rotate'
      ></img>
      <br />
      <br />
      
      <Wave text="A BETTER DIGITAL INFRASTRUCTURE FOR THE HUMANITY" effect="stretch" effectChange={2.0} />
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HomeMessage;
