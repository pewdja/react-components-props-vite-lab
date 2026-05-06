

export default function Header({ name }) {
  return (
    <header className="py-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 font-sans">
        {name}
      </h1>
    </header>
  );
}
