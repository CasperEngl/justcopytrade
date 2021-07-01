import { ComponentProps } from 'react'
import clsx from 'clsx'

type Props = ComponentProps<'svg'>

export const Logo = (props: Props) => {
  const { className, ...rest } = props

  return (
    <svg
      className={clsx('fill-current', className)}
      viewBox="0 0 342 35"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M7.568 27.36C6.2 27.36 4.928 27.084 3.752 26.532C2.576 25.956 1.616 25.164 0.872 24.156C0.584 23.724 0.44 23.304 0.44 22.896C0.44 22.32 0.668 21.828 1.124 21.42C1.58 20.988 2.048 20.772 2.528 20.772C3.152 20.772 3.824 21.132 4.544 21.852C5 22.284 5.468 22.596 5.948 22.788C6.428 22.956 6.968 23.04 7.568 23.04C8.264 23.04 8.924 22.86 9.548 22.5C10.196 22.14 10.712 21.66 11.096 21.06C11.48 20.436 11.672 19.788 11.672 19.116V3.996C11.672 3.372 11.9 2.856 12.356 2.448C12.812 2.016 13.34 1.8 13.94 1.8C14.612 1.8 15.152 2.004 15.56 2.412C15.968 2.82 16.172 3.348 16.172 3.996V19.116C16.172 20.556 15.788 21.912 15.02 23.184C14.252 24.456 13.208 25.476 11.888 26.244C10.568 26.988 9.128 27.36 7.568 27.36ZM35.4953 7.74C36.1193 7.74 36.6353 7.956 37.0433 8.388C37.4513 8.796 37.6553 9.312 37.6553 9.936V19.08C37.6553 21.672 36.9353 23.7 35.4953 25.164C34.0793 26.628 32.0513 27.36 29.4113 27.36C26.7713 27.36 24.7433 26.628 23.3273 25.164C21.9113 23.7 21.2033 21.672 21.2033 19.08V9.936C21.2033 9.312 21.4073 8.796 21.8153 8.388C22.2233 7.956 22.7393 7.74 23.3633 7.74C23.9873 7.74 24.5033 7.956 24.9113 8.388C25.3193 8.796 25.5233 9.312 25.5233 9.936V19.08C25.5233 20.544 25.8473 21.636 26.4953 22.356C27.1433 23.052 28.1153 23.4 29.4113 23.4C30.7313 23.4 31.7153 23.052 32.3633 22.356C33.0113 21.636 33.3353 20.544 33.3353 19.08V9.936C33.3353 9.312 33.5393 8.796 33.9473 8.388C34.3553 7.956 34.8713 7.74 35.4953 7.74ZM41.2162 24.012C41.0002 23.724 40.8922 23.364 40.8922 22.932C40.8922 22.308 41.2042 21.78 41.8282 21.348C42.1642 21.132 42.5122 21.024 42.8722 21.024C43.3762 21.024 43.8562 21.252 44.3122 21.708C45.0322 22.452 45.7762 23.004 46.5442 23.364C47.3362 23.724 48.2842 23.904 49.3882 23.904C51.2602 23.832 52.1962 23.124 52.1962 21.78C52.1962 21.084 51.8722 20.556 51.2242 20.196C50.6002 19.836 49.6162 19.476 48.2722 19.116C46.8802 18.732 45.7402 18.348 44.8522 17.964C43.9882 17.58 43.2322 17.004 42.5842 16.236C41.9602 15.444 41.6482 14.388 41.6482 13.068C41.6482 11.916 41.9722 10.92 42.6202 10.08C43.2922 9.216 44.1562 8.556 45.2122 8.1C46.2922 7.62 47.4322 7.38 48.6322 7.38C49.8562 7.38 51.0802 7.608 52.3042 8.064C53.5282 8.52 54.4882 9.192 55.1842 10.08C55.4962 10.464 55.6522 10.896 55.6522 11.376C55.6522 11.928 55.4242 12.384 54.9682 12.744C54.6322 13.008 54.2482 13.14 53.8162 13.14C53.2882 13.14 52.8562 12.972 52.5202 12.636C52.0882 12.108 51.5242 11.688 50.8282 11.376C50.1562 11.064 49.3882 10.908 48.5242 10.908C46.7002 10.908 45.7882 11.568 45.7882 12.888C45.7882 13.416 45.9562 13.848 46.2922 14.184C46.6282 14.496 47.0482 14.748 47.5522 14.94C48.0802 15.108 48.8122 15.324 49.7482 15.588C51.0442 15.948 52.1242 16.32 52.9882 16.704C53.8522 17.088 54.5842 17.676 55.1842 18.468C55.7842 19.26 56.0842 20.304 56.0842 21.6C56.0842 22.776 55.7362 23.808 55.0402 24.696C54.3442 25.56 53.4442 26.22 52.3402 26.676C51.2602 27.132 50.1442 27.36 48.9922 27.36C47.4082 27.36 45.9322 27.096 44.5642 26.568C43.1962 26.04 42.0802 25.188 41.2162 24.012ZM68.9874 22.932C69.3234 22.932 69.6234 23.1 69.8874 23.436C70.1754 23.748 70.3194 24.168 70.3194 24.696C70.3194 25.344 69.9594 25.896 69.2394 26.352C68.5434 26.784 67.7514 27 66.8634 27C65.3754 27 64.1154 26.688 63.0834 26.064C62.0754 25.416 61.5714 24.06 61.5714 21.996V12.06H59.9154C59.3394 12.06 58.8594 11.868 58.4754 11.484C58.0914 11.1 57.8994 10.62 57.8994 10.044C57.8994 9.492 58.0914 9.036 58.4754 8.676C58.8594 8.292 59.3394 8.1 59.9154 8.1H61.5714V5.796C61.5714 5.172 61.7754 4.656 62.1834 4.248C62.6154 3.816 63.1434 3.6 63.7674 3.6C64.3674 3.6 64.8714 3.816 65.2794 4.248C65.6874 4.656 65.8914 5.172 65.8914 5.796V8.1H68.4474C69.0234 8.1 69.5034 8.292 69.8874 8.676C70.2714 9.06 70.4634 9.54 70.4634 10.116C70.4634 10.668 70.2714 11.136 69.8874 11.52C69.5034 11.88 69.0234 12.06 68.4474 12.06H65.8914V21.816C65.8914 22.32 66.0234 22.692 66.2874 22.932C66.5514 23.148 66.9114 23.256 67.3674 23.256C67.5594 23.256 67.8234 23.208 68.1594 23.112C68.4474 22.992 68.7234 22.932 68.9874 22.932ZM92.4298 3.024C93.1738 3.408 93.5458 4.02 93.5458 4.86C93.5458 5.364 93.3658 5.856 93.0058 6.336C92.6218 6.84 92.1298 7.092 91.5298 7.092C91.1218 7.092 90.7138 6.984 90.3058 6.768C89.1298 6.216 87.8578 5.94 86.4898 5.94C84.8098 5.94 83.3458 6.3 82.0978 7.02C80.8498 7.716 79.8898 8.712 79.2178 10.008C78.5458 11.28 78.2098 12.744 78.2098 14.4C78.2098 17.232 78.9658 19.38 80.4778 20.844C82.0138 22.308 84.0178 23.04 86.4898 23.04C87.9538 23.04 89.2258 22.764 90.3058 22.212C90.7378 22.02 91.1218 21.924 91.4578 21.924C92.0818 21.924 92.6098 22.188 93.0418 22.716C93.4018 23.172 93.5818 23.664 93.5818 24.192C93.5818 24.576 93.4858 24.924 93.2938 25.236C93.1018 25.548 92.8258 25.788 92.4658 25.956C90.5938 26.892 88.6018 27.36 86.4898 27.36C84.1378 27.36 81.9778 26.868 80.0098 25.884C78.0418 24.876 76.4698 23.4 75.2938 21.456C74.1178 19.512 73.5298 17.16 73.5298 14.4C73.5298 11.952 74.0818 9.756 75.1858 7.812C76.3138 5.868 77.8618 4.356 79.8298 3.276C81.7978 2.172 84.0178 1.62 86.4898 1.62C88.6258 1.62 90.6058 2.088 92.4298 3.024ZM115.504 17.388C115.504 19.308 115.072 21.036 114.208 22.572C113.344 24.084 112.156 25.26 110.644 26.1C109.156 26.94 107.512 27.36 105.712 27.36C103.888 27.36 102.232 26.94 100.744 26.1C99.2562 25.26 98.0802 24.084 97.2162 22.572C96.3522 21.036 95.9202 19.308 95.9202 17.388C95.9202 15.468 96.3522 13.752 97.2162 12.24C98.0802 10.704 99.2562 9.516 100.744 8.676C102.232 7.812 103.888 7.38 105.712 7.38C107.512 7.38 109.156 7.812 110.644 8.676C112.156 9.516 113.344 10.704 114.208 12.24C115.072 13.752 115.504 15.468 115.504 17.388ZM111.184 17.388C111.184 16.212 110.932 15.168 110.428 14.256C109.948 13.32 109.288 12.6 108.448 12.096C107.632 11.592 106.72 11.34 105.712 11.34C104.704 11.34 103.78 11.592 102.94 12.096C102.124 12.6 101.464 13.32 100.96 14.256C100.48 15.168 100.24 16.212 100.24 17.388C100.24 18.564 100.48 19.608 100.96 20.52C101.464 21.432 102.124 22.14 102.94 22.644C103.78 23.148 104.704 23.4 105.712 23.4C106.72 23.4 107.632 23.148 108.448 22.644C109.288 22.14 109.948 21.432 110.428 20.52C110.932 19.608 111.184 18.564 111.184 17.388ZM129.085 7.38C130.741 7.38 132.241 7.812 133.585 8.676C134.929 9.516 135.985 10.692 136.753 12.204C137.545 13.716 137.941 15.432 137.941 17.352C137.941 19.272 137.557 21 136.789 22.536C136.021 24.048 134.965 25.236 133.621 26.1C132.301 26.94 130.837 27.36 129.229 27.36C128.077 27.36 126.985 27.132 125.953 26.676C124.945 26.196 124.105 25.62 123.433 24.948V32.004C123.433 32.628 123.229 33.144 122.821 33.552C122.413 33.984 121.897 34.2 121.273 34.2C120.649 34.2 120.133 33.996 119.725 33.588C119.317 33.18 119.113 32.652 119.113 32.004V9.936C119.113 9.312 119.317 8.796 119.725 8.388C120.133 7.956 120.649 7.74 121.273 7.74C121.897 7.74 122.413 7.956 122.821 8.388C123.229 8.796 123.433 9.312 123.433 9.936V10.08C124.009 9.36 124.813 8.736 125.845 8.208C126.877 7.656 127.957 7.38 129.085 7.38ZM128.545 23.4C130.081 23.4 131.341 22.824 132.325 21.672C133.309 20.52 133.801 19.08 133.801 17.352C133.801 15.624 133.309 14.196 132.325 13.068C131.365 11.916 130.105 11.34 128.545 11.34C126.985 11.34 125.713 11.916 124.729 13.068C123.745 14.196 123.253 15.624 123.253 17.352C123.253 19.08 123.745 20.52 124.729 21.672C125.713 22.824 126.985 23.4 128.545 23.4ZM155.835 7.74C156.459 7.74 156.975 7.956 157.383 8.388C157.791 8.796 157.995 9.312 157.995 9.936V25.236C157.995 28.356 157.155 30.624 155.475 32.04C153.795 33.48 151.551 34.2 148.743 34.2C147.927 34.2 147.087 34.128 146.223 33.984C145.383 33.864 144.699 33.696 144.171 33.48C142.995 32.976 142.407 32.28 142.407 31.392C142.407 31.224 142.443 31.032 142.515 30.816C142.659 30.288 142.899 29.88 143.235 29.592C143.595 29.328 143.979 29.196 144.387 29.196C144.627 29.196 144.855 29.232 145.071 29.304C145.239 29.376 145.527 29.496 145.935 29.664C146.367 29.832 146.811 29.964 147.267 30.06C147.747 30.18 148.239 30.24 148.743 30.24C150.447 30.24 151.695 29.868 152.487 29.124C153.303 28.404 153.711 27.156 153.711 25.38V25.02C152.463 26.58 150.519 27.36 147.879 27.36C146.631 27.36 145.527 27.072 144.567 26.496C143.607 25.896 142.863 25.08 142.335 24.048C141.807 22.992 141.543 21.792 141.543 20.448V9.936C141.543 9.312 141.747 8.796 142.155 8.388C142.563 7.956 143.079 7.74 143.703 7.74C144.327 7.74 144.843 7.956 145.251 8.388C145.659 8.796 145.863 9.312 145.863 9.936V19.152C145.863 20.664 146.187 21.756 146.835 22.428C147.507 23.076 148.479 23.4 149.751 23.4C150.999 23.4 151.959 23.04 152.631 22.32C153.327 21.576 153.675 20.52 153.675 19.152V9.936C153.675 9.312 153.879 8.796 154.287 8.388C154.695 7.956 155.211 7.74 155.835 7.74ZM179.24 1.8C179.888 1.8 180.416 1.992 180.824 2.376C181.232 2.76 181.436 3.264 181.436 3.888C181.436 4.512 181.232 5.016 180.824 5.4C180.416 5.76 179.888 5.94 179.24 5.94H173.588V24.804C173.588 25.428 173.36 25.956 172.904 26.388C172.448 26.796 171.884 27 171.212 27C170.54 27 169.988 26.796 169.556 26.388C169.124 25.956 168.908 25.428 168.908 24.804V5.94H163.256C162.608 5.94 162.08 5.748 161.672 5.364C161.264 4.98 161.06 4.476 161.06 3.852C161.06 3.252 161.264 2.76 161.672 2.376C162.104 1.992 162.632 1.8 163.256 1.8H179.24ZM192.719 7.38C193.439 7.38 194.039 7.584 194.519 7.992C195.023 8.4 195.275 8.88 195.275 9.432C195.275 10.176 195.083 10.74 194.699 11.124C194.315 11.484 193.859 11.664 193.331 11.664C192.971 11.664 192.563 11.58 192.107 11.412C192.035 11.388 191.867 11.34 191.603 11.268C191.363 11.196 191.099 11.16 190.811 11.16C190.187 11.16 189.587 11.352 189.011 11.736C188.435 12.12 187.955 12.708 187.571 13.5C187.211 14.268 187.031 15.192 187.031 16.272V24.804C187.031 25.428 186.827 25.956 186.419 26.388C186.011 26.796 185.495 27 184.871 27C184.247 27 183.731 26.796 183.323 26.388C182.915 25.956 182.711 25.428 182.711 24.804V9.936C182.711 9.312 182.915 8.796 183.323 8.388C183.731 7.956 184.247 7.74 184.871 7.74C185.495 7.74 186.011 7.956 186.419 8.388C186.827 8.796 187.031 9.312 187.031 9.936V10.404C187.583 9.42 188.375 8.676 189.407 8.172C190.439 7.644 191.543 7.38 192.719 7.38ZM213.487 7.38C214.111 7.38 214.627 7.584 215.035 7.992C215.443 8.4 215.647 8.928 215.647 9.576V24.804C215.647 25.428 215.443 25.956 215.035 26.388C214.627 26.796 214.111 27 213.487 27C212.863 27 212.347 26.796 211.939 26.388C211.555 25.98 211.351 25.464 211.327 24.84C210.727 25.536 209.911 26.136 208.879 26.64C207.871 27.12 206.803 27.36 205.675 27.36C204.019 27.36 202.519 26.94 201.175 26.1C199.831 25.236 198.763 24.048 197.971 22.536C197.203 21.024 196.819 19.308 196.819 17.388C196.819 15.468 197.203 13.752 197.971 12.24C198.739 10.704 199.783 9.516 201.103 8.676C202.447 7.812 203.923 7.38 205.531 7.38C206.683 7.38 207.763 7.596 208.771 8.028C209.779 8.436 210.631 8.964 211.327 9.612V9.576C211.327 8.952 211.531 8.436 211.939 8.028C212.347 7.596 212.863 7.38 213.487 7.38ZM206.215 23.4C207.775 23.4 209.047 22.836 210.031 21.708C211.015 20.556 211.507 19.116 211.507 17.388C211.507 15.66 211.015 14.22 210.031 13.068C209.047 11.916 207.775 11.34 206.215 11.34C204.679 11.34 203.419 11.916 202.435 13.068C201.451 14.22 200.959 15.66 200.959 17.388C200.959 19.116 201.439 20.556 202.399 21.708C203.383 22.836 204.655 23.4 206.215 23.4ZM235.916 0.36C236.54 0.36 237.056 0.563999 237.464 0.971998C237.872 1.38 238.076 1.908 238.076 2.556V24.804C238.076 25.428 237.872 25.956 237.464 26.388C237.056 26.796 236.54 27 235.916 27C235.292 27 234.776 26.796 234.368 26.388C233.984 25.98 233.78 25.464 233.756 24.84C233.156 25.536 232.34 26.136 231.308 26.64C230.3 27.12 229.232 27.36 228.104 27.36C226.448 27.36 224.948 26.94 223.604 26.1C222.26 25.236 221.192 24.048 220.4 22.536C219.632 21.024 219.248 19.308 219.248 17.388C219.248 15.468 219.632 13.752 220.4 12.24C221.168 10.704 222.212 9.516 223.532 8.676C224.876 7.812 226.352 7.38 227.96 7.38C229.112 7.38 230.192 7.596 231.2 8.028C232.208 8.436 233.06 8.964 233.756 9.612V2.556C233.756 1.932 233.96 1.416 234.368 1.008C234.776 0.575999 235.292 0.36 235.916 0.36ZM228.644 23.4C230.204 23.4 231.476 22.836 232.46 21.708C233.444 20.556 233.936 19.116 233.936 17.388C233.936 15.66 233.444 14.22 232.46 13.068C231.476 11.916 230.204 11.34 228.644 11.34C227.108 11.34 225.848 11.916 224.864 13.068C223.88 14.22 223.388 15.66 223.388 17.388C223.388 19.116 223.868 20.556 224.828 21.708C225.812 22.836 227.084 23.4 228.644 23.4ZM260.038 16.92C260.014 17.496 259.786 17.964 259.354 18.324C258.922 18.684 258.418 18.864 257.842 18.864H245.962C246.25 20.28 246.91 21.396 247.942 22.212C248.974 23.004 250.138 23.4 251.434 23.4C252.418 23.4 253.186 23.316 253.738 23.148C254.29 22.956 254.722 22.764 255.034 22.572C255.37 22.356 255.598 22.212 255.718 22.14C256.15 21.924 256.558 21.816 256.942 21.816C257.446 21.816 257.878 21.996 258.238 22.356C258.598 22.716 258.778 23.136 258.778 23.616C258.778 24.264 258.442 24.852 257.77 25.38C257.098 25.932 256.198 26.4 255.07 26.784C253.942 27.168 252.802 27.36 251.65 27.36C249.634 27.36 247.87 26.94 246.358 26.1C244.87 25.26 243.718 24.108 242.902 22.644C242.086 21.156 241.678 19.488 241.678 17.64C241.678 15.576 242.11 13.764 242.974 12.204C243.838 10.644 244.978 9.456 246.394 8.64C247.81 7.8 249.322 7.38 250.93 7.38C252.514 7.38 254.002 7.812 255.394 8.676C256.81 9.54 257.938 10.704 258.778 12.168C259.618 13.632 260.038 15.216 260.038 16.92ZM250.93 11.34C248.146 11.34 246.502 12.648 245.998 15.264H255.43V15.012C255.334 14.004 254.842 13.14 253.954 12.42C253.066 11.7 252.058 11.34 250.93 11.34ZM265.549 26.964C264.853 26.964 264.313 26.784 263.929 26.424C263.569 26.04 263.389 25.5 263.389 24.804V24.192C263.389 23.496 263.569 22.968 263.929 22.608C264.313 22.224 264.853 22.032 265.549 22.032H266.017C266.713 22.032 267.241 22.224 267.601 22.608C267.985 22.968 268.177 23.496 268.177 24.192V24.804C268.177 25.5 267.985 26.04 267.601 26.424C267.241 26.784 266.713 26.964 266.017 26.964H265.549ZM280.994 7.38C283.034 7.38 284.678 7.704 285.926 8.352C287.174 8.976 287.798 9.816 287.798 10.872C287.798 11.4 287.642 11.868 287.33 12.276C287.018 12.66 286.61 12.852 286.106 12.852C285.722 12.852 285.41 12.804 285.17 12.708C284.93 12.588 284.69 12.444 284.45 12.276C284.234 12.084 284.018 11.928 283.802 11.808C283.562 11.688 283.202 11.58 282.722 11.484C282.266 11.388 281.894 11.34 281.606 11.34C279.806 11.34 278.39 11.904 277.358 13.032C276.35 14.136 275.846 15.588 275.846 17.388C275.846 19.116 276.362 20.556 277.394 21.708C278.426 22.836 279.746 23.4 281.354 23.4C282.53 23.4 283.406 23.256 283.982 22.968C284.126 22.896 284.318 22.776 284.558 22.608C284.822 22.416 285.062 22.272 285.278 22.176C285.494 22.08 285.758 22.032 286.07 22.032C286.67 22.032 287.138 22.224 287.474 22.608C287.834 22.992 288.014 23.484 288.014 24.084C288.014 24.66 287.678 25.2 287.006 25.704C286.334 26.208 285.446 26.616 284.342 26.928C283.238 27.216 282.062 27.36 280.814 27.36C278.966 27.36 277.334 26.928 275.918 26.064C274.526 25.2 273.446 24.012 272.678 22.5C271.91 20.964 271.526 19.26 271.526 17.388C271.526 15.444 271.922 13.716 272.714 12.204C273.53 10.692 274.658 9.516 276.098 8.676C277.538 7.812 279.17 7.38 280.994 7.38ZM309.637 17.388C309.637 19.308 309.205 21.036 308.341 22.572C307.477 24.084 306.289 25.26 304.777 26.1C303.289 26.94 301.645 27.36 299.845 27.36C298.021 27.36 296.365 26.94 294.877 26.1C293.389 25.26 292.213 24.084 291.349 22.572C290.485 21.036 290.053 19.308 290.053 17.388C290.053 15.468 290.485 13.752 291.349 12.24C292.213 10.704 293.389 9.516 294.877 8.676C296.365 7.812 298.021 7.38 299.845 7.38C301.645 7.38 303.289 7.812 304.777 8.676C306.289 9.516 307.477 10.704 308.341 12.24C309.205 13.752 309.637 15.468 309.637 17.388ZM305.317 17.388C305.317 16.212 305.065 15.168 304.561 14.256C304.081 13.32 303.421 12.6 302.581 12.096C301.765 11.592 300.853 11.34 299.845 11.34C298.837 11.34 297.913 11.592 297.073 12.096C296.257 12.6 295.597 13.32 295.093 14.256C294.613 15.168 294.373 16.212 294.373 17.388C294.373 18.564 294.613 19.608 295.093 20.52C295.597 21.432 296.257 22.14 297.073 22.644C297.913 23.148 298.837 23.4 299.845 23.4C300.853 23.4 301.765 23.148 302.581 22.644C303.421 22.14 304.081 21.432 304.561 20.52C305.065 19.608 305.317 18.564 305.317 17.388ZM335.458 7.38C337.834 7.38 339.478 8.112 340.39 9.576C341.302 11.016 341.758 13.02 341.758 15.588V24.804C341.758 25.428 341.554 25.956 341.146 26.388C340.738 26.796 340.222 27 339.598 27C338.974 27 338.458 26.796 338.05 26.388C337.642 25.956 337.438 25.428 337.438 24.804V15.588C337.438 14.268 337.174 13.236 336.646 12.492C336.142 11.724 335.242 11.34 333.946 11.34C332.602 11.34 331.546 11.748 330.778 12.564C330.034 13.356 329.662 14.364 329.662 15.588V24.804C329.662 25.428 329.458 25.956 329.05 26.388C328.642 26.796 328.126 27 327.502 27C326.878 27 326.362 26.796 325.954 26.388C325.546 25.956 325.342 25.428 325.342 24.804V15.588C325.342 14.268 325.078 13.236 324.55 12.492C324.046 11.724 323.146 11.34 321.85 11.34C320.506 11.34 319.45 11.748 318.682 12.564C317.938 13.356 317.566 14.364 317.566 15.588V24.804C317.566 25.428 317.362 25.956 316.954 26.388C316.546 26.796 316.03 27 315.406 27C314.782 27 314.266 26.796 313.858 26.388C313.45 25.956 313.246 25.428 313.246 24.804V9.936C313.246 9.312 313.45 8.796 313.858 8.388C314.266 7.956 314.782 7.74 315.406 7.74C316.03 7.74 316.546 7.956 316.954 8.388C317.362 8.796 317.566 9.312 317.566 9.936V10.512C318.214 9.648 319.03 8.916 320.014 8.316C321.022 7.692 322.138 7.38 323.362 7.38C326.386 7.38 328.318 8.7 329.158 11.34C329.71 10.332 330.538 9.42 331.642 8.604C332.77 7.788 334.042 7.38 335.458 7.38Z" />
    </svg>
  )
}
