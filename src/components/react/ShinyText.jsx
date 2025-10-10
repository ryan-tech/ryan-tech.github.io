import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  console.log("Inside react component", { animationDuration, text, disabled, speed, className });
  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {text}
    </div>
  );
};

export default ShinyText;
