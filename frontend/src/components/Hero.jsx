import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center">
                <Card className="p-5 d-flex flex-column align-items-center text-center hero-card bg-light w-75">
                    <h1 className="text-center mb-4">My WebApp Authentication</h1>
                    <p className="text-center mb-4"> 
                        Logging in is required in order to use our services, so please:
                    </p> 
                    <div className="d-flex">
                        <Button variant="primary" href="/login" className="me-3">
                            Sign In
                        </Button>
                        <div className="text-center mx-4">
                          or
                        </div>
                        <Button variant="secondary" href="/register" >
                            Sign Up
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
};

export default Hero;