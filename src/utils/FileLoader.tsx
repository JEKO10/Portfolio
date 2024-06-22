import React from "react";
import loader from "../assets/images/other/loading.png";

import { FileLoader as Container } from "../assets/style/Files.style";

type FileLoaderProps = {
  top: number;
  left: number;
};

const FileLoader: React.FC<FileLoaderProps> = ({ top, left }) => {
  return (
    <Container top={top} left={left}>
      <img src={loader} alt="loader" />
    </Container>
  );
};

export default FileLoader;
