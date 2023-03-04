import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { waitFor, within, screen, userEvent } from "@storybook/testing-library";
import { PanelDecorator, ReactQueryDevtoolsDecorator } from "@/ui/Storybook";
import { SecondaryButton } from "@/ui/primitive/Button";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useReducerAtom } from "jotai/utils";

const meta: Meta = {
  title: "Panel",
  decorators: [ReactQueryDevtoolsDecorator, PanelDecorator],
  args: {
    target_id: 302286,
  },
  render: ({ target_id }) => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    return (
      <SecondaryButton
        data-testid="open-panel"
        onClick={() => {
          dispatch({
            type: "push",
            value: { type: "subject", target_id: target_id as number },
          });
        }}
      >
        Open panel
      </SecondaryButton>
    );
  },
};

export default meta;

type Story = StoryObj<{ target_id: number }>;

export const SubjectPanel_: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("open-panel"));

    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getByText(/或是偶然，或是必然/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const CharacterListPanel_: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SubjectPanel_.play({ canvasElement });

    const panel = await screen.findByRole("dialog");
    await userEvent.click(
      within(panel).getByRole("button", { name: "显示全部角色" })
    );
    await waitFor(
      () => {
        expect(within(panel).getByText(/黑崎一护/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};
//
export const EPListPanel_: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SubjectPanel_.play({ canvasElement });

    const panel = await screen.findByRole("dialog");
    await userEvent.click(
      within(panel).getByRole("button", { name: "显示全部剧集" })
    );
    await waitFor(
      () => {
        expect(within(panel).getByText(/万物无雨 六月的真相/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const PersonListPanel_: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SubjectPanel_.play({ canvasElement });

    const panel = await screen.findByRole("dialog");
    await userEvent.click(
      within(panel).getByRole("button", { name: "显示全部制作人员" })
    );
    await waitFor(
      () => {
        expect(within(panel).getAllByText(/久保带人/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const SubjectListPanel: Story = {
  args: {
    target_id: 265,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("open-panel"));

    const panel = await screen.findByRole("dialog");

    await userEvent.click(
      within(panel).getByRole("button", { name: "显示全部相关条目" })
    );
    await waitFor(
      () => {
        expect(within(panel).getByText(/EVANGELION FINALLY/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const SubjectListPanel_NoMore: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SubjectPanel_.play({ canvasElement });

    const panel = await screen.findByRole("dialog");

    expect(
      within(panel).queryByRole("button", { name: "显示全部相关条目" })
    ).not.toBeInTheDocument();
  },
};
