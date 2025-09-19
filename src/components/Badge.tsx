const Badge = ({ name, from, link }: BadgeProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl bg-gradient-to-b from-royal to-lavender p-[1.5px] hover:scale-[1.03] transition-transform"
    >
      <div className="rounded-xl bg-primary px-4 py-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-lavender group-hover:text-aqua transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <h4 className="text-sm font-medium">{name}</h4>
        </div>

        <p className="text-neutral-300 text-xs">
          From {from}
        </p>

        <span className="text-aqua text-[0.7rem] mt-0.5 group-hover:underline">
          View →
        </span>
      </div>
    </a>
  );
};

interface BadgeProps {
  name: string;
  from: string;
  link: string;
}

export default Badge;