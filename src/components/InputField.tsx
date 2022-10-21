import { FC } from 'react'

type InputFieldProps = {
  name: string
  placeholder?: string
  type?: 'text'
  defaultValue?: string
  onChange: (value: string) => void
  value?: string
  hideLabel?: boolean
  isRequired?: true
}

const InputField: FC<InputFieldProps> = ({
  name,
  placeholder,
  type,
  hideLabel,
  onChange,
  isRequired,
  value,
  defaultValue,
}) => {
  return (
    <div className="flex items-center gap-x-3">
      {!hideLabel && <label className="basis-12">{name}:</label>}
      <input
        type={type}
        id={name}
        name={name}
        onChange={e => onChange(e.target.value)}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
        required={isRequired}
      />
    </div>
  )
}

export default InputField
