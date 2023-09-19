import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/custom-animate.css";
import "@/vendors/flaticon.css";
import "@/vendors/fontawesome-all.css";
import "@/vendors/home.css";
import "@/vendors/base.css";
import Head from 'next/head';
import "@/vendors/linoor-icons.css";
import "@/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "tiny-slider/dist/tiny-slider.css";


// extra css
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import CustomCursor from "@/components/CustomCursor";



const MyApp = ({ Component, pageProps }) => {
  
  return (
     <Head>
        {/* Load your external scripts and styles here */}
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
        {/* ... (other scripts) ... */}
      </Head>
    <ContextProvider>
<CustomCursor/>
      <Component {...pageProps}  /> \
    </ContextProvider>

  );
};

export default MyApp;
