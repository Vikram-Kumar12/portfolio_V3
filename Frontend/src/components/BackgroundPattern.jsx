const BackgroundPattern = () => {
  return (
    <div className="absolute top-40 left-0 w-full h-[600px] opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="86.6"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <polygon
              points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4"
              fill="transparent"
              stroke="#000"
              strokeWidth="1"
            />
            <polygon
              points="0,86.6 25,72.2 50,86.6 50,115.5 25,129.9 0,115.5"
              fill="transparent"
              stroke="#000"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
