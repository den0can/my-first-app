import type { Component } from "solid-js";

const App: Component = () => {
  const name = "Deniz";

  return (
    <div>
      <h1 class="text-5xl">My first app</h1>
      <p>My name is {name}!</p>
    </div>
  );
};

export default App;
