import Layout from "../components/base";
import ShowErrorPage from "../components/error/ErrorPage";

const Error404Page = () => {
    return (
        <Layout showHomeBanner={false}>
            <ShowErrorPage type="404" />
        </Layout>
    )
}

export default Error404Page