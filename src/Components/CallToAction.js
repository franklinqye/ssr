import React from 'react';
import '../custom.scss';
import Block from './Block.js';
import ContactBlock from './ContactBlock.js';
import Button from './Button.js';


const CallToAction = props => {

  const {title, displayType, buttonTitle, buttonDest, children, theme="secondary"} = props;

  const generateLeftContent = parentClassName => (
    <div className={parentClassName}>
      <h3>{title}</h3>
      <div className="mt-3 mb-5">
        {children}
      </div>
      {
        buttonTitle &&
          <Button
            title={buttonTitle}
            dest={buttonDest}
            />
      }
    </div>
  )

  var leftContent;
  var rightContent;

  switch (displayType) {
    case "contactInfo":
      leftContent = generateLeftContent("col-12 col-md-7 text-left");
      rightContent = (
        <div className="col-12 col-md-5 text-left">
          <ContactBlock title="Contact Us"/>
        </div>
      );
      break;

    case "contactForum":
      leftContent = generateLeftContent("col-12 col-md-5 text-left");
      rightContent = (
        <div className="col-12 col-md-7 text-left">
          <ContactBlock title="Contact Us"/>
        </div>
      );
      break;

    default:
      leftContent = generateLeftContent("col-12 text-left");
  }


  return (
    <Block theme={theme}>
      {leftContent}
      {rightContent}
    </Block>
  );
}


export default CallToAction;
