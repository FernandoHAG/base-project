import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskItem } from "../components/molecules/TaskItem/TaskItem";

const mockTask = { id: "1", name: "Teste", completed: false };

test("TaskItem renders correctly and calls onToggle", () => {
  const onToggle = jest.fn();
  render(<TaskItem task={mockTask} onToggle={onToggle} />);
  const checkbox = screen.getByRole("checkbox");
  expect(screen.getByText("Teste")).toBeInTheDocument();
  fireEvent.click(checkbox);
  expect(onToggle).toHaveBeenCalledWith("1");
});
