import React from 'react';
import '../custom.scss';

const contactDataTemp = {
  address: "6106 Lakewood Street",
  city: "San Diego",
  state: "CA",
  zip: "92122",
  email: "mye@ssrsupports.com",
  phone: "858-752 0602"
}

const ContactBlock = props => {

  const {title, direction="verticle"} = props;

  const contactData = contactDataTemp;
  var orientationName;
  switch (direction) {
    case "verticle":
      orientationName = "col-12";
      break;

    case "horizontal":
      orientationName = "col-6";
      break;
    
    default:
      orientationName = "col-12";
  }

  return (
    <div className="row">
      {
        title && 
        <div className="col-12 mb-3">
          <h4 className="font-weight-bold">{title}</h4>
        </div>
      }
      <div className={`${orientationName} mb-3`}>
        {`${contactData.address}`}
        <br/>{`${contactData.city}, ${contactData.state} ${contactData.zip}`}
      </div>
      <div className={`${orientationName} mb-3`}>
        {`${contactData.email}`}
        <br/>{`${contactData.phone}`}
      </div>
    </div>
  )
}


export default ContactBlock;
