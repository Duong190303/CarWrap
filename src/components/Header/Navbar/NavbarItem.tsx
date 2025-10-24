// "use client";

// import React from "react";
// import Link from "next/link";
// import { Box, Text, Menu, rem } from "@mantine/core";
// import { IconChevronDown } from "@tabler/icons-react";
// import { motion } from "framer-motion";

// export type NavigationType = {
//   id: string | number;
//   label: string;
//   href: string;
//   active?: boolean;
//   subNavigation?: NavigationType[];
//   children?: NavigationType[];
// };

// export const NavItem: React.FC<{
//   item: NavigationType;
//   currentPath?: string | null;   // usePathname()
//   currentHash?: string;          // "#contact_us"
//   activeHref?: string;           // href đang active tạm thời
//   onActivate?: (href: string) => void; // gọi khi click để set active ngay
// }> = ({ item, currentPath, currentHash, activeHref, onActivate }) => {
//   // --- detect active theo route/hash ---
//   const isHashLink = item.href.startsWith("/#");
//   const hashFromHref = isHashLink ? item.href.replace("/", "") : "";
//   const isActiveByHash = isHashLink && currentHash === hashFromHref;

//   const isActiveByPath =
//     !isHashLink &&
//     item.href !== "/#" &&
//     currentPath &&
//     (currentPath === item.href || currentPath.startsWith(item.href + "/"));

//   const isActive = Boolean(item.active || isActiveByHash || isActiveByPath);
//   const isOptimisticActive = activeHref === item.href;

//   // underline states
//   const [hovered, setHovered] = React.useState(false);
//   const [menuOpened, setMenuOpened] = React.useState(false);
//   const showLine = hovered || isActive || menuOpened || isOptimisticActive;

//   // ---- Dropdown ----
//   if (item.children && item.children.length > 0) {
//     return (
//       <Menu
//         trigger="hover"
//         openDelay={80}
//         closeDelay={120}
//         onOpen={() => setMenuOpened(true)}
//         onClose={() => setMenuOpened(false)}
//         transitionProps={{ duration: 120 }}
//         position="bottom-start"
//         offset={6}
//         width={260}
//         shadow="md"
//       >
//         <Menu.Target>
//           <Box
//             component="button"
//             type="button"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             style={{
//               background: "transparent",
//               border: 0,
//               cursor: "pointer",
//               position: "relative",
//               paddingBottom: rem(8),
//               display: "flex",
//               alignItems: "center",
//               gap: 6,
//             }}
//           >
//             <Text
//               fw={700}
//               size="sm"
//               c={isActive || isOptimisticActive ? "dark.9" : "dark.6"}
//               tt="uppercase"
//               style={{ letterSpacing: 0.6 }}
//             >
//               {item.label}
//             </Text>
//             <IconChevronDown size={16} stroke={2} color="var(--mantine-color-dark-4)" />
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: showLine ? 1 : 0 }}
//               transition={{ duration: 0.22, ease: "easeOut" }}
//               style={{
//                 position: "absolute",
//                 left: 0, right: 0, bottom: 0, height: 2,
//                 background: "var(--mantine-color-dark-9)",
//                 transformOrigin: "center",
//               }}
//             />
//           </Box>
//         </Menu.Target>

//         <Menu.Dropdown p={0} style={{ overflow: "hidden", borderRadius: 6 }}>
//           {item.children.map((c) => (
//             <Menu.Item
//               key={c.id}
//               component={Link}
//               href={c.href}
//               onClick={() => onActivate?.(c.href)}   
//               style={{
//                 textTransform: "uppercase",
//                 fontWeight: 700,
//                 fontSize: rem(12),
//                 letterSpacing: 0.5,
//                 padding: "14px 18px",
//               }}
//             >
//               {c.label}
//             </Menu.Item>
//           ))}
//         </Menu.Dropdown>
//       </Menu>
//     );
//   }

//   // ---- Link thường ----
//   return (
//     <Box
//       component={Link}
//       href={item.href}
//       onClick={() => onActivate?.(item.href)}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         textDecoration: "none",
//         position: "relative",
//         paddingBottom: rem(8),
//         display: "inline-block",
//       }}
//     >
//       <Text
//         fw={700}
//         size="sm"
//         c={isActive || isOptimisticActive ? "dark.9" : "dark.6"}
//         tt="uppercase"
//         style={{ letterSpacing: 0.6, transition: "color .2s ease" }}
//       >
//         {item.label}
//       </Text>
//       <motion.div
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: showLine ? 1 : 0 }}
//         transition={{ duration: 0.22, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           left: 0, right: 0, bottom: 0, height: 2,
//           background: "var(--mantine-color-dark-9)",
//           transformOrigin: "center",
//         }}
//       />
//     </Box>
//   );
// };
"use client";

import React from "react";
import Link from "next/link";
import { Box, Text, Menu, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";

export type NavigationType = {
  id: string | number;
  label: string;
  href: string;
  active?: boolean;
  subNavigation?: NavigationType[];
  children?: NavigationType[];
};

export const NavItem: React.FC<{
  item: NavigationType;
  activeHref?: string; // <-- chỉ cần cái này
}> = ({ item, activeHref }) => {
const childMatch = item.children?.some((c) => c.href === activeHref) ?? false;
const isActive = item.href === activeHref || childMatch;

// Tùy bạn có muốn underline khi hover không:
const [hovered, setHovered] = React.useState(false);
const showLine = isActive || hovered; // có thể dùng chỉ `isActive` để không “bật về”


  if (item.children && item.children.length > 0) {
    return (
      <Menu trigger="hover" openDelay={80} closeDelay={120} transitionProps={{ duration: 120 }}
            position="bottom-start" offset={6} width={260} shadow="md">
        <Menu.Target>
          <Box
            component="button"
            type="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              position: "relative",
              paddingBottom: rem(8),
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Text
              fw={700}
              size="sm"
              c={isActive ? "dark.9" : "dark.6"}
              tt="uppercase"
              style={{ letterSpacing: 0.6 }}
            >
              {item.label}
            </Text>
            <IconChevronDown size={16} stroke={2} color="var(--mantine-color-dark-4)" />

            {showLine && (
              <motion.div
                layoutId="nav-underline"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  background: "var(--mantine-color-dark-9)",
                }}
              />
            )}
          </Box>
        </Menu.Target>

        <Menu.Dropdown p={0} style={{ overflow: "hidden", borderRadius: 6 }}>
          {item.children.map((c) => (
            <Menu.Item
              key={c.id}
              component={Link}
              href={c.href}
              style={{
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: rem(12),
                letterSpacing: 0.5,
                padding: "14px 18px",
              }}
            >
              {c.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    );
  }

  // Link thường
  return (
    <Box
      component={Link}
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none", position: "relative", paddingBottom: rem(8), display: "inline-block" }}
    >
      <Text
        fw={700}
        size="sm"
        c={isActive ? "dark.9" : "dark.6"}
        tt="uppercase"
        style={{ letterSpacing: 0.6, transition: "color .2s ease" }}
      >
        {item.label}
      </Text>

      {showLine && (
        <motion.div
          layoutId="nav-underline"
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 2,
            background: "var(--mantine-color-dark-9)",
          }}
        />
      )}
    </Box>
  );
};
