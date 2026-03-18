// // import React, { ReactNode, CSSProperties } from "react";
// // import "./GradientText.css";

// // interface GradientTextProps {
// //   children: ReactNode;
// //   className?: string;
// //   gradient?: string;
// //   animationSpeed?: number;
// //   showBorder?: boolean;
// //   fontSize?: string;
// //   fontWeight?: number;
// //   margin?: string;
// // }

// // export const GradientText: React.FC<GradientTextProps> = ({
// //   children,
// //   className = "",
// //   gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
// //   animationSpeed = 8,
// //   showBorder = false,
// //   fontSize = "clamp(1.5rem, 3vw, 2rem)",
// //   fontWeight = 900,
// //   margin = 0,
// // }) => {
// //   const gradientStyle: CSSProperties = {
// //     backgroundImage: gradient,
// //     backgroundSize: "300% 100%",
// //     animationDuration: `${animationSpeed}s`,
// //     fontSize,
// //     fontWeight,
// //     margin: `${margin}px`,
// //   };

// //   return (
// //     <div className={`animated-gradient-text ${className}`}>
// //       {showBorder && <div className="gradient-overlay" style={gradientStyle} />}
// //       <div className="text-content" style={gradientStyle}>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };
// import React, { ReactNode, CSSProperties } from "react";
// import "./GradientText.css";

// interface GradientTextProps {
//   children: ReactNode;
//   className?: string;
//   /** Any valid CSS gradient string */
//   gradient?: string;
//   /** Animation duration in seconds */
//   animationSpeed?: number;
//   showBorder?: boolean;
//   /** Any valid CSS font-size value, e.g. "1rem", "clamp(1rem, 3vw, 2rem)", "24px" */
//   fontSize?: string;
//   fontWeight?: CSSProperties["fontWeight"];
//   /** Any valid CSS margin value, e.g. "0", "8px", "0 auto" */
//   margin?: string;
// }

// export const GradientText: React.FC<GradientTextProps> = ({
//   children,
//   className = "",
//   gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
//   animationSpeed = 8,
//   showBorder = false,
//   fontSize = "clamp(1.5rem, 3vw, 2rem)",
//   fontWeight = 900,
//   margin = "0", // string, passed directly — no `+ "px"` mangling
// }) => {
//   const gradientStyle: CSSProperties = {
//     backgroundImage: gradient,
//     backgroundSize: "300% 100%",
//     animationDuration: `${animationSpeed}s`,
//     fontSize, // already a valid CSS string
//     fontWeight, // CSSProperties["fontWeight"] accepts string | number
//     margin, // already a valid CSS string — no template literal needed
//   };

//   return (
//     <div className={`animated-gradient-text ${className}`}>
//       {showBorder && <div className="gradient-overlay" style={gradientStyle} />}
//       <div className="text-content" style={gradientStyle}>
//         {children}
//       </div>
//     </div>
//   );
// };
import React, { type CSSProperties, type ReactNode } from "react";
import classes from "./GradientText.module.css";

interface GradientTextProps {
  children: ReactNode;
  /** Extra class applied to the root wrapper — dùng để override từ CSS module khác */
  className?: string;
  /** Extra class applied to the inner text element */
  textClassName?: string;
  /** Any valid CSS gradient string */
  gradient?: string;
  /** Animation duration in seconds */
  animationSpeed?: number;
  /** Show animated border ring */
  showBorder?: boolean;
  /** Any valid CSS font-size value e.g. "1rem", "clamp(1rem, 3vw, 2rem)", "24px" */
  fontSize?: string;
  fontWeight?: CSSProperties["fontWeight"];
  /** Any valid CSS margin value */
  margin?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  textClassName,
  gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
  animationSpeed = 8,
  showBorder = false,
  // fontSize = "clamp(1.5rem, 3vw, 2rem)",
  fontWeight = 900,
  margin = "0",
}) => {
  const gradientStyle: CSSProperties = {
    backgroundImage: gradient,
    backgroundSize: "300% 100%",
    animationDuration: `${animationSpeed}s`,
    // fontSize,
    fontWeight,
    margin,
  };

  return (
    <div className={[classes.root, className].filter(Boolean).join(" ")}>
      {showBorder && <div className={classes.overlay} style={gradientStyle} />}
      <div
        className={[classes.text, textClassName].filter(Boolean).join(" ")}
        style={gradientStyle}
      >
        {children}
      </div>
    </div>
  );
};