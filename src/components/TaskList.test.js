import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { WithPinnedTasks } from "./TaskList.stories"; //👈  Our story imported here

it("renders pinned tasks at the start of the list", () => {
  //👇 Story's args used with our test
  render(<WithPinnedTasks {...WithPinnedTasks.args} />);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  // eslint-disable-next-line testing-library/no-node-access
  const lastTaskInput = document.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );

  expect(lastTaskInput).not.toBe(null);
});
