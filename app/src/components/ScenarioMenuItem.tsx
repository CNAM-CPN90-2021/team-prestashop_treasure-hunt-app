import "./ScenarioMenuItem.css";

interface ContainerProps {
  titre: string;
}

const ScenarioMenuItem: React.FC<ContainerProps> = ({ titre }) => {
  return (
    <div>
      <strong>{titre}</strong>
    </div>
  );
};

export default ScenarioMenuItem;
