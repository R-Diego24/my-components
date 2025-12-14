import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("renders children correctly", () => {
    render(<Title>Hello World</Title>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as h1 by default", () => {
    render(<Title>Heading</Title>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders correct heading level with headingLevel prop", () => {
    const { rerender } = render(<Title headingLevel={1}>H1</Title>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

    rerender(<Title headingLevel={2}>H2</Title>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    rerender(<Title headingLevel={3}>H3</Title>);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();

    rerender(<Title headingLevel={4}>H4</Title>);
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();

    rerender(<Title headingLevel={5}>H5</Title>);
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument();

    rerender(<Title headingLevel={6}>H6</Title>);
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });

  it("applies variant styles correctly", () => {
    const { rerender } = render(<Title variant="h1">H1 Style</Title>);
    expect(screen.getByText("H1 Style")).toHaveClass("text-4xl", "font-bold");

    rerender(<Title variant="h2">H2 Style</Title>);
    expect(screen.getByText("H2 Style")).toHaveClass("text-3xl", "font-bold");

    rerender(<Title variant="h3">H3 Style</Title>);
    expect(screen.getByText("H3 Style")).toHaveClass("text-2xl", "font-semibold");

    rerender(<Title variant="subtitle">Subtitle</Title>);
    expect(screen.getByText("Subtitle")).toHaveClass("text-lg", "text-slate-500");
  });

  it("renders subtitle as paragraph", () => {
    render(<Title variant="subtitle">Subtitle Text</Title>);
    expect(screen.getByText("Subtitle Text").tagName).toBe("P");
  });

  it("uses headingLevel for tag but variant for style", () => {
    render(<Title headingLevel={2} variant="h1">Styled H2</Title>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("text-4xl"); // h1 style
  });

  it("applies custom className", () => {
    render(<Title className="custom-class">Custom</Title>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });
});
