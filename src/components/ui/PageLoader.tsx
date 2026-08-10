function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="size-2 animate-pulse rounded-full bg-neutral-950" />
        <span className="size-2 animate-pulse rounded-full bg-neutral-950 [animation-delay:150ms]" />
        <span className="size-2 animate-pulse rounded-full bg-neutral-950 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default PageLoader;
