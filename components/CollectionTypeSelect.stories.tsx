import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/CollectionTypeSelect";
import { userEvent, within, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { CollectionType } from "@/lib/collection";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  useCollectionData,
  useMutateCollectionType,
} from "@/hooks/use-collection";
import { useIsFetching } from "@tanstack/react-query";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
  parameters: {
    controls: { exclude: ["collection_type"] },
  },
};

export default meta;
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const selectEl = canvas.getByRole("combobox");
  const select = within(selectEl);

  await expect(select.getByText("看过")).toBeVisible();

  await userEvent.click(selectEl);
  const listbox = within(screen.getByRole("listbox"));
  await expect(listbox.getByText("在看")).toBeVisible();

  await userEvent.dblClick(listbox.getByRole("option", { name: "在看" }));

  await expect(select.getByText("在看")).toBeVisible();

  await userEvent.click(selectEl);
};

export const CollectionTypeSelect: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
  parameters: {
    layout: "centered",
  },
  play,
};

export const CollectionTypeSelect_Edge: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
  play,
};

export const CollectionTypeSelect_Dev = () => {
  const collectionData = useCollectionData(302286);
  const isFetching = useIsFetching();
  const mutateCollectionType = useMutateCollectionType();

  return (
    <>
      {collectionData && !isFetching && (
        <>
          <ReactQueryDevtools initialIsOpen={true} panelPosition={"right"} />
          <div className="flex h-full w-full items-center justify-center py-80">
            <CollectionTypeSelectComponent
              collection_type={collectionData.type as CollectionType}
              color={"accent"}
              handleSelect={mutateCollectionType}
            />
          </div>
        </>
      )}
    </>
  );
};
