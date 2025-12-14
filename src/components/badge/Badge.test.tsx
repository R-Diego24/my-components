import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children correctly", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies default variant (solid)", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveClass("bg-slate-100");
  });

  it("applies solid state variants", () => {
    const { rerender } = render(<Badge state="primary">Primary</Badge>);
    expect(screen.getByText("Primary")).toHaveClass("bg-primary");

    rerender(<Badge state="success">Success</Badge>);
    expect(screen.getByText("Success")).toHaveClass("bg-green-500");

    rerender(<Badge state="error">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("bg-red-500");

    rerender(<Badge state="warning">Warning</Badge>);
    expect(screen.getByText("Warning")).toHaveClass("bg-yellow-500");
  });

  it("applies outline variant", () => {
    render(<Badge variant="outline" state="primary">Outline</Badge>);
    const badge = screen.getByText("Outline");
    expect(badge).toHaveClass("border-primary");
    expect(badge).toHaveClass("bg-transparent");
  });

  it("applies size variants", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small")).toHaveClass("text-xs");

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText("Medium")).toHaveClass("text-sm");

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("text-base");
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });
});
