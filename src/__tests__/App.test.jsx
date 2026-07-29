import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

test('renders a component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Get started/i);
    expect(linkElement).toBeInTheDocument();
});