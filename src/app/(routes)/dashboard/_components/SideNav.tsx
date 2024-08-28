import React, { FC, useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";


const SideNav: FC = () => {

    const menuList = [
        {id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:"dashboard",
        },
        {id:2,
            name:'Incomes',
            icon:CircleDollarSign,
            path:"dashboard/budgets",
        },
        {id:3,
            name:'Dashboard',
            icon:PiggyBank,
            path:"dashboard/expenses",
        },
        {id:4,
            name:'Dashboard',
            icon:PiggyBank,
            path:"dashboard/expenses",
        },
        {id:4,
            name:'Upgrade',
            icon:LayoutGrid,
            path:"dashboard/upgrade",
        },
    ]

  return <div></div>;
};

export default SideNav;
