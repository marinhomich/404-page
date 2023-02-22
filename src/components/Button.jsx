export default function Button({ title }) {
  return (
    <button className="self-center xl:self-end bg-transparent uppercase hover:bg-white text-white font-semibold hover:text-black py-2 px-8 border border-white hover:border-transparent rounded duration-150">
      {title}
    </button>
  );
}
