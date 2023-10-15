import React from 'react'

export default function Stars() {
  return (
    <>
        <div className='git_data'>
            <h1>GitHub Stats</h1>
            <div className="stats" id="stats">
                <img className='starimg1' height="200px" width="300px"src="https://github-readme-stats.vercel.app/api?username=1sagarthakur1&show_icons=true&locale=en" alt="1sagarthakur1"/>
                <img className='starimg1' height="200px" width="300px" src="https://github-readme-stats.vercel.app/api/top-langs?username=1sagarthakur1&show_icons=true&locale=en&layout=compact" alt="1sagarthakur1"/>
                <img className='starimg1' height="200px" width="300px" src="https://github-readme-streak-stats.herokuapp.com/?user=1sagarthakur1&" alt="1sagarthakur1"/>
            </div>
        </div>
    </>
  )
}
