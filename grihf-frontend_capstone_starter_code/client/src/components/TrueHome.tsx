import "./Home.css";
import { HomeProps } from "../types";

const TrueHome: React.FC<HomeProps> = ({ isLoggedIn }) => {





    
    if (isLoggedIn === true) {
        return (
            <div>
                <h2>Welcome to Our Site</h2>
                <div className="home-page">
                    <button>Instant Consultation</button>
                    <button>Book an Appointment</button>
                    <button>Self Check-up</button>
                    <button>Health Tips & Guidance</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <button>Instant Consultation</button>
                <button>Book an Appointment</button>
                <button>Self Check-up</button>
                <button>Health Tips & Guidance</button>
            </div>
        );
    }
};

export default TrueHome;
