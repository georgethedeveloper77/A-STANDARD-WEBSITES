import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import GalleryDetails from "../templates/GalleryDetails/index";

const galleryPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>Elizah | Home</title>
		  <meta
			name="description"
			content="Multipage Business  React JS Template."
		  />
		</MetaTags> 
		<LayoutOne>

		    <GalleryDetails />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



