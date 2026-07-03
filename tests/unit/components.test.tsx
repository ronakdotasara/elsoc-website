import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { Avatar } from "@/components/ui/avatar";

describe("Button", () => {
  it("renders children and honours disabled state", () => {
    render(<Button disabled>Register Now</Button>);
    const button = screen.getByRole("button", { name: "Register Now" });
    expect(button).toBeDisabled();
  });

  it("renders as a child element with asChild", () => {
    render(
      <Button asChild>
        <a href="/sparkathon">Sparkathon</a>
      </Button>,
    );
    expect(screen.getByRole("link", { name: "Sparkathon" })).toHaveAttribute(
      "href",
      "/sparkathon",
    );
  });
});

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge variant="volt">UPCOMING</Badge>);
    expect(screen.getByText("UPCOMING")).toBeInTheDocument();
  });
});

describe("PlaceholderMedia", () => {
  it("is exposed to assistive tech as a labelled image", () => {
    render(<PlaceholderMedia label="UAV Workshop" />);
    expect(
      screen.getByRole("img", { name: /UAV Workshop — image coming soon/i }),
    ).toBeInTheDocument();
  });
});

describe("Avatar", () => {
  it("falls back to initials when no photo is provided", () => {
    render(<Avatar name="Kuldeep Bhakar" src={null} />);
    expect(screen.getByRole("img", { name: "Kuldeep Bhakar" })).toHaveTextContent("KB");
  });
});
