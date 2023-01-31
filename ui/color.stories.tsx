import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Color",
};

export default meta;

export const Color: StoryObj = {
  render: () => (
    <div className="flex flex-col items-end space-y-4">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-primary-11">primary</span>
        <div className="h-5 w-5 rounded bg-primary-1" />
        <div className="h-5 w-5 rounded bg-primary-2" />
        <div className="h-5 w-5 rounded bg-primary-3" />
        <div className="h-5 w-5 rounded bg-primary-4" />
        <div className="h-5 w-5 rounded bg-primary-5" />
        <div className="h-5 w-5 rounded bg-primary-6" />
        <div className="h-5 w-5 rounded bg-primary-7" />
        <div className="h-5 w-5 rounded bg-primary-8" />
        <div className="h-5 w-5 rounded bg-primary-9" />
        <div className="h-5 w-5 rounded bg-primary-10" />
        <div className="h-5 w-5 rounded bg-primary-11" />
        <div className="h-5 w-5 rounded bg-primary-12" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-accent-11">accent</span>
        <div className="h-5 w-5 rounded bg-accent-1" />
        <div className="h-5 w-5 rounded bg-accent-2" />
        <div className="h-5 w-5 rounded bg-accent-3" />
        <div className="h-5 w-5 rounded bg-accent-4" />
        <div className="h-5 w-5 rounded bg-accent-5" />
        <div className="h-5 w-5 rounded bg-accent-6" />
        <div className="h-5 w-5 rounded bg-accent-7" />
        <div className="h-5 w-5 rounded bg-accent-8" />
        <div className="h-5 w-5 rounded bg-accent-9" />
        <div className="h-5 w-5 rounded bg-accent-10" />
        <div className="h-5 w-5 rounded bg-accent-11" />
        <div className="h-5 w-5 rounded bg-accent-12" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-neutral-11">neutral</span>
        <div className="h-5 w-5 rounded bg-neutral-1" />
        <div className="h-5 w-5 rounded bg-neutral-2" />
        <div className="h-5 w-5 rounded bg-neutral-3" />
        <div className="h-5 w-5 rounded bg-neutral-4" />
        <div className="h-5 w-5 rounded bg-neutral-5" />
        <div className="h-5 w-5 rounded bg-neutral-6" />
        <div className="h-5 w-5 rounded bg-neutral-7" />
        <div className="h-5 w-5 rounded bg-neutral-8" />
        <div className="h-5 w-5 rounded bg-neutral-9" />
        <div className="h-5 w-5 rounded bg-neutral-10" />
        <div className="h-5 w-5 rounded bg-neutral-11" />
        <div className="h-5 w-5 rounded bg-neutral-12" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-success-11">success</span>
        <div className="h-5 w-5 rounded bg-success-1" />
        <div className="h-5 w-5 rounded bg-success-2" />
        <div className="h-5 w-5 rounded bg-success-3" />
        <div className="h-5 w-5 rounded bg-success-4" />
        <div className="h-5 w-5 rounded bg-success-5" />
        <div className="h-5 w-5 rounded bg-success-6" />
        <div className="h-5 w-5 rounded bg-success-7" />
        <div className="h-5 w-5 rounded bg-success-8" />
        <div className="h-5 w-5 rounded bg-success-9" />
        <div className="h-5 w-5 rounded bg-success-10" />
        <div className="h-5 w-5 rounded bg-success-11" />
        <div className="h-5 w-5 rounded bg-success-12" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-error-11">error</span>
        <div className="h-5 w-5 rounded bg-error-1" />
        <div className="h-5 w-5 rounded bg-error-2" />
        <div className="h-5 w-5 rounded bg-error-3" />
        <div className="h-5 w-5 rounded bg-error-4" />
        <div className="h-5 w-5 rounded bg-error-5" />
        <div className="h-5 w-5 rounded bg-error-6" />
        <div className="h-5 w-5 rounded bg-error-7" />
        <div className="h-5 w-5 rounded bg-error-8" />
        <div className="h-5 w-5 rounded bg-error-9" />
        <div className="h-5 w-5 rounded bg-error-10" />
        <div className="h-5 w-5 rounded bg-error-11" />
        <div className="h-5 w-5 rounded bg-error-12" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-info-11">info</span>
        <div className="h-5 w-5 rounded bg-info-1" />
        <div className="h-5 w-5 rounded bg-info-2" />
        <div className="h-5 w-5 rounded bg-info-3" />
        <div className="h-5 w-5 rounded bg-info-4" />
        <div className="h-5 w-5 rounded bg-info-5" />
        <div className="h-5 w-5 rounded bg-info-6" />
        <div className="h-5 w-5 rounded bg-info-7" />
        <div className="h-5 w-5 rounded bg-info-8" />
        <div className="h-5 w-5 rounded bg-info-9" />
        <div className="h-5 w-5 rounded bg-info-10" />
        <div className="h-5 w-5 rounded bg-info-11" />
        <div className="h-5 w-5 rounded bg-info-12" />
      </div>
    </div>
  ),
};
