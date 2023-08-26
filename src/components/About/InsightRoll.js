const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent text-light whitespace-nowrap overflow-hidden dark:text-dark dark:bg-accentDark">
      <div className="animate-roll w-full py-3 flex items-center justify-center capitalize  font-semibold tracking-wider">
        {insights.map((text) => (
          <div>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default InsightRoll;
