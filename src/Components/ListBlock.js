import React from 'react';
import '../custom.scss';
import Block from './Block.js';
import Button from './Button.js';


const dataServiceTemp = {
  dataIDs: ["assayDev", "clinicalTrials", "drugReg", "drugManu", "medWrite", "postMarket"],
  data: {
    assayDev: {
      key: "Assay development supports",
      value: "We help you design assays, guide you through required deliverables, and write protocols, SOPs, and reports for you."
    },
    clinicalTrials: {
      key: "Clinical Trial Supports",
      value: "We help you identify key opinion leaders, perform literature searches, and prepare reports for the status of the disease of interest. We will also interview and select doctors participating in the clinical trial, set up a DSMB (data safety monitoring board) if necessary, design and draft clinical trial protocols, write annual trial reports, and write final project reports for FDA submission."
    },
    drugReg: {
      key: "Drug and Medical Device Regulatory Affairs Supports",
      value: "We help you identify required deliverables during each stage of product development, provide format guidance to documentations, and prepare packages for submission to the regulatory authorities."
    },
    drugManu: {
      key: "Drug and Medical Device Manufacturing Supports",
      value: "We help you build quality systems for manufacturing facilities, perform GAP analyses, and identify a contract manufacturing facility."
    },
    medWrite: {
      key: "Medical Writing and Regulatory Submissions Supports",
      value: "We help you write a variety of internal documents, as well as study reports and summaries for regulatory submissions."
    },
    postMarket: {
      key: "Post-Marketing Surveillance Supports",
      value: "We help you design post-market safety studies, prepare study reports, and summarize product safety profiles."
    },
  }
}

const dataTeamTemp = {
  dataIDs: ["mYe"],
  data: {
    mYe: {
      key: "Ming Ye, M.D, Ph.D",
      value: "Dr. Ye is very experienced in assay development, clinical trials, safety assessments, and regulatory supports in both medical device and drug industry. As a medical graduate from Medical School of Fudan University, Dr. Ye practiced medicine for two years from 1991 to 1993. Thereafter, he was enrolled in a Ph.D. program at the University of Iowa. From there, he developed special interests in understanding pathways for bringing products from the lab bench to the FDA offices. After graduation, he joined Beckman Coulter, a global leader in diagnostic industry. He gained plethora of knowledge and hands-on experiences in product design and development, quality assurance and regulatory affairs for both IVD and non-IVD products. Later, he joined another medium-sized biopharmaceutical company. There, he fully contributed to clinical studies including clinical trial site opening, clinical lab data collection and analysis, and clinical trial report writing. He also provided support for drug safety assessment and documentation for regulatory submission and contributed to the cGMP compliance for the manufacturing facility. As the founder of the SSR Supports consulting service, Dr. Ye provides high quality services in device and drug development for FDA submission and in post-market safety surveillance."
    }
  }
}

const keyValueMap = (key, value) => (
  <div key={key} className="row py-5" style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
    <div className="col-12 col-md-3 text-left">
      <h4>{key}</h4>
    </div>
    <div className="col-12 col-md-2 text-left"></div>
    <div className="col-12 col-md-7 text-left">
      <p>{value}</p>
    </div>
  </div>
)


const ListBlock = props => {

  const {title, dataSource, maxLength=false, maxLengthLink=false, theme=
    "seconrdary"} = props;

  var dataMap;
  var data;

  if (dataSource === "availableServices") {
    data = dataServiceTemp;
    dataMap = keyValueMap;
  } else if (dataSource === "teamMembers") {
    data = dataTeamTemp;
    dataMap = keyValueMap;
  }

  return (
    <Block theme={theme}>
      <div className="col-12 col-md-10 text-left pb-5" style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
        <h2>{title}</h2>
      </div>
      {
        data && 
        <div className="col-12 col-md-10 mb-3">
          {
            data.dataIDs.slice(0, maxLength || data.dataIDs.length).map(id => 
              dataMap(data.data[id].key, data.data[id].value)
            )
          }
        </div>
      }
      {
        maxLengthLink && maxLength && maxLength < data.dataIDs.length &&
          <div className="col-12 col-md-10 my-4 text-left">
            <Button
              title="View All"
              dest={maxLengthLink}
              />
          </div>
      }
    </Block>
  );
}


export default ListBlock;
