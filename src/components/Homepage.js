import { useState, useContext } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
import useIdle from "../hooks/useIdleTimeout"
import AuthContext from "../context/AuthContext"

const HomePage = () => {
    const [openModal, setOpenModal] = useState(false)
    const { logout } = useContext(AuthContext);

    const handleIdle = () => {
        setOpenModal(true);
    }
    const { idleTimer } = useIdle({ onIdle: handleIdle, idleTime: 5 })

    const stay = () => {
        setOpenModal(false)
        idleTimer.reset()
    }

    const handleLogout = () => {
        logout()
        setOpenModal(false)
    }

    return <Container className="mt-4">
        <Row>
            <Col></Col>
            <Col>You are now logged in </Col>
            <Col></Col>
        </Row>
        <Modal show={openModal} onHide={stay}>
            <Modal.Header closeButton>
                <Modal.Title>Your session is about to expire</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Your session is about to expire. You'll be automatically signed out.
                </p>
                <p>
                    Do you want to stay signed in?
                </p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleLogout}>
                    Sign out now
                </Button>
                <Button variant="primary" onClick={stay}>
                    Stay signed in
                </Button>
            </Modal.Footer>
        </Modal>
    </Container>
}

export default HomePage;