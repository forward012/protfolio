import React, { useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.jpg'
import './Hero.css'

const Hero = () => {
    const [modal, setModal] = useState(false);

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                {/* <p><span>James </span>
                    is a Senior Blockchain Engineer.</p> */}
                {/* <h1>I develop decentralised apps in web3 space.</h1> */}
                <h1>I'm a Senior Blockchain Engineer.</h1>
                <h3>I'm not just another developer – I'm your strategic Web3 development
                     partner and a seasoned full-stack blockchain engineer with over 5 
                     years of hands-on experience. I've designed, developed, and launched 
                     end-to-end solutions across the entire DApp ecosystem. My track record 
                     proves I don't just code – I build value-driven blockchain solutions 
                     that make waves in the market. Passionate about leveraging technology to solve complex problems and enhance user experiences.</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label className='' htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Address: - jamestaylor95425@gmail.com -
                                </label>
                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in touch with email</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
