import React from 'react';

import Feedback from './components/feedbackComponents/Feedback';

const App = () => {

  return (

    <div className="bg-primary-bg absolute inset-0">
      <main className="flex flex-1 inset-0 justify-center items-center">

        <Feedback />

      </main>
    </div>
    
  );

};

export default App;