import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Img } from "./Img";

describe("Img", () => {
  const defaultProps = {
    src: "https://example.com/image.jpg",
    alt: "Test image",
  };

  it("renders with required alt text", () => {
    render(<Img {...defaultProps} />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Test image");
  });

  it("applies lazy loading by default", () => {
    render(<Img {...defaultProps} />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("can disable lazy loading", () => {
    render(<Img {...defaultProps} loading="eager" />);
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
  });

  it("handles decorative images correctly", () => {
    render(<Img {...defaultProps} decorative />);
    const img = screen.getByRole("presentation", { hidden: true });
    expect(img).toHaveAttribute("alt", "");
    expect(img).toHaveAttribute("aria-hidden", "true");
  });

  it("applies rounded variants", () => {
    const { rerender } = render(<Img {...defaultProps} rounded="none" />);
    expect(screen.getByRole("img")).toHaveClass("rounded-none");

    rerender(<Img {...defaultProps} rounded="md" />);
    expect(screen.getByRole("img")).toHaveClass("rounded-md");

    rerender(<Img {...defaultProps} rounded="full" />);
    expect(screen.getByRole("img")).toHaveClass("rounded-full");
  });

  it("applies objectFit variants", () => {
    const { rerender } = render(<Img {...defaultProps} objectFit="cover" />);
    expect(screen.getByRole("img")).toHaveClass("object-cover");

    rerender(<Img {...defaultProps} objectFit="contain" />);
    expect(screen.getByRole("img")).toHaveClass("object-contain");
  });

  it("applies aspectRatio variants", () => {
    const { rerender } = render(<Img {...defaultProps} aspectRatio="square" />);
    expect(screen.getByRole("img")).toHaveClass("aspect-square");

    rerender(<Img {...defaultProps} aspectRatio="video" />);
    expect(screen.getByRole("img")).toHaveClass("aspect-video");
  });

  it("applies size variants", () => {
    const { rerender } = render(<Img {...defaultProps} size="sm" />);
    expect(screen.getByRole("img")).toHaveClass("w-24", "h-24");

    rerender(<Img {...defaultProps} size="lg" />);
    expect(screen.getByRole("img")).toHaveClass("w-48", "h-48");
  });

  it("applies shadow variants", () => {
    render(<Img {...defaultProps} shadow="lg" />);
    expect(screen.getByRole("img")).toHaveClass("shadow-lg");
  });

  it("uses fallback image on error", () => {
    const fallbackSrc = "https://example.com/fallback.jpg";
    render(<Img {...defaultProps} fallbackSrc={fallbackSrc} />);
    
    const img = screen.getByRole("img");
    fireEvent.error(img);
    
    expect(img).toHaveAttribute("src", fallbackSrc);
  });

  it("calls onError callback", () => {
    const onError = vi.fn();
    render(<Img {...defaultProps} onError={onError} />);
    
    fireEvent.error(screen.getByRole("img"));
    
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Img {...defaultProps} className="custom-class" />);
    expect(screen.getByRole("img")).toHaveClass("custom-class");
  });
});
