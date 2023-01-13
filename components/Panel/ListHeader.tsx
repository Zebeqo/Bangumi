export const ListHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between px-6 py-2">
      <span className="text-3xl font-medium text-neutral-12">{title}</span>
      <span className="font-medium text-neutral-11">显示全部</span>
    </div>
  );
};
