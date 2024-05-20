const SearchIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className={className}
    >
      <g clipPath="url(#clip0_486_2481)">
        <path
          fill="#545454"
          d="M32.5 16.25a16.21 16.21 0 01-3.125 9.586l9.89 9.898a2.504 2.504 0 01-3.538 3.54l-9.891-9.899A16.157 16.157 0 0116.25 32.5C7.273 32.5 0 25.227 0 16.25S7.273 0 16.25 0 32.5 7.273 32.5 16.25zM16.25 27.5a11.25 11.25 0 100-22.499 11.25 11.25 0 000 22.499z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_486_2481">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
