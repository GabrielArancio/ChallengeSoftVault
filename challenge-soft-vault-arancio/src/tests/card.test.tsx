import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card1 from "../app/reusableComponents/firstBoxComponent"; // adjust the import path

describe("Card1 Component", () => {
  it("renders Card1 with correct props", () => {
    const props = {
      imgSrc: "image-src",
      imgAlt: "image alt text",
      title: "Understanding needs",
      description: "Description of needs",
      aspectRatio: "aspect-[1.54]",
    };

    const { getByText, getByAltText } = render(<Card1 {...props} />);

    expect(getByAltText("image alt text")).toBeInTheDocument();
    expect(getByText("Understanding needs")).toBeInTheDocument();
    expect(getByText("Description of needs")).toBeInTheDocument();
  });
});
