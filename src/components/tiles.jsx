import { useState } from 'react';
import Tile from './tile';
export default function Tiles( ) {

    const listOne = [
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/brain.png',
          title: 'PROJECT UNDERSTANDING',
          text: 'A critical thinking fundamental for all supervisory roles. Represents a person’s ability to effectively grasp project scale, scope, risks, and potential rewards based on project KPIs. Project KPIs are identified by senior management, vetted by the client, and used to track project progress (e.g. timeline, cost, safety, security, resources, logistics, manpower, variables, etc.).'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/talking.png',
          title: 'COMMUNICATIONS',
          text: 'A critical thinking skill fundamental for all supervisory roles. Represents a person’s ability to effectively grasp the chain of communications vertically (e.g. up and down) and laterally (e.g. internal & external stakeholders). Includes accounting for the priority and impact on entire chain of communication (e.g. who, what, when, where and most importantly WHY).'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/hourglass.png',
          title: 'TIME MANAGEMENT',
          text: 'A critical thinking  skill fundamental for all supervisory roles. Represents a person’s ability to proactively plan for and manage project steps necessary for meeting or improving the project’s overall time to completion set in the project KPIs.'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/chart-down.png',
          title: 'COST MANAGEMENT',
          text: 'A critical thinking skill fundamental for all supervisory roles. Represents a person’s ability to maintain awareness of project costs during execution (both pluses & minuses) against the project budget. A supervisor with this skill can logically work through the cost impact of unexpected variables before initiating the solution.'
        }
      ];

      const listTwo = [
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/magnify.png',
          title: 'CLIENT AWARENESS',
          text: 'An advanced professional talent representing the depth of client understanding both personally and professionally (e.g. habits, expectations, goals, means of interaction & communication). Measured in the strength of relationship and line of communication openness. “If this were your company, what would you do?”'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/brick-wall.png',
          title: 'SKILLED TRADES APPLICATION',
          text: 'An advanced leadership talent representing the range of awareness for appropriate resources available to a given project, and the ability to find additional resources when an unexpected variable arises. “You know what they do, how they do it, why they are doing it, and when they should do it.” '
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/globe.png',
          title: 'SOURCING & LOGISTICS',
          text: `An advanced leadership talent for proactively managing the material needs of a project while keeping the project timeline and budget KPIs in mind. We live by the saying, “Game time is coming… don’t be surprised by the kickoff.” `
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/potw_icon_001.png',
          title: 'PROJECT ANALYTICS & PROPOSALS',
          text: 'An advanced cumulative use of the first three Occupational Talents and all Professional KPI fundamentals to deliver a clear and concise proposal with a reasonable and easily understood solution. “Selling just based on price is not a talent. Creating the best solution is...”'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/potw_icon_002.png',
          title: 'PROJECT PLAN COMPREHENSION',
          text: 'An advanced cumulative use of the first four Occupational Talents and all Professional KPI fundamentals to meet or exceed project goals, objectives, expectations, and final deliverable. “You know what to do, how to do it, when to do it, and most importantly WHY to do it.”'
        },
        {
          icon: 'https://l5-construction.hothoneymedia.com/wp-content/uploads/sites/9/2024/01/cloud.png',
          title: 'PROJECT MANAGEMENT SYSTEMS',
          text: 'A proactive and fluid depth of use of a project management and/or customer management software to effectively streamline the entire line of communications (vertically and laterally) along with project accounting to build long-term client relationships. “Demonstrate that you are on top of your game…EVERY GAME!”'
        }
      ];

    return (<>
    <div className='skillbridge-tiles tw-bg-darkBG tw-p-10'>
        <h2 className="tw-text-2xl tw-text-light tw-font-bold tw-text-center tw-mb-10">PROFESSIONAL KPIs & OCCUPATIONAL TALENTS</h2>
        <Tile text="Professional KPI Results = Base Supervisor Value" list={listOne} />
        <Tile text="Occupational Talents = Enhancements to Supervisor Value" list={listTwo} />
    </div>
    </>);
}