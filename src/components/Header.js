import "../App.css";
import handleLanguage from "./LanguageSwitch";

const Header = () => {
  return (
    <nav class="headerColor h-[89.95px] fixed z-20">
      <div class="flex justify-between items-center h-full md:mx-7 mx-5">
        <div class="flex flex-row h-full-items-center">
          <div class="md:mx-1 lg:ml-2 lg:mr-10 sm:mx-2">
            <button style={{ outline: "none" }}>
              <svg
                width={"45.84"}
                height={"45.95"}
                viewBox="0 0 46 46"
                fill="#232323"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.8873 27.01C33.7289 27.0107 33.5744 26.9606 33.4466 26.867C33.3188 26.7734 33.2244 26.6412 33.1773 26.49L31.8873 22.59L5.43732 11.7L8.71732 17.63L24.7173 22.47C24.9072 22.53 25.0659 22.662 25.1594 22.8378C25.2529 23.0136 25.2737 23.219 25.2173 23.41C25.1888 23.5048 25.1417 23.5929 25.0789 23.6694C25.0161 23.7459 24.9388 23.8092 24.8514 23.8557C24.7641 23.9022 24.6683 23.9309 24.5698 23.9402C24.4713 23.9496 24.3719 23.9393 24.2773 23.91L8.00732 19.01C7.82059 18.9496 7.66348 18.8211 7.56732 18.65L3.08732 10.55C3.01026 10.4153 2.97749 10.2598 2.99364 10.1055C3.00979 9.95115 3.07405 9.80581 3.17732 9.68999C3.27973 9.57737 3.4136 9.49809 3.56159 9.46243C3.70957 9.42677 3.86486 9.43637 4.00732 9.48999L32.7773 21.35C32.8781 21.3909 32.9687 21.4533 33.0429 21.5327C33.1172 21.6121 33.1733 21.7067 33.2073 21.81L34.5973 26.01C34.6285 26.1039 34.6409 26.203 34.6336 26.3017C34.6264 26.4003 34.5997 26.4966 34.5551 26.5849C34.5104 26.6732 34.4488 26.7518 34.3737 26.8162C34.2985 26.8806 34.2114 26.9294 34.1173 26.96C34.0433 26.9872 33.9659 27.0041 33.8873 27.01V27.01Z"
                  fill="#232323"
                ></path>
                <path
                  d="M25.6673 28.57C25.6144 28.5798 25.5602 28.5798 25.5073 28.57L16.0073 26.4C15.8912 26.3721 15.783 26.318 15.6911 26.2417C15.5992 26.1654 15.5261 26.069 15.4773 25.96L13.0073 20.2C12.9291 20.017 12.9267 19.8104 13.0008 19.6257C13.0749 19.441 13.2193 19.2933 13.4023 19.215C13.5853 19.1368 13.7919 19.1344 13.9766 19.2085C14.1613 19.2826 14.3091 19.427 14.3873 19.61L16.6873 25.01L25.8373 27.08C26.0162 27.1222 26.1733 27.2285 26.2789 27.3788C26.3846 27.5292 26.4313 27.7131 26.4104 27.8956C26.3894 28.0781 26.3022 28.2466 26.1652 28.3691C26.0282 28.4916 25.8511 28.5595 25.6673 28.56V28.57Z"
                  fill="#232323"
                ></path>
                <path
                  d="M27.2674 32.88H27.1774L21.5474 32.16C21.4085 32.1396 21.278 32.0811 21.1704 31.9911C21.0627 31.9011 20.982 31.783 20.9374 31.65L19.2874 26.79C19.2239 26.6017 19.2377 26.3959 19.3258 26.2177C19.4139 26.0396 19.5692 25.9038 19.7574 25.84C19.8505 25.8072 19.9493 25.7933 20.0479 25.7993C20.1465 25.8052 20.2429 25.8308 20.3315 25.8746C20.42 25.9185 20.4989 25.9795 20.5635 26.0543C20.628 26.1291 20.6769 26.216 20.7074 26.31L22.2074 30.73L27.3674 31.4C27.5517 31.43 27.7181 31.5276 27.8343 31.6738C27.9504 31.82 28.0078 32.0042 27.9953 32.1905C27.9828 32.3768 27.9013 32.5517 27.7667 32.6811C27.632 32.8104 27.454 32.8849 27.2674 32.89V32.88Z"
                  fill="#232323"
                ></path>
                <path
                  d="M33.8874 36.19C32.8308 36.192 31.7974 35.8805 30.9179 35.2949C30.0384 34.7094 29.3524 33.8761 28.9467 32.9005C28.541 31.9249 28.4338 30.8509 28.6387 29.8144C28.8437 28.7778 29.3515 27.8254 30.0979 27.0776C30.8443 26.3298 31.7958 25.8202 32.8319 25.6134C33.868 25.4065 34.9422 25.5117 35.9186 25.9155C36.8949 26.3194 37.7295 27.0038 38.3167 27.8822C38.9039 28.7606 39.2174 29.7934 39.2174 30.85C39.2147 32.2637 38.6526 33.6189 37.6539 34.6195C36.6552 35.6201 35.3011 36.1847 33.8874 36.19V36.19ZM33.8874 27.02C33.127 27.018 32.3832 27.2418 31.7502 27.663C31.1172 28.0842 30.6235 28.6838 30.3316 29.3859C30.0397 30.0879 29.9628 30.8609 30.1107 31.6067C30.2585 32.3525 30.6244 33.0376 31.1621 33.5753C31.6997 34.1129 32.3849 34.4788 33.1307 34.6267C33.8765 34.7745 34.6494 34.6977 35.3515 34.4058C36.0536 34.1139 36.6532 33.6202 37.0744 32.9871C37.4956 32.3541 37.7193 31.6103 37.7174 30.85C37.7174 29.8333 37.3142 28.8581 36.5962 28.1382C35.8782 27.4184 34.9041 27.0127 33.8874 27.01V27.02Z"
                  fill="#232323"
                ></path>
                <path
                  d="M5.3473 34.6C4.29807 34.6015 3.27168 34.2938 2.39628 33.7154C1.52087 33.137 0.835259 32.3135 0.425045 31.3478C0.014832 30.3821 -0.101801 29.317 0.0897096 28.2854C0.28122 27.2538 0.772389 26.3014 1.50188 25.5473C2.23137 24.7932 3.16686 24.2707 4.19153 24.045C5.2162 23.8194 6.28465 23.9006 7.26344 24.2785C8.24224 24.6564 9.08801 25.3143 9.69515 26.17C10.3023 27.0257 10.6439 28.0413 10.6773 29.09C10.7205 30.5041 10.2018 31.8777 9.2348 32.9103C8.26778 33.9429 6.93114 34.5505 5.5173 34.6H5.3473ZM5.3473 25.43H5.2173C4.7141 25.4438 4.21872 25.5579 3.76023 25.7657C3.30173 25.9735 2.88935 26.2707 2.5473 26.64C2.1185 27.1001 1.80957 27.6586 1.6478 28.2663C1.48603 28.874 1.4764 29.5122 1.61974 30.1245C1.76309 30.7368 2.05501 31.3044 2.46972 31.7772C2.88443 32.25 3.40917 32.6133 3.9976 32.8352C4.58603 33.0571 5.22005 33.1307 5.84366 33.0494C6.46726 32.9682 7.06127 32.7347 7.57322 32.3694C8.08517 32.0042 8.49932 31.5185 8.77907 30.9553C9.05883 30.3921 9.1956 29.7686 9.1773 29.14V29.14C9.14363 28.146 8.72561 27.2039 8.01123 26.5119C7.29686 25.8199 6.34187 25.4321 5.3473 25.43V25.43Z"
                  fill="#232323"
                ></path>
                <path
                  d="M21.0073 10.68C19.9585 10.6795 18.9331 10.3701 18.059 9.79051C17.1849 9.21092 16.5009 8.38676 16.0922 7.42087C15.6835 6.45498 15.5683 5.39012 15.7609 4.35916C15.9535 3.32821 16.4455 2.37681 17.1754 1.62367C17.9053 0.870531 18.8408 0.349002 19.8652 0.124158C20.8897 -0.100686 21.9576 -0.0188903 22.9358 0.35934C23.914 0.737569 24.7592 1.39549 25.3659 2.251C25.9726 3.10651 26.314 4.12173 26.3473 5.17V5.17C26.3905 6.58405 25.8719 7.95764 24.9048 8.99025C23.9378 10.0229 22.6012 10.6304 21.1873 10.68H21.0073ZM21.0073 1.51H20.9073C20.4041 1.52375 19.9088 1.63786 19.4503 1.84564C18.9918 2.05342 18.5794 2.35069 18.2373 2.72C17.5532 3.46818 17.1936 4.45711 17.2373 5.47C17.2597 6.22399 17.5043 6.95459 17.9403 7.57014C18.3763 8.18568 18.9844 8.65877 19.6882 8.93006C20.3921 9.20135 21.1604 9.25875 21.8967 9.09507C22.6331 8.9314 23.3047 8.55392 23.8273 8.01C24.3569 7.4657 24.7127 6.77627 24.8495 6.02931C24.9863 5.28234 24.898 4.51157 24.5957 3.81492C24.2935 3.11827 23.791 2.52719 23.152 2.11678C22.5131 1.70637 21.7666 1.49517 21.0073 1.51V1.51Z"
                  fill="#232323"
                ></path>
                <path
                  d="M25.0073 45.95H24.6273C20.7076 45.9107 16.8789 44.763 13.584 42.6395C10.289 40.516 7.66227 37.5034 6.0073 33.95C5.96527 33.8581 5.94177 33.7588 5.93812 33.6578C5.93448 33.5567 5.95076 33.456 5.98605 33.3613C6.05731 33.17 6.20165 33.0149 6.3873 32.93C6.57295 32.8451 6.78471 32.8375 6.976 32.9087C7.16728 32.98 7.32243 33.1243 7.4073 33.31C8.87191 36.4277 11.141 39.0987 13.981 41.048C16.821 42.9973 20.1291 44.1545 23.565 44.4003C27.0008 44.6462 30.44 43.9719 33.5286 42.4468C36.6172 40.9217 39.2435 38.601 41.1371 35.7236C43.0307 32.8462 44.1232 29.5161 44.3021 26.0761C44.4809 22.6362 43.7397 19.2107 42.1548 16.1524C40.5698 13.0942 38.1984 10.5136 35.2846 8.67638C32.3708 6.8392 29.0201 5.81181 25.5773 5.69999C25.3775 5.69217 25.1888 5.6059 25.0521 5.45989C24.9155 5.31388 24.8419 5.1199 24.8473 4.91999C24.8551 4.72281 24.9403 4.53666 25.0845 4.40189C25.2286 4.26711 25.42 4.19457 25.6173 4.19999C31.0906 4.40305 36.2679 6.7364 40.0453 10.7024C43.8226 14.6685 45.9011 19.9533 45.8373 25.43C45.7405 30.8956 43.5051 36.1056 39.6109 39.9419C35.7166 43.7782 30.4738 45.9351 25.0073 45.95V45.95Z"
                  fill="#232323"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex md:flex-row justify-between color_text_Subdued">
          <div class="mx-2">
            <button type="button" onClick={handleLanguage} style={{ outline: "none" }} class="header_Text">ENG</button>
          </div>
          <div class="mx-2">
            <button type="button" onClick={handleLanguage} style={{ outline: "none" }} class="header_Text">ESP</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
