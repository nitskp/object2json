import React from "react";
import { BrandName } from "./Brand.styled";

const Brand = (props: { brandName: string | React.ReactNode }) => {
  const { brandName } = props;
  return (
    <>
      {typeof brandName === typeof "" ? (
        <BrandName>{brandName}</BrandName>
      ) : (
        brandName
      )}
    </>
  );
};

export default Brand;
