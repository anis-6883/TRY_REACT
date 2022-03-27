export default function User({ name }) {
  return (
    <div>
      <h1>{name(true)}</h1>
    </div>
  );
}
