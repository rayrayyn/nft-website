import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout title="Home" description="Site by Flameray!" showFooter>
            <h1>HOME</h1>
        </Layout>
    );
};

export default Home;
