// "use client";

// import React, { useRef } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Text,
//   rem,
//   Anchor,
//   Stack,
//   Divider,
// } from "@mantine/core";
// import {
//   IconMapPin,
//   IconPhone,
//   IconWorld,
//   IconBuildingStore,
// } from "@tabler/icons-react";
// import { motion, useInView } from "framer-motion";
// // import { BranchTable } from "./BranchTable";

// // ── Variants ──────────────────────────────────────────────────
// const headingVariants = {
//   hidden: { opacity: 0, y: -32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const leftVariants = {
//   hidden: { opacity: 0, x: -40 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
//   },
// };

// const rightVariants = {
//   hidden: { opacity: 0, x: 40 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
//   },
// };

// // ── Info item ─────────────────────────────────────────────────
// function InfoRow({
//   icon: Icon,
//   label,
//   value,
//   href,
//   color = "var(--secondary)",
// }: {
//   icon: React.ElementType;
//   label: string;
//   value: string;
//   href?: string;
//   color?: string;
// }) {
//   return (
//     <Box style={{ display: "flex", alignItems: "flex-start", gap: rem(12) }}>
//       <Box
//         style={{
//           width: rem(34),
//           height: rem(34),
//           borderRadius: "50%",
//           background: `${color}18`,
//           border: `1px solid ${color}30`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//           marginTop: rem(2),
//         }}
//       >
//         <Icon size={15} color={color} stroke={2} />
//       </Box>
//       <Box>
//         <Text
//           fz={rem(10)}
//           fw={700}
//           tt="uppercase"
//           c="rgba(255,255,255,0.3)"
//           style={{ letterSpacing: "0.14em" }}
//           mb={rem(2)}
//         >
//           {label}
//         </Text>
//         {href ? (
//           <Anchor
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             underline="never"
//             fz={rem(14)}
//             fw={500}
//             c="#e2e8f0"
//             style={{ transition: "color 0.2s ease" }}
//             onMouseEnter={(e) =>
//               ((e.currentTarget as HTMLElement).style.color =
//                 "var(--secondary)")
//             }
//             onMouseLeave={(e) =>
//               ((e.currentTarget as HTMLElement).style.color = "#e2e8f0")
//             }
//           >
//             {value}
//           </Anchor>
//         ) : (
//           <Text fz={rem(14)} fw={500} c="#e2e8f0">
//             {value}
//           </Text>
//         )}
//       </Box>
//     </Box>
//   );
// }

// // ── Component ─────────────────────────────────────────────────
// export const Branch: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

//   return (
//     <Box
//       component="section"
//       id="branch"
//       ref={ref}
//       style={{
//         background: "linear-gradient(180deg, #0d1117 0%, #0a0e14 100%)",
//         borderTop: "1px solid rgba(56,159,255,0.1)",
//         borderBottom: "1px solid rgba(56,159,255,0.1)",
//       }}
//       py={{ base: rem(55), md: rem(80) }}
//     >
//       <Container size="lg">
//         {/* ── Heading ── */}
//         <motion.div
//           variants={headingVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <Box
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginBottom: rem(52),
//             }}
//           >
//             <Text
//               fz={rem(11)}
//               fw={700}
//               tt="uppercase"
//               c="var(--secondary)"
//               style={{ letterSpacing: "0.2em", marginBottom: rem(8) }}
//             >
//               NATIONWIDE NETWORK
//             </Text>
//             <Text
//               fz={{ base: rem(20), sm: rem(32) }}
//               fw={900}
//               tt="uppercase"
//               c="var(--text-primary)"
//               style={{ letterSpacing: "0.06em", lineHeight: 1 }}
//             >
//               OUR GROUP
//             </Text>
//             <Text
//               ta="center"
//               fz={{ base: rem(13), sm: rem(14) }}
//               c="var(--text-secondary)"
//               mt={rem(16)}
//               lh={1.6}
//               maw={500}
//             >
//               One of the leading wrapping companies with a nationwide network
//               across the USA.
//             </Text>
//           </Box>
//         </motion.div>

//         {/* ── Main grid ── */}
//         <Grid gutter={{ base: rem(32), md: rem(40) }} align="stretch">
//           {/* Left — Branch list + contact info */}
//           <Grid.Col span={{ base: 12, md: 5 }}>
//             <motion.div
//               variants={leftVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               style={{ height: "100%" }}
//             >
//               <Stack gap={rem(28)} h="100%">
//                 {/* Branch table */}
//                 {/* <BranchTable isInView={isInView} /> */}

//                 {/* <Divider color="rgba(255,255,255,0.07)" /> */}

//                 {/* Contact info for featured branch */}
//                 <Box>
//                   <Box
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: rem(8),
//                       marginBottom: rem(16),
//                     }}
//                   >
//                     <IconBuildingStore
//                       size={16}
//                       color="var(--secondary)"
//                       stroke={2}
//                     />
//                     <Text
//                       fz={rem(13)}
//                       fw={800}
//                       tt="uppercase"
//                       c="#e2e8f0"
//                       style={{ letterSpacing: "0.1em" }}
//                     >
//                       Resendiz Rwraps — Texas
//                     </Text>
//                   </Box>

//                   <Stack gap={rem(14)}>
//                     <InfoRow
//                       icon={IconMapPin}
//                       label="Address"
//                       value="280 Weil Rd #105, Cibolo, TX, US, 78108"
//                       href="https://maps.app.goo.gl/Rxkp5oJ9hJXAwaHEA"
//                     />
//                     <InfoRow
//                       icon={IconPhone}
//                       label="Phone"
//                       value="+1 830-402-4222"
//                       href="tel:+18304024222"
//                     />
//                     {/* <InfoRow
//                       icon={IconWorld}
//                       label="Website"
//                       value="wrapstyletx.com"
//                       href="https://wrapstyletx.com"
//                     /> */}
//                   </Stack>
//                 </Box>
//               </Stack>
//             </motion.div>
//           </Grid.Col>

//           {/* Right — Google Maps embed */}
//           <Grid.Col span={{ base: 12, md: 7 }}>
//             <motion.div
//               variants={rightVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               style={{ height: "100%" }}
//             >
//               <Box
//                 style={{
//                   position: "relative",
//                   height: "100%",
//                   minHeight: rem(420),
//                   borderRadius: rem(16),
//                   overflow: "hidden",
//                   border: "1px solid rgba(56,159,255,0.15)",
//                   boxShadow: "0 0 40px rgba(56,159,255,0.06)",
//                 }}
//               >
//                 {/* <iframe
//                   title="Resendiz Rwraps location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.123456789!2d-98.22!3d29.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9a6b6b6b6b6b%3A0x0!2s280+Weil+Rd+%23105%2C+Cibolo%2C+TX+78108!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{
//                     border: 0,
//                     display: "block",
//                     filter: "invert(90%) hue-rotate(180deg)", // dark mode map
//                     minHeight: rem(420),
//                   }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 /> */}
//                 <iframe
//                   title="Resendiz Rwraps location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.5!2d-98.21!3d29.557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8e7c7c7c7c7c%3A0x0!2sResendiz+Rwraps%2C+280+Weil+Rd+%23105%2C+Cibolo%2C+TX+78108!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{
//                     border: 0,
//                     display: "block",
//                     filter: "invert(90%) hue-rotate(180deg)", // dark mode map
//                     minHeight: rem(420),
//                   }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//                 {/* subtle top-left label */}
//                 <Box
//                   style={{
//                     position: "absolute",
//                     top: rem(12),
//                     left: rem(12),
//                     background: "rgba(10,12,16,0.85)",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(56,159,255,0.2)",
//                     borderRadius: rem(8),
//                     padding: `${rem(6)} ${rem(12)}`,
//                     zIndex: 2,
//                   }}
//                 >
//                   <Text
//                     fz={rem(11)}
//                     fw={700}
//                     c="var(--secondary)"
//                     style={{ letterSpacing: "0.1em" }}
//                   >
//                     📍 CIBOLO, TEXAS
//                   </Text>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };
"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  rem,
  Anchor,
  Stack,
  Divider,
} from "@mantine/core";
import {
  IconMapPin,
  IconPhone,
  IconWorld,
  IconBuildingStore,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { BranchTable } from "./BranchTable";

// ── Variants ──────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

// ── Info item ─────────────────────────────────────────────────
function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  color = "var(--secondary)",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color?: string;
}) {
  return (
    <Box style={{ display: "flex", alignItems: "flex-start", gap: rem(12) }}>
      <Box
        style={{
          width: rem(34),
          height: rem(34),
          borderRadius: "50%",
          background: `${color}18`,
          border: `1px solid ${color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: rem(2),
        }}
      >
        <Icon size={15} color={color} stroke={2} />
      </Box>
      <Box>
        <Text
          fz={rem(10)}
          fw={700}
          tt="uppercase"
          c="rgba(255,255,255,0.3)"
          style={{ letterSpacing: "0.14em" }}
          mb={rem(2)}
        >
          {label}
        </Text>
        {href ? (
          <Anchor
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            underline="never"
            fz={rem(14)}
            fw={500}
            c="#e2e8f0"
            style={{ transition: "color 0.2s ease" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--secondary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#e2e8f0")
            }
          >
            {value}
          </Anchor>
        ) : (
          <Text fz={rem(14)} fw={500} c="#e2e8f0">
            {value}
          </Text>
        )}
      </Box>
    </Box>
  );
}

// ── Component ─────────────────────────────────────────────────
export const Branch: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Box
      component="section"
      id="branch"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #0a0e14 100%)",
        borderTop: "1px solid rgba(56,159,255,0.1)",
        borderBottom: "1px solid rgba(56,159,255,0.1)",
      }}
      py={{ base: rem(55), md: rem(80) }}
    >
      <Container size="lg">
        {/* ── Heading ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: rem(52),
            }}
          >
            <Text
              fz={rem(11)}
              fw={700}
              tt="uppercase"
              c="var(--secondary)"
              style={{ letterSpacing: "0.2em", marginBottom: rem(8) }}
            >
              NATIONWIDE NETWORK
            </Text>
            <Text
              fz={{ base: rem(20), sm: rem(32) }}
              fw={900}
              tt="uppercase"
              c="var(--text-primary)"
              style={{ letterSpacing: "0.06em", lineHeight: 1 }}
            >
              OUR GROUP
            </Text>
            <Text
              ta="center"
              fz={{ base: rem(13), sm: rem(14) }}
              c="var(--text-secondary)"
              mt={rem(16)}
              lh={1.6}
              maw={500}
            >
              One of the leading wrapping companies with a nationwide network
              across the USA.
            </Text>
          </Box>
        </motion.div>

        {/* ── Main grid ── */}
        <Grid gutter={{ base: rem(32), md: rem(40) }} align="stretch">
          {/* Left — Branch list + contact info */}

          {/* Right — Google Maps embed */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ height: "100%" }}
            >
              <Box
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: rem(420),
                  borderRadius: rem(16),
                  overflow: "hidden",
                  border: "1px solid rgba(56,159,255,0.15)",
                  boxShadow: "0 0 40px rgba(56,159,255,0.06)",
                }}
              >
                <iframe
                  title="Resendiz Rwraps location"
                  src="https://maps.google.com/maps?q=Resendiz+Rwraps,+280+Weil+Rd+%23105,+Cibolo,+TX+78108&output=embed&z=15&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    filter: "invert(90%) hue-rotate(180deg)", // dark mode map
                    minHeight: rem(420),
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* subtle top-left label */}
                <Box
                  style={{
                    position: "absolute",
                    top: rem(12),
                    left: rem(12),
                    background: "rgba(10,12,16,0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(56,159,255,0.2)",
                    borderRadius: rem(8),
                    padding: `${rem(6)} ${rem(12)}`,
                    zIndex: 2,
                  }}
                >
                  <Text
                    fz={rem(11)}
                    fw={700}
                    c="var(--secondary)"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    📍 CIBOLO, TEXAS
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ height: "100%" }}
            >
              <Stack gap={rem(28)} h="100%">
                {/* Branch table */}
                {/* <BranchTable isInView={isInView} />

                <Divider color="rgba(255,255,255,0.07)" /> */}

                {/* Contact info for featured branch */}
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: rem(8),
                      marginBottom: rem(16),
                    }}
                  >
                    <IconBuildingStore
                      size={16}
                      color="var(--secondary)"
                      stroke={2}
                    />
                    <Text
                      fz={rem(13)}
                      fw={800}
                      tt="uppercase"
                      c="#e2e8f0"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      Resendiz Rwraps — Texas
                    </Text>
                  </Box>

                  <Stack gap={rem(14)}>
                    <InfoRow
                      icon={IconMapPin}
                      label="Address"
                      value="280 Weil Rd #105, Cibolo, TX, US, 78108"
                      href="https://maps.app.goo.gl/XG7oaDWSKfV1EBa88"
                    />
                    <InfoRow
                      icon={IconPhone}
                      label="Phone"
                      value="+1 830-402-4222"
                      href="tel:+18304024222"
                    />
                    {/* <InfoRow
                      icon={IconWorld}
                      label="Website"
                      value="wrapstyletx.com"
                      href="https://wrapstyletx.com"
                    /> */}
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
