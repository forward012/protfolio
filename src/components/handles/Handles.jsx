import React, { useState } from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillSkype } from 'react-icons/ai';
import { FaGithubSquare, FaDiscord } from 'react-icons/fa';
import { Modal, ModalBody, Row } from "reactstrap"

const Handles = () => {
  const [modalSkype, setModalSkype] = useState(false);
  const [modalDiscord, setModalDiscord] = useState(false);

  return (
    
    <section className='socials'>
      {/* <a href="https://www.linkedin.com/in/kshitij-srivastava-4778a8151/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/kshitijweb3?lang=en" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a> */}
      <a href="https://github.com/seniorforblockchain" target='_blank' rel="noopener noreferrer">
        <FaGithubSquare className='icon' />
      </a>
      <a qhref="live:.cid.26263da25e466185" onClick={() => setModalSkype(true)} rel="noopener noreferrer">
        <AiFillSkype className='icon' />
      </a>
      <a qhref="blackhole425_49645" onClick={() => setModalDiscord(true)} rel="noopener noreferrer">
        <FaDiscord className='icon' />
      </a>
     
      <Modal size='md' isOpen={modalSkype} toggle={() => setModalSkype(!modalSkype)}>
        <ModalBody>
          <Row className="text-align">
              <label className='' htmlFor="" toggle={() => setModalSkype(!modalSkype)}>
                  Skype Address: --  live:.cid.26263da25e466185  --
              </label>
          </Row>
        </ModalBody>
      </Modal>
      <Modal size='md' isOpen={modalDiscord} toggle={() => setModalDiscord(!modalDiscord)}>
        <ModalBody>
          <Row className="text-align">
              <label className='' htmlFor="" toggle={() => setModalDiscord(!modalDiscord)}>
                  Discord Address: -- blackhole425_49645 --
              </label>
          </Row>
        </ModalBody>
      </Modal>
    </section>
  )
}

export default Handles
