type Props = {
  onToggleLights: () => void;
};

const LightToggle = ({ onToggleLights }: Props) => {
  return <button onClick={onToggleLights}>LightToggle</button>;
};

export default LightToggle;
