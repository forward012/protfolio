import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = () => {

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">
                
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2022 - Present
                        </p>
                        <h3 className="card-text2">Senior Blockchain Developer(Remote)</h3>
                        <p className="card-text3">- Architected Blockchain Solutions: Designed and implemented scalable blockchain architectures for various applications, enhancing transaction throughput by 40% and reducing latency.</p>
                        <p className="card-text3">- Cross Chain Integration: Developed cross-chain protocols to facilitate seamless asset transfers between different blockchain networks, improving liquidity and interoperability.</p>
                        <p className="card-text3">- Team Leadership: Mentored junior developers and conducted training sessions on blockchain technologies, fostering a culture of innovation and continuous learning within the team.</p>
                        {/* <p className="card-text4">
                            Remote
                        </p> */}
                    </div>

                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2021 - 2022
                        </p>
                        <h3 className="card-text2">Lead Blockchain Developer(Remote)</h3>
                        <p className="card-text3">- Responsibilities: Designed and implemented smart contracts for a DeFi platform that facilitated lending and borrowing of cryptocurrencies. Utilized Solidity for smart contract development and integrated Chainlink oracles for real-time price feeds.</p>
                        <p className="card-text3">- Results: Successfully launched the platform, attracting over 4300 users within the first 3 months, and processed transactions worth over $2 million, leading to a 22% increase in platform revenue.</p>
                        {/* <p className="card-text4">
                            Remote
                        </p> */}
                    </div>

                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2019 - 2021
                        </p>
                        <h3 className="card-text2">Web3 Developer(ZyCrypto)</h3>
                        <p className="card-text3">As a full-stack web3 developer, I was responsible for all aspects of project development. This encompassed smart contract development, frontend development, and backend development. I had the opportunity to work on a diverse range of projects, including launchpads, NFT games, blockchain token raffles, DeFi protocols, and various other initiatives.</p>
                        {/* <p className="card-text4">
                            Remote
                        </p> */}
                    </div>

                    {/* card4 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2018 - 2019
                        </p>
                        <h3 className="card-text2">Full Stack Developer(Remote)</h3>
                        <p className="card-text3">- Developed web applications using Laravel, CodeIgniter, MySQL and JavaScript frameworks.</p>
                        <p className="card-text3">- Developed web applications using React, Vue.js, Node.js, Nest.js, MySQL and MongoDB( MERN, MEVN stack).</p>
                        <p className="card-text3">- Implemented RESTful APIs to enable communication between front-end and back-end systems.</p>
                        {/* <p className="card-text4">
                            Remote
                        </p> */}
                    </div>
                    
                </div>

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {[1,].map((dummyValue)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 10/05/2013 - 10/05/2017
                        </p>
                        <h3 className="card-text2">Bournemouth University</h3>
                        <p className="card-text3">Bachelor of Science, Industrial Engineering</p>
                        {/* <p className="card-text4">
                        Institution Name
                        </p> */}
                    </div>)
                    })}
                 
                   
                </div>
            </div>
        </section>
    )
}

export default Experience
