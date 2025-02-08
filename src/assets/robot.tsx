type RobotProps = {className?: string};

function Robot(props: RobotProps) {return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" className={props.className}
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
  </svg>)}


export { Robot }