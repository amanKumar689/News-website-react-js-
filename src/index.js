import React from 'react';
import ReactDOM from 'react-dom';
import NewsAPp from './NewsApp'
import { HeadlineData }from './API/newsApi'


  
ReactDOM.render(
  <React.StrictMode>
   <NewsAPp/>
  </React.StrictMode>,
  document.getElementById('root')
);