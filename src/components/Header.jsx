import { headercontent } from "../mocks/header";

export default function Header() {
  return (
    <nav className="p-6 px-8 text-white uppercase">
      <div className="flex justify-center gap-x-12">
        {headercontent.map(({ title }, index) => (
          <a href="#" className="text-lg font-semibold" key={index}>
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}
