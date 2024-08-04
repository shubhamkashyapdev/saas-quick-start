import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const FeatureCard = ({ description, icon, title }: Props) => {
  return (
    <div className="flex flex-col lg:border-r py-10 relative group lg:border-l lg:border-b dark:border-neutral-800">
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-foreground max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
