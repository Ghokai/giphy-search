import React from "react";
import { Alert } from "antd";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  text
}: ErrorMessageProps): React.ReactElement => {
  return (
    <div className="error-message">
      <Alert message="Error!" description={text} type="error" showIcon />
    </div>
  );
};

export default ErrorMessage;
