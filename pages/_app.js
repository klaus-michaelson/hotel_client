import "../styles/bootstrap-grid.min.css";
import "antd/dist/antd.css";
// import 'antd/dist/antd.dark.css'
import MainLayout from "../components/MainLayout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
