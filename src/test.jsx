import React from "react";
import ReactDom from "react-dom";

const Table = props => {
  return <div>{props.columns.accessFunc(props.data)}</div>;
};
const InlineComponent = props => {
  return (
    <Table
      data={{
        name: "myName"
      }}
      columns={{
        accessFunc: data => <React.Fragment>{data.name}</React.Fragment>
      }}
    />
  );
};
ReactDom.render(<InlineComponent />, document.getElementById("app"));
