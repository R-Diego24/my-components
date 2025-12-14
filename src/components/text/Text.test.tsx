import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders children correctly", () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as paragraph by default", () => {
    render(<Text>Paragraph</Text>);
    expect(screen.getByText("Paragraph").tagName).toBe("P");
  });

  it("renders as different elements with 'as' prop", () => {
    const { rerender } = render(<Text as="span">Span</Text>);
    expect(screen.getByText("Span").tagName).toBe("SPAN");

    rerender(<Text as="div">Div</Text>);
    expect(screen.getByText("Div").tagName).toBe("DIV");

    rerender(<Text as="label">Label</Text>);
    expect(screen.getByText("Label").tagName).toBe("LABEL");
  });

  it("applies size variants", () => {
    const { rerender } = render(<Text size="xs">Extra Small</Text>);
    expect(screen.getByText("Extra Small")).toHaveClass("text-xs");

    rerender(<Text size="sm">Small</Text>);
    expect(screen.getByText("Small")).toHaveClass("text-sm");

    rerender(<Text size="md">Medium</Text>);
    expect(screen.getByText("Medium")).toHaveClass("text-base");

    rerender(<Text size="lg">Large</Text>);
    expect(screen.getByText("Large")).toHaveClass("text-lg");

    rerender(<Text size="xl">Extra Large</Text>);
    expect(screen.getByText("Extra Large")).toHaveClass("text-xl");
  });

  it("applies weight variants", () => {
    const { rerender } = render(<Text weight="normal">Normal</Text>);
    expect(screen.getByText("Normal")).toHaveClass("font-normal");

    rerender(<Text weight="medium">Medium</Text>);
    expect(screen.getByText("Medium")).toHaveClass("font-medium");

    rerender(<Text weight="semibold">Semibold</Text>);
    expect(screen.getByText("Semibold")).toHaveClass("font-semibold");

    rerender(<Text weight="bold">Bold</Text>);
    expect(screen.getByText("Bold")).toHaveClass("font-bold");
  });

  it("applies color variants", () => {
    const { rerender } = render(<Text textColor="default">Default</Text>);
    expect(screen.getByText("Default")).toHaveClass("text-slate-900");

    rerender(<Text textColor="muted">Muted</Text>);
    expect(screen.getByText("Muted")).toHaveClass("text-slate-500");

    rerender(<Text textColor="primary">Primary</Text>);
    expect(screen.getByText("Primary")).toHaveClass("text-primary");

    rerender(<Text textColor="error">Error</Text>);
    expect(screen.getByText("Error")).toHaveClass("text-red-600");
  });

  it("applies alignment variants", () => {
    const { rerender } = render(<Text align="left">Left</Text>);
    expect(screen.getByText("Left")).toHaveClass("text-left");

    rerender(<Text align="center">Center</Text>);
    expect(screen.getByText("Center")).toHaveClass("text-center");

    rerender(<Text align="right">Right</Text>);
    expect(screen.getByText("Right")).toHaveClass("text-right");
  });

  it("applies custom className", () => {
    render(<Text className="custom-class">Custom</Text>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });
});
