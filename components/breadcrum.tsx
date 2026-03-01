import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div
      className="w-full py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-[#2e6fd4]"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
          {title}
        </h1>

        {/* Breadcrumb trail */}
        <nav className="flex items-center gap-2 text-sm flex-wrap mt-2">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index < items.length - 1 ? (
                <>
                  <Link
                    href={item.href || "#"}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  <span className="text-white/40">/</span>
                </>
              ) : (
                <span className="font-semibold" style={{ color: "#fbbf24" }}>
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
