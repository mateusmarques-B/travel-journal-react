export default function Joke(props) {
  return (
    <main>
      {props.setup && <p>Setup: {props.setup} </p>}
      <p>Punchline: {props.punchline}</p>
      <p>Upvolts: {props.upvotes}</p>
      <hr />
    </main>
  );
}
