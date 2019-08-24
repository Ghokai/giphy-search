import React from "react";
import { Spin } from "antd";

const Loader: React.FC = (): React.ReactElement => {
  return (
    <div className="loader-wrapper">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
