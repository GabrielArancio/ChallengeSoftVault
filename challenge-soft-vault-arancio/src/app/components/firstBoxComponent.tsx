import * as React from "react";

type BlockProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  aspectRatio: string;
  contentAlign?: string;
};

const Block: React.FC<BlockProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  aspectRatio,
  contentAlign = "center",
}) => (
  <div
    className={`flex overflow-hidden relative flex-col grow p-11 text-${contentAlign} text-white ${aspectRatio} fill-white max-md:px-5 background-overlay`}
  >
    <img
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className="object-cover absolute inset-0 size-md"
    />
    <div className="relative text-xl font-bold">{title}</div>
    <div className="relative mt-7 text-base">{description}</div>
  </div>
);

function FirstBoxComponent(props: { title: string; description: string }) {
  return (
    <div
      className={`flex overflow-hidden relative flex-col grow p-11 text-center text-white  fill-white  `}
    >
      <svg width="376" height="245" viewBox="0 0 376 245">
        <path
          d="M1.05629 22C0.47533 22 0 22.4756 0 23.057V210.969C0 211.223 0.095066 211.476 0.264072 211.667L28.3613 243.641C28.562 243.873 28.8472 244 29.1536 244H309.028C309.355 244 309.661 243.852 309.862 243.598L354.258 186.774H372.944C373.525 186.774 374 186.299 374 185.717V75.3252C374 74.7439 373.525 74.2682 372.944 74.2682H354.797V23.057C354.797 22.4756 354.321 22 353.74 22H295.497C295.211 22 294.937 22.1163 294.747 22.3171L282.504 34.8319H263.639L253.171 22.3805C252.97 22.1374 252.675 22 252.358 22H1.05629Z"
          fill="white"
          fill-opacity="0.1"
        />
        <path
          d="M195.902 18.6251V16.0703H193.347C193.852 16.4255 194.325 16.8181 194.762 17.2542C195.179 17.678 195.565 18.1391 195.902 18.6251Z"
          fill="white"
        />
        <path
          d="M179.065 30.3838V32.9074H181.577C181.097 32.5709 180.648 32.1971 180.231 31.7858C179.801 31.3559 179.414 30.8885 179.065 30.39V30.3838Z"
          fill="white"
        />
        <path
          d="M187.478 18.3385V16.0703H179.065V20.3449L181.95 21.7843C182.954 19.7467 185.047 18.3385 187.471 18.3385H187.478Z"
          fill="white"
        />
        <path
          d="M212.57 15.8464C212.57 15.971 212.67 16.0707 212.795 16.0707H215.462V32.9075H212.795C212.67 32.9075 212.57 33.0072 212.57 33.1318C212.57 33.2564 212.67 33.3561 212.795 33.3561H215.91V15.6221H212.795C212.67 15.6221 212.57 15.7218 212.57 15.8464Z"
          fill="white"
        />
        <path
          d="M161.425 32.9075H158.758V16.0707H161.425C161.549 16.0707 161.649 15.971 161.649 15.8464C161.649 15.7218 161.549 15.6221 161.425 15.6221H158.309V24.4579H155.299C155.287 23.8348 154.776 23.3301 154.153 23.3301C153.53 23.3301 153 23.8473 153 24.4829C153 25.1184 153.517 25.6356 154.153 25.6356C154.72 25.6356 155.187 25.2244 155.281 24.6823H158.309V33.3561H161.425C161.549 33.3561 161.649 33.2564 161.649 33.1318C161.649 33.0072 161.549 32.9075 161.425 32.9075Z"
          fill="white"
        />
        <path
          d="M200.538 25.6481C200.139 25.5048 199.846 25.1496 199.79 24.7134C199.79 24.6636 199.778 24.62 199.778 24.5701C199.778 24.4642 199.797 24.3645 199.821 24.2648C199.921 23.8971 200.195 23.6105 200.551 23.4859C200.619 23.4609 200.694 23.4423 200.769 23.4298C200.227 16.5692 194.481 11.1543 187.484 11.1543C180.486 11.1543 174.741 16.5692 174.199 23.4236C174.274 23.4298 174.348 23.4485 174.417 23.4672C174.784 23.5856 175.071 23.8784 175.171 24.2523C175.196 24.352 175.214 24.4517 175.214 24.5576C175.214 24.6075 175.208 24.6573 175.202 24.701C175.146 25.1434 174.841 25.5048 174.423 25.6419C174.355 25.6668 174.28 25.6793 174.205 25.6917C174.822 32.4713 180.536 37.8052 187.477 37.8052C194.419 37.8052 200.133 32.4713 200.75 25.6855C200.675 25.673 200.6 25.6543 200.532 25.6294L200.538 25.6481ZM178.268 19.9465L178.623 20.121V15.6221H187.477V14.2201C188.923 14.2201 190.294 14.5192 191.546 15.055C191.927 15.2171 192.288 15.4102 192.643 15.6158H196.357V19.3172C197.211 20.7753 197.709 22.4577 197.753 24.2585H192.219L187.49 19.5291L182.704 24.3146L179.072 24.2897H178.623L177.215 24.2772C177.258 22.7444 177.626 21.2364 178.268 19.9403V19.9465ZM188.699 24.4953C188.699 25.1683 188.157 25.7104 187.484 25.7104C186.811 25.7104 186.269 25.1683 186.269 24.4953C186.269 23.8224 186.811 23.2802 187.484 23.2802C188.157 23.2802 188.699 23.8224 188.699 24.4953ZM189.783 37.3939L189.285 34.6148C190.5 34.3967 191.64 33.9605 192.674 33.3561H187.477V34.7768C185.577 34.7768 183.795 34.2596 182.268 33.3561H178.617V29.6797C178.367 29.256 178.137 28.8198 177.95 28.3587L178.617 28.0907V24.7072H179.065V27.91L181.77 26.8258C181.502 26.1715 181.346 25.4549 181.321 24.7134H182.748L187.477 29.4429L192.207 24.7134H193.615C193.559 26.3398 192.88 27.8041 191.802 28.8759C190.93 29.7358 189.808 30.3402 188.549 30.5583C188.2 30.6206 187.839 30.658 187.465 30.658V32.9075H193.36C193.84 32.571 194.294 32.1971 194.712 31.7859L195.834 32.9075H195.89V24.7134H196.338V33.3561H196.282L196.712 33.7861C194.861 35.6305 192.456 36.9141 189.777 37.3939H189.783Z"
          fill="white"
        />
        <path
          d="M220.727 23.3301C220.098 23.3301 219.593 23.8348 219.58 24.4579H216.353C216.29 24.4579 216.24 24.5078 216.24 24.5701C216.24 24.6324 216.29 24.6823 216.353 24.6823H219.599C219.693 25.2244 220.16 25.6356 220.727 25.6356C221.363 25.6356 221.88 25.1184 221.88 24.4829C221.88 23.8473 221.363 23.3301 220.727 23.3301Z"
          fill="white"
        />
        <path
          d="M187.172 24.4893C187.172 24.6575 187.309 24.8009 187.483 24.8009C187.658 24.8009 187.795 24.6638 187.795 24.4893C187.795 24.3148 187.658 24.1777 187.483 24.1777C187.309 24.1777 187.172 24.3148 187.172 24.4893Z"
          fill="white"
        />
        <path
          d="M187.085 0C175.75 0 165.961 7.68309 163.288 18.6812C163.232 18.9242 163.375 19.161 163.618 19.2233C163.861 19.2856 164.098 19.1361 164.16 18.893C166.74 8.29998 176.168 0.897295 187.085 0.897295C200.021 0.897295 210.552 11.3595 210.67 24.2644H204.726C204.651 18.2699 201.498 13.0045 196.781 9.96995L199.367 6.05674L197.46 4.95382L195.398 9.16612C194.538 8.71747 193.634 8.33737 192.699 8.0445L194.189 3.59541L192.064 3.02214L191.16 7.63324C190.219 7.42761 189.254 7.29675 188.263 7.25314L188.549 2.5548H186.344L186.668 7.25314C185.677 7.29675 184.711 7.42761 183.776 7.63324L182.835 3.00968L180.711 3.58295L182.243 8.05073C181.309 8.34983 180.411 8.72993 179.552 9.17235L177.439 4.93512L175.532 6.03805L178.181 9.96995C177.358 10.4996 176.585 11.0853 175.869 11.7396L172.722 8.18159L171.164 9.73939L174.747 12.8612C174.093 13.5778 173.501 14.3505 172.971 15.173L169.002 12.5434L167.899 14.4502L172.174 16.5439C171.725 17.4038 171.351 18.3011 171.052 19.2295L166.541 17.7216L165.967 19.8464L170.635 20.7624C170.385 21.8965 170.248 23.068 170.23 24.2706H165.999C165.849 23.1427 164.896 22.2704 163.73 22.2704C162.459 22.2704 161.431 23.2985 161.431 24.5697C161.431 25.8409 162.459 26.869 163.73 26.869C165.002 26.869 165.936 25.9156 166.017 24.713H170.23C170.242 25.8845 170.373 27.0248 170.61 28.1215L165.949 29.0686L166.516 31.1935L171.015 29.6544C171.308 30.589 171.682 31.4863 172.124 32.3462L167.862 34.4711L168.965 36.3778L172.909 33.7233C173.432 34.5459 174.018 35.3248 174.672 36.0414L171.114 39.1944L172.672 40.7522L175.794 37.1692C176.511 37.8297 177.277 38.4217 178.1 38.9576L175.483 42.9144L177.389 44.0173L179.471 39.7614C180.324 40.21 181.228 40.5964 182.156 40.8955L180.654 45.3757L182.786 45.949L183.689 41.3192C184.63 41.5311 185.59 41.6681 186.58 41.718L186.294 46.4226H188.5L188.176 41.7242C189.166 41.6868 190.132 41.5622 191.073 41.3628L192.008 45.9677L194.133 45.3944L192.612 40.9578C193.553 40.6649 194.45 40.291 195.317 39.8486L197.41 44.0485L199.317 42.9455L196.7 39.0573C197.529 38.5338 198.307 37.9419 199.03 37.2876L202.133 40.7958L203.691 39.238L200.164 36.166C200.825 35.4494 201.423 34.6767 201.953 33.8542L205.853 36.4339L206.956 34.5272L202.763 32.4771C203.211 31.6172 203.598 30.7137 203.897 29.779L208.321 31.2558L208.894 29.1247L204.321 28.2274C204.576 27.0933 204.713 25.9094 204.732 24.7005H210.676C210.558 37.6054 200.021 48.0676 187.091 48.0676C176.193 48.0676 166.771 40.6836 164.179 30.1155C164.123 29.8725 163.88 29.7291 163.637 29.7852C163.394 29.8413 163.251 30.0843 163.307 30.3273C165.999 41.3005 175.775 48.9649 187.091 48.9649C200.594 48.9649 211.58 37.9793 211.58 24.4762C211.58 10.9732 200.588 0 187.085 0ZM203.436 28.0654L203.049 29.4986C202.763 30.4021 202.395 31.262 201.959 32.0908L201.274 33.2747C200.707 34.1658 200.052 35.0007 199.323 35.7672L198.744 36.3467C195.809 39.1383 191.839 40.8519 187.471 40.8519C178.511 40.8519 171.233 33.6486 171.114 24.713H172.317H172.498H172.934C172.934 24.6632 172.922 24.6195 172.922 24.5697C172.922 24.4638 172.94 24.3641 172.965 24.2644H171.114C171.233 15.3288 178.511 8.12551 187.471 8.12551C196.432 8.12551 203.71 15.3288 203.828 24.2644H202.028C202.052 24.3641 202.071 24.4638 202.071 24.5697C202.071 24.6195 202.065 24.6694 202.059 24.713H203.828C203.816 25.8658 203.679 26.9812 203.436 28.0654Z"
          fill="white"
        />
        <path
          d="M178.728 36.7149C178.654 36.8208 178.685 36.9579 178.784 37.0264C178.822 37.0576 178.866 37.0638 178.909 37.0638C178.978 37.0638 179.046 37.0327 179.09 36.9704C179.165 36.8644 179.133 36.7273 179.034 36.6588C178.934 36.5902 178.791 36.6152 178.722 36.7149H178.728Z"
          fill="white"
        />
        <path
          d="M182.193 38.3098C182.081 38.2662 181.95 38.3285 181.907 38.4469C181.863 38.5591 181.919 38.6899 182.037 38.7336C182.062 38.7398 182.094 38.746 182.118 38.746C182.206 38.746 182.293 38.6899 182.33 38.6027C182.374 38.4843 182.312 38.3535 182.193 38.3098Z"
          fill="white"
        />
        <path
          d="M176.055 34.2845C175.962 34.3655 175.949 34.5088 176.037 34.5961C176.08 34.6459 176.143 34.6708 176.205 34.6708C176.261 34.6708 176.311 34.6521 176.354 34.6148C176.448 34.5338 176.46 34.3904 176.379 34.3032C176.292 34.2097 176.155 34.1973 176.062 34.2845H176.055Z"
          fill="white"
        />
        <path
          d="M172.803 27.885C172.684 27.9099 172.603 28.0346 172.635 28.153C172.66 28.2589 172.753 28.3212 172.853 28.3212C172.871 28.3212 172.89 28.3212 172.909 28.3212C173.027 28.29 173.102 28.1717 173.071 28.047C173.046 27.9286 172.921 27.8539 172.803 27.885Z"
          fill="white"
        />
        <path
          d="M173.052 20.9746C173.077 20.8562 173.009 20.7315 172.884 20.7004C172.765 20.6755 172.641 20.744 172.616 20.8686C172.585 20.987 172.66 21.1117 172.784 21.1366C172.803 21.1366 172.815 21.1428 172.834 21.1428C172.94 21.1428 173.027 21.068 173.052 20.9746Z"
          fill="white"
        />
        <path
          d="M185.658 39.1574C185.534 39.145 185.428 39.2322 185.409 39.3568C185.396 39.4752 185.484 39.5874 185.608 39.6061H185.633C185.745 39.6061 185.839 39.5188 185.858 39.4067C185.87 39.2821 185.783 39.1761 185.658 39.1574Z"
          fill="white"
        />
        <path
          d="M174.037 31.2813C173.925 31.3373 173.887 31.4744 173.943 31.5866C173.981 31.6614 174.062 31.705 174.143 31.705C174.18 31.705 174.217 31.6987 174.249 31.68C174.361 31.624 174.398 31.4869 174.342 31.381C174.286 31.2688 174.149 31.2314 174.043 31.2875L174.037 31.2813Z"
          fill="white"
        />
        <path
          d="M198.488 34.2784C198.407 34.3719 198.413 34.509 198.513 34.5962C198.55 34.6336 198.606 34.6523 198.662 34.6523C198.718 34.6523 198.781 34.6274 198.831 34.5775C198.912 34.4903 198.899 34.347 198.812 34.266C198.718 34.1787 198.581 34.1912 198.494 34.2846L198.488 34.2784Z"
          fill="white"
        />
        <path
          d="M200.818 31.2562C200.706 31.2002 200.569 31.2375 200.513 31.3497C200.457 31.4556 200.501 31.599 200.607 31.6488C200.644 31.6675 200.675 31.6737 200.712 31.6737C200.793 31.6737 200.874 31.6301 200.912 31.5553C200.968 31.4494 200.924 31.3123 200.818 31.2562Z"
          fill="white"
        />
        <path
          d="M201.778 28.0161C201.747 28.1345 201.822 28.2529 201.946 28.2841C201.965 28.2841 201.984 28.2841 202.002 28.2841C202.102 28.2841 202.189 28.2155 202.22 28.1158C202.252 27.9974 202.177 27.8728 202.052 27.8479C201.934 27.8167 201.815 27.8915 201.784 28.0161H201.778Z"
          fill="white"
        />
        <path
          d="M192.68 38.3028C192.562 38.3464 192.506 38.4773 192.549 38.5895C192.581 38.6767 192.668 38.739 192.755 38.739C192.78 38.739 192.811 38.739 192.836 38.7203C192.954 38.6829 193.011 38.5521 192.967 38.4337C192.923 38.3153 192.792 38.2592 192.68 38.3028Z"
          fill="white"
        />
        <path
          d="M189.216 39.1505C189.091 39.1692 189.004 39.2814 189.016 39.3998C189.029 39.5119 189.128 39.5992 189.241 39.5992H189.266C189.384 39.5805 189.477 39.4683 189.459 39.3499C189.446 39.2315 189.334 39.1381 189.209 39.1505H189.216Z"
          fill="white"
        />
        <path
          d="M195.827 36.6465C195.721 36.715 195.696 36.8521 195.771 36.958C195.815 37.0203 195.883 37.0577 195.952 37.0577C195.995 37.0577 196.039 37.0453 196.083 37.0203C196.182 36.9456 196.207 36.8085 196.139 36.7088C196.064 36.6028 195.927 36.5842 195.827 36.6527V36.6465Z"
          fill="white"
        />
        <path
          d="M182.056 10.6801C182.056 10.6801 182.113 10.6801 182.137 10.6676C182.25 10.624 182.306 10.4932 182.262 10.3748C182.225 10.2626 182.094 10.2065 181.975 10.2502C181.857 10.2875 181.801 10.4184 181.845 10.5368C181.882 10.624 181.963 10.6801 182.056 10.6801Z"
          fill="white"
        />
        <path
          d="M195.902 12.3199C195.971 12.3199 196.045 12.2825 196.083 12.2202C196.158 12.1205 196.126 11.9771 196.027 11.9086C195.927 11.8338 195.79 11.865 195.715 11.9647C195.64 12.0706 195.672 12.2015 195.771 12.2762C195.809 12.3012 195.852 12.3199 195.896 12.3199H195.902Z"
          fill="white"
        />
        <path
          d="M192.618 10.6377C192.618 10.6377 192.674 10.6501 192.693 10.6501C192.786 10.6501 192.874 10.5941 192.905 10.5006C192.948 10.3884 192.892 10.2576 192.774 10.2139C192.656 10.1703 192.525 10.2264 192.487 10.3448C192.444 10.4632 192.5 10.5941 192.618 10.6377Z"
          fill="white"
        />
        <path
          d="M198.619 14.7125C198.675 14.7125 198.725 14.6938 198.768 14.6564C198.862 14.5692 198.868 14.4321 198.787 14.3386C198.706 14.2514 198.563 14.2389 198.475 14.3199C198.382 14.4071 198.369 14.5442 198.457 14.6377C198.494 14.6876 198.563 14.7125 198.625 14.7125H198.619Z"
          fill="white"
        />
        <path
          d="M201.977 21.0556C201.977 21.0556 202.015 21.0556 202.033 21.0494C202.152 21.0244 202.226 20.8998 202.202 20.7814C202.17 20.663 202.052 20.5883 201.927 20.6132C201.809 20.6443 201.734 20.7627 201.765 20.8874C201.79 20.9933 201.884 21.0556 201.983 21.0556H201.977Z"
          fill="white"
        />
        <path
          d="M174.011 17.7349C174.043 17.7536 174.08 17.7598 174.117 17.7598C174.198 17.7598 174.273 17.7162 174.317 17.6414C174.373 17.5293 174.335 17.3922 174.223 17.3361C174.117 17.28 173.974 17.3236 173.924 17.4296C173.868 17.5417 173.906 17.6788 174.018 17.7349H174.011Z"
          fill="white"
        />
        <path
          d="M200.688 17.6786C200.725 17.6786 200.762 17.6724 200.794 17.6537C200.906 17.5976 200.943 17.4605 200.887 17.3546C200.831 17.2424 200.694 17.205 200.588 17.2611C200.476 17.3172 200.438 17.4543 200.495 17.5664C200.532 17.6412 200.613 17.6848 200.694 17.6848L200.688 17.6786Z"
          fill="white"
        />
        <path
          d="M178.859 12.3755C178.903 12.3755 178.947 12.363 178.984 12.3319C179.09 12.2633 179.115 12.12 179.04 12.0203C178.965 11.9144 178.828 11.8957 178.729 11.9642C178.629 12.0328 178.604 12.1761 178.672 12.2758C178.71 12.3381 178.785 12.3755 178.853 12.3755H178.859Z"
          fill="white"
        />
        <path
          d="M189.154 9.79561C189.154 9.79561 189.172 9.79561 189.179 9.79561C189.291 9.79561 189.384 9.70837 189.397 9.59621C189.415 9.47159 189.328 9.35943 189.197 9.34696C189.079 9.3345 188.967 9.41551 188.948 9.54636C188.936 9.66475 189.017 9.77692 189.147 9.79561H189.154Z"
          fill="white"
        />
        <path
          d="M176.161 14.7752C176.224 14.7752 176.286 14.7502 176.33 14.7004C176.411 14.6069 176.404 14.4636 176.311 14.3826C176.218 14.3016 176.074 14.3078 175.993 14.4013C175.912 14.4947 175.918 14.6381 176.012 14.7191C176.055 14.7565 176.112 14.7752 176.161 14.7752Z"
          fill="white"
        />
        <path
          d="M185.565 9.80809H185.59C185.708 9.79563 185.802 9.68346 185.783 9.55884C185.77 9.44045 185.658 9.34698 185.534 9.36567C185.409 9.37813 185.322 9.4903 185.334 9.61492C185.347 9.73331 185.446 9.81432 185.559 9.81432L185.565 9.80809Z"
          fill="white"
        />
        <path
          d="M374.938 74.5037H356.694V23.0618C356.694 22.4778 356.216 22 355.632 22H297.077C296.79 22 296.514 22.1168 296.323 22.3185L284.015 34.8897H265.049L254.525 22.3822C254.323 22.138 254.026 22 253.707 22H232.996V24.1235H253.219L263.743 36.631C263.944 36.8752 264.242 37.0132 264.56 37.0132H284.472C284.758 37.0132 285.034 36.8964 285.226 36.6947L297.533 24.1235H354.581V75.5654C354.581 76.1494 355.059 76.6272 355.643 76.6272H373.887V185.393H355.643C355.313 185.393 355.005 185.542 354.804 185.797L310.171 242.876H29.7873L2.12387 211.417V24.1235H123.199V22H1.06194C0.477872 22 0 22.4778 0 23.0618V211.82C0 212.075 0.0955743 212.33 0.265484 212.521L28.513 244.639C28.7148 244.873 29.0015 245 29.3095 245H310.68C311.009 245 311.317 244.851 311.519 244.597L356.152 187.517H374.938C375.522 187.517 376 187.039 376 186.455V75.5654C376 74.9815 375.522 74.5037 374.938 74.5037Z"
          fill="white"
        />

        <foreignObject x="20" y="60" width="344" height="150">
          <div className="text-xl font-bold">{props.title}</div>
        </foreignObject>
        <foreignObject x="20" y="110" width="344" height="150">
          <div className="text-white text-base">{props.description}</div>
        </foreignObject>
        <defs>
          <filter
            id="filter0_d_4015_142"
            x="0"
            y="0"
            width="384"
            height="231"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4015_142"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4015_142"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default FirstBoxComponent;
