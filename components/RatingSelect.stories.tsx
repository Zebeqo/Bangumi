import type { Meta, StoryObj } from "@storybook/react";
import type { Rating } from "@/components/RatingSelect";
import { RatingSelect as RatingSelectComponent } from "@/components/RatingSelect";
import { userEvent, within, screen } from "@storybook/testing-library";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useCollectionData, useMutateRating } from "@/hooks/use-collection";
import { useIsFetching } from "@tanstack/react-query";

const meta: Meta<typeof RatingSelectComponent> = {
  title: "RatingSelect",
  component: RatingSelectComponent,
  parameters: {
    controls: { exclude: ["rating"] },
  },
};

export default meta;
type Story = StoryObj<typeof RatingSelectComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("combobox"));
  await screen.findByRole("listbox");
};

export const RatingSelect: Story = {
  args: {
    rating: 0,
    color: "accent",
  },
  parameters: {
    layout: "centered",
  },
  play,
};

export const RatingSelect_Edge: Story = {
  args: {
    rating: 7,
    color: "accent",
  },
  play,
};

export const RatingSelect_Dev = () => {
  const collectionData = useCollectionData(302286);
  const isFetching = useIsFetching();
  const mutateRating = useMutateRating();

  return (
    <>
      {collectionData && !isFetching && (
        <>
          <ReactQueryDevtools initialIsOpen={true} panelPosition={"right"} />
          <div className="flex h-full w-full items-center justify-center py-80">
            <RatingSelectComponent
              rating={collectionData.rate as Rating}
              color={"accent"}
              handleSelect={mutateRating}
            />
          </div>
        </>
      )}
    </>
  );
};
