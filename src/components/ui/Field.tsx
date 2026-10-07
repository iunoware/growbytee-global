export const inputStyles =
  "w-full rounded-lg bg-white px-4 py-3 text-md text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-primary";

export default function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-lg text-black">
      <span>
        {label}
        {required && (
          <span className="ml-0.5 align-super text-[8px] text-red-500">✦</span>
        )}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={inputStyles}
      />
    </label>
  );
}
