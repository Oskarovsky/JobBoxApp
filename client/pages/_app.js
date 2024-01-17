import "../public/assets/css/style.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { JobProvider } from "../components/elements/JobContext";



function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <JobProvider>
            <Component {...pageProps} />
        </JobProvider>
    );
}

export default MyApp;
