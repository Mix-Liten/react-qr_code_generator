import { FC } from 'react'

type InputFieldProps = {
  name: string
  placeholder?: string
  type?: 'text'
  defaultValue?: string
  onChange: (value: string) => void
  value?: string
  hideLabel?: boolean
  isError?: boolean
  isRequired?: true
}

const InputField: FC<InputFieldProps> = ({
  name,
  placeholder,
  type,
  hideLabel,
  onChange,
  isRequired,
  isError,
  value,
  defaultValue,
}) => {
  return (
    <div className={`flex items-center gap-x-3 ${isError ? 'flex-wrap' : ''}`}>
      {!hideLabel && (
        <label className="basis-12" htmlFor={name}>
          {name}:
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        onChange={e => onChange(e.target.value)}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-10/12 border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
        required={isRequired}
      />
      {isError && <p className="text-sm text-red-400 mt-2 ml-16">Please enter a Valid {name.toUpperCase()}</p>}
    </div>
  )
}

export default InputField
