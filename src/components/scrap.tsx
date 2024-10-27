<div className="relative">
          <div className="absolute left-1/2 -ml-[2px] h-full w-1 bg-yellow-500 opacity-30 transform -translate-x-1/2"></div>
          <div
            className="absolute left-1/2 -ml-[2px] h-[300px] w-1 bg-yellow-500"
            style={{ height: `${scrollY * 0.3}px`, transition: 'height 0.3s ease-out' }}
          ></div>

const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
