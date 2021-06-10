import { Provider } from "react-redux";
import { store } from "../app/store";
import MainFeatures from "../components/MainFeatures";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <MainFeatures>
        <Component {...pageProps} />
      </MainFeatures>
    </Provider>
  );
};

export default MyApp;
