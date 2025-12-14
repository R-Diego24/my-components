import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children correctly", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders as div by default", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content").tagName).toBe("DIV");
  });

  it("renders as anchor when href is provided", () => {
    render(<Card href="/test">Link Card</Card>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("adds external link attributes", () => {
    render(<Card href="https://external.com" external>External</Card>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies variant classes", () => {
    const { rerender } = render(<Card variant="default">Default</Card>);
    expect(screen.getByText("Default")).toHaveClass("bg-white");

    rerender(<Card variant="neon">Neon</Card>);
    expect(screen.getByText("Neon")).toHaveClass("bg-slate-900");

    rerender(<Card variant="neonBlue">Neon Blue</Card>);
    expect(screen.getByText("Neon Blue")).toHaveClass("bg-slate-900");

    rerender(<Card variant="ghost">Ghost</Card>);
    expect(screen.getByText("Ghost")).toHaveClass("bg-transparent");
  });

  it("applies padding variants", () => {
    const { rerender } = render(<Card padding="none">No Padding</Card>);
    expect(screen.getByText("No Padding")).toHaveClass("p-0");

    rerender(<Card padding="sm">Small</Card>);
    expect(screen.getByText("Small")).toHaveClass("p-4");

    rerender(<Card padding="lg">Large</Card>);
    expect(screen.getByText("Large")).toHaveClass("p-8");
  });

  it("applies cursor-pointer when href is set", () => {
    render(<Card href="/test">Clickable</Card>);
    expect(screen.getByRole("link")).toHaveClass("cursor-pointer");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Custom</Card>);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });
});
