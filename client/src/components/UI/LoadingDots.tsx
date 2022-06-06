const LoadingDots: React.FC = () => {
  return (
    <span className="flex items-center justify-center h-3 w-14">
      <span className="relative inline-flex w-3 h-3 p-1 mr-1 delay-75 rounded-full animate-blink bg-sky-500"></span>
      <span className="relative inline-flex w-3 h-3 p-1 mr-1 delay-300 rounded-full animate-blink bg-sky-500"></span>
      <span className="relative inline-flex w-3 h-3 p-1 mr-1 delay-700 rounded-full animate-blink bg-sky-500"></span>
    </span>
  );
};

export default LoadingDots;
