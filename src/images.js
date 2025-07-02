// Centralized image imports with optimized loading for SVGs

// Helper function for dynamic imports - this enables code splitting for images
const optimizeImage = (path) => {
  // Return an object with the path and a loading state
  return {
    path,
    // Add cache mechanism with getter to avoid loading the same image multiple times
    get element() {
      // Lazy load the image by creating a new Image only when accessed
      if (!this._element) {
        this._element = new Image();
        this._element.src = path;
        this._element.loading = "lazy";
      }
      return this._element;
    },
  };
};

// Import all assets - SVGs and images
import shortLogoPath from "./assets/shortLogo.svg";
import reactIconPath from "./assets/react-2.svg";
import bootstrapIconPath from "./assets/bootstrap.svg";
import wordpressIconPath from "./assets/wordPress.svg";
import figmaIconPath from "./assets/figma-icon.svg";
import shopifyIconPath from "./assets/shopify.svg";
import nodejsIconPath from "./assets/nodejs-3.svg";
import postgresqlIconPath from "./assets/postgresql.svg";
import postmanIconPath from "./assets/postman.svg";
import mongodbIconPath from "./assets/mongodb-icon-1-1.svg";
import muiIconPath from "./assets/material-ui-1 1.svg";
import woocommerceIconPath from "./assets/WooCommerce_logo 2.svg";
import groupIconPath from "./assets/Group.svg";
import postmanAltIconPath from "./assets/Group 3.svg";
import rectangleImage1Path from "./assets/Rectangle 40.svg";
import rectangleImage2Path from "./assets/Rectangle 41.svg";
import rectangleImage3Path from "./assets/Rectangle 45.svg";
import rectangleImage4Path from "./assets/Rectangle 46.svg";
import rectangleImage25Path from "./assets/Rectangle 25.svg";
import rectangleImage51Path from "./assets/Rectangle 51.png";
import rectangleImage51SVGPath from "./assets/Rectangle 51.svg";
import rectangleImage53Path from "./assets/Rectangle 53.svg";
import vectorIconPath from "./assets/Vector.png";
import vectorSvgPath from "./assets/Vector.svg";
import vector1Path from "./assets/Vector (1).svg";
import vector2Path from "./assets/Vector (2).svg";
import group3Path from "./assets/Group 3.svg";
import groupDash3Path from "./assets/Group-3.svg";
import group16Path from "./assets/Group 16.svg";
import group17Path from "./assets/Group 17.svg";
import group19Path from "./assets/Group 19.svg";
import group19PngPath from "./assets/Group 19.png";
import group20Path from "./assets/Group 20.svg";
import group22Path from "./assets/Group 22.svg";
import group23Path from "./assets/Group 23.svg";
import group24Path from "./assets/Group 24.svg";
import funiroLanding3Path from "./assets/Funiro Landing Page 3.svg";
import funiroLanding4Path from "./assets/Funiro Landing Page 4.svg";
import liveDiscussionPath from "./assets/livediscussion.jpg";
import layer1Path from "./assets/Layer_1.svg";
import layer2Path from "./assets/Layer_2.svg";
import mongoIconPath from "./assets/mongodb.svg";
import wooIconPath from "./assets/Woo.svg";
import storageIconPath from "./assets/lucide_database-zap.svg";
import fileCodeIconModal from "./assets/lucide_file-code.svg";
import wordpressModal from "./assets/ic_round-wordpress.svg";
import mobileIconModal from "./assets/lucide_tablet-smartphone.svg";
import crossPlatformIconModal from "./assets/lucide_layout-template.svg";
import webAppIconModal from "./assets/proicons_apps.svg";
import designIconModal from "./assets/lucide_layout-template.svg";
import prototypeIconModal from "./assets/lucide_pencil-ruler.svg";
import systemsIconModal from "./assets/lucide_paintbrush-vertical.svg";
import shopifyIconModalModal from "./assets/hugeicons_shopify.svg";
import wooCommerceIconModalModal from "./assets/Group11.svg";
import mobileBackgroundPath from "./assets/backgroundImage.svg";
import fullstackImagepath from "./assets/fluent_layer-20-regular.svg";
import javascriptIconPath from "./assets/icons8-javascript 1.svg";
import typescriptIconPath from "./assets/icons8-typescript 1.svg";
import cssIconPath from "./assets/icons8-css3 1.svg";
import materialUiIconPath from "./assets/icons8-material-ui 1.svg";
import htmlIconPath from "./assets/icons8-html5.svg";
import teamIconPath from "./assets/fluent_people-team-28-regular.svg";
import NdaIconPath from "./assets/material-symbols-light_handshake-outline-rounded.svg";
import modelIconPath from "./assets/system-uicons_cubes.svg";
import documentationIconPath from "./assets/hugeicons_document-code.svg";
import qualityIconPath from "./assets/streamline-ultimate_performance-increase.svg";
import WebDevelopmentContactUsImagePath from "./assets/Rectangle 83.svg"; // Assuming you have a utility for image optimization
import GraphQLImagePath from "./assets/graphQL.png";
import RedisImagePath from "./assets/redis.png";
import dockerImagePath from "./assets/docker.webp";
import MernStackImagePath from "./assets/mernStack.webp";
import NextJsImagePath from "./assets/nextjs.png";
import AWSImagePath from "./assets/aws.jpeg";
import GitImagePath from "./assets/git.png";
import phpImagePath from "./assets/php.png";
import elementorImagePath from "./assets/elementor.png";
import jQueryImagePath from "./assets/jQuery.png";
import acfImagePath from "./assets/acf.png";
import mySQLImagePath from "./assets/mySQL.png";
import backIconPath from "./assets/Variant3.svg"
import ourTechStackImagePath from "./assets/ourtechstack.jpg";

// Cache map for SVG elements to prevent multiple loads
const svgCache = new Map();

// Helper to get cached SVG path
const getSvgPath = (path) => {
  if (!svgCache.has(path)) {
    svgCache.set(path, path);
  }
  return svgCache.get(path);
};

// Logos
export const teamgridLogo = getSvgPath(shortLogoPath);
export const shortLogo = getSvgPath(shortLogoPath);

// Tech stack icons
export const reactIcon = getSvgPath(reactIconPath);
export const bootstrapIcon = getSvgPath(bootstrapIconPath);
export const wordpressIcon = getSvgPath(wordpressIconPath);
export const figmaIcon = getSvgPath(figmaIconPath);
export const shopifyIcon = getSvgPath(shopifyIconPath);
export const nodejsIcon = getSvgPath(nodejsIconPath);
export const postgresqlIcon = getSvgPath(postgresqlIconPath);
export const postmanIcon = getSvgPath(postmanIconPath);
export const mongodbIcon = getSvgPath(mongodbIconPath);
export const muiIcon = getSvgPath(muiIconPath);
export const woocommerceIcon = getSvgPath(woocommerceIconPath);
export const groupIcon = getSvgPath(groupIconPath);
export const postmanAltIcon = getSvgPath(postmanAltIconPath);
export const mongoIcon = getSvgPath(mongoIconPath);
export const woo = getSvgPath(wooIconPath);
export const storageIcon = getSvgPath(storageIconPath);
export const fileCodeIcon = getSvgPath(fileCodeIconModal);
export const wordpressIconModal = getSvgPath(wordpressModal);
export const mobileIcon = getSvgPath(mobileIconModal);
export const crossPlatformIcon = getSvgPath(crossPlatformIconModal);
export const webAppIcon = getSvgPath(webAppIconModal);
export const designIcon = getSvgPath(designIconModal);
export const prototypeIcon = getSvgPath(prototypeIconModal);
export const systemsIcon = getSvgPath(systemsIconModal);
export const shopifyIconModal = getSvgPath(shopifyIconModalModal);
export const wooCommerceIconModal = getSvgPath(wooCommerceIconModalModal);
export const mobileBackground = mobileBackgroundPath;
// Images and backgrounds - optimize loading for larger images
export const rectangleImage1 = getSvgPath(rectangleImage1Path);
export const rectangleImage2 = getSvgPath(rectangleImage2Path);
export const rectangleImage3 = getSvgPath(rectangleImage3Path);
export const rectangleImage4 = getSvgPath(rectangleImage4Path);
export const rectangleImage25 = getSvgPath(rectangleImage25Path);
export const rectangleImage51 = rectangleImage51Path; // Team image - PNG
export const rectangleImage51SVG = getSvgPath(rectangleImage51SVGPath);
export const rectangleImage53 = getSvgPath(rectangleImage53Path);

// Vector graphics
export const vectorIcon = vectorIconPath; // PNG
export const vectorSvg = getSvgPath(vectorSvgPath);
export const vector1 = getSvgPath(vector1Path);
export const vector2 = getSvgPath(vector2Path);

// Group assets
export const group3 = getSvgPath(group3Path);
export const groupDash3 = getSvgPath(groupDash3Path);
export const group16 = getSvgPath(group16Path);
export const group17 = getSvgPath(group17Path);
export const group19 = getSvgPath(group19Path);
export const group19Png = group19PngPath; // PNG
export const group20 = getSvgPath(group20Path);
export const group22 = getSvgPath(group22Path);
export const group23 = getSvgPath(group23Path);
export const group24 = getSvgPath(group24Path);

// Funiro landing pages - large SVGs should be optimized
export const funiroLanding3 = getSvgPath(funiroLanding3Path);
export const funiroLanding4 = getSvgPath(funiroLanding4Path);

// Other images
export const liveDiscussion = liveDiscussionPath; // JPG
export const layer1 = getSvgPath(layer1Path);
export const layer2 = getSvgPath(layer2Path);
export const fullstackImage = getSvgPath(fullstackImagepath); // Example for full stack image
export const javascriptIcon = getSvgPath(javascriptIconPath);
export const typescriptIcon = getSvgPath(typescriptIconPath);
export const cssIcon = getSvgPath(cssIconPath);
export const materialUiIcon = getSvgPath(materialUiIconPath);
export const htmlIcon = getSvgPath(htmlIconPath);
export const teamIcon = getSvgPath(teamIconPath);
export const NdaIcon = getSvgPath(NdaIconPath);
export const modelIcon = getSvgPath(modelIconPath);
export const documentationIcon = getSvgPath(documentationIconPath);
export const qualityIcon = getSvgPath(qualityIconPath);
export const WebDevelopmentContactUsImage = getSvgPath(
  WebDevelopmentContactUsImagePath
);
export const graphQLIcon = getSvgPath(GraphQLImagePath);
export const redisIcon = getSvgPath(RedisImagePath);
export const dockerIcon = getSvgPath(dockerImagePath);
export const mernStackIcon = getSvgPath(MernStackImagePath);
export const nextJSIcon = getSvgPath(NextJsImagePath);
export const awsIcon = getSvgPath(AWSImagePath);
export const gitIcon = getSvgPath(GitImagePath);
export const phpIcon = getSvgPath(phpImagePath);
export const elementorIcon = getSvgPath(elementorImagePath);  
export const jQueryIcon = getSvgPath(jQueryImagePath);
export const acfIcon = getSvgPath(acfImagePath);
export const mySQLIcon = getSvgPath(mySQLImagePath);
export const backIconAnime = getSvgPath(backIconPath);
export const ourTechStackImage = getSvgPath(ourTechStackImagePath);