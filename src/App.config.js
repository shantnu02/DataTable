const GIT_REPO =
  "https://github.com/codegeous/react-component-depot/tree/master/src/";
const YOUTUBE_BASE = "https://youtu.be/";

export default {
  api: process.env.REACT_APP_API_ENDPOINT,

  GOOGLE: {
    GAPI_KEY: "",
    reCaptcha: process.env.REACT_APP_RECAPCTHA_SITE_TOKEN,
    GA_TRACKING_CODE: process.env.REACT_APP_GA_TRACKING_CODE,
  },

  hCaptchaSiteToken: process.env.REACT_APP_HCAPTCHA_SITE_TOKEN,

  links: {
    customGoogleMaps: {
      tutorial: `${YOUTUBE_BASE}xUsn2nj4fy0`,
      code: `${GIT_REPO}pages/GoogleMaps/CustomStyle/index.js`,
    },
    buttonLoaderHooks: {
      tutorial: `${YOUTUBE_BASE}nCEnqQABC5A`,
      code: `${GIT_REPO}pages/ButtonLoadingSpinner/index.js`,
    },
    
    showAndHideElements: {
      tutorial: `${YOUTUBE_BASE}jRxoO-Zd0pQ`,
      code: `${GIT_REPO}pages/ReactBasics/ShowAndHide/index.js`,
    },
   
    hooks: {
      tutorial: `${YOUTUBE_BASE}fT7jBMG7GIM`,
      code: `${GIT_REPO}pages/HooksDemo/index.js`,
    },
    datatable: {
      tutorial: `${YOUTUBE_BASE}emX5KvZ6Hbo`,
      code: `${GIT_REPO}pages/DataTable/index.js`,
    },
    
    
    searchFilter: {
      tutorial: `${YOUTUBE_BASE}aBWwJ4ibpps`,
      code: `${GIT_REPO}pages/SearchFilter/index.js`,
    },
   
    
    treeList: {
      tutorial: `${YOUTUBE_BASE}uRSzyVubap4`,
      code: `${GIT_REPO}pages/TreeList/index.js`,
    },
    
  },
 
};
