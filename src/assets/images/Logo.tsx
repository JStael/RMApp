import React from 'react';
import {Svg, Path, G, Rect, ClipPath, Defs} from 'react-native-svg';

export function Logo() {
  return (
    <Svg width="160" height="40" viewBox="0 0 368 108" fill="none">
      <G cliPath="url(#clip0_28_9)">
        <Path
          d="M60.7197 84.9625C58.202 83.146 55.6769 80.5071 54.7664 78.1841C53.0179 73.7233 49.2252 71.0255 47.1631 66.9501C45.7985 64.253 41.7624 64.5845 39.3737 62.6021C38.8863 62.1974 38.1607 61.9353 37.8989 61.2677C37.5465 60.2533 36.9541 59.3391 36.1722 58.6031C35.3903 57.867 34.4421 57.3309 33.4083 57.0403C36.3162 56.3455 36.4974 53.1924 38.9622 52.9025C41.7807 52.571 42.9802 50.6678 43.9807 48.3753C45.5916 44.6843 46.9343 40.8604 48.3272 37.115C49.5579 33.8059 49.0117 29.8332 49.2185 26.1518C49.2088 26.0072 49.1705 25.8661 49.1057 25.7365C49.0409 25.607 48.951 25.4916 48.8412 25.3972C47.0868 23.9004 47.1693 21.9767 47.329 19.9114C47.6104 16.271 46.1655 14.983 42.5853 15.5229C41.5716 15.6758 40.5662 15.9493 40.4733 14.503C40.3317 12.3015 39.0518 11.8062 37.1517 12.0612C36.0522 12.2088 35.1283 11.8018 34.1883 11.2395C32.3864 10.1616 30.5442 9.15203 28.6615 8.21067C25.2165 6.48975 21.9296 6.39122 18.8058 9.09717C17.2294 10.4626 15.5484 12.2962 13.4517 12.2285C9.6114 12.1045 6.095 12.2858 3.40523 15.4698C3.27787 15.6205 2.83027 15.6036 2.57414 15.5257C1.00433 15.0485 0.659684 16.3704 0 17.2341V20.1064C2.6865 21.9235 3.58702 24.1608 2.49861 27.4488C1.70378 29.8497 2.03481 32.4638 4.21051 34.2998C6.39211 36.1406 6.33488 38.3246 6.20674 40.9967C6.03807 44.512 6.05126 48.4898 7.52815 51.5164C9.41505 55.3833 9.47564 59.5379 10.9016 63.4062C11.4749 65.0648 11.3975 66.8792 10.6851 68.483C10.053 69.9135 10.3969 71.0074 11.2308 72.2003C12.544 74.0786 13.1893 76.029 12.0065 78.3467C11.1231 80.0776 11.7059 81.9326 12.4507 83.6163C13.4114 85.7881 15.0862 87.8241 15.3927 90.0637C15.8855 93.6639 17.0221 96.986 18.198 100.349C18.4134 100.965 18.2689 101.707 18.4851 102.323C18.8406 103.336 19.4736 104.431 20.6341 104.322C22.0813 104.186 21.7755 102.825 21.7995 101.809C21.8348 100.308 21.4874 98.7559 22.9466 97.5851C24.531 96.314 24.5786 94.6846 23.725 92.9353C23.1252 91.7064 22.761 90.4608 23.3535 89.079C24.2393 87.0132 23.6762 85.1604 22.3761 83.4455C20.8795 81.4716 20.2625 79.4399 21.7064 77.099C22.1888 76.3169 22.6554 75.2 22.1678 74.351C20.5886 71.6017 22.6966 68.2944 20.7046 65.6067C20.6032 65.4398 20.5386 65.2532 20.5151 65.0594C20.4916 64.8656 20.5098 64.669 20.5684 64.4828C20.627 64.2965 20.7247 64.1249 20.8549 63.9795C20.9852 63.8341 21.145 63.7181 21.3236 63.6394C22.3139 63.0936 22.707 63.9356 23.188 64.4552C24.1883 65.5357 25.2684 66.6875 26.8284 66.356C28.8013 65.937 29.5067 67.1259 30.4557 68.4083C31.5829 69.9312 32.1161 73.0177 35.1992 70.751C35.3492 70.6407 35.7756 70.7586 35.9854 70.9003C38.017 72.272 40.6369 72.9214 41.2435 75.9364C41.6062 77.7391 42.8796 78.7636 44.8965 77.7931C45.7802 77.3679 46.3614 77.6767 46.751 78.4961C47.9561 81.0308 49.224 83.4579 52.3076 84.2357C52.7989 84.3596 53.1732 85.2166 53.4678 85.8019C54.479 87.8114 55.7201 89.5421 57.8836 90.5013C58.5378 90.7913 59.442 91.4884 59.4779 92.0473C59.749 96.2742 62.9949 98.8735 64.828 102.232C65.2865 103.072 65.6909 104.149 66.8653 103.854C67.9076 103.592 67.6251 102.511 67.7565 101.678C68.7101 95.6333 63.5257 91.6974 62.4771 86.3323C62.3695 85.7818 61.3342 85.4059 60.7197 84.9625ZM32.2722 48.0249C31.3481 49.7733 27.1833 49.9677 25.0687 52.0403C24.66 52.441 24.1727 52.0333 23.7997 51.7473C22.4963 50.7484 21.1602 50.854 19.6381 52.0176C19.8987 47.566 18.9703 44.0528 16.919 40.8453C16.6182 40.3665 16.4952 39.7972 16.5714 39.2369C16.6206 38.5717 16.9327 37.654 16.6166 37.2773C14.3056 34.5235 14.8372 30.9068 13.5914 27.8634C12.6571 25.5809 13.119 24.619 15.5307 24.7472C16.9284 24.8214 18.3463 24.8058 19.2453 23.7073C21.3069 21.1883 24.014 21.8308 26.6435 21.9019C26.9763 21.8871 27.3064 21.9671 27.5955 22.1326C27.8846 22.2982 28.1206 22.5425 28.2762 22.837C29.2661 24.5565 30.4908 25.5892 32.7202 24.8824C33.7416 24.5585 34.1852 25.6546 34.2421 26.5224C34.2907 27.2642 33.8538 28.2524 34.5486 28.6712C37.7574 30.6054 37.2326 34.1117 37.216 36.7367C37.1895 40.9023 34.1672 44.4399 32.2722 48.0249Z"
          fill="#47B5CB"
        />
        <Path
          d="M249.504 87.0343C248.963 86.2539 248.509 85.2703 248.75 84.3227C249.538 81.2268 249.595 78.3413 247.354 75.7095C246.965 75.2521 247.077 74.2131 247.215 73.4925C247.55 71.8827 247.269 70.2062 246.428 68.7931C245.486 67.1658 245.545 65.5391 246.177 63.8287C246.837 62.0416 247.647 60.2693 247.607 58.3113C247.509 53.4601 246.814 48.6724 246.221 43.8627C245.845 40.8092 244.434 37.9479 244.536 34.9159C244.635 31.3751 244.204 27.8394 243.258 24.426C241.93 19.4858 242.697 14.7588 244.422 10.1067C245.152 8.13736 246.071 6.2387 246.885 4.29979C247.517 2.79485 247.53 1.33764 246.447 0H245.298C242.281 3.88452 238.606 7.40127 238.386 12.8136C238.327 13.9813 237.851 15.0889 237.044 15.9352C233.904 19.2162 232.876 23.3408 232.008 27.6026C231.46 30.2996 231.113 33.1867 229.211 35.3453C226.384 38.5531 225.58 42.4106 225.15 46.4447C224.835 49.4015 224.539 52.3603 224.185 55.8053C222.92 54.3227 223.077 53.1226 222.813 52.0273C221.684 47.3396 223.236 42.4284 221.126 37.736C219.154 33.3532 221.041 27.9437 217.911 23.6687C217.518 23.1308 217.798 21.9687 217.996 21.152C218.673 18.3689 219.426 15.6032 220.206 12.8469C220.535 11.6856 220.909 10.4988 219.507 9.87914C218.055 9.23741 217.525 10.5257 216.842 11.4214C213.977 15.1757 213.572 20.1711 210.326 23.7237C205.945 21.3817 205.882 21.3638 204.368 26.6562C203.265 30.5121 202.691 34.5516 201.271 38.2767C199.565 42.7533 199.329 47.1155 200.129 51.7686C200.719 55.1946 200.479 58.6763 197.984 61.5322C195.098 64.836 194.704 68.5206 196.282 72.5085C196.925 74.1358 197.436 75.8354 197.01 77.5493C195.803 82.403 197.681 87.2134 197.094 92.0523C197.013 92.4888 197.105 92.9397 197.351 93.3094C197.597 93.679 197.978 93.9383 198.411 94.0323C199.432 94.2151 200.074 93.283 200.24 92.5107C201.211 87.9947 203.912 83.7463 202.684 78.884C201.921 75.8639 202.798 73.4252 204.785 71.2569C205.795 70.1545 206.558 68.9821 206.442 67.4344C206.044 62.1089 207.602 57.0219 208.379 51.846C208.794 49.0819 209.164 46.4415 208.393 43.642C207.463 40.2662 209.173 37.364 210.536 34.4068C210.422 37.7875 210.479 40.9959 213.117 43.4613C215.827 45.9943 215.781 49.5392 216.822 52.7269C218.108 56.6646 219.336 60.522 219.08 64.7255C219.022 65.6771 219.232 66.9675 220.137 67.2467C222.992 68.1274 222.82 70.5321 223.317 72.6964C223.678 74.272 224.117 76.1713 226.262 75.913C228.358 75.6605 228.034 73.7404 228.082 72.252C228.266 66.5879 231.367 61.5196 231.423 55.8087C231.431 55.0094 232.334 54.1794 232.912 53.4325C234.746 51.0609 235.762 48.5153 235.139 45.4325C234.768 43.559 234.963 41.6175 235.699 39.855C239.74 43.2929 239.275 47.3418 237.381 51.7775C236.432 53.9981 238.361 69.2591 239.429 71.4699C239.722 72.1764 240.108 72.8407 240.577 73.4451C241.179 74.0662 241.592 74.8465 241.766 75.6941C241.939 76.5418 241.867 77.4214 241.558 78.2294C240.192 82.2824 243.776 85.1513 244.124 88.8004C244.139 88.9496 244.352 89.1147 244.51 89.21C246.493 90.4041 247.292 92.0032 247.042 94.4347C246.773 97.0564 249.333 95.7828 250.483 96.1978C251.613 96.6059 251.58 95.1009 251.493 94.121C251.271 91.6322 250.992 89.1834 249.504 87.0343Z"
          fill="#47B5CB"
        />
        <Path
          d="M360.515 50.0315C355.127 54.2009 349.003 57.3184 342.462 59.221C342.285 58.4733 342.531 57.4715 341.936 56.6299C339.448 53.1131 338.819 49.1351 339.033 44.931C339.09 43.8091 339.274 42.5387 338.351 41.6578C335.997 39.4114 335.433 36.3975 334.658 33.459C333.902 30.3957 332.721 27.4534 331.149 24.7176C330.864 24.2385 330.491 23.666 329.83 23.788C329.323 23.8816 329.127 24.3898 329.1 24.8977C328.928 28.2302 328.415 31.5784 328.144 34.8276C327.531 42.1784 329.209 49.5624 330.642 56.8435C330.778 57.397 331.119 57.8782 331.596 58.1899C332.807 58.9022 332.612 59.7876 332.284 60.8885C331.576 63.2646 330.464 65.6832 330.494 68.0719C330.528 70.6581 329.614 71.69 327.362 72.1875C326.525 72.3927 325.719 72.707 324.965 73.1224C324.164 73.5427 322.601 73.7797 322.95 74.7938C323.692 76.9462 321.917 77.0662 320.979 77.9228C319.146 79.5974 316.461 80.872 318.266 84.204C318.742 85.083 317.803 85.734 317.186 86.3409C315.493 88.0071 313.829 89.8392 312.047 91.2464C309.626 93.1577 308.603 96.3502 305.578 97.5847C302.512 98.8361 300.171 101.141 297.818 103.395C296.479 104.678 295.891 106.163 296.425 108H298.723C301.861 104.75 305.14 101.766 309.898 101.085C310.941 100.932 311.931 100.525 312.781 99.9009C318.864 95.2637 323.269 89.1423 327.27 82.7651C328.369 81.0128 329.332 79.2989 331.139 78.3434C337.034 75.2273 340.133 68.4061 346.918 66.4862C347.191 66.3791 347.414 66.1754 347.546 65.914C349.386 62.3292 352.777 60.5208 355.993 58.5164C360.147 55.8344 364.051 52.7848 367.66 49.4043V47.6809C364.863 47.1869 362.47 48.5127 360.515 50.0315Z"
          fill="#47B5CB"
        />
        <Path
          d="M124.061 32.9345C121.606 33.3914 119.619 34.787 117.933 36.474C114.451 39.9598 109.758 41.5981 105.951 44.5779C105.279 45.1045 104.221 45.8601 103.336 45.1919C102.406 44.4899 103.039 43.4499 103.347 42.5557C103.723 41.4666 104.182 40.3245 103.899 39.1943C103.008 35.6356 102.75 32.1429 103.71 28.5108C104.085 27.0907 104.169 24.9841 101.917 24.632C99.4688 24.2492 96.9463 26.0666 97.1192 28.1762C97.7882 36.3397 94.8108 43.7847 92.8056 51.4255C92.4662 52.7192 91.8053 54.1819 93.2706 55.0494C94.8017 55.9558 95.3426 54.2677 96.2099 53.5018C96.4357 53.3493 96.68 53.2263 96.9369 53.1358C97.2692 53.9635 96.7949 54.7026 96.8348 55.4327C96.979 58.0631 94.9287 60.4092 95.5156 62.8868C95.8601 64.4417 95.9037 66.0481 95.6441 67.6193C95.2209 70.8565 94.2281 73.9504 93.3767 77.0789C92.8523 79.0058 93.2838 80.8941 95.0959 81.3671C96.7336 81.7944 97.105 79.7512 97.6694 78.478C99.2727 74.8622 100.08 71.0216 100.634 67.1468C100.907 65.2423 102.581 65.2137 103.642 64.5379C104.719 63.8512 104.681 65.5098 105.211 66.0446C108.774 69.6406 109.244 74.861 112.003 79.0166C114.503 82.7423 116.244 86.9244 117.127 91.3237C117.43 92.9135 118.385 92.9518 119.623 92.0287C121.899 90.3309 122.453 88.2624 121.491 85.5961C120.141 81.9182 119.192 78.1052 118.66 74.2235C118.261 71.2059 116.064 68.7302 115.439 65.7008C115.349 65.4298 115.197 65.1839 114.994 64.9835C114.79 64.783 114.543 64.6336 114.27 64.5477C110.129 63.8941 108.891 60.2393 106.949 57.4205C104.629 54.0521 104.938 53.2371 108.728 51.847C111.633 50.7816 113.663 49.049 114.414 45.9482C114.689 44.8111 115.299 43.665 116.405 43.2577C120.556 41.7287 122.036 37.3849 125.332 34.9721C125.838 34.6016 126.38 34.0157 125.888 33.2614C125.421 32.5443 124.7 32.8156 124.061 32.9345Z"
          fill="#47B5CB"
        />
        <Path
          d="M179.812 69.6506C177.492 64.3501 177.916 59.0215 179.539 53.6649C179.818 52.7455 180.305 51.7051 179.827 50.8762C178.507 48.5855 179.315 46.4202 179.93 44.2234C180.329 42.7985 180.898 41.1586 178.965 40.6362C177.182 40.154 176.454 41.8176 176.022 43.1464C175.284 45.4133 174.82 47.7685 174.214 50.0794C172.541 56.4553 170.469 59.4255 165.463 62.547C166.091 59.0552 166.693 55.6777 167.309 52.3029C167.586 50.789 168.121 48.9099 166.294 48.3051C164.015 47.551 163.873 49.9036 163.234 51.2545C162.393 53.0316 161.726 54.8903 161.076 56.4874C157.911 55.545 156.975 53.2159 156.292 50.6287C156.246 50.414 156.158 50.2106 156.033 50.0304C155.907 49.8503 155.747 49.6969 155.562 49.5793C155.377 49.4617 155.17 49.3823 154.953 49.3457C154.737 49.3091 154.515 49.3161 154.302 49.3662C153.21 49.5778 153.072 50.5072 153.029 51.3596C152.924 53.4601 152.856 55.5657 152.876 57.6682C152.89 59.0558 152.79 60.3387 151.455 61.4091C150.566 60.6155 150.491 59.6411 150.281 58.7111C149.259 54.5308 148.524 50.2855 148.08 46.005C147.994 45.0076 148.09 43.6451 146.756 43.4503C145.432 43.257 144.73 44.339 144.279 45.4548C143.958 46.2495 143.74 47.0849 143.45 47.8931C143.199 48.5961 143.007 49.2349 142.138 49.6076C139.108 50.9086 138.312 53.9109 138.715 56.4973C139.183 59.4952 138.75 62.1769 137.338 64.4602C135.434 67.5364 136.611 70.3506 137.086 73.2914C137.105 73.6332 137.252 73.9552 137.497 74.1943C137.742 74.4334 138.068 74.5724 138.41 74.584C139.083 74.601 139.332 74.0752 139.651 73.5738C141.188 71.1575 141.165 68.2032 142.426 65.6807C142.881 64.7711 142.876 63.314 144.037 63.2726C145.335 63.2263 145.698 64.5739 146.098 65.6945C146.932 68.031 147.86 70.335 148.792 72.6351C149.121 73.4488 149.59 74.2648 150.682 73.9797C151.723 73.708 151.812 72.8123 151.811 71.9143C151.81 69.9223 151.811 67.9304 151.811 65.6088C152.917 66.4787 152.731 67.2763 152.74 68.0026C152.759 69.4062 153.359 70.6932 154.744 70.6859C156.146 70.6786 156.671 69.2825 156.753 67.9625C156.863 66.1724 157.172 64.3678 156.57 62.5055C159.058 64.27 159.989 67.01 161.371 69.4359C162.059 70.6432 162.748 72.1031 164.274 70.3286C165.165 69.2916 165.172 70.2203 165.582 70.6912C168.399 73.9237 171.414 74.196 174.997 71.5932C175.229 72.2208 175.416 72.8658 175.698 73.467C176.33 74.8169 177.13 76.1802 178.888 75.689C180.65 75.1966 180.69 73.6573 180.419 72.1487C180.314 71.2953 180.11 70.457 179.812 69.6506ZM145.218 57.9731C144.579 58.1399 143.903 58.1006 143.287 57.861C142.737 57.6417 143.095 57.0302 143.252 56.6193C143.61 55.6757 144.018 54.7507 144.533 53.5112C144.855 54.7765 145.122 55.6784 145.304 56.597C145.394 57.0556 146.107 57.7056 145.218 57.9731ZM172.61 66.9809C172.041 67.5147 171.576 68.6687 170.563 68.0164C169.709 67.467 170.132 66.4594 170.275 65.6236C170.607 63.6973 172.332 63.3622 173.657 62.3225C174.385 64.337 173.888 65.7831 172.61 66.9809Z"
          fill="#47B5CB"
        />
        <Path
          d="M296.798 79.493C294.594 74.4321 296.499 68.3794 292.944 63.6535C292.85 63.5296 292.899 63.2756 292.926 63.0886C293.165 61.4091 292.162 60.2299 291.39 58.901C290.684 57.6861 288.391 57.1539 288.993 55.7691C289.494 54.6156 291.371 54.0445 292.664 53.2579C293.242 52.9239 293.845 52.6338 294.467 52.3901C298.782 50.5884 299.74 47.3652 297.128 43.4454C296.239 42.1118 295.281 40.9079 295.813 39.0076C296.261 37.4088 294.898 36.4439 293.53 36.2684C289.532 35.756 285.125 34.3011 283 39.6922C282.911 39.9181 282.59 40.0526 282.221 40.3598C281.279 38.8139 281.684 37.2936 281.293 35.9319C281.018 34.9771 281.152 33.544 279.719 33.5617C278.219 33.5802 278.119 34.851 278.034 36.0703C277.778 40.9404 277.259 45.7932 276.481 50.6075C276.259 51.8412 276.054 53.3452 277.163 54.101C279.225 55.5052 278.773 57.0412 277.961 58.8218C277.695 59.4053 277.41 60.2316 277.624 60.7416C279.152 64.3906 277.578 68.1146 277.997 71.7839C278.159 73.2003 277.737 74.9916 279.739 75.1139C281.686 75.233 281.878 73.3897 281.944 72.0143C282.087 69.0453 283.396 66.4375 284.067 63.0096C287.257 66.9967 290.855 69.9197 291.137 75.017C291.246 76.9851 291.909 78.9594 292.558 80.8492C293.079 82.3675 293.875 84.238 295.922 83.5907C298.115 82.8971 297.455 81.0005 296.798 79.493ZM288.414 48.2107C288.388 49.2303 287.858 50.3136 286.992 50.5042C285.795 50.7678 285.451 49.3097 284.757 48.599C283.799 47.617 284.75 47.146 285.457 46.6653C286.716 45.8109 286.63 43.1964 289.431 43.8856C288.058 45.216 288.452 46.7405 288.414 48.2107Z"
          fill="#47B5CB"
        />
        <Path
          d="M272.3 54.5124C274.2 50.9653 272.843 47.5397 271.479 44.3207C270.196 41.2927 264.952 39.0259 262.42 40.5665C258.55 42.9982 255.329 46.3337 253.034 50.2859C252.198 51.6789 251.946 53.4901 250.964 54.9386C250.56 55.4839 250.335 56.1418 250.321 56.8208C250.307 57.4998 250.505 58.1663 250.887 58.7277C251.966 60.3049 252.445 62.2162 252.237 64.1158C252.074 66.278 251.501 68.3133 252.533 69.1933C254.827 71.1479 258.36 71.1801 260.381 73.858C260.803 74.4172 261.83 73.9358 262.583 73.9279C267.409 73.8772 270.055 70.6136 272.63 67.2245C275.098 63.9774 275.224 62.5383 272.893 59.2537C271.782 57.6883 271.357 56.275 272.3 54.5124ZM262.859 64.8894C261.092 64.6255 257.177 58.9629 257.929 57.3466C259.051 54.936 260.676 52.7593 261.197 49.8746C260.89 52.4535 261.497 54.3587 263.732 55.6265C263.924 55.755 264.082 55.9282 264.192 56.1313C264.302 56.3344 264.362 56.5613 264.365 56.7923C263.64 59.1278 263.439 61.3907 264.315 63.7722C264.687 64.7842 263.683 65.0125 262.859 64.8894Z"
          fill="#47B5CB"
        />
        <Path
          d="M296.376 56.6529C296.364 56.8707 296.397 57.0886 296.472 57.2935C296.546 57.4985 296.661 57.6863 296.81 57.8458C296.959 58.0054 297.138 58.1334 297.337 58.2222C297.536 58.311 297.751 58.3588 297.969 58.3628C299.433 58.504 300.699 59.0985 302.022 59.6726C303.437 60.2865 304.233 60.7949 303.387 62.5209C301.607 66.1534 302.547 70.1546 302.674 73.8689C302.854 77.0803 302.731 80.3014 302.306 83.4896C301.957 85.3775 301.988 87.316 302.398 89.1915C302.579 89.9118 302.872 90.7527 303.782 90.8319C304.783 90.919 304.936 90.0462 305.198 89.3254C306.264 86.5538 306.851 83.6213 306.935 80.653C306.979 77.0771 308.878 73.8091 308.929 70.3693C308.979 67.0455 310.316 63.9031 309.752 60.3658C312.754 63.0633 316.685 61.4794 319.885 63.2375C322.468 64.6566 322.958 61.4915 324.209 60.2263C324.989 59.4379 324.189 58.4434 323.425 58.1429C319.452 56.5803 315.622 54.4161 311.218 54.3789C309.329 54.3629 309.264 53.5733 309.863 52.2957C311.422 48.9753 311.455 45.2177 312.933 41.8719C313.316 41.0057 313.477 39.7207 312.831 39.11C310.625 37.0239 312.188 35.3765 313.178 33.596C313.579 32.9468 313.901 32.2524 314.139 31.5273C314.391 30.6048 314.55 29.572 313.499 28.9732C313.079 28.7273 312.589 28.6302 312.108 28.6976C311.626 28.7649 311.181 28.9927 310.845 29.3442C310.242 29.9466 309.739 30.6414 309.355 31.4023C306.922 36.0687 305.321 41.1235 304.624 46.3397C303.991 50.6007 303.677 55.0189 297.759 55.1527C297.565 55.1432 297.371 55.1765 297.191 55.2503C297.011 55.324 296.849 55.4364 296.717 55.5794C296.585 55.7225 296.486 55.8928 296.427 56.0783C296.368 56.2638 296.351 56.4599 296.376 56.6529Z"
          fill="#47B5CB"
        />
        <Path
          d="M88.3103 65.0036C87.2093 65.6595 86.1626 65.7447 85.0952 65.0117C82.3016 63.0936 79.4924 63.6185 76.6887 64.9641C76.0965 65.2483 75.5145 65.8171 74.9219 65.115C74.433 64.5358 74.6481 63.8421 74.9677 63.2307C75.4541 62.3003 75.9763 61.3885 76.479 60.4665C77.0009 59.5097 77.5379 58.2903 76.6527 57.5425C74.1811 55.4544 76.1325 54.32 77.4359 53.0447C78.9338 51.5789 81.3013 50.4312 81.839 48.6955C82.5503 46.3987 83.7873 46.4869 85.4038 46.4634C87.2793 46.436 89.0682 46.132 90.2707 44.524C91.2123 43.2648 91.0612 41.8971 89.3939 41.7339C86.8839 41.4882 84.2721 42.1714 82.3344 40.6816C81.8109 40.6939 81.2898 40.757 80.7784 40.8701C76.7886 42.4074 74.7181 46.4168 71.0941 48.461C70.699 48.6838 70.8219 49.7255 70.5821 50.3395C69.2832 53.6646 69.3139 57.4645 66.8211 60.3846C66.0561 61.2808 65.2476 62.9848 66.4011 63.7236C67.8382 64.6443 67.3857 65.465 67.0451 66.4526C66.4017 68.3185 67.1284 69.1554 68.9813 69.3212C69.7801 69.3927 71.1919 69.1278 71.0765 70.1967C70.8055 72.708 73.4893 74.0832 73.1814 76.5552C73.1568 76.9474 73.278 77.3349 73.5217 77.6431C73.7654 77.9514 74.1144 78.1588 74.5017 78.2254C75.4039 78.3834 75.9081 77.7314 76.3029 77.0673C76.7408 76.3306 77.1081 75.5498 77.4747 74.7733C78.2696 73.0895 79.1826 72.0971 81.3851 71.6793C83.7859 71.2239 86.082 69.9784 88.6517 69.7142C89.6833 69.6081 90.4111 68.6454 90.8709 67.6342C91.2868 66.7196 91.5247 65.8208 90.8326 64.9387C89.9751 63.8458 89.0986 64.5339 88.3103 65.0036Z"
          fill="#47B5CB"
        />
        <Path
          d="M61.1374 50.9268C61.9522 48.0992 62.066 45.1156 61.4691 42.2341C61.2306 40.9185 61.2001 39.3169 59.5906 39.8193C58.0578 40.2979 55.2239 39.5796 55.3625 42.507C55.4806 45.0032 53.5613 47.6936 55.9808 50.0479C56.1885 50.25 55.8533 51.1543 55.6081 51.6526C54.4955 53.9137 53.8606 56.0339 55.9415 58.2261C56.4327 58.7436 56.1961 60.064 56.1051 60.9965C55.9655 62.4243 56.2101 63.8573 56.1509 65.225C56.0283 68.0586 57.9953 70.5178 57.2448 73.3341C57.2636 74.4894 57.3549 75.6424 57.5184 76.7862C57.7108 77.75 58.3345 78.666 59.4415 78.5732C60.3918 78.4934 60.907 77.6274 60.8786 76.6992C60.8271 73.0702 61.4408 69.4624 62.6894 66.0546C62.9341 65.2245 62.878 64.3347 62.5309 63.5419C61.6932 61.7608 61.9896 60.2628 63.0541 58.7192C64.142 57.1413 64.0014 55.6699 62.357 54.4955C61.7897 54.1175 61.3628 53.563 61.1423 52.9179C60.9218 52.2728 60.9201 51.573 61.1374 50.9268Z"
          fill="#47B5CB"
        />
        <Path
          d="M57.7335 36.091C59.3293 36.5415 61.1502 36.0127 61.0772 34.4365C60.9514 31.7172 64.5466 28.3755 60.0202 26.2148C59.8335 26.1257 59.8482 25.5217 59.845 25.1569C59.8315 23.5755 59.2914 22.4575 57.476 22.8101C55.7391 23.1474 54.8097 24.2338 55.0921 26.0964C55.213 26.6428 55.3644 27.1821 55.5456 27.7116C55.1592 28.6666 54.6205 29.7826 54.254 30.9526C53.6478 32.8876 55.3694 35.4236 57.7335 36.091Z"
          fill="#47B5CB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_28_9">
          <Rect width="367.66" height="108" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}