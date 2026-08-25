import { useTooltip } from "../../hooks/useTooltip";
import { useCarsViewModel } from "../../hooks/useCarsViewModel";
import { getHeaders } from "../../utils/headers";
import { Layout, Header, Tooltip } from "./styled";
import Collector from "../Common/collector";
import CarExpander from "./carExpander";

function B2C({ plates, setPlates }) {

  const { hovered, setHovered } = useTooltip();

  const carsViewModel = useCarsViewModel(plates);

  const header = getHeaders(carsViewModel);

  return (
    <>
      <Collector setPlates={setPlates} />
      <Layout>
        <>
          {header.map((key) => (
            <Header key={key}>{key.toUpperCase()}</Header>
          ))}
        </>
        <CarExpander
          carsViewModel={carsViewModel}
          setHovered={setHovered}
        />
        <>
          {hovered.value !== undefined && (
            <Tooltip x={hovered.x} y={hovered.y}>
              {hovered.value}
            </Tooltip>
          )}
        </>
      </Layout>
    </>
  );
}
export default B2C;
