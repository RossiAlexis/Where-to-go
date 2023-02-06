// create a card with taildwindcss
const PresentationCard = () => {
  return (
    <figure
      className="flex 
        max-w-[20rem]
        max-h-fit
         flex-col 
        rounded-xl 
      bg-slate-100 p-8 
      dark:bg-slate-600 dark:hover:shadow-md dark:hover:shadow-sky-700 
        md:flex 
        md:p-0"
    >
      <img
        className="mx-auto rounded-full md:h-auto md:w-full md:rounded-none"
        src="/Sunset.jpeg"
        alt=""
        width="384"
        height="512"
      />
      <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-lg font-medium text-slate-300">
            “Tailwind CSS is the only framework that Ive seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default PresentationCard;
