import { Key, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import teamsData from "./assets/CollegeBasketballTeams.json";
console.log(teamsData); // Check structure in console

function UserIntro() {
  return <h1>March Maddness College NCAA Basketball</h1>;
}

interface TeamProps {
  school: string;
  mascot: string;
  city: string;
  state: string;
}

function TeamCards({ school, mascot, city, state }: TeamProps) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>
        <strong>Mascot:</strong> {mascot}
      </p>
      <p>
        <strong>Location:</strong> {city}, {state}
      </p>
    </div>
  );
}

function TeamLists() {
  return (
    <div>
      <h1>Team Lists</h1>
      {teamsData.teams.map(
        (
          team: { school: string; name: string; city: string; state: string },
          index: Key | null | undefined
        ) => (
          <TeamCards
            key={index}
            school={team.school}
            mascot={team.name}
            city={team.city}
            state={team.state}
          />
        )
      )}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserIntro />
      <TeamCards school={""} mascot={""} city={""} state={""} />
      <TeamLists />
    </>
  );
}

export default App;
