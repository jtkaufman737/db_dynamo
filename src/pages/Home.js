import React from 'react';

function Home() {
  return(
    <div id="home" className="componentWrapper">
      <img className="img-logo-main" src={ require('../ninja.png') } alt="ninja"/>
      <h1 className="center">SQL Samurai</h1>
      <div class="main">
        <p>
          Welcome to SQL Samurai! The one stop shop for demoing and emulating database concepts and learning SQL, structured query language.
        </p>
        <p>
          This site was designed to be different from other db emulators in a few key ways:
          <ul>
            <li><strong>High Fidelity</strong> - Create and drop your own databases, up to 10</li>
            <li><strong>Data Persistent</strong> - No need to rerun schema creation or data seeding commands the way that you would
            using a DB fiddle. Once data is there, it is there in a real database and can be deleted, queried, and modified as you see fit.
            Play with live data under <em>Sandbox</em></li>
            <li><strong>Lesson Mode</strong> - Learning new tech concepts can be intmidating! Take the edge off with interactive demos of
            database concepts designed to be clear and informative. Check those out under <em>Lessons</em></li>
          </ul>
        </p>
        <p>
          Although this site currently was designed with PostgreSQL in the future expansions into other db variants will be up for
          consideration. SQL Samurai was built with React + Flask and is hosted on Heroku.
        </p>
      </div>
    </div>
  )
}

export default Home
