"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type LiquidCommerceExampleProps = {
  children?: ReactNode;
};

const Example: FC<LiquidCommerceExampleProps> = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primary-900 p-4">
      <div className="flex items-center">
        <Image src="/images/liquid-icon-white.svg" alt="LiquidCommerce Logo" width={100} height={100} className="h-20 w-full max-w-xs" />
        <span className="mx-5 text-xl text-white">x</span>
        <Image src="/images/nextjs-logo.svg" alt="Next.js Logo" width={100} height={100} className="h-20 w-full max-w-xs" />
      </div>
      <h1 className="mt-4 text-center text-4xl font-bold text-white">LiquidCommerce</h1>
      <p className="mt-4 text-center text-lg text-primary-300">{t("liquidCommerce")}</p>
      <Button asChild className="mt-6">
        <Link href="/home">Go Next</Link>
      </Button>
      {children ?? null}
    </div>
  );
};

export default Example;
