import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    if (window)
      setPathName(window.location.pathname);
  }, [])
  
  console.log(pathName);

  const interpolateScale = (distance: number, maxDistance: number, minScale: number, maxScale: number) => {
    if (distance > maxDistance) return minScale;
    if (distance < 0) return maxScale;
    const scale = minScale + (maxScale - minScale) * (1 - distance / maxDistance);
    return scale;
  };

  const interpolateMargin = (distance: number, maxDistance: number, minMargin: number, maxMargin: number) => {
    if (distance > maxDistance) return minMargin;
    if (distance < 0) return maxMargin;
    const margin = minMargin + (maxMargin - minMargin) * (1 - distance / maxDistance);
    return margin;
  };

  const interpolateTranslateY = (distance: number, maxDistance: number, minTranslate: number, maxTranslate: number) => {
    if (distance > maxDistance) return minTranslate;
    if (distance < 0) return maxTranslate;
    const translateY = minTranslate + (maxTranslate - minTranslate) * (1 - distance / maxDistance);
    return translateY;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const cursorX = event.clientX;

    if (componentRef.current) {
      const listItems = componentRef.current.querySelectorAll('li');

      listItems.forEach((li: HTMLLIElement) => {
        const liRect = li.getBoundingClientRect();
        const liCenterX = liRect.left + liRect.width / 2;

        const maxDistance = 100;
        const distance = Math.abs(cursorX - liCenterX);

        const scale = interpolateScale(distance, maxDistance, 1, 1.5);
        const margin = interpolateMargin(distance, maxDistance, 4, 10);
        const translateY = interpolateTranslateY(distance, maxDistance, 0, -10);

        li.style.transition = 'transform 0s ease, margin 0s ease';
        li.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        li.style.margin = `0 ${margin}px`;
      });
    }
  };

  const resetScale = () => {
    if (componentRef.current) {
      const listItems = componentRef.current.querySelectorAll('li');
      listItems.forEach((li: HTMLLIElement) => {
        li.style.transition = 'transform 0.3s ease, margin 0.3s ease';
        li.style.transform = 'scale(1) translateY(0)';
        li.style.margin = '0 0px';
      });
    }
  };

  return (
    <nav
      className={`fixed bottom-3 bg-[#161616] bg-opacity-90 rounded-full left-[50%] translate-x-[-50%] overflow-x-auto max-w-[80vw] lg:overflow-x-clip
        flex gap-4 z-40 px-3 py-[6px] transition-transform duration-300 hover:translate-y-[-10px] hover:scale-110 drop-shadow`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetScale}
      ref={componentRef}
    >
      <ul className="flex gap-2">
        <li className={`relative rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer flex-col gap-2`}>
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          </a>
          {pathName === '/' && <span className="absolute w-1 h-1 rounded-full bg-gray -bottom-[5px] opacity-60"></span>}
        </li>
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 12l0 .01" />
            <path d="M3 13a20 20 0 0 0 18 0" />
          </svg>
          </a>
        </li>
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          </a>
        </li>
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
              <path d="M10 16h6" />
              <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 8h3" />
              <path d="M4 12h3" />
              <path d="M4 16h3" />
            </svg>
          </a>
        </li>
      </ul>
      <div className="border-r border-gray opacity-40 my-2"></div>
      {/* second options */}
      <ul className="flex gap-2">
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          </a>
        </li>
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          </a>
        </li>
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          </a>
        </li>
      </ul>
      <div className="border-r border-gray opacity-40 my-2"></div>
      <ul className="flex gap-2">
        <li className="rounded-full bg-[#212121] drop-shadow w-10 h-10 flex justify-center items-center cursor-pointer">
          <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7e7e7e" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
