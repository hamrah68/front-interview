import Layout from "../components/base";
import ShowErrorPage from "../components/error/ErrorPage";

const ErrorPage = () => {
    return (
        <Layout showHomeBanner={false}>
            <ShowErrorPage type="500" />
        </Layout>
    )
}

export default ErrorPage