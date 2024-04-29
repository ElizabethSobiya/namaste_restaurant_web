import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err, 'err')
  return (
    <>
      <div className="error">
        <h1>Ooops something went wrong</h1>
        <br />
        <h2>
          {err.status}:{err.statusText}
        </h2>
      </div>
    </>
  );
};

export default Error;
