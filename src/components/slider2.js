import { Slider } from "@material-ui/core";
const Slider2 = ({ info }) => {
  console.log("info", info);
  return (
    <>
      {/* <Slider value={info.close} max={info.high} min={info.open} /> */}
      {
        <Slider
          // key={`slider-${info.open}`} /* fixed issue */
          defaultValue={info.close}
          // step={0.0001}
          max={info.high}
          min={info.low}
          marks
          valueLabelDisplay={"auto"}
          // increase
          render
          performance
        />
      }
    </>
  );
};

export default Slider2;
