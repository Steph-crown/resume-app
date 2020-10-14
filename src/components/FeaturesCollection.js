import React from 'react';
import './../css/App.css';
import'./../css/FeaturesCollection.css';
import Feature from './../components/Feature';


function FeaturesCollection() {
  var features = [
    {
      'icon': 'https://scessila.sirv.com/resume-builder/icons/smart-.png',
      'title': 'Smart',
      'content': 'Steph Resume saves you time and guides you to the best version of your resume'
    },
    {
      'icon': 'https://scessila.sirv.com/resume-builder/icons/circled-user-male-skin-type-6.png',
      'title': 'Privacy Friendly',
      'content': "We don't store any of your data except you want to save progress"
    },
    {
      'icon': 'https://scessila.sirv.com/resume-builder/icons/money.png',
      'title': '100% Free',
      'content': 'Use every feature for free without any hidden charges or time limit'
    },
    {
      'icon': 'https://scessila.sirv.com/resume-builder/icons/template.png',
      'title': 'Multiple Templates',
      'content': 'There are multiple resume and cover letter templates for you to choose from'
    },
    {
      'icon': 'https://scessila.sirv.com/resume-builder/icons/user.png',
      'title':'Multiple Profiles',
      'content': 'You can save your progress (if you want) and create multiple profiles'
    }
  ]

  features = features.map(x =>
    <Feature key={x.title} obj = {x} />
  );
  console.log(features)
  return (
    <div className="features containn">
      <div className='high'>
        <div className="highlight">
          Highlights
        </div>
      </div>
      <h2 className='title'>
	Features You Will Love
      </h2>
      <div className='feature-list'>
        {features}
      </div>
    </div>
  );
}

export default FeaturesCollection;
