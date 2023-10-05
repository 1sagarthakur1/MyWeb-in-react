import React from 'react'

import sts from '../Images/STS.png';
import intellij from '../Images/IntelliJ_IDEA.png';
import github from '../Images/Git-Icon.png';
import lombook from '../Images/lombook.png';
import swagger from '../Images/swagger.svg';
import vscode from '../Images/Visual_Studio.png'
import Itools from './InnerComponents/Itools';

export default function Tools() {
  return (
    <>
    <section id='section3'></section>
        <div className='tools'>
            <h1>My Tools</h1>
            <div>
               <Itools name="STS" img={sts}/>
               <Itools name="IntelliJ" img={intellij}/>
               <Itools name="GitHub" img={github}/>
               <Itools name="Lombook" img={lombook}/>
               <Itools name="Swagger" img={swagger}/>
               <Itools name="Visual Studio" img={vscode}/>
            </div>
        </div>
    </>
  )
}
