import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/ui/primitive/Button";
import { useDialog } from "@/hooks/use-dialog";
import { screen, userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";
import { DialogDecorator } from "@/ui/Storybook";

const meta = {
  title: "Dialog",
  decorators: [DialogDecorator],
} satisfies Meta;

export default meta;

export const Dialog_: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  handleAction: () => void;
}> = {
  args: {
    title: "问题报告",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ante eget arcu maximus eleifend. Duis mollis lorem a vehicula efficitur. Aenean ex purus, accumsan laoreet mi nec, rutrum ornare mauris. Vestibulum nulla enim, vestibulum et dictum ut, tristique ut ligula. Pellentesque elementum tristique ullamcorper. Nulla imperdiet a nisi eget luctus. Morbi tincidunt nisi ac tellus imperdiet, a rhoncus lectus iaculis. In justo tortor, posuere sit amet dolor sed, finibus bibendum justo. Morbi eleifend sem a eleifend egestas. Suspendisse eu fringilla libero, non venenatis urna. In quam dui, viverra id blandit vel, tristique sed enim. Duis aliquet quam sit amet sem dapibus semper.\n" +
      "\n" +
      "Nunc lectus est, facilisis sed libero vel, aliquam vestibulum lorem. Etiam molestie, leo vitae facilisis vulputate, enim leo tincidunt nisl, ac sollicitudin ex tortor a nunc. Sed in ullamcorper quam. Curabitur fringilla at lectus sit amet finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim tincidunt felis, vitae eleifend nulla. Phasellus venenatis finibus leo, quis maximus ligula aliquam scelerisque. Nulla faucibus euismod mauris, at tempus diam consequat ut. Nulla id lacus et lectus sollicitudin sollicitudin. Proin efficitur sed mi eget posuere. Nunc tincidunt tortor nec est accumsan, non dignissim lacus volutpat. Praesent eu lobortis nulla. Fusce dignissim dictum turpis. Sed accumsan nec urna ac gravida.\n" +
      "\n" +
      "Ut imperdiet enim euismod mi sollicitudin congue. Fusce maximus euismod posuere. Quisque lorem leo, tincidunt eget turpis eu, egestas pretium dui. Aenean pharetra fringilla odio ut luctus. Aliquam eleifend orci ullamcorper porta tincidunt. Duis non viverra felis. Aenean sed ultrices ex. Suspendisse at nulla sit amet sem maximus pharetra eu quis augue. Integer lobortis eget dui in posuere. Etiam tincidunt tristique dui ut maximus. In sed volutpat libero. Nulla ac lobortis tellus, non pellentesque ligula.\n" +
      "\n" +
      "Morbi et turpis justo. Mauris accumsan a ipsum a hendrerit. Mauris bibendum ante ornare nisi iaculis accumsan. Morbi ullamcorper nisl nec elit aliquet, vel interdum diam malesuada. Curabitur sed leo nec nunc pellentesque placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse quam nisl, malesuada ac egestas eget, congue placerat est. Integer scelerisque sem commodo, varius enim ut, ultrices lacus. Etiam risus felis, auctor ut neque quis, ullamcorper pharetra ligula.\n" +
      "\n" +
      "Nam egestas leo dolor, sit amet semper dolor vehicula quis. Pellentesque ultrices at augue ut rutrum. Nullam ornare nunc id leo vestibulum vestibulum. Vestibulum ornare malesuada ligula, a blandit arcu sodales nec. Suspendisse potenti. Vivamus porttitor ultrices mauris, nec aliquet eros hendrerit non. Quisque malesuada lorem in ligula malesuada, non tristique justo aliquam. Curabitur eu erat consectetur ipsum mollis euismod. In blandit nibh arcu, ut viverra nulla sodales sed.\n" +
      "\n" +
      "Maecenas tristique, nisi ut scelerisque mollis, risus lacus sagittis leo, sed sodales diam tortor vel nulla. Sed sagittis quis est quis pulvinar. Ut blandit ultricies lorem. Nullam commodo tempus venenatis. Proin justo ante, consequat nec felis id, vehicula mollis odio. Maecenas efficitur aliquam nibh, at ultricies ligula lobortis ut. Cras ut tellus feugiat, volutpat lacus vel, suscipit elit. In hac habitasse platea dictumst. Mauris in molestie nisi, at porttitor risus. Nulla placerat fringilla sagittis. Vivamus sagittis imperdiet tellus nec semper. Fusce sed egestas nisi, sed feugiat urna. Mauris sapien odio, consequat at magna sit amet, imperdiet euismod mi. Nam rhoncus tellus id hendrerit suscipit.\n" +
      "\n" +
      "Morbi feugiat euismod mi, et ornare ligula vulputate ac. Suspendisse pretium odio ex, vel congue tortor viverra at. Phasellus non elit in lorem hendrerit viverra. Ut in ex consectetur, cursus ligula non, dictum urna. Praesent pulvinar est non sem convallis porta nec a eros. Mauris risus libero, suscipit vel dapibus vel, porttitor sit amet nunc. Morbi dapibus nulla eu accumsan malesuada. Proin in pulvinar tortor. Pellentesque eget velit neque. Morbi at blandit nisi. Cras imperdiet consectetur velit. Praesent posuere rhoncus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n" +
      "\n" +
      "Proin sed luctus leo. Pellentesque quis dolor est. Sed urna mauris, efficitur sed tellus quis, ultrices ultrices eros. Curabitur dapibus odio eu nisi mollis, id dignissim ipsum dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula urna, consectetur sagittis finibus eget, semper ac tellus. Fusce posuere, metus non suscipit faucibus, ex metus semper magna, in venenatis libero libero vel ex. Proin commodo dolor sapien, vitae ullamcorper velit efficitur ut. Aenean aliquam nulla efficitur, hendrerit odio at, cursus nulla. Vivamus tristique est nulla. Pellentesque hendrerit commodo dolor eu tempus. Aenean dignissim, felis at ultrices porttitor, tellus odio tempor sapien, at efficitur nunc felis finibus urna. Nulla facilisi.",
    actionLabel: "提交 issue",
    handleAction: action("action"),
  },

  render: ({ title, description, actionLabel, handleAction }) => {
    const dialog = useDialog();
    return (
      <Button
        variant={{
          type: "secondary",
        }}
        onClick={() =>
          dialog({
            title: title,
            description: description,
            action: {
              label: actionLabel,
              onClick: handleAction,
            },
          })
        }
      >
        Open Dialog
      </Button>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Dialog" }));

    const dialog = await screen.findByRole("dialog");
    const dialogContent = within(dialog);
    expect(dialogContent.getByText(args.title));
    expect(dialogContent.getByText(args.actionLabel));

    await userEvent.click(
      dialogContent.getByRole("button", { name: args.actionLabel })
    );

    expect(args.handleAction).toHaveBeenCalledTimes(1);
  },
};
