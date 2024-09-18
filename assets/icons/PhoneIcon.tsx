import { IconProps } from "@/utils/types";
import React from "react";

const PhoneIcon: React.FC<IconProps> = ({
  width = 46,
  height = 46,
  color = "var(--white)",
  color2 = "var(--primary)",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0  46 46"
    fill="none"
    {...props}
  >
    {/* <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    <g clip-path="url(#clip0_560_13564)">
      <g clip-path="url(#clip1_560_13564)">
        <path
          d="M45.5272 23.1833C45.5272 10.8396 35.5207 0.833008 23.1769 0.833008C10.8332 0.833008 0.82666 10.8396 0.82666 23.1833C0.82666 35.527 10.8332 45.5336 23.1769 45.5336C35.5207 45.5336 45.5272 35.527 45.5272 23.1833Z"
          fill={color2}
        />
        <mask
          id="mask0_560_13564"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="12"
          y="12"
          width="23"
          height="23"
        >
          <path
            d="M34.3542 12.0098H12.0039V34.3601H34.3542V12.0098Z"
            fill={color}
          />
        </mask>
        <g mask="url(#mask0_560_13564)">
          <path
            d="M30.5818 31.5664C28.5796 31.5664 26.6279 31.1201 24.7269 30.2273C22.8253 29.3351 21.1412 28.1555 19.6748 26.6885C18.2077 25.222 17.0282 23.538 16.136 21.6364C15.2432 19.7354 14.7969 17.7837 14.7969 15.7815C14.7969 15.5022 14.89 15.2693 15.0763 15.0831C15.2625 14.8968 15.4953 14.8037 15.7747 14.8037H19.5463C19.7636 14.8037 19.9576 14.8736 20.1283 15.0132C20.2991 15.1529 20.3999 15.3315 20.431 15.5487L21.0363 18.8081C21.0673 19.0254 21.0636 19.2232 21.0252 19.4014C20.986 19.5802 20.8966 19.7394 20.757 19.8791L18.4986 22.1607C19.1505 23.2782 19.9694 24.3259 20.9553 25.3037C21.9406 26.2815 23.023 27.1274 24.2026 27.8414L26.3911 25.6529C26.5308 25.5132 26.7133 25.4083 26.9387 25.3381C27.1634 25.2686 27.3844 25.2494 27.6017 25.2804L30.8146 25.9323C31.0318 25.9789 31.2104 26.0834 31.3501 26.2461C31.4897 26.4094 31.5596 26.5997 31.5596 26.817V30.5886C31.5596 30.868 31.4665 31.1008 31.2802 31.287C31.094 31.4733 30.8611 31.5664 30.5818 31.5664ZM17.6139 20.3913L19.1505 18.8547L18.7547 16.6662H16.6827C16.7603 17.3026 16.8689 17.9312 17.0086 18.552C17.1483 19.1729 17.35 19.786 17.6139 20.3913ZM29.6971 29.6573V27.6086L27.5086 27.1662L25.9487 28.7261C26.5541 28.9899 27.1711 29.1994 27.8001 29.3547C28.4283 29.5099 29.0606 29.6108 29.6971 29.6573Z"
            fill={color}
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_560_13564">
        <rect
          width="45.6318"
          height="45.6318"
          fill={color}
          transform="translate(0 0.368164)"
        />
      </clipPath>
      <clipPath id="clip1_560_13564">
        <rect
          width="45.6318"
          height="44.7006"
          fill={color}
          transform="translate(0.000244141 0.833008)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default PhoneIcon;
