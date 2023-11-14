type TCustomInputProps = {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  autoComplete?: "off" | "on";
  onChange: React.ChangeEventHandler;
  value: string;
};

export default function CustomInput({
  id,
  label,
  type,
  autoComplete = "off",
  onChange,
  value,
}: TCustomInputProps) {
  return (
    <div className="flex flex-col text-black">
      <label className="text-lg font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-8 rounded-md border-2 border-gray-400 px-2 outline-none focus:border-black"
        data-testid={id}
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
