import React, {useState} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import img from "../../assets/img1.png"
import p1 from "../../assets/1project2.jpg"
import p2 from "../../assets/2project.jpg"
import p3 from "../../assets/3p6.jpg"
import "./Projects.css"

const Projects = () => {
    const [modal, setModal] = useState(false);
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
                 {[1,].map((dummyValue)=>{
                    return ( 
                <div href= "#" className="project-card" target='_blank' rel="noopener noreferrer1" >
                    <div className="card-img">
                    <img src={p1} alt="p1" /></div>
                    <div className="card-text">
                        <h3>Crypto Airdrop</h3>
                        <p>Dapp DescriptionThe goal was to create a visually engaging and intuitive interface that effectively communicates the bot's key features and benefits</p>
                    </div>
                </div>
                )
                })} 
           
                <div href= "#" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                    <img src={p2} alt="p1" /></div>
                    <div className="card-text">
                        <h3>DEX</h3>
                        <p>Multichain DEX development (Ethereun, Binance Smart Chain, Arbitrum), Custom token development, Breathtaking UX/UI, Token staking, farming</p>
                    </div>
                </div>
                <div href= "#" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                    <img src={p3} alt="p1" /></div>
                    <div className="card-text">
                        <h3>DeFi Hedge Fund</h3>
                        <p>Decentralized Ethereum crypto hedge fund with its own ERC20 cryptocurrency</p>
                    </div>
                </div>
            </div>
 {/*  =========popup bootstrap==========  */}

 <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form >
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    {/* <p className='donate' onClick={() => setModal(true)}>Liked the dummyValue's ? Consider donating Eth's <FaDonate className='icon' /></p> */}
        </section>
    )
}

export default Projects
