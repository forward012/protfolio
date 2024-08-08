import React, { useState } from 'react'
import './Contact.css'
import pdf from '../../assets/resume.pdf';
import { Modal, ModalBody, ModalHeader, Row } from "reactstrap"

const Contact = ({state}) => {
    const [modal, setModal] = useState(false);
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <div href="#" target={pdf} rel="noopener noreferrer" onClick={() => setModal(true)}>
                <button className="downlodeBTN">
                    View Resume
                </button>
            </div>
            {/* <div > */}
                <Modal size='md' style={{width: '70%', height: '80%', minWidth: width*0.8, minHeight: height*0.8, }} isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                        <Row className="text-align">
                            <iframe src={pdf} style={{minHeight:height*0.8}}></iframe>
                        </Row>
                    </ModalBody>
                </Modal>
            {/* </div>   */}
        </section>
    )
}

export default Contact
