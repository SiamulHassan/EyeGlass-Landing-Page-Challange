const DiscountBadge = ({ discount }) => {
  return (
    <div className="bg-slate-500 py-1 px-3 rounded-md">
      <span className="text-[13px] font-bold text-[#444]">{discount}%</span>
    </div>
  );
};

export default DiscountBadge;
