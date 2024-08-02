import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || Leading us to greatness in our nation`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
