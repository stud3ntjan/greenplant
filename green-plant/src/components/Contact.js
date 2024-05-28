import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
 
export const Contact = () => {
    const fromInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',

    }
    const [formDetails, setFormDetails] = useState(fromInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFromUpdate = (category, vlaue) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
<section className="contact" id="connect">
    <Container>
        <Row className="align-items-center">
            <Col md={6}>
                <img src={contactImg} alt="Kontakt"/>
                <Col md={6}>
                    <h2>Nur mal schauen</h2>
                    <form>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Vorname" onChange={(e) => onFromUpdate('firstName' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Nachname" onChange={(e) => onFromUpdate('lastName' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="E-Mail" onChange={(e) => onFromUpdate('lastName' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Mobil" onChange={(e) => onFromUpdate('lastName' e.target.value)} />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Col>
        </Row>
    </Container>
</section>
    )
}