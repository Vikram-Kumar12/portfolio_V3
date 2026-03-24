const GridBackgroundPattern = () => {
  return (
    <div className="absolute top-40 left-0 w-full h-[900px] opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="square-grid"
            width="40" /* Yahan se box ki width change kar sakte hain */
            height="40" /* Yahan se box ki height change kar sakte hain */
            patternUnits="userSpaceOnUse"
          >
            {/* Ye path ek square banata hai */}
            <path
              d="M 40 0 L 0 0 0 40"
              fill="transparent"
              stroke="#1A1A1A"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#square-grid)" />
      </svg>
    </div>
  );
};

export default GridBackgroundPattern;