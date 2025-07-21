import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <div>
            <main id="landing">
                <h1 >Need a calling card?</h1><br/>
                <p>No need to order physical cards anymore!</p>
                <p>Create a custom contact card and save it for distribution.</p>
                <Link to="/create">
                    <button type="button">Start Creating</button><br/>
                </Link>
            </main>
        </div>
    );
}

export default Landing