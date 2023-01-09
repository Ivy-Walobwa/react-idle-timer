import { Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return <Navbar bg="dark" variant="dark">
        <div className="ms-4">
            <Navbar.Brand href="#home">
                Idle Timer
            </Navbar.Brand>
        </div>
    </Navbar>
}

export default NavigationBar