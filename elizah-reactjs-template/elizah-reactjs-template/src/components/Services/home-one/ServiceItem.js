import React from 'react'; 
import {Link} from "react-router-dom"; 
 
  
function ServiceItem(props) {
    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`
    return ( 
 
    <div className="col-sm-12"> 
        <div className="service_list"> 
            <div className="service_img"> 
                <Link to={`${process.env.PUBLIC_URL + serviceURL}`}> 
                <img src={require('../../../assets/images/' + props.thumb)} alt="service" />
                </Link>
            </div>
            <div className="service_para"> 
                <Link to={`${process.env.PUBLIC_URL + serviceURL}`}><i className={`${props.icon}`}></i>
                    <h5>{props.title}</h5>
                </Link> 
                <p>{props.shortDesc}</p> 
                <Link to={`${process.env.PUBLIC_URL + serviceURL}`} className="serv_read">{props.btnText} <span className="fa fa-angle-double-right"></span></Link>
            </div> 
        </div> 
    </div> 

    );
}

export default ServiceItem;

 