import React from "react";
import { useParams } from "react-router-dom";

function logo(club) {
  if (club === 'plexus') {
      return (
          <svg
          width="60"
          height="60"
          viewBox="0 0 458 299"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo-plexus">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M301.435 277.571C290.868 285.994 265.016 299 225.346 299C185.632 299 160.853 285.965 151.011 277.543C149.344 276.117 149.103 273.708 150.211 271.815L213.346 164L190.346 131L205.346 109L225.346 142.535C229.613 136.024 243.787 113.6 266.346 76C288.905 38.4 335.346 45 357.346 76L452.978 240.487C454.916 243.82 452.511 248 448.656 248H418.346C352.619 248 324.583 216.645 318.525 200.491C318.4 200.157 318.252 199.847 318.064 199.544C318.064 199.544 284.839 145.873 266.346 116L238.148 164L302.352 271.656C303.525 273.623 303.225 276.144 301.435 277.571ZM225.346 186L274.346 265C237.488 282.229 217.549 282.44 183.357 265L225.346 186ZM338.346 186L284.346 93C305.435 67.3321 317.258 65.1586 338.346 93L418.346 226C367.146 226 343.68 199.333 338.346 186Z"
            />
            <path d="M115.346 186C108.013 200 82.1463 227.6 37.3463 226L115.346 91C122.013 79.3333 142.346 63.4 170.346 93L183.357 71C140.166 35 107.354 59.3333 96.3464 76L1.5 241C-0.590102 244 0 248 5.5 248H37.3463C100.818 244.826 128.226 215.162 134.202 200.366C134.251 200.243 134.3 200.121 134.346 200L134.552 199.65L225.346 45L247.346 76L260.346 55L229.721 6.87407C227.718 3.72654 223.098 3.80199 221.199 7.01324L183.357 71L170.346 93L115.346 186Z" />
          </g>
        </svg>
      )
  }
  else if(club === 'innovista'){
      return (
          <img src="https://www.innovista.in/static/images/inno.jpg" height="150px" alt="innovista-PNG" />
      )
  }else if(club === 'nss'){
  return <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg" height="150px" alt="NSS-PNG" />
  } else {
    return <img src="https://mrce.in/assets/images/logo.png" height="150px" alt="MRCE-PNG" />
  }
}



function EventComponent() {
  const data = useParams();
  console.log(data);
  return (
    <div id="loader">
    {logo(data['clubName'])}
    {data.clubName === "plexus" &&       <div class="bg">
        <svg
          viewBox="0 0 713 569"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame" clip-path="url(#clip0_3_610)">
            <rect fill="black" />
            <g id="Group">
              <g id="Group_2">
                <g id="ellipse-2">
                  <path
                    id="ellipse-2_2"
                    d="M314.92 652.18C331.65 638.85 340.88 618.82 339.34 599.22C337.16 571.57 315.71 551.94 287.93 540.29C277.76 536.02 267.08 532.55 257.56 527.27C234.58 514.52 235.65 494.57 225.15 475.12C196.88 422.72 118 460.93 69.4101 448.65C37.7901 440.66 15.6501 414.7 14.5401 386.53C14.4601 384.51 14.4501 382.38 13.2801 380.62C12.4701 379.41 11.1801 378.5 9.87012 377.69C-10.5799 364.99 -41.3199 369.69 -59.5599 383.32C-79.7299 398.4 -88.9599 421.58 -94.4199 444.12C-98.7799 462.11 -101.28 480.82 -96.9499 498.82C-85.2099 547.68 -27.9899 578.34 -4.12987 623.8C1.02013 633.62 4.58013 644.07 10.6901 653.47C26.2301 677.37 56.2601 691.47 86.2201 700.57C123.16 711.79 164.64 717.15 201.08 704.78C224.42 696.86 244.1 682.2 267.6 674.64C283.97 669.35 302.09 662.4 314.92 652.18Z"
                    fill="url(#paint0_linear_3_610)"
                  />
                </g>
                <g id="ellipse-1">
                  <path
                    id="ellipse-1_2"
                    d="M417.74 16.65C412.13 35.31 418.56 62.62 433.11 77.17C447.65 91.72 470.69 99.45 492.68 97.17C508.54 95.52 523.16 89.13 538.45 85.12C553.74 81.11 571.43 79.77 584.71 87.5C591.56 91.48 597.09 97.77 605.16 99.21C612.41 100.51 619.99 97.33 624.92 92.52C629.84 87.71 632.53 81.49 634.59 75.29C640.39 57.88 642.04 39.43 639.42 21.45C637.58 8.83 633.35 -4.04001 623.57 -13.49C608.73 -27.84 584.85 -31.25 562.95 -34.24C543.27 -36.93 523.53 -39.97 503.61 -39.8C483.69 -39.64 463.31 -36.05 446.7 -26.48C430.08 -16.92 417.79 -0.700006 417.74 16.65Z"
                    fill="url(#paint1_linear_3_610)"
                  />
                </g>
                <g id="lines" opacity="0.7">
                  <g id="lines-1" opacity="0.7">
                    <path
                      id="Vector"
                      opacity="0.7"
                      d="M348.17 -0.490005L601.7 -230"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_2"
                      opacity="0.7"
                      d="M350.2 18.23L619.67 -226.1"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_3"
                      opacity="0.7"
                      d="M358.34 31.26L635.44 -220.16"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_4"
                      opacity="0.7"
                      d="M369.79 41.22L653.09 -215.97"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_5"
                      opacity="0.7"
                      d="M378.72 53.53L670.89 -211.91"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_6"
                      opacity="0.7"
                      d="M389.21 64.38L689.79 -208.88"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_7"
                      opacity="0.7"
                      d="M399.61 75.31L704.25 -201.72"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_8"
                      opacity="0.7"
                      d="M410.04 86.22L721.95 -197.57"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_9"
                      opacity="0.7"
                      d="M420.79 96.83L736.34 -190.35"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_10"
                      opacity="0.7"
                      d="M430.27 108.61L748.33 -180.89"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_11"
                      opacity="0.7"
                      d="M441.04 119.21L761.86 -172.86"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_12"
                      opacity="0.7"
                      d="M452.47 129.19L775.17 -164.64"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_13"
                      opacity="0.7"
                      d="M462.1 140.84L773.4 -142.39"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                  </g>
                  <g id="lines-2" opacity="0.7">
                    <path
                      id="Vector_14"
                      opacity="0.7"
                      d="M497.6 129.7L751.14 -99.81"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_15"
                      opacity="0.7"
                      d="M499.63 148.41L769.1 -95.91"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_16"
                      opacity="0.7"
                      d="M507.77 161.45L784.88 -89.98"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_17"
                      opacity="0.7"
                      d="M519.22 171.41L802.52 -85.78"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_18"
                      opacity="0.7"
                      d="M528.151 183.71L820.32 -81.73"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_19"
                      opacity="0.7"
                      d="M538.64 194.57L839.22 -78.69"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_20"
                      opacity="0.7"
                      d="M549.04 205.49L853.68 -71.53"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_21"
                      opacity="0.7"
                      d="M559.47 216.41L871.38 -67.38"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_22"
                      opacity="0.7"
                      d="M570.22 227.02L885.77 -60.16"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_23"
                      opacity="0.7"
                      d="M579.7 238.8L897.76 -50.71"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_24"
                      opacity="0.7"
                      d="M590.47 249.4L911.29 -42.68"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_25"
                      opacity="0.7"
                      d="M601.901 259.37L924.61 -34.45"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_26"
                      opacity="0.7"
                      d="M611.53 271.03L922.83 -12.2"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                  </g>
                </g>
                <g id="lines_2" opacity="0.7">
                  <g id="lines-3" opacity="0.7">
                    <path
                      id="Vector_27"
                      opacity="0.7"
                      d="M-130 536.81L90.88 307.3"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_28"
                      opacity="0.7"
                      d="M-128.23 555.53L106.53 311.2"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_29"
                      opacity="0.7"
                      d="M-121.14 568.56L120.28 317.14"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_30"
                      opacity="0.7"
                      d="M-111.16 578.52L135.65 321.34"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_31"
                      opacity="0.7"
                      d="M-103.39 590.83L151.16 325.39"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_32"
                      opacity="0.7"
                      d="M-94.25 601.68L167.62 328.43"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_33"
                      opacity="0.7"
                      d="M-85.1802 612.61L180.22 335.58"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_34"
                      opacity="0.7"
                      d="M-76.1001 623.52L195.64 339.73"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_35"
                      opacity="0.7"
                      d="M-66.73 634.13L208.18 346.95"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_36"
                      opacity="0.7"
                      d="M-58.4702 645.92L218.63 356.41"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_37"
                      opacity="0.7"
                      d="M-49.0898 656.51L230.41 364.44"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_38"
                      opacity="0.7"
                      d="M-39.1299 666.49L242.01 372.66"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_39"
                      opacity="0.7"
                      d="M-30.75 678.14L240.47 394.91"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                  </g>
                  <g id="lines-4" opacity="0.7">
                    <path
                      id="Vector_40"
                      opacity="0.7"
                      d="M0.189941 667L221.07 437.49"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_41"
                      opacity="0.7"
                      d="M1.95996 685.71L236.72 441.39"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_42"
                      opacity="0.7"
                      d="M9.0498 698.75L250.46 447.33"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_43"
                      opacity="0.7"
                      d="M19.02 708.71L265.84 451.52"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_44"
                      opacity="0.7"
                      d="M26.7998 721.01L281.34 455.57"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_45"
                      opacity="0.7"
                      d="M35.9399 731.87L297.81 458.61"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_46"
                      opacity="0.7"
                      d="M45 742.8L310.41 465.77"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_47"
                      opacity="0.7"
                      d="M54.0898 753.71L325.82 469.92"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_48"
                      opacity="0.7"
                      d="M63.4497 764.32L338.36 477.14"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_49"
                      opacity="0.7"
                      d="M71.7197 776.1L348.81 486.59"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_50"
                      opacity="0.7"
                      d="M81.0898 786.7L360.59 494.63"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_51"
                      opacity="0.7"
                      d="M91.0498 796.67L372.19 502.85"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                    <path
                      id="Vector_52"
                      opacity="0.7"
                      d="M99.4399 808.33L370.65 525.1"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="0.3 0.3"
                    />
                  </g>
                </g>
                <g id="Group_3">
                  <g id="Group_4">
                    <g id="Group_5">
                      <path
                        id="curve-3"
                        d="M548.28 585.33C543.26 563.75 548.28 540.28 561.44 522.48C576.11 502.64 599.69 494.29 620.42 482.58C630.26 477.01 639.84 470.47 647.21 461.78C650.88 457.45 653.89 452.64 656.12 447.42C658.47 441.89 659.98 436.06 661.2 430.2C663.66 418.31 665.09 406.15 669.79 394.85C674.12 384.44 680.65 374.95 688.77 367.13C706.15 350.38 730.62 342.26 754.59 344.92C757.64 345.26 760.69 345.78 763.7 346.39C764.27 346.51 764.52 345.65 763.94 345.51C740.5 339.55 714.2 345.59 695.12 360.23C686.32 366.99 678.89 375.5 673.38 385.13C670.59 389.99 668.3 395.14 666.56 400.47C664.65 406.35 663.44 412.42 662.32 418.49C660.05 430.78 658.07 443.5 651.39 454.31C645.18 464.36 635.8 471.98 625.89 478.18C605.51 490.93 581.19 498.37 564.85 516.84C550.3 533.29 543.33 556.14 546.22 577.91C546.56 580.47 547.06 583 547.68 585.5C547.76 585.89 548.37 585.72 548.28 585.33Z"
                        fill="url(#paint2_linear_3_610)"
                      />
                    </g>
                  </g>
                  <g id="Group_6">
                    <g id="Group_7">
                      <path
                        id="curve-2"
                        d="M588.63 559.67C585.49 552.48 586.19 544.33 589.22 537.23C592.36 529.85 597.88 523.94 604.33 519.28C617.82 509.54 634.3 505.2 648.08 495.95C654.77 491.46 660.41 485.8 664.68 478.96C668.86 472.26 671.76 464.83 674 457.27C678.97 440.49 680.59 422.73 687.48 406.52C693.24 392.97 703.77 379.95 718.53 375.99C720.24 375.53 721.98 375.16 723.74 374.92C724.12 374.87 724.03 374.23 723.65 374.25C708.74 375.28 696.6 387.11 689.75 399.6C681.17 415.25 679.14 433.35 674.87 450.41C672.88 458.35 670.4 466.22 666.66 473.53C662.88 480.92 657.78 487.46 651.2 492.56C637.71 503.02 620.73 507.36 606.54 516.65C599.93 520.98 593.91 526.41 590.07 533.4C586.51 539.87 584.65 547.62 586.28 554.93C586.67 556.69 587.28 558.38 588.07 560.01C588.24 560.41 588.8 560.06 588.63 559.67Z"
                        fill="url(#paint3_linear_3_610)"
                      />
                    </g>
                  </g>
                  <g id="Group_8">
                    <g id="Group_9">
                      <path
                        id="curve-1"
                        d="M713.06 414.93C704.39 417.4 697.39 423.95 692.33 431.19C686.85 439.05 683.36 448.06 680.82 457.25C677.85 467.97 675.92 478.98 672.38 489.54C670.68 494.61 668.63 499.61 665.86 504.19C663.4 508.25 660.4 511.98 656.94 515.23C650.22 521.53 641.46 526.01 632.07 525.69C630.91 525.65 629.75 525.54 628.6 525.37C628.06 525.29 627.81 526.09 628.37 526.21C637.51 528.16 646.8 524.78 654.05 519.27C657.85 516.38 661.19 512.93 664.04 509.1C667.06 505.04 669.39 500.58 671.31 495.91C675.59 485.51 677.74 474.41 680.4 463.53C682.76 453.84 685.65 444.28 690.73 435.63C695.37 427.73 701.7 420.9 710.04 416.9C711.08 416.4 712.14 415.95 713.21 415.54C713.6 415.39 713.46 414.81 713.06 414.93Z"
                        fill="url(#paint4_linear_3_610)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="Group_10">
              <g id="Group_11">
                <g id="Group_12">
                  <g id="Group_13">
                    <path
                      id="wave-2"
                      d="M358.75 122.11C345.3 114.63 328.64 109.71 313.36 114.09C301.5 117.49 292.55 126.35 285.79 136.33C278.18 147.56 272.82 160.15 267.14 172.42C263.66 179.93 259.87 187.15 254.79 193.73C249.33 200.81 242.83 207.09 235.58 212.31C228.08 217.7 219.82 221.91 211.06 224.82C201.07 228.14 190.69 229.98 180.44 232.3C163.59 236.13 145.72 242.08 134.69 256.26C129.81 262.53 126.91 270.13 126.78 278.1C126.64 286.28 129.26 294.34 133.39 301.34C142.76 317.25 159.05 326.35 176.05 332.18C194.25 338.42 213.46 341.39 231.28 348.79C240.18 352.49 248.7 357.34 255.76 363.97C262.76 370.55 268.17 378.56 272.98 386.82C282.05 402.42 289.35 419.43 302.42 432.26C308.45 438.18 315.66 442.97 323.8 445.41C331.98 447.85 340.72 447.85 349.03 446.08C388.08 437.75 405.46 398.4 421.2 366.09C430 348.03 439.76 330.45 454.59 316.6C468.91 303.23 486 293.03 499.35 278.59C511.21 265.77 520.13 249.35 518.04 231.38C516.05 214.3 505.42 199.19 492.38 188.5C477.36 176.19 458.78 168.99 440.74 162.37C431.06 158.82 421.26 155.51 411.86 151.25C402.58 147.04 393.66 142.11 384.85 137.01C380.64 134.57 376.46 132.09 372.26 129.63C367.8 127.02 363.17 124.76 358.66 122.25C358.31 122.05 357.99 122.59 358.34 122.79C362.84 125.29 367.12 128.2 371.56 130.81C375.76 133.27 379.94 135.75 384.15 138.19C392.76 143.18 401.48 148 410.53 152.14C428.48 160.36 447.66 165.51 465.56 173.87C482.25 181.66 497.95 192.12 507.97 207.94C512.57 215.2 515.85 223.4 516.75 231.98C517.69 240.93 515.89 249.88 512.07 257.99C504.07 274.98 489.16 287.1 474.65 298.37C466.95 304.35 459.17 310.28 452.14 317.05C445.34 323.59 439.49 330.98 434.41 338.92C424.05 355.11 416.8 372.99 407.91 389.98C399.23 406.56 388.61 423.16 372.99 434.02C358.56 444.05 339.55 449.43 322.44 443.55C305.6 437.76 294.47 422.43 285.99 407.59C276.99 391.83 269.51 374.54 255.78 362.16C242.22 349.94 224.39 344.16 207.09 339.54C188.81 334.66 169.72 330.66 153.6 320.24C139.38 311.05 127.56 295.15 128.12 277.56C128.68 259.74 143.08 247.21 158.32 240.49C176.61 232.42 197.13 231.71 215.73 224.55C231.31 218.55 245.12 208.21 255.39 195.07C264.51 183.41 269.65 169.52 276.06 156.32C281.59 144.93 287.86 133.25 297.35 124.63C307.15 115.72 319.73 112.36 332.77 114.18C341.76 115.43 350.31 118.63 358.26 122.96C358.8 123.23 359.28 122.41 358.75 122.11Z"
                      fill="url(#paint5_linear_3_610)"
                    />
                  </g>
                </g>
                <g id="Group_14" opacity="0.4248">
                  <path
                    id="wave-3"
                    opacity="0.4248"
                    d="M363.95 93.15C348.57 84.6 329.51 78.98 312.04 84C298.49 87.89 288.26 98.02 280.54 109.42C271.83 122.28 265.7 136.69 259.19 150.73C255.2 159.34 250.86 167.6 245.05 175.14C238.8 183.25 231.35 190.46 223.03 196.43C214.44 202.61 204.97 207.43 194.94 210.76C183.51 214.56 171.62 216.66 159.89 219.33C140.62 223.71 120.17 230.51 107.55 246.73C101.98 253.89 98.6798 262.57 98.5198 271.67C98.3598 281.02 101.36 290.22 106.07 298.22C116.78 316.41 135.41 326.82 154.85 333.48C175.69 340.62 197.68 344.02 218.08 352.49C228.29 356.73 238.06 362.29 246.15 369.89C254.17 377.42 260.37 386.6 265.88 396.07C276.25 413.92 284.61 433.39 299.57 448.07C306.46 454.84 314.69 460.31 324 463.1C333.35 465.89 343.33 465.89 352.83 463.87C397.5 454.34 417.38 409.31 435.39 372.34C445.47 351.66 456.64 331.52 473.64 315.66C490.04 300.36 509.6 288.68 524.88 272.15C538.44 257.49 548.64 238.72 546.24 218.17C543.96 198.65 531.8 181.37 516.89 169.15C499.71 155.07 478.45 146.83 457.82 139.26C446.73 135.19 435.5 131.4 424.73 126.52C414.11 121.7 403.89 116.06 393.81 110.21C388.99 107.42 384.2 104.58 379.4 101.76C374.3 98.77 369.02 96.14 363.86 93.27C363.51 93.07 363.19 93.61 363.54 93.81C368.69 96.67 373.62 99.96 378.71 102.94C383.51 105.76 388.31 108.59 393.12 111.39C402.97 117.1 412.95 122.62 423.31 127.36C443.86 136.77 465.82 142.66 486.31 152.23C505.43 161.16 523.41 173.14 534.9 191.26C540.17 199.58 543.93 208.99 544.96 218.83C546.04 229.1 543.97 239.35 539.58 248.66C530.41 268.12 513.34 282 496.73 294.91C487.91 301.76 479.01 308.54 470.96 316.29C463.18 323.77 456.49 332.23 450.68 341.31C438.82 359.85 430.52 380.32 420.34 399.77C410.39 418.77 398.23 437.78 380.33 450.22C363.79 461.71 341.99 467.88 322.38 461.13C303.08 454.49 290.31 436.93 280.59 419.91C270.29 401.88 261.73 382.09 246.02 367.92C230.51 353.94 210.11 347.33 190.32 342.05C169.39 336.46 147.52 331.87 129.07 319.95C112.77 309.42 99.2198 291.18 99.8498 271.01C100.49 250.58 117 236.2 134.47 228.49C155.41 219.25 178.92 218.44 200.22 210.23C218.03 203.37 233.83 191.53 245.58 176.51C256.02 163.16 261.9 147.27 269.23 132.17C275.57 119.12 282.75 105.75 293.62 95.87C304.87 85.65 319.29 81.8 334.26 83.9C344.56 85.34 354.35 89 363.45 93.97C364.01 94.26 364.49 93.44 363.95 93.15Z"
                    fill="url(#paint6_linear_3_610)"
                  />
                </g>
                <g id="Group_15">
                  <g id="Group_16">
                    <path
                      id="wave-1"
                      d="M436.33 319.28C448.11 306.55 463.01 297.41 475.87 285.89C487.08 275.85 497.38 263.09 499.9 247.84C502.32 233.12 496.6 218.64 487.37 207.33C477.09 194.73 462.78 186.55 448.04 180.19C431.93 173.24 414.92 168.51 399.12 160.83C383.38 153.17 368.92 143.25 353.41 135.2C341.66 129.1 327.23 125.37 314.16 129.14C304.1 132.04 296.3 139.28 290.32 147.62C283.49 157.14 278.68 167.96 273.81 178.55C271.02 184.63 268.29 190.73 264.62 196.35C260.51 202.63 255.54 208.34 249.91 213.3C244.14 218.39 237.66 222.67 230.72 225.98C222.73 229.79 214.14 232.02 205.53 233.93C189.87 237.4 173.55 240.2 160.4 250.06C154.87 254.21 150.09 259.49 147.3 265.88C144.51 272.26 143.95 279.33 145.36 286.13C148.39 300.71 159.09 312.45 171.72 319.69C200.26 336.06 238.16 333.25 262.68 357.15C274.58 368.75 281.03 384.37 289.33 398.46C296.7 410.98 306.19 423.43 320.06 429.06C334.21 434.81 350.33 431.81 363.36 424.59C377.45 416.79 387.77 403.91 395.87 390.27C397.91 386.83 399.83 383.33 401.67 379.78C403.57 376.13 405.03 372.31 406.82 368.61C406.99 368.25 406.46 367.93 406.28 368.29C404.51 371.96 402.37 375.47 400.49 379.08C398.6 382.71 396.64 386.31 394.54 389.83C390.41 396.76 385.78 403.41 380.3 409.34C369.73 420.78 355.48 429.38 339.69 430.6C332.1 431.19 324.44 429.9 317.61 426.48C310.94 423.14 305.32 418.09 300.56 412.4C290.53 400.41 284.53 385.83 276.37 372.62C272.31 366.05 267.67 359.77 261.92 354.58C256.14 349.36 249.37 345.36 242.27 342.23C227.68 335.79 211.93 332.89 196.71 328.36C181.55 323.85 166.14 317.4 155.97 304.76C146.76 293.31 142.39 277.35 149.83 263.84C157.05 250.73 171.72 243.75 185.56 239.94C201.75 235.48 218.72 233.79 233.82 225.96C246.56 219.36 257.57 209.45 265.49 197.49C272.25 187.29 276.42 175.51 281.9 164.61C286.74 155 292.33 145.26 300.57 138.14C309.11 130.76 319.9 127.97 331.03 129.37C347.64 131.45 361.68 141.36 375.79 149.6C383.22 153.94 390.71 158.2 398.46 161.96C405.93 165.59 413.63 168.54 421.43 171.37C450.45 181.94 485.85 194.15 496.77 226.45C499.18 233.57 499.89 241.19 498.48 248.59C497.04 256.13 493.61 263.13 489.2 269.37C479.78 282.73 466.34 292.19 453.7 302.23C447.33 307.29 441.13 312.57 435.66 318.6C435.25 319.06 435.92 319.73 436.33 319.28Z"
                      fill="url(#paint7_linear_3_610)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3_610"
              x1="222.208"
              y1="448.907"
              x2="79.5235"
              y2="552.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1031" stop-color="#2F3E41" />
              <stop offset="0.3506" stop-color="#273132" />
              <stop offset="0.714" stop-color="#1E2422" />
              <stop offset="0.9948" stop-color="#1B1F1C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3_610"
              x1="415.728"
              y1="29.8412"
              x2="640.637"
              y2="29.8412"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1031" stop-color="#2F3E41" />
              <stop offset="0.3506" stop-color="#273132" />
              <stop offset="0.714" stop-color="#1E2422" />
              <stop offset="0.9948" stop-color="#1B1F1C" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_3_610"
              x1="545.56"
              y1="464.471"
              x2="764.023"
              y2="464.471"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5C5A44" />
              <stop offset="0.6103" stop-color="#3F4541" />
              <stop offset="1" stop-color="#313C40" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3_610"
              x1="585.664"
              y1="467.219"
              x2="723.731"
              y2="467.219"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5C5A44" />
              <stop offset="0.6103" stop-color="#3F4541" />
              <stop offset="1" stop-color="#313C40" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3_610"
              x1="628.406"
              y1="470.839"
              x2="713.298"
              y2="470.839"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5C5A44" />
              <stop offset="0.6103" stop-color="#3F4541" />
              <stop offset="1" stop-color="#313C40" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3_610"
              x1="148.968"
              y1="346.714"
              x2="513.254"
              y2="214.124"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0277" stop-color="#FFD24D" />
              <stop offset="0.0356" stop-color="#F7CC4C" />
              <stop offset="0.0797" stop-color="#CEAE4A" />
              <stop offset="0.1292" stop-color="#A89348" />
              <stop offset="0.1831" stop-color="#887B45" />
              <stop offset="0.2427" stop-color="#6C6744" />
              <stop offset="0.3099" stop-color="#565742" />
              <stop offset="0.3884" stop-color="#454B41" />
              <stop offset="0.4856" stop-color="#3A4241" />
              <stop offset="0.6218" stop-color="#333D40" />
              <stop offset="1" stop-color="#313C40" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_3_610"
              x1="98.5186"
              y1="273.707"
              x2="546.597"
              y2="273.707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5C5A44" />
              <stop offset="0.6103" stop-color="#3F4541" />
              <stop offset="1" stop-color="#313C40" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_3_610"
              x1="237.23"
              y1="172.507"
              x2="427.927"
              y2="363.204"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#313C40" />
              <stop offset="0.251" stop-color="#333E40" />
              <stop offset="0.397" stop-color="#3C4441" />
              <stop offset="0.5161" stop-color="#4A4E42" />
              <stop offset="0.6208" stop-color="#5E5D43" />
              <stop offset="0.716" stop-color="#786F44" />
              <stop offset="0.8042" stop-color="#988746" />
              <stop offset="0.8873" stop-color="#BDA249" />
              <stop offset="0.964" stop-color="#E8C14C" />
              <stop offset="1" stop-color="#FFD24D" />
            </linearGradient>
            <clipPath id="clip0_3_610">
              <rect width="713" height="569" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>}
      <div class="dots">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
}

export default EventComponent;
