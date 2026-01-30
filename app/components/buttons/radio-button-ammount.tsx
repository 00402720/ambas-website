export default function RadioButtonAmount({
  amount,
}: {
  amount: number;
}) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name="amount"
        value={amount}
        className="peer hidden"
      />

      <div
        className="
          px-6 py-3 rounded-md border
          text-center font-semibold
          border-gray-300 text-gray-700
          peer-checked:bg-[#F03C2B]
          peer-checked:text-white
          peer-checked:border-[#F03C2B]
          hover:border-[#F03C2B]
          transition
          justify-center
          items-center
          flex
        "
      >
        ${amount}
      </div>
    </label>
  );
}
