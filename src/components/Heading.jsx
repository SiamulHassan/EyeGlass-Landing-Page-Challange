const Heading = ({ children }) => {
  return (
    <h2 className="font-bold text-[28px] leading-10 md:text-[38px] md:leading-[50px] lg:text-[32px] xl:text-[38px] xl:leading-[50px] lg:leading-[45px] text-[var(--primary-text-color)] w-full xl:max-w-[700px]">
      {children}
    </h2>
  );
};

export default Heading;
