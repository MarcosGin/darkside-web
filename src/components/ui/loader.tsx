import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

export const Loader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex items-center justify-center py-10", className)}
      {...props}
    >
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
};
