const Flights = ({
  width = "32",
  height = "32",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      height={height}
      viewBox="0 0 32 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m14.52 17.213c.542.309.73.999.42 1.541l-4.056 7.098h1.25c.036 0 .071-.016.095-.043l7.314-8.359c.411-.469 1.124-.517 1.594-.106s.517 1.124.106 1.594l-7.314 8.359c-.453.518-1.107.814-1.795.814h-2.115c-.626 0-1.205-.333-1.52-.875s-.317-1.21-.006-1.754l4.485-7.849c.309-.542.999-.73 1.541-.42z"></path>
      <path d="m1.77 9.966c.214-.274.542-.434.89-.434h3.766c.378 0 .73.189.94.503l2.176 3.263h16.971c2.704 0 4.896 2.192 4.896 4.896 0 2.01-1.63 3.64-3.64 3.64h-9.573c-.624 0-1.129-.506-1.129-1.129s.506-1.129 1.129-1.129h9.573c.763 0 1.381-.619 1.381-1.381 0-1.456-1.181-2.637-2.637-2.637h-17.576c-.378 0-.73-.189-.94-.503l-2.176-3.263h-1.715l.905 3.618c.096.385-.017.792-.297 1.073l-.335.335 2.306 1.73c.891.668 1.975 1.03 3.089 1.03h2.75c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.75c-1.603 0-3.162-.52-4.444-1.481l-3.348-2.511c-.262-.196-.426-.497-.449-.823s.096-.647.328-.879l.803-.803-1.1-4.401c-.084-.337-.009-.695.205-.969z"></path>
      <path d="m9.598 6.641c.314-.542.893-.875 1.52-.875h2.115c.688 0 1.342.297 1.795.814l6.216 7.104c.411.469.363 1.183-.106 1.594s-1.183.363-1.594-.106l-6.216-7.104c-.024-.027-.059-.043-.095-.043h-1.25l3.339 5.843c.309.542.121 1.232-.42 1.541s-1.231.121-1.541-.42l-3.768-6.593c-.311-.544-.309-1.212.006-1.754z"></path>
    </svg>
  );
};

export default Flights;