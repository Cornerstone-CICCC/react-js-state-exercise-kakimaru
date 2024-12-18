type Props = {
  onCount: () => void;
};

const ClickCounter = ({ onCount }: Props) => {
  return <button onClick={onCount}>Click Counter</button>;
};

export default ClickCounter;
