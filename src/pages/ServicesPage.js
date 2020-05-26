import React, { Component } from 'react'
import im1 from '../Images/bg10.jpg'
import img2 from '../Images/bg17.jpg'
import img3 from '../Images/bg19.jpg'

class ServicesPage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
        }
    render() {
        return (
            <div>
                <div className="service_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1>services offered</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service_quote">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h2>Qela technologies follow a soluton methodology that allows us to build life partnership with our clients. This is achieved through committed and skilled team of staff to ensures that solutons are designed for specific needs that our clients require.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="service_page_one">
                    <div className="container">
                        <h1>Services</h1>
                        <div className="horizontal_line"></div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-database"></i>
                                    <h2>database design</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-internet-explorer"></i>
                                    <h2>network design & installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-camera"></i>
                                    <h2>CCTV camera installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-laptop"></i>
                                    <h2>wed design & development</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-mobile"></i>
                                    <h2>mobile app development</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-cogs"></i>
                                    <h2>computer maintenance</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-universal-access"></i>
                                    <h2>access control installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-laptop"></i>
                                    <h2>graphics designt</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-usd"></i>
                                    <h2>hardware & software sales</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-television"></i>
                                    <h2>web hosting</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-camera"></i>
                                    <h2>security design & installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-plug"></i>
                                    <h2>electrical installation</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-database"></i>
                                    <h2>database design</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-internet-explorer"></i>
                                    <h2>network design & installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-camera"></i>
                                    <h2>CCTV camera installation</h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="content">
                                    <i className="fa fa-laptop"></i>
                                    <h2>wed design & development</h2>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>



                <div className="services_maintenance_quotation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1>We have skilled and competent team to provide dynamic technical maintenance support on your computer systems.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services_maintenance">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content">
                                    <img src={im1} alt="service_maintenance" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="content_desc w3-card">
                                    <h1>Software Maintenance service</h1>
                                    <ul>
                                        <li>Software repair fixing bugs</li>
                                        <li>Software upgrade</li>
                                        <li>Defragmentation of hard disk</li>
                                        <li>Software capability enhancement</li>
                                        <li>Performance improvement</li>
                                    </ul>
                                </div>
                                <div className="content_desc_2 w3-card">
                                    <h1>Hardware Maintenance service</h1>
                                    <ul>
                                        <li>Printer maintenance</li>
                                        <li>Photocopy maintenance</li>
                                        <li>computer maintenance</li>
                                        <li>Hardware cleanup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="service_server_quote">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1>We offer server and network maintenance services to guarantee reliability and availability of your organization critical services by reducing unexpected downtimes.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service_server">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content_img">
                                    <img src={img2} alt="server" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="content_desc w3-card">
                                    <h1>Server and network services are</h1>
                                    <ul>
                                        <li>Patch management</li>
                                        <li>System backup and archiving</li>
                                        <li>Access management</li>
                                        <li>Network performance monitoring and improving</li>
                                        <li>Network capacity management</li>
                                        <li>Network devices replacement and configuration optimization</li>
                                        <li>Server and storage capacity and performance maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service_domain">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content_img">
                                    <img src={img3} alt="server" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="content_desc w3-card">
                                    <h1>Domain Names & Web Hosting</h1>
                                    <p>Domain help customers drive directly to your website, qela technologies offer top level domain registration (.com, .net, .org, .biz, .info) including country code top level domain (.co.tz, ac.tz, go.tz, or.tz, net.tz, tv.tz).</p>
                                    <p>Web Hosting is about renting space on webserver, this space usually carry the files of your website, we have several and affordable web hosting packages depending upon your requirements. Hosting website on our dedicated webserver ensure you hassle free 24 hours availability and give you complete control over your website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service_webdev">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h2>Qela provides professional website design, development and maintenance services, our team of web designer and developers accomplish various website projects like multifunctional web portals. Qela has large pool of resources and field required business and technical expertise to develop website of any complexity. We provide complete front-end and back-end development based on the latest technologies and industry market.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service_quotation_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h2>Qela offer database development service for new or existing systems, we develop custom database based on the client needs. We also make sure that data arrangement, and security is priority to make our client satisfactory.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service_supply">
                    {/* <div className="container"> */}
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content_img">
                                    <h1>We supply different Hardware & Software like</h1>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="content_desc w3-card">
                                    <h1>We supply different Hardware & Software like</h1>
                                    <ul>
                                        <li>
                                        Computers [Servers, Desktop Computers, Notebook Computers, Tablet & Tablet PCs, Workstations].
                                        </li>
                                        <li>
                                        Computer Components [RAM, Hard disk drive, Processors, Motherboard, power supply, computer case, graphic card].
                                        </li>
                                        <li>
                                        Computer Accessories [USB flash drive, External Hard drive, Keyboard, Mice, UPS, HDMI cable, Speaker, Rack Mounting Equipment, Power Adapters, Etc.]
                                        </li>
                                        <li>
                                        Printers, Scanners & Photocopier [Laser Printers, Inkjet & Photo Printers, Ink & Toner Cartridges etc.]
                                        </li>
                                        <li>
                                        Network device [Switches, Modems, Routers, Wireless Access Point, PBX/Multiuser Telephony Systems, Communication Boards, and NIC.]
                                        </li>
                                        <li>
                                        Cables supplies [Electrical cables, Network Cables, USB Cables & Hubs, and Parallel & Serial Cables etc.]
                                        </li>
                                        <li>
                                        Telephony [Analogue Phones & Accessories, IP Phones, IP Telephony Accessories, Video Conferencing, etc.]
                                        </li>
                                        <li>
                                        Electronics supplies [CCTV Cameras, NVR & DVR, Access Control & Time attendance system, Smoke Detectors, Intruder Alarm System etc.]
                                        </li>
                                        <li>
                                        Electrical supplies[Air Conditional, Electrical fence wire, Generators, Solar panels, Batteries Pack, Distribution Board, Circuit Breakers, etc.]
                                        </li>
                                        <li>
                                        Office Equipment & Supplies [Paper Shredders & Accessories, Typewriters/Word Processors, Office Supplies etc.]
                                        </li>
                                        <li>
                                        Software Supplies [Operating Systems, MS Office, Accounting Package, HR & Payroll software, designing software, Antivirus & Internet security, etc.]
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>





            </div>
        )
    }
}

export default ServicesPage
