// create a header with tailwindcss

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        <span>Logged in as </span>
        <span> - </span>
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        // onClick={() => void signIn()}    
      >
        Sign in
      </button>
    </div>
  );
};
export default Header;
