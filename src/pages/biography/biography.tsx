import React from 'react';
import SectionHeader from '../../component/sectionHeader/sectionHeader'
import './biography.css'

const BiographyPage: React.FC = () => {
  return (
    <div>
      <SectionHeader></SectionHeader>
      <div className="content">
        <div className="header">
          <h1>Biographie</h1>
          <hr />
          <h2>Biography</h2>
        </div>
        <div className="bios">
          <div className="french">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus. Enim ut tellus elementum sagittis vitae et leo duis. Nunc scelerisque viverra mauris in aliquam. Praesent elementum facilisis leo vel fringilla est. Fringilla ut morbi tincidunt augue. Ornare arcu odio ut sem nulla pharetra diam. Et ligula ullamcorper malesuada proin libero. Urna porttitor rhoncus dolor purus non. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.</span>
          </div>
          <div className="english">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus. Enim ut tellus elementum sagittis vitae et leo duis. Nunc scelerisque viverra mauris in aliquam. Praesent elementum facilisis leo vel fringilla est. Fringilla ut morbi tincidunt augue. Ornare arcu odio ut sem nulla pharetra diam. Et ligula ullamcorper malesuada proin libero. Urna porttitor rhoncus dolor purus non. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Feugiat nisl pretium fusce id velit ut tortor pretium. Commodo viverra maecenas accumsan lacus vel facilisis volutpat.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyPage;
