import { Link } from "react-router-dom";

import Container from "../components/shared/Container";
import Tabs from "../components/shared/Tabs";

const Error = () => {

    const basePath = "error";
    const pageName = "Error";

    return (
        <Container basePath={basePath} tabs={[]} pageName={pageName}>
            <div>
                <h2>404</h2>
                <p>Page not found</p>
                <p><Link to="/" className="text-link">Main Page</Link></p>
            </div>
        </Container>
    )
}

export default Error;