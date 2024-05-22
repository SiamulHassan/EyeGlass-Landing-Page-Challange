const DiscountBadge = ({ discount }) => {
  const hasDiscount = discount
    ? "bg-[var(--primary-bg-color)] w-12 h-12 xl:w-14 xl:h-14 flex justify-center items-center rounded-full"
    : "opacity-0";
  return (
    <div className={`${hasDiscount}`}>
      <span className="text-sm xl:text-md font-bold text-[var(--primary-text-color)]">
        {discount}
      </span>
    </div>
  );
};

export default DiscountBadge;
